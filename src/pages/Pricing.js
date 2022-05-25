import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Intro from '../component/molecules/intro/Index'
import CardPrice from '../component/organism/cardPrice'
import Subcribe from '../component/organism/subcribe'

export default function Pricing() {
  return (
    <Container>
        <Intro 
            head='Ticket Price'
            desc='See our ticketprice before you go to pemandian sikabu'
        />
        <Row className='d-flex justify-content-center mb-5'>
          <Col md={4} className='d-flex justify-content-center'>
            <CardPrice text='+3 Years Old' price='15.000' />
          </Col>
          <Col md={4} className='d-flex justify-content-center'>
            <CardPrice text='Group' price='13.000'/>
          </Col>
        </Row>
        <br />
        <Subcribe />
    </Container>
  )
}
