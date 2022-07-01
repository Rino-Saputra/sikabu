import React, { useState, useEffect } from 'react';
import { OverlayTrigger, Popover  } from 'react-bootstrap'
import SvgIcon from '../../atoms/iconSVG'
import { useSelector } from 'react-redux';

export default function TicketBookingdetail(props) {

  const statePrice = useSelector(state=>state.priceReducer)

  const[show, setShow] = useState(false)
  const handleShow = () => setShow(!show)
  const[renderPop,setRenderPop]= useState(true);

  // console.log(props.component.type.name)
  // console.log(typeof(props.component))

  // window.addEventListener('click', e => setShow(false) );

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        {props.component}
      </Popover.Body>
    </Popover>
  );

  useEffect(()=>{
    if(props.component.type.name === 'GuestPop'){
      if(statePrice.personalQuantity < 1){
        setRenderPop(false)
      } else{
        setRenderPop(true)
        return;
      }
      statePrice.groupQuantity < 1 ? setRenderPop(false) : setRenderPop(true)
    }
  },[statePrice])

  return (
      <div className="d-flex justify-content-start g-0 my-2">
        {renderPop &&<>
          <OverlayTrigger 
            show={show} 
            placement='top'
            overlay={popover}
          >
            <div 
              className='col-sm-2 col-md-2 px-2 pt-1' 
              style={{cursor: 'pointer'}}
              onClick={handleShow}
              >
              <SvgIcon name={props.icon} iconColor={props.iconColor}/>
            </div>
          </OverlayTrigger>
          <div className='col-6 col-md-8' onClick={handleShow}>
            <h5 className='fw-bold'>{props.icon}</h5>
            <p className='text-secondary'>{props.desc}</p>
          </div>
        </>  }
      </div>
  )
}
