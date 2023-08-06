import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card1.css'

const TestimonialCard1 = (props) => {
  return (
    <div
      className={`testimonial-card1-testimonial-card ${props.rootClassName} `}
    >
      <svg
        viewBox="0 0 950.8571428571428 1024"
        className="testimonial-card1-icon"
      >
        <path
          d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"
          className=""
        ></path>
      </svg>
      <img
        alt={props.Quote1}
        src={props.image_src}
        className="testimonial-card1-image"
      />
      <h1 className="testimonial-card1-title">{props.Title}</h1>
      <div className="testimonial-card1-testimonial">
        <span className="testimonial-card1-text">{props.quote}</span>
        <span className="testimonial-card1-text1">{props.name}</span>
        <span className="testimonial-card1-text2">{props.role}</span>
        <img
          alt={props.picture_alt}
          src={props.picture_src}
          className="testimonial-card1-image1"
        />
      </div>
      <svg
        viewBox="0 0 950.8571428571428 1024"
        className="testimonial-card1-icon2"
      >
        <path
          d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"
          className=""
        ></path>
      </svg>
      <img
        alt={props.Quote11}
        src={props.Quote2}
        className="testimonial-card1-image2"
      />
    </div>
  )
}

TestimonialCard1.defaultProps = {
  picture_src: '/Icons/default-reviewer-200h.png',
  Quote1: 'image',
  Title: 'Great Service!',
  image_src: '/Icons/quotes1-200h.png',
  Quote2: '/Icons/quotes2png-200h.png',
  Service: 'Taro-Therapy',
  name: 'Name',
  picture_alt: 'profile',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
  role: 'Customer',
  Quote11: 'image',
  rootClassName: '',
}

TestimonialCard1.propTypes = {
  picture_src: PropTypes.string,
  Quote1: PropTypes.string,
  Title: PropTypes.string,
  image_src: PropTypes.string,
  Quote2: PropTypes.string,
  Service: PropTypes.string,
  name: PropTypes.string,
  picture_alt: PropTypes.string,
  quote: PropTypes.string,
  role: PropTypes.string,
  Quote11: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TestimonialCard1
