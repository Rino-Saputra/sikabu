import React,{ useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function TicketBookingTotal() {

  const price = useSelector(state => state.priceReducer)

  return (
    <>
    <Row>
        {
          price.personalQuantity > 0 &&(
          <>
            <Col>
              <h5>Person</h5>
            </Col>
            <Col>
              <p>IDR {price.personalPrice}</p>
              <p>X {price.personalQuantity}</p>
            </Col>
            <Col>
              <p>IDR</p>
              <p>{price.personalTotalPrice}</p>
            </Col>
          </>
          )}
      </Row>
      <Row>
        {
          price.groupQuantity > 0 &&(
            <>
              <Col>
                <h5>Group</h5>
              </Col>
              <Col>
                <p>IDR {price.groupPrice}</p>
                <p>X {price.groupQuantity}</p>
              </Col>
              <Col>
                <p>IDR</p>
                <p>{price.groupTotalPrice}</p>
              </Col>
            </>
          )}
      </Row>
      <Row className='my-4'>
        <Col>
          <h5>Total Price</h5>
        </Col>
        <Col>
          <h4 className='text-end fw-bold' style={{color:'#f96900'}}>IDR {price.grandTotal}</h4>
        </Col>
      </Row>
    </>
  )
}
