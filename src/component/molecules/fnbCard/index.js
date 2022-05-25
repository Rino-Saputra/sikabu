import React,{ useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import FnBModal from '../../template/modal/fnbModal/FnBModal';

export default function FoodBeverageCard( props ) {

  const[show,setShow] = useState(false);

  const{ image, title, price } = props;
  return (
    <>
      <div className='d-flex justify-content-center'>
        <Card style={{ width: '15rem' }} className='card'>
          <Card.Img 
            variant="top" 
            src={image} 
            alt='fnbImage' 
            className='img-fluid fnb-img'
            style={{cursor:'pointer'}}
            onClick={()=>setShow(!show)}
          />
          <Card.Body>
            <Row className='d-flex align-items-center'>
              <p className='fs-5 text-center'> { title } </p> 
            </Row>
          </Card.Body>
        </Card>
      </div>
      
      { show && 
        <FnBModal 
          show={show} 
          image={image}
          handleClose={()=>setShow(false)}
      /> }

    </>
  )
}
