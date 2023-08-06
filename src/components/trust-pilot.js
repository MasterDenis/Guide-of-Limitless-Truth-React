import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './trust-pilot.css'

const TrustPilot = (props) => {
  return (
    <div className={`trust-pilot-container ${props.rootClassName} `}>
      <div className="trust-pilot-code-embed">
        <Script
          html={`<iframe width="100%" height="100%" src="https://www.trustpilot.com/review/guideoflimitlesstruth.com" title="GOLT Reviews"></iframe>`}
          className=""
        ></Script>
      </div>
    </div>
  )
}

TrustPilot.defaultProps = {
  rootClassName: '',
}

TrustPilot.propTypes = {
  rootClassName: PropTypes.string,
}

export default TrustPilot
