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
    </nav>
  )
}

Navbar.defaultProps = {
  image_src1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt1: 'image',
  Button1: 'Book a Session',
  text: 'Book a Session',
  Button: 'Book a Session',
  rootClassName: '',
  BrandingLogo: '/Branding/golt-logo-200h.png',
}

Navbar.propTypes = {
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  Button1: PropTypes.string,
  text: PropTypes.string,
  Button: PropTypes.string,
  rootClassName: PropTypes.string,
  BrandingLogo: PropTypes.string,
}

export default Navbar
