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
        accessor: "price",
      },
      {
        Header: "Price Change (24h)",
        accessor: "priceChange",
      },
      {
        Header: "Market Cap",
        accessor: "marketCap",
      },
      {
        Header: "Volume (24h)",
        accessor: "volume",
      },
    ],
    []
  );

  return (
    <>
      <Container>
        <Row>
          <Col sm={10}> Home Component</Col>
        </Row>
        <Row>
          <CTable columns={columns} data={cryptos} />
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
