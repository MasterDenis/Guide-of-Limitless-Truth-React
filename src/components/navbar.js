import React from 'react'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav id="navbar-1" className={`navbar-navbar ${props.rootClassName} `}>
      <div className="navbar-container">
        <div className="navbar-container01">
          <div className="navbar-container02">
            <img
              alt={props.pastedImage_alt}
              src={props.pastedImage_src}
              className="navbar-pasted-image"
            />
            <img
              alt={props.pastedImage_alt1}
              src={props.pastedImage_src1}
              className="navbar-pasted-image1"
            />
            <div className="navbar-container03"></div>
          </div>
        </div>
        <div className="navbar-container04">
          <a href="#navbar-33" className="navbar-link">
            <div className="navbar-container05">
              <span className="navbar-text">{props.text2}</span>
            </div>
          </a>
          <a href="#navbar-second" className="navbar-link1">
            <div className="navbar-container06">
              <span className="navbar-text1">{props.text211}</span>
            </div>
          </a>
          <a href="#navbar-third" className="navbar-link2">
            <div className="navbar-container07">
              <span className="navbar-text2">{props.text21}</span>
            </div>
          </a>
        </div>
      </div>
      <div className="navbar-container08"></div>
      <div className="navbar-divider">
        <div className="navbar-container09"></div>
        <div className="navbar-container10"></div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  image_src1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  text1: 'Text',
  image_alt1: 'image',
  pastedImage_alt11: 'pastedImage',
  Button1: 'Book a Session',
  pastedImage_src11:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/94890b22-8f85-4b4c-a613-cb52b2e58deb/5343d31a-0534-45c8-b668-fae55f62be9b?org_if_sml=16952&force_format=original',
  text21: 'Light Worker Sessions',
  pastedImage_src: '/external/pastedimage-iylh-200h.png',
  text: 'Book a Session',
  pastedImage_alt2: 'pastedImage',
  Button: 'Book a Session',
  pastedImage_src1: '/external/pastedimage-mbu-200h.png',
  pastedImage_alt: 'pastedImage',
  text2: 'About Me',
  pastedImage_alt1: 'pastedImage',
  pastedImage_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/94890b22-8f85-4b4c-a613-cb52b2e58deb/c4db0717-bc0d-4e9f-95db-f7e80b392afe?org_if_sml=12679&force_format=original',
  text11: 'Text',
  text211: 'Shadow Worker Sessions',
  rootClassName: '',
  BrandingLogo: 'a1df142f-8aff-47b4-97dd-6dcdaf0a9048',
}

Navbar.propTypes = {
  image_src1: PropTypes.string,
  text1: PropTypes.string,
  image_alt1: PropTypes.string,
  pastedImage_alt11: PropTypes.string,
  Button1: PropTypes.string,
  pastedImage_src11: PropTypes.string,
  text21: PropTypes.string,
  pastedImage_src: PropTypes.string,
  text: PropTypes.string,
  pastedImage_alt2: PropTypes.string,
  Button: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  text2: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  pastedImage_src2: PropTypes.string,
  text11: PropTypes.string,
  text211: PropTypes.string,
  rootClassName: PropTypes.string,
  BrandingLogo: PropTypes.string,
}

export default Navbar
