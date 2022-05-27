import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../component/template/layoutFacilities'
import { homestay, cafe, carousel11 } from '../export/image'

export default function Facilities() {
  return (
    <Container>
      <Layout 
        title='Homestay'
        image={carousel11}
      />
      <hr />
      <Layout 
        title='Cafe'
        image={cafe}
      />
    </Container>
  )
}
