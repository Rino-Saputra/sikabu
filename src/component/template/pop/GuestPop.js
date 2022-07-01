import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import './style.css'
import { setAddPersonal, setSubPersonal, setAddGroup, setSubGroup } from '../../../config/redux/action';

export default function GuestPop(props) {

  const price = useSelector(state=>state.priceReducer)
  const dispatch = useDispatch()

  return (
    <div className='d-flex flex-column'>
      <Row>
        <Col className='d-flex justify-content-between'>
          <p className='fw-bold'>Select Passenger</p>
          <p style={{cursor: 'pointer', color: '#f96900', textDecoration: 'underline'}}
            className='fw-bold'
          >
            Done
          </p>
        </Col>
      </Row>
      <h5 className='text-secondary my-2'>Dewasa</h5>
      <Row className='d-flex align-items-center'>
          <Col>
            <h5 className='fw-bold' style={{color: '#f96900'}}>
              IDR {price.personalPrice}
            </h5>
          </Col>
          <Col>
            <p className='text-end'> 
              <span 
                className='me-4 op'
                onClick={()=> price.personalQuantity > 1 ? dispatch(setSubPersonal(-15000)):'' }
              >
                -
              </span>
                {price.personalQuantity} 
              <span 
                className='ms-4 op'
                onClick={()=>dispatch(setAddPersonal(15000))}
                >
                  +
                </span> 
            </p>
          </Col>
      </Row>
      <h5 className='text-secondary my-2'>Group</h5>
      <Row className='d-flex align-items-center'>
          <Col>
            <h5 className='fw-bold' style={{color: '#f96900'}}>
              IDR {price.groupPrice}
            </h5>
          </Col>
          <Col>
            <p className='text-end'> 
              <span 
                className='me-4 op'
                onClick={()=> price.groupQuantity > 1 ? dispatch(setSubGroup(-13000)):'' }
              >
                -
              </span>
                {price.groupQuantity} 
              <span 
                className='ms-4 op'
                onClick={()=>dispatch(setAddGroup(13000))}
              >
                +
              </span> 
            </p>
          </Col>
      </Row>
    </div>
  )
}