import React from 'react'

export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='test'
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

export const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    className: "center",
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
