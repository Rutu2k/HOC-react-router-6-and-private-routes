import React from "react";

import { Col, Row } from "reactstrap";
import HeaderComponent from "../components/HeaderComponent";
const WithLayout = (
  wrappedComponent: React.ReactNode,
  includeSidebar: boolean
) => {
  return (
    <Row>
      <Col sm={12}>{includeSidebar && <HeaderComponent />}</Col>
      <Col sm={12}>
        <Row>{wrappedComponent}</Row>
      </Col>
    </Row>
  );
};

export default WithLayout;
