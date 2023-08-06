import React from 'react'

import PropTypes from 'prop-types'

import './footer-testing.css'

const FooterTesting = (props) => {
  return (
    <div className="footer-testing-container">
      <footer className="footer-testing-footer">
        <img
          alt="logo"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c444808c-576c-421e-b40a-c4e3bc218822/52577359-0cc4-42d9-9846-203562f4d316?org_if_sml=124712"
          className="footer-testing-image"
        />
        <div className="footer-testing-container1">
          <a
            href="https://discord.gg/RpAYvYT5DT"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-testing-link"
          >
            <img
              alt="image"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c444808c-576c-421e-b40a-c4e3bc218822/29c42592-98b6-4899-b3ec-f7dc6bb82412?org_if_sml=14442"
              className="footer-testing-image1"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UC9lhUhapaQ_e1dYt0yRgWGA"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-testing-link1"
          >
            <img
              alt="image"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c444808c-576c-421e-b40a-c4e3bc218822/c30203ea-b25d-49d9-a305-95468c0e94e6?org_if_sml=13296"
              className="footer-testing-image2"
            />
          </a>
          <a
            href="mailto:guardianoflimitlesstruth@gmail.com?subject=SITE-"
            className="footer-testing-link2"
          >
            <img
              alt="image"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c444808c-576c-421e-b40a-c4e3bc218822/a9a5e703-881d-470d-b7a2-022ad5dc417b?org_if_sml=15042"
              className="footer-testing-image3"
            />
          </a>
          <a
            href="https://www.instagram.com/guideoflimitlesstruth/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-testing-link3"
          >
            <img
              alt="image"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c444808c-576c-421e-b40a-c4e3bc218822/c46447ae-dc10-4db3-827f-faa388db709c?org_if_sml=15172"
              className="footer-testing-image4"
            />
          </a>
          <a
            href="https://www.twitch.tv/guideoflimitlesstruth"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-testing-link4"
          >
            <img
              alt="image"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c444808c-576c-421e-b40a-c4e3bc218822/5df3b1cb-b2ad-4637-9b0c-c98789d206ea?org_if_sml=11486"
              className="footer-testing-image5"
            />
          </a>
        </div>
      </footer>
    </div>
  )
}

FooterTesting.defaultProps = {
  image_src4: '23b9e676-1ca7-449d-973f-fbf73f55ddb5',
  image_src5: 'e893f6a9-c9fb-488b-a032-e5833344f792',
  image_alt: 'logo',
  image_alt1: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt3: 'image',
  image_alt5: 'image',
  image_src1: 'ade7ac59-dff7-4595-9bad-fa081abf505e',
  rootClassName: '',
  image_src2: '8365c6ef-996d-4e92-b34c-29ec08ef653d',
  image_alt2: 'image',
  image_src3: '8774dfe4-717d-454e-9307-0fabc3ffc428',
  image_alt4: 'image',
}

FooterTesting.propTypes = {
  image_src4: PropTypes.string,
  image_src5: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt5: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt4: PropTypes.string,
}

export default FooterTesting
