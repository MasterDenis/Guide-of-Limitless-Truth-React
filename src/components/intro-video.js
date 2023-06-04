import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './intro-video.css'

const IntroVideo = (props) => {
  return (
    <section className={`intro-video-section ${props.rootClassName} `}>
      <div className="intro-video-div">
        <DangerousHTML
          html={`<iframe style="border: 10px solid #FFFFFF; overflow: hidden; border-radius: 10px;" width="100%" height="100%" frameborder="0" src="https://www.youtube.com/embed/h9Q3x4TQdgI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}
          className=""
        ></DangerousHTML>
      </div>
    </section>
  )
}

IntroVideo.defaultProps = {
  rootClassName: '',
}

IntroVideo.propTypes = {
  rootClassName: PropTypes.string,
}

export default IntroVideo
