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
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c444808c-576c-421e-b40a-c4e3bc218822/737323fa-e3a4-4171-958a-f75be52ed3e9?org_if_sml=1"
        />
      </Helmet>
    </div>
  )
}

export default BLANKPAGE
