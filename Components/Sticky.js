import React, { useEffect, useState, useRef, useCallback } from "react";
import Tabs from "./Tabs";
import Overview from "./Overview";
import InfoForm from "./InfoForm";
import { Container, Row, Col, Table } from "react-bootstrap";
const Sticky = function (props) {
  const overviewRef = useRef();
  return (
    <Container className="contains m-0 ">
      <Row>
        <Col lg="3">
          <Tabs column={props.column} overview={overviewRef} />
        </Col>
        <Col lg="6">
          <Overview ref={overviewRef} />
        </Col>
        <Col lg="3">
          <InfoForm column={props.column} overview={overviewRef} />
        </Col>
      </Row>
    </Container>
  );
};
export default Sticky;
