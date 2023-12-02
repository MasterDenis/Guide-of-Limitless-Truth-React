import React from 'react'

import PropTypes from 'prop-types'

import './package-card.css'

const PackageCard = (props) => {
  return (
    <div className="package-card-package-card">
      <div className="package-card-header">
        <img
          alt={props.pastedImage_alt}
          src={props.pastedImage_src}
          className="package-card-pasted-image"
        />
        <h1 className="package-card-text">{props.heading}</h1>
      </div>
      <div className="package-card-container">
        <span className="package-card-text01">
          <span>What You&apos;ll Get</span>
          <br></br>
        </span>
        <div className="package-card-list-1">
          <img
            alt={props.pastedImage_alt1}
            src={props.pastedImage_src1}
            className="package-card-pasted-image1"
          />
          <span className="package-card-text04">
            <span>60 Minute One on One Session</span>
            <br></br>
          </span>
        </div>
        <div className="package-card-list-2">
          <img
            alt={props.pastedImage_alt2}
            src={props.pastedImage_src2}
            className="package-card-pasted-image2"
          />
          <span className="package-card-text07">
            <span>Energy Reading</span>
            <br></br>
          </span>
        </div>
        <div className="package-card-list-3">
          <img
            alt={props.pastedImage_alt3}
            src={props.pastedImage_src3}
            className="package-card-pasted-image3"
          />
          <span className="package-card-text10">
            <span>Card Reading</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="package-card-container1">
        <div className="package-card-divider"></div>
        <span className="package-card-text13">{props.text}</span>
        <div className="package-card-button">
          <span className="package-card-text14">{props.text1}</span>
        </div>
      </div>
    </div>
  )
}

PackageCard.defaultProps = {
  pastedImage_src: '/external/pastedimage-mt3n.svg',
  pastedImage_alt3: 'pastedImage',
  pastedImage_alt2: 'pastedImage',
  pastedImage_src1: '/external/pastedimage-m0sd.svg',
  pastedImage_src3: '/external/pastedimage-m0sd.svg',
  heading: '60 Minutes',
  pastedImage_alt: 'pastedImage',
  text: '$20',
  pastedImage_alt1: 'pastedImage',
  pastedImage_src2: '/external/pastedimage-m0sd.svg',
  text1: 'Choose',
}

PackageCard.propTypes = {
  pastedImage_src: PropTypes.string,
  pastedImage_alt3: PropTypes.string,
  pastedImage_alt2: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  pastedImage_src3: PropTypes.string,
  heading: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  text: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  pastedImage_src2: PropTypes.string,
  text1: PropTypes.string,
}

export default PackageCard
