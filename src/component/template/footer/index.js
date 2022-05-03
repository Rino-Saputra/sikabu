import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import About from '../../organism/about/index';
import Copyright from '../../organism/footermark/index';

export default function Footer() {
  return (
    <Container className='py-5 mt-5 d-flex flex-column justify-content-center'>
      <Row>
        <About />
      </Row>
      <Row>
        <Copyright />
      </Row>
    </Container>
  )
}
