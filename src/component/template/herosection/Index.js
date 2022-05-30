import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../organism/header";
import TextSection from "../../organism/textSection";
import { hero1 } from "../../../export/image";

export default function HeroSection() {
  return (
    <Container fluid className="mb-5">
      <Container className="pt-4">
        <Row className="d-flex align-items-center justify-content-between" >
          <Col md={5} className="mb-5">
            <TextSection />
          </Col>
          <Col md={7} className="text-end">
            <img src={hero1} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
