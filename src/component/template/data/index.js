import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import CardData from '../../organism/cardData'
import Intro from '../../molecules/intro/Index'
import { event,facilities,people,award } from '../../../export/image'

export default function Data() {
  return (
    <Container>
        <Intro 
            head='Fact'
            desc='See our fact during based on statistic'
        />
        <Row className='mt-5'>
            <Col md={3}>
                <CardData 
                    image={people}
                    count={+13000}
                    desc='Guest/Month'
                />
            </Col>
            <Col md={3}>
                <CardData 
                    image={award}
                    count={2}
                    desc='Award'
                />
            </Col>
            <Col md={3}>
                <CardData 
                    image={event}
                    count={20}
                    desc='Event'
                />
            </Col>
            <Col md={3}>
                <CardData 
                    image={facilities}
                    count={10}
                    desc='Free facilities'
                />
            </Col>
        </Row>
    </Container>
  )
}
