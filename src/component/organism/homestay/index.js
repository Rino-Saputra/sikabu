import React from 'react'
import { Row } from 'react-bootstrap'
import RoomFacilities from '../../molecules/roomFacilities'

export default function Homestay( { text } ) {
  return (
    <Row>
        <RoomFacilities title='Water Heater' desc='cocok ketika mandi di daerah dingin'/>
        <RoomFacilities title='Amenities ' desc='Kita juga menyediakan teh,kopi dan lain-lain'/>
        <RoomFacilities title='Free Ticket' desc='Anda gratis berenang di pemandian sikabu'/>
    </Row>
  )
}
