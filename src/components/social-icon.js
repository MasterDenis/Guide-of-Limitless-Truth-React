import React from 'react'

import PropTypes from 'prop-types'

import './social-icon.css'

const SocialIcon = (props) => {
  return (
    <div className={`social-icon-container ${props.rootClassName} `}>
      <div className="social-icon-container1"></div>
    </div>
  )
}

SocialIcon.defaultProps = {
  rootClassName: '',
}

SocialIcon.propTypes = {
  rootClassName: PropTypes.string,
}

export default SocialIcon
