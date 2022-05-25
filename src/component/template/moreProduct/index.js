import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pool } from '../../../export/image';
import './style.css';

import Subcribe from '../../organism/subcribe';
import { settings } from '../../../config/carouselConfig';
import Intro from '../../molecules/intro/Index';

import {carousel1,carousel2,carousel3,carousel4,carousel5,carousel6,carousel7,carousel8,carousel9,
        carousel10,carousel11 } from '../../../export/image';

export default function Carousel() {

  return (
    <div className='mt-5 '>
      <div className='gallery-cnt py-4 d-flex flex-column align-items-center'>
        <Intro 
          head='Galeri'
          desc=''
          color='text-light'
        />
        <div className='container-crsl'>
          <Slider {...settings}>
              <div><img className='crsl-img' src={carousel1} alt="Credit to Joshua Earle on Unsplash"/></div>
              <div><img className='crsl-img' src={carousel2} alt="Credit to Alisa Anton on Unsplash"/></div>
              <div><img className='crsl-img' src={carousel3} alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
              <div><img className='crsl-img' src={carousel4} alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>
              <div><img className='crsl-img' src={carousel5} alt="Credit to Cristina Gottardi on Unsplash"/></div>
              <div><img className='crsl-img' src={carousel6} alt="Credit to Cristina Gottardi on Unsplash"/></div>
              <div><img className='crsl-img' src={carousel7} alt="Credit to Cristina Gottardi on Unsplash"/></div>
              <div><img className='crsl-img' src={carousel8} alt="Credit to Cristina Gottardi on Unsplash"/></div>
              <div><img className='crsl-img' src={carousel9} alt="Credit to Cristina Gottardi on Unsplash"/></div>
              <div><img className='crsl-img' src={carousel10} alt="Credit to Cristina Gottardi on Unsplash"/></div>
              <div><img className='crsl-img' src={carousel11} alt="Credit to Cristina Gottardi on Unsplash"/></div>
          </Slider>
        </div>
      </div>
      <Subcribe />
    </div>
  );
  
}
