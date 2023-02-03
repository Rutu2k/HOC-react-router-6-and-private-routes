import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
import { LOGIN_PATH } from "../root/routeConstants";
const HeaderComponent: React.FC = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate(LOGIN_PATH);
  };
  return (
    <Row className="py-3 bg-primary text-white ">
      <Col className="d-flex justify-content-end mx-3">
        <Button
          onClick={handleLogout}
          className="bg-warning font-weight-semi-bold pb-2"
        >
          Logout :(
        </Button>
      </Col>
    </Row>
  );
};

export default HeaderComponent;
