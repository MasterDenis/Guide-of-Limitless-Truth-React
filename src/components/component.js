import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <div className="app-component-container1">
        <div className="app-component-container2"></div>
        <div className="app-component-container3">
          <div className="app-component-container4">
            <a href="#pricing-cards" className="app-component-link">
              <div className="app-component-container5">
                <span className="app-component-text">{props.text}</span>
              </div>
            </a>
          </div>
          <div className="app-component-container6">
            <div className="app-component-container7">
              <span className="app-component-text1">{props.text1}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  text: 'Get In Touch',
  text1: 'Learn More',
}

AppComponent.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default AppComponent
