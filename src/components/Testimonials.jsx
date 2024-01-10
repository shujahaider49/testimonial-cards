// Testimonials.js

import React from 'react';
import Slider from 'react-slick';
import '../css/Testimonial.css';
import { TbArrowRight,TbArrowLeft   } from "react-icons/tb";

const Testimonials = () => {
    const settings = {
        className: 'center',
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        centerPadding: '100px',
        slidesToShow: 3,
        speed: 500,
        nextArrow: <TbArrowRight color='black' size={40}/>,
        prevArrow: <TbArrowLeft  color='black' size={40} />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
      };

  const sliderData = [
    {
      name: 'John Doe',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet feugiat odio. Proin volutpat, turpis id gravida facilisis.',
      image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Jane Smith',
      quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Alice Johnson',
      quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Mark Johnson',
      quote: 'Nunc ac dictum mauris, non iaculis nisi. Fusce ut lacinia orci. In hac habitasse platea dictumst. Sed euismod convallis sapien, a sodales ligula feugiat id.',
      image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Eva Williams',
      quote: 'Vestibulum suscipit aliquet elit, nec ornare urna tincidunt in. Integer bibendum massa vel ex facilisis, in tincidunt nunc eleifend.',
      image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="gtco-testimonials">
    <h2 className='heading'>Testimonials</h2>
    <Slider {...settings}>
      {sliderData.map((testimonial, index) => (
        <div key={index}>
          <img src={testimonial.image} alt={testimonial.name} className="avatar" />
          <span className="name">{testimonial.name}</span>
          <p className="quote">{testimonial.quote}</p>
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default Testimonials;
