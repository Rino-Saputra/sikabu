import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from '../component/template/contactForm/Index';
import ContactInformation from '../component/template/contactInformation/Index';

export default function Contact() {
      
  return (
    <Container className='mt-5 pt-5'>
      <Row>
        <Col md={6}>
          <ContactInformation />
        </Col>
        <Col md={6}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  )
}
