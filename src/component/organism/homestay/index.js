import React from 'react'
import { Row } from 'react-bootstrap'
import RoomFacilities from '../../molecules/roomFacilities'

export default function Homestay( { text } ) {
  return (
    <Row>
        <RoomFacilities title='Water Heater' desc='suitable when take a bath when you feel cool around'/>
        <RoomFacilities title='Amenities ' desc='We provide tea and coffee also'/>
        <RoomFacilities title='Free Ticket' desc='You are free in charge when want to swimming in pool'/>
    </Row>
  )
}
