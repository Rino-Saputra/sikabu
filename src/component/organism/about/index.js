import React,{ useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AboutDesc from '../../molecules/aboutDesc'
import FooterLink from '../../molecules/footerLink'
import FooterContactsList from '../footerContacts'
import Map from '../../../layout/map/Map'
import TempModal from '../../template/modal/tempModal/TempModal'

export default function About() {

  const[show,setShow]=useState({
    map: true,
    privacy: false,
    service: false,
    modal: false
  });
  const showElem = (typePayload) => {
    if(typePayload === "Map"){
      setShow(prev => ({...prev, map: !prev.map}));
    } else{
      setShow(prev => ({...prev, modal: !prev.modal}));
    }
  }

  useEffect(()=>{
    console.log(show)
  },[])

  return (
    <>
      <Row>
          <Col md={4}>
              <AboutDesc />
          </Col>
          <Col md={4}>
              <FooterLink parentNode={(link)=>showElem(link)}/>
          </Col>
          <Col md={4}>
              <FooterContactsList />
          </Col>
      </Row>
      {
        show.modal &&  
        <TempModal 
          show={show.modal}
          handleClose={()=>setShow(prev => ({...prev, modal: !prev.modal}))}
        />
      }

      { show.map &&
        <Row style={{height: 400}} className='d-flex justify-content-center'>
          <Col md={12}>
            <Map />
          </Col>
        </Row>
      }


      <hr className='my-5'/>
    </>
  )
}
