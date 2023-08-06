import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './image-slider1.css'

const ImageSlider1 = (props) => {
  const [SlideNumber, setSlideNumber] = useState(0)
  return (
    <div className={`image-slider1-container ${props.rootClassName} `}>
      {SlideNumber === 0 && (
        <div className="image-slider1-container1">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="image-slider1-image"
          />
          <div
            onClick={() => setSlideNumber(3)}
            className="image-slider1-left-button"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider1-icon">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setSlideNumber(1)}
            className="image-slider1-right-button"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider1-icon02">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
      {SlideNumber === 1 && (
        <div className="image-slider1-container2">
          <img
            alt={props.image_alt11}
            src={props.image_src11}
            className="image-slider1-image1"
          />
          <div
            onClick={() => setSlideNumber(0)}
            className="image-slider1-left-button1"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider1-icon04">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setSlideNumber(2)}
            className="image-slider1-right-button1"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider1-icon06">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
      {SlideNumber === 2 && (
        <div className="image-slider1-container3">
          <img
            alt={props.image_alt111}
            src={props.image_src111}
            className="image-slider1-image2"
          />
          <div
            onClick={() => setSlideNumber(1)}
            className="image-slider1-left-button2"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider1-icon08">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setSlideNumber(3)}
            className="image-slider1-right-button2"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider1-icon10">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
      {SlideNumber === 3 && (
        <div className="image-slider1-container4">
          <img
            alt={props.image_alt1111}
            src={props.image_src1111}
            className="image-slider1-image3"
          />
          <div
            onClick={() => setSlideNumber(2)}
            className="image-slider1-left-button3"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider1-icon12">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setSlideNumber(0)}
            className="image-slider1-right-button3"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider1-icon14">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

ImageSlider1.defaultProps = {
  image_src1111:
    'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixid=M3w5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNjg0OTI5Njk2fA&ixlib=rb-4.0.3&w=1500',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt1111: 'image',
  image_alt111: 'image',
  image_alt1: 'image',
  image_src11:
    'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixid=M3w5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNjg0OTI5Njk2fA&ixlib=rb-4.0.3&w=1500',
  image_src111:
    'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixid=M3w5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNjg0OTI5Njk2fA&ixlib=rb-4.0.3&w=1500',
  rootClassName: '',
  image_alt11: 'image',
  image_alt: 'image',
  image_src1:
    'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixid=M3w5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNjg0OTI5Njk2fA&ixlib=rb-4.0.3&w=1500',
}

ImageSlider1.propTypes = {
  image_src1111: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1111: PropTypes.string,
  image_alt111: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src11: PropTypes.string,
  image_src111: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt11: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
}

export default ImageSlider1
