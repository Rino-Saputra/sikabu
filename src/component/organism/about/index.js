import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AboutDesc from '../../molecules/aboutDesc'
import FooterLink from '../../molecules/footerLink'
import FooterContactsList from '../footerContacts'

export default function About() {
  return (
    <Row>
        <Col md={4}>
            <AboutDesc />
        </Col>
        <Col md={4}>
            <FooterLink />
        </Col>
        <Col md={4}>
            <FooterContactsList />
        </Col>
        <hr className='my-5'/>
    </Row>
  )
}
