import React, { useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ButtonText from '../../atoms/button/ButtonText'
import TicketBookingdetail from '../../organism/ticketBookDetail/TicketBookingdetail'
import TicketBookingTotal from './TicketBookingTotal'
import { GuestPop, DatePop, VariantPop } from '../pop'
import './style.css'
import Swal from 'sweetalert2'

export default function TicketBooking() {

  const price = useSelector(state=>state.priceReducer)
  
  const preOrderTicket =[
    {
        icon: 'Variant', 
        iconColor: '#f96900',
        desc: price.variant,
        component: <VariantPop deactive/>
    },
    {
        icon: 'Date',
        iconColor: '#f96900',
        desc: price.date,
        component: <DatePop deactive/>,
    },
    {
        icon: 'Guests',
        iconColor: '#f96900',
        desc: `${price.personalQuantity} Person, ${price.groupQuantity} Group`,
        component: <GuestPop deactive/>,
    }
  ]

  const handleOrder = () =>{
    if(price.personalQuantity > 0 || price.groupQuantity  > 0){
      Swal.fire({
        icon: 'warning',
        title: `Total harga ${price.grandTotal} apakah anda ingin melanjutkan?`,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then( result=>{
        if (result.isConfirmed) {
          Swal.fire( 'Ticket berhasil ditambah', 'Silahkan lakukan pembayaran!','success')
            .then(()=>console.log('berhasil'))
        }
      })
      return;
    } 

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Tiket belum dipesan silahkan dipesan di pilih terlebih dahulu',
    })
    
  }

  return (
    <Col className='ticket-booking py-4 px-4'>
      <h4 className='fw-bold mb-4'>Detail Pesanan</h4>
      <h6 className='text-secondary'>Harga</h6>
      <h2 className='fw-bold mb-4' style={{color: '#f96900'}}>IDR {price.grandTotal}</h2>
      
      {
        preOrderTicket.map( (data, id) =><TicketBookingdetail 
          {...data} 
          key={id}
        />)
      }

      <h5 className='mt-4 mb-2 fw-bold'>Price Breakdown</h5>
      <TicketBookingTotal />
      <Row className='px-2' onClick={handleOrder}>
        <ButtonText styles='booking' text='pesan' />
      </Row>
    </Col>
  )
}
