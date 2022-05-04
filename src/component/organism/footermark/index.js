import React from 'react'
import './style.css'
import { Container, Row, Col } from 'react-bootstrap'
import Socmed from '../../molecules/socMed'

export default function Copyright() {
  return (
    <Row className='d-flex justify-content-between copyright'>
        <Col md={4}>
            <p className='footer-copy'>&copy;2022 Tabek Mandi Sikabu All Rights Reserved. Designed by 
                <span className='text-danger'> FreeHTML5.co </span> 
            </p>
        </Col>
        <Col md={4} className='d-flex justify-content-md-end cnt-icon-footer'>
            <Socmed name='instagram'/>
            <Socmed name='fb'/>
            <Socmed name='twitter'/>
            <Socmed name='telegram'/>
        </Col>
    </Row>
  )
}
