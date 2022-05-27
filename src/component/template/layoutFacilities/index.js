import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Homestay from '../../organism/homestay'
import Restaurant from '../../organism/restaurant'
import './style.css';

export default function Layout(props) {

  return (
    <div className='mt-5 mb-2 py-4'>
		<h1 className='mb-5 pb-2' style={{fontSize: '2.9em'}}> { props.title } </h1>
		<Row className='my-5'>
			<Col lg={5} className={props.title == 'Homestay' ? 'order-1' : 'order-2'}>
				{ props.title === 'Homestay' && <Homestay /> }
				{ props.title === 'Cafe' && <Restaurant /> } 
			</Col>
			<Col lg={7} className={props.title == 'Homestay' ? 'order-2' : 'order-1'}>
				<img src={props.image} alt="" className='img-fluid mb-4 image-facilities' />
			</Col>
		</Row>
    </div>
  )
}
