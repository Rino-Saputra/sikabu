import React from "react";
import { Row, Col } from "react-bootstrap";
import ButtonText from "../../atoms/button/ButtonText";
import "./style.css";

export default function ButtonSection() {
  return (
    <Row>
      <Col className="order-btn">
        <ButtonText />
      </Col>
    </Row>
  );
}
