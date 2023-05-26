import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav id="navbar-1" className={`navbar-navbar ${props.rootClassName} `}>
      <Link to="/" className="navbar-navlink">
        <img
          alt="Guide Of Limitless Truth"
          src={props.BrandingLogo}
          loading="eager"
          className="navbar-branding-logo"
        />
      </Link>
      <div className="navbar-nav-content">
        <div className="navbar-nav-links"></div>
        <Link to="/packages" className="navbar-button">
          {props.Button}
        </Link>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  image_src1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt1: 'image',
  Button: 'Book a Session',
  rootClassName: '',
  BrandingLogo: '/golt-logob.png',
}

Navbar.propTypes = {
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  Button: PropTypes.string,
  rootClassName: PropTypes.string,
  BrandingLogo: PropTypes.string,
}

export default Navbar
