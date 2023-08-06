import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Guide of Limitless Truth</title>
        <meta
          name="description"
          content="Spiritual Guidance and Tarot Reading Services."
        />
        <meta property="og:title" content="Page - Guide of Limitless Truth" />
        <meta
          property="og:description"
          content="Spiritual Guidance and Tarot Reading Services."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c444808c-576c-421e-b40a-c4e3bc218822/737323fa-e3a4-4171-958a-f75be52ed3e9?org_if_sml=1"
        />
      </Helmet>
      <div className="page-slider-width-glidejs">
        <div className="page-slider glide">
          <div data-glide-el="track" className="glide__track">
            <div className="page-slides glide__slides">
              <div className="page-slide-1 glide__slide">
                <span>
                  <span>Slide 1</span>
                  <br></br>
                  <span>Swipe me...</span>
                  <br></br>
                </span>
              </div>
              <div className="page-slide-2 glide__slide">
                <span>
                  <span>Slide 2</span>
                  <br></br>
                  <span>Swipe me...</span>
                  <br></br>
                </span>
              </div>
              <div className="page-slide-3 glide__slide">
                <span>
                  <span>Slide 3</span>
                  <br></br>
                  <span>Swipe me...</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div data-glide-el="controls" className="page-controls glide__arrows">
            <div
              data-glide-dir="&lt;"
              className="page-button-left glide__arrow glide__arrow--left"
            >
              <svg viewBox="0 0 1024 1024" className="page-icon">
                <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
              </svg>
            </div>
            <div
              data-glide-dir="&gt;"
              className="page-button-right glide__arrow--right glide__arrow"
            >
              <svg viewBox="0 0 1024 1024" className="page-icon2">
                <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div>
          <Script
            html={`<script>
  new Glide('.glide').mount()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Page
