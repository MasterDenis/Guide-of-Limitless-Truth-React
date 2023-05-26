import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-container ${props.rootClassName} `}>
      <footer className="footer-footer">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="footer-image"
        />
        <div className="footer-container1">
          <a
            href="https://discord.gg/RpAYvYT5DT"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
          >
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="footer-image1"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UC9lhUhapaQ_e1dYt0yRgWGA"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link1"
          >
            <img
              alt={props.image_alt2}
              src={props.image_src2}
              className="footer-image2"
            />
          </a>
          <a
            href="mailto:guardianoflimitlesstruth@gmail.com?subject=SITE-"
            className="footer-link2"
          >
            <img
              alt={props.image_alt3}
              src={props.image_src3}
              className="footer-image3"
            />
          </a>
          <a
            href="https://www.instagram.com/guideoflimitlesstruth/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link3"
          >
            <img
              alt={props.image_alt4}
              src={props.image_src4}
              className="footer-image4"
            />
          </a>
          <a
            href="https://www.twitch.tv/guideoflimitlesstruth"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link4"
          >
            <img
              alt={props.image_alt5}
              src={props.image_src5}
              className="footer-image5"
            />
          </a>
        </div>
      </footer>
    </div>
  )
}

Footer.defaultProps = {
  image_alt5: 'image',
  image_alt: 'logo',
  image_src1: '/discord.png',
  rootClassName: '',
  image_alt2: 'image',
  image_src5: '/twitch.png',
  image_alt1: 'image',
  image_src2: '/youtube.png',
  image_alt3: 'image',
  image_src: '/golt-logob.png',
  image_src4: '/instagram.png',
  image_alt4: 'image',
  image_src3: '/gmail.png',
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
  image_src: PropTypes.string,
  image_src4: PropTypes.string,
  image_alt4: PropTypes.string,
  image_src3: PropTypes.string,
}

export default Footer
