import React,{ useState,useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setAddGroup, setAddPersonal, resetPersonalState, resetGroupState} from '../config/redux/action'
import Intro from '../component/molecules/intro/Index'
import CardPrice from '../component/organism/cardPrice'
import Subcribe from '../component/organism/subcribe'
import TicketBooking from '../component/template/tiketBooking/TicketBooking'
import ButtonText from '../component/atoms/button/ButtonText'

export default function Pricing() {
  const statePrice = useSelector(state=>state.priceReducer)
  const dispatch = useDispatch();

  const[border, setBorder]=useState({
    personal: 'transparent',
    group: 'transparent'
  });

  const[btnOrder,setBtnOrder] = useState({
    personalOrder:'Pilih',
    groupOrder: 'Pilih'
  })

  const getPrice = (variant) =>{
    if(variant === 'personal'){
      if(border.personal === 'transparent'){
        setBorder({...border,personal: '#f96900'}) 
        setBtnOrder(prev=>({...prev, personalOrder: 'Batal'}))
        dispatch(setAddPersonal(15000))
      } else{
        setBorder({...border,personal: 'transparent'})
        setBtnOrder(prev=>({...prev, personalOrder: 'Pilih'}))
        dispatch(resetPersonalState())
      }
      return;
    }
    
    if(border.group === 'transparent'){
      setBorder({...border,group: '#f96900'}) 
      setBtnOrder(prev=>({...prev, groupOrder: 'Batal'}))
      dispatch(setAddGroup(13000))
    } else{
      setBorder({...border,group: 'transparent'})
      setBtnOrder(prev=>({...prev, groupOrder: 'Pilih'}))
      dispatch(resetGroupState())
    }
  }
  
  useEffect(()=>{
    if(statePrice.groupQuantity > 0) {
      setBorder(border=>({...border,group: '#f96900'})) 
      setBtnOrder(prev=>({...prev, groupOrder: 'Batal'}))
    }
    if(statePrice.personalQuantity > 0 ){
      setBorder(border=>({...border,personal: '#f96900'}))
      setBtnOrder(prev=>({...prev, personalOrder: 'Batal'}))
    }
  },[statePrice])

  return (
    <Container className='mb-5'>
        <Intro 
            head='Harga Tiket'
            desc='Cek harga sebelum anda memesan tiket'
        />
        <Row className='d-flex justify-content-center my-5 py-5'>
          <Col md={4} className='d-flex justify-content-center rounded'
            style={{border:`1px solid ${border.personal}`,alignSelf: 'flex-start',cursor: 'pointer'}}
            >
              <Row>
                <Col className='d-flex justify-content-center'>
                  <CardPrice text='+3 Tahun' price='15.000' />
                </Col>
                <Col className='d-flex justify-content-center'>
                  <div 
                    onClick={()=>getPrice('personal')} 
                    style={{display: 'inline-block', margin: '-2em 0 1em 0'}}
                    >
                    <ButtonText styles='booking' text={btnOrder.personalOrder}/>
                  </div>
                </Col>
              </Row>
          </Col>
          <Col md={4} className='d-flex justify-content-center rounded'
            style={{border:`1px solid ${border.group}`,alignSelf: 'flex-start',cursor: 'pointer'}}
          >
            <Row>
              <Col className='d-flex justify-content-center'>
                <CardPrice text='Grup' price='13.000'/>
              </Col>
              <Col className='d-flex justify-content-center'>
                <div 
                  onClick={()=>getPrice('group')}
                  style={{display: 'inline-block', margin: '-2em 0 1em 0'}}
                  >
                  <ButtonText styles='booking' text={btnOrder.groupOrder}/>
                </div>
              </Col>
            </Row>
          </Col>
          <TicketBooking/>
        </Row>
        <br />
        <Subcribe />
    </Container>
  )
}
