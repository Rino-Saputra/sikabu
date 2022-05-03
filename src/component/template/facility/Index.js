import { Row, Col, Container } from "react-bootstrap"
import CardFacility from "../../organism/card/Index"
import Intro from "../../molecules/intro/Index"
import { landscape, slide, pool, canebo, cafe, homestay } from '../../../export/image'

export default function Facility() {
  return (
    <Container className='d-flex align-items-md-center flex-column' >
        <Intro 
            head="Facility"
            desc="try our facility and feel comfortable with your family"
        />

        <Row className="pt-5 mt-5 d-flex justify-content-justify-content-evenly">
            <Col md={4} className='mb-4'>
                <CardFacility 
                    image={landscape}
                    title='Landscape'
                    desc='Feel nature view from sikabu with green hill and ricefield'
                />
            </Col>
            <Col md={4} className='mb-4'>
                <CardFacility 
                    image={slide}
                    title='Slides'
                    desc='There two slide for adult and children with different place'
                />
            </Col>
            <Col md={4} className='mb-4'>
                <CardFacility 
                    image={pool}
                    title='Pool'
                    desc='Swimming with cool water direct from mountain water source'
                />
            </Col>
            <Col md={4} className='mb-4'>
                <CardFacility 
                    image={canebo}
                    title='Canebo'
                    desc='Feel enjoy at canebo when you take resta after swimming'
                />
            </Col>
            <Col md={4} className='mb-4'>
                <CardFacility 
                    image={cafe}
                    title='Cafe'
                    desc='Order and enjoy service and menu from our cafe'
                />
            </Col>
            <Col md={4} className='mb-4'>
                <CardFacility 
                    image={homestay}
                    title='Homestay'
                    desc='Dont fear when you dont get hotel room in the city we also provide homestay'
                />
            </Col>
        <hr className='mt-5' />
        </Row>
    </Container>
  )
}


