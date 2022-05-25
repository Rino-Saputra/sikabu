import React from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'

import FoodBeverageCard from '../../molecules/fnbCard'
import { foodImg,snackImg,beverageImg } from '../../../export/image'


export default function FoodBeverage(props) {
  return (
    <div className='mt-5'>
      {props.toggle ?(
        <Carousel variant="dark" indicators={false} >
          <Carousel.Item>
            <FoodBeverageCard 
              title='Menu Makanan'
              image={foodImg}
            />
          </Carousel.Item>
          <Carousel.Item>
            <FoodBeverageCard 
              title='Snack Menu'
              image={snackImg}
            />
          </Carousel.Item>
        </Carousel> ) : (
          <Carousel variant="dark" indicators={false} >
          <Carousel.Item>
            <FoodBeverageCard 
              title='Menu Minuman'
              image={beverageImg}
            />
          </Carousel.Item>
        </Carousel>
        )
      }
    </div>
  )
}
