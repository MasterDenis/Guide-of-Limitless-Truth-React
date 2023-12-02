import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-container ${props.rootClassName} `}>
      <footer className="footer-footer">
        <img
          alt={props.image_alt6}
          src={props.image_src6}
          className="footer-image"
        />
        <div className="footer-container1">
          <a
            href="https://discord.gg/RpAYvYT5DT"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
          >
            <div className="footer-container2"></div>
          </a>
          <a
            href="https://www.youtube.com/channel/UC9lhUhapaQ_e1dYt0yRgWGA"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link1"
          >
            <div className="footer-container3"></div>
          </a>
          <a
            href="mailto:guardianoflimitlesstruth@gmail.com?subject=SITE-"
            className="footer-link2"
          >
            <div className="footer-container4"></div>
          </a>
          <a
            href="https://www.instagram.com/guideoflimitlesstruth/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link3"
          >
            <div className="footer-container5"></div>
          </a>
          <a
            href="https://www.twitch.tv/guideoflimitlesstruth"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link4"
          >
            <div className="footer-container6"></div>
          </a>
        </div>
      </footer>
    </div>
  )
}

Footer.defaultProps = {
  image_alt5: 'image',
  image_alt: 'logo',
  image_src1: 'ade7ac59-dff7-4595-9bad-fa081abf505e',
  rootClassName: '',
  image_alt2: 'image',
  image_src5: 'e893f6a9-c9fb-488b-a032-e5833344f792',
  image_alt1: 'image',
  image_src2: '8365c6ef-996d-4e92-b34c-29ec08ef653d',
  image_alt3: 'image',
  image_alt6: 'logo',
  image_src6: '/Branding/golt-logoa-300h.png',
  image_src: '27b5fa7c-c1ac-4f14-936c-e3cb669c94e0',
  image_src4: '23b9e676-1ca7-449d-973f-fbf73f55ddb5',
  image_alt4: 'image',
  image_src3: '8774dfe4-717d-454e-9307-0fabc3ffc428',
}

Footer.propTypes = {
  image_alt5: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src5: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt6: PropTypes.string,
  image_src6: PropTypes.string,
  image_src: PropTypes.string,
  image_src4: PropTypes.string,
  image_alt4: PropTypes.string,
  image_src3: PropTypes.string,
}

export default Footer
