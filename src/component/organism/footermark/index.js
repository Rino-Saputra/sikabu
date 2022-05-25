import React from 'react'
import './style.css'
import { Container, Row, Col } from 'react-bootstrap'
import Socmed from '../../molecules/socMed'

export default function Copyright() {
  return (
    <Row className='d-flex justify-content-between copyright'>
        <Col md={4}>
            <p className='footer-copy'>&copy;2022 Tabek Mandi Sikabu All Rights Reserved. Designed by 
                <span style={{ color:'#f96900'}}> FreeHTML5.co </span> 
            </p>
        </Col>
        <Col md={4} className='d-flex justify-content-md-end cnt-icon-footer'>
            <Socmed name='instagram' iconColor='#f96900'/>
            <Socmed name='tiktok' iconColor='#f96900'/>
            
            {/* <Socmed name='fb' iconColor='#f96900'/> */}
            {/* <Socmed name='twitter' iconColor='#f96900'/> */}
            {/* <Socmed name='telegram' iconColor='#f96900'/> */}
        </Col>
    </Row>
  )
}
