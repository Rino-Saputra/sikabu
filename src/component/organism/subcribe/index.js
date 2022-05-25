import React from 'react'
import HeadTextDescription from '../../atoms/description/Index'
import HeadText from "../../atoms/headDescription/Index"
import InputText from '../../atoms/input'
import ButtonText from '../../atoms/button/ButtonText'
import Intro from '../../molecules/intro/Index'
import { Row, Col } from 'react-bootstrap'

export default function Subcribe() {
  return (
    <div className='text-center py-4' style={{ background: '#0098EF', marginTop: '-50px'}}>
        <Intro 
          head='Berita'
          desc='Jangan ketinggalan event dan diskon dari kita'
          color='text-light'
        />
        <Row className='py-4 px-5 d-flex justify-content-center align-items-center row'>
          <Col md={3} className='my-2'>
            <InputText placeholder='email'/>
          </Col>
          <Col md={3} className='my-2'>
            <ButtonText styles='subcribe' text='pesan' />
          </Col>
        </Row>
    </div>
  )
}
