import { Container, Navbar, Nav } from "react-bootstrap";
import { logo } from "../../../export/image";

import "./style.css";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="md">
      <Container>
        <Navbar.Brand href="#home">
          <div className="d-flex align-items-center">
            <img src={logo} alt="" className="header-logo me-3" />
            <h2 style={{ color: "#1e1913" }} className="title-brand mt-2">
              CKBU
            </h2>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center fw-bold text-white">
            <Nav.Link className="a1" href="#features">
              Features <div className="b1"></div>{" "}
            </Nav.Link>
            <Nav.Link className="a2" href="#pricing">
              Tour <div className="b2"></div>
            </Nav.Link>
            <Nav.Link className="a3" href="#deets">
              Pricing <div className="b3"></div>
            </Nav.Link>
            <Nav.Link className="a4" href="#deet">
              Contact <div className="b4"></div>
            </Nav.Link>
            <button className="login mx-2 my-2 a5">Login</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
