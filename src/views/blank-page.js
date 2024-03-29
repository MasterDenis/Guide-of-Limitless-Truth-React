import React from 'react'

import { Helmet } from 'react-helmet'

import './blank-page.css'

const BLANKPAGE = (props) => {
  return (
    <div id="app" className="blankpage-container">
      <Helmet>
        <title>BLANK-PAGE - Guide of Limitless Truth</title>
        <meta
          name="description"
          content="Spiritual Guidance and Tarot Reading Services."
        />
        <meta
          property="og:title"
          content="BLANK-PAGE - Guide of Limitless Truth"
        />
        <meta
          property="og:description"
          content="Spiritual Guidance and Tarot Reading Services."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/94890b22-8f85-4b4c-a613-cb52b2e58deb/737323fa-e3a4-4171-958a-f75be52ed3e9?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
    </div>
  )
}

export default BLANKPAGE
