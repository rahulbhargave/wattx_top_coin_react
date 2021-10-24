import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setFilters } from "../redux/actions/filters";
import { toggleError } from "../redux/actions/spinner";

const Filters: React.FC = () => {
  const [type, setType] = useState("latest");
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();
  const isError = useSelector((state:RootState) => state.spinner.error);

  useEffect(() => {
    dispatch(setFilters({ type, limit }));
  }, [type, limit, dispatch]);

  const handleTypeChange = (e: any) => {
    setType(e.target.value);
    if(isError && e.target.value === 'latest'){
      dispatch(toggleError());
    }
  };

  const handleLimitChange = (e: any) => {
    setLimit(e.target.value);
    if(isError && e.target.value !== 'label'){
      dispatch(toggleError());
    }
  };
  return (
    <>
      <Container data-testid="filters">
        <Row>
          <Col sm={{ span: 2, offset: 6 }}>
            <Form.Select data-testid="type" as="select" value={type} onChange={handleTypeChange}>
              <option value="label">Choose Crpto type</option>
              <option value="latest">Latest</option>
              <option value="historical">Historical</option>
            </Form.Select>
          </Col>
          <Col sm={{ span: 3, offset: 1 }}>
            <Form.Select data-testid="limit" as="select" value={limit} onChange={handleLimitChange}>
              <option value="label">Choose number of records</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">all</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Filters;
