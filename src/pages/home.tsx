import React, { useEffect, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RouteComponentProps } from "react-router";
import IPage from "../types/route";
import { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchCryptos } from "../redux/actions/cryptos";
import { Crypto } from "../types/cryptos";
import CTable from "../components/Table";

const HomePage: React.FC<IPage & RouteComponentProps<any>> = (props) => {
  const cryptos: Array<Crypto> = useSelector(
    (state: RootState) => state.cryptos
  );
  const dispatch = useDispatch();
  console.log(cryptos);
  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  const columns = useMemo(
    () => [
      {
        Header: "Rank",
        accessor: "rank",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Price",
        accessor: "priceF",
      },
      {
        Header: "Price Change (24h)",
        accessor: "priceChangeF",
      },
      {
        Header: "Market Cap",
        accessor: "marketCapF",
      },
      {
        Header: "Volume (24h)",
        accessor: "volumeF",
      },
    ],
    []
  );

  return (
    <>
      <Container data-testid="home">
        <Row>
          <Col sm={10}>
            {" "}
            <h4 data-testid="heading">Leading Crypto Currencies in the market</h4>
          </Col>
        </Row>
        <Row>
          <CTable data-testid="table" columns={columns} data={cryptos} />
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
