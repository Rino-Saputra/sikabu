import { Container, Navbar, Nav } from 'react-bootstrap'
import { logo } from '../../../export/image'

import './style.css'

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="md">
            <Container>
                <Navbar.Brand href="#home">
                    <div className='d-flex align-items-center'>
                        <img src={logo} alt="" className='header-logo me-2' />
                        <h2 style={{color: '#1e1913'}}>CKBU</h2>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center fw-bold text-white">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Tour</Nav.Link>
                        <Nav.Link href="#deets">Pricing</Nav.Link>
                        <Nav.Link href="#deet">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
