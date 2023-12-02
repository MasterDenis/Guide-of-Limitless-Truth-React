import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './pricing-card.css'

const PricingCard = (props) => {
  return (
    <div className="pricing-card-pricing-card">
      <span className="pricing-card-text">{props.text}</span>
      <div className="pricing-card-container">
        <ul className="pricing-card-ul list">
          <li className="pricing-card-li list-item">
            <span className="pricing-card-text01">{props.text3}</span>
          </li>
          <li className="pricing-card-li1 list-item">
            <span className="pricing-card-text02">{props.text4}</span>
          </li>
          <li className="pricing-card-li2 list-item">
            <span className="pricing-card-text03">{props.text5}</span>
          </li>
          <li className="pricing-card-li3 list-item">
            <span className="pricing-card-text04">{props.text6}</span>
          </li>
          <li className="pricing-card-li4 list-item">
            <span className="pricing-card-text05">{props.text7}</span>
          </li>
        </ul>
      </div>
      <div className="pricing-card-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="pricing-card-image"
        />
        <span className="pricing-card-text06">{props.text1}</span>
        <span className="pricing-card-text07">{props.text2}</span>
      </div>
      <a
        href={props.link_button}
        target="_blank"
        rel="noreferrer noopener"
        className="pricing-card-link"
      >
        {props.button}
      </a>
      <Link to="/spiritual-session" className="pricing-card-navlink">
        <span className="pricing-card-text08">See Details</span>
        <br></br>
      </Link>
    </div>
  )
}

PricingCard.defaultProps = {
  link_button:
    'https://booking.setmore.com/scheduleappointment/2687089c-bcd4-4858-add6-46fd40898130/services/3a46f629-71e7-4695-8991-6d656268b54e',
  text5:
    '  Suitable for individuals new to spirituality, seekers of guidance, and those looking for alternative perspectives',
  text1: '11',
  text: 'Spiritual Session',
  image_alt: 'image',
  text7: '  Duration: 60 minutes',
  button: 'Book Now',
  text3: 'Conversation for self-help and healing',
  text2: '€',
  text6: '  Can serve as a therapeutic session to broaden perspectives',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  text4:
    ' Flexible focus ranging from general concepts to specific questions and struggles',
}

PricingCard.propTypes = {
  link_button: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  text7: PropTypes.string,
  button: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text6: PropTypes.string,
  image_src: PropTypes.string,
  text4: PropTypes.string,
}

export default PricingCard
