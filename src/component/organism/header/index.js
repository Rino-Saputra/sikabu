import { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { logo } from "../../../export/image";

import "./style.css";
import LoginModal from "../../template/modal/loginModal/LoginModal";
import {UserDropDown, LangDropDown } from "../../molecules/dropDown";


export default function Header() {

  const[show, setShow]=useState(false);

  return (
    <Navbar collapseOnSelect expand="md">
      <Container>
        <Navbar.Brand href="#home">
            <Link to='/' style={{ textDecoration: 'none' }}>
            <div className="d-flex align-items-center">
              <img src={logo} alt="" className="header-logo me-3" />
              <h2 style={{ color: "#1e1913" }} className="title-brand mt-2">
                CKBU
              </h2>
            </div>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center fw-bold text-white">

            <Nav.Link className="a3 mx-2" href="#route-0">
              <LangDropDown />
            </Nav.Link>

            <Link to='/facilities' style={{ textDecoration: 'none' }}>
              <Nav.Link className="a3 mx-2" href="#route-1">
                Fasilitas 
                <div className="b3"></div>
              </Nav.Link>
            </Link>

            <Link to='/pricing' style={{ textDecoration: 'none' }}>
              <Nav.Link className="a3 mx-2" href="##route-2">
                Harga 
                <div className="b3"></div>
              </Nav.Link>
            </Link>

            <Link to='/contact' style={{ textDecoration: 'none' }}>
              <Nav.Link className="a4 mx-2" href="##route-3">
                Kontak 
                <div className="b4"></div>
              </Nav.Link>
            </Link>
            
            <button className="login mx-2 my-2 a5" onClick={()=>setShow(!show)} >Login</button>
            {/* <div className='user-icon'>
                <UserDropDown />
            </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>

      <LoginModal 
        handleClose={()=>setShow(!show)}
        show={show}
      />
    {/* 
      <TempModal 
        handleClose={()=>setShow(!show)} 
        show={show}
      /> */}

    </Navbar>
  );
}
