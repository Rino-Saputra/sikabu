import React from 'react'
import { Card } from 'react-bootstrap'
import './style.css';

export default function CardPrice(props) {
  return (
    <Card style={{ width: '18rem' }} className='my-5 text-center card-price'>
        <Card.Body>
            <Card.Title className='fw-bold my-4'>
                <h1>{props.text}</h1>
            </Card.Title>
            <Card.Subtitle className="mb-2 fs-2 text-muted">{props.price}</Card.Subtitle>
        </Card.Body>
    </Card>
  )
}
