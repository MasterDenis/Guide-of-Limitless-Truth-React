import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './classic-tarot.css'

const ClassicTarot = (props) => {
  return (
    <div className="classic-tarot-container">
      <Helmet>
        <title>Classic-Tarot - Guide of Limitless Truth</title>
        <meta
          name="description"
          content="Spiritual Guidance and Tarot Reading Services."
        />
        <meta
          property="og:title"
          content="Classic-Tarot - Guide of Limitless Truth"
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
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
      <div className="classic-tarot-container1">
        <div className="classic-tarot-container2"></div>
      </div>
      <section className="classic-tarot-details-description-section">
        <div className="classic-tarot-container3">
          <img
            alt="image"
            src="/Images/hibiscus-photo-spiritual-session3c-400w.png"
            className="classic-tarot-image"
          />
          <div className="classic-tarot-hero">
            <div className="classic-tarot-content">
              <main className="classic-tarot-main">
                <header className="classic-tarot-header">
                  <img
                    alt="image"
                    src="/Images/hibiscus-photo-spiritual-session3c-400w.png"
                    className="classic-tarot-image1"
                  />
                  <h1 className="classic-tarot-heading">
                    Classic Tarot Session
                  </h1>
                  <span className="classic-tarot-caption">
                    <span>
                      Classic Tarot Reading is a standard 20-40 min personal
                      session focused around a specific area, situation or
                      question of Your choice.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      It is fully individual, with no specified number of cards
                      or questions.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      I perform my readings with both Tarot and Oracle, using
                      energy and psychic reading skills and my spiritual
                      experience and understanding.I will do my best to guide
                      You through the process, help You ask the right questions
                      and give You the best of value regarding your well being
                      and self improvement in the context. You can see similar
                      examples of this reading on my Twitch or YouTube.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Disclaimers:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                        I am not a fortune teller, thus I do not provide fortune
                      telling kinds of readings.&quot;
                    </span>
                    <br className="classic-tarot-text11"></br>
                    <span className="classic-tarot-text12">
                        I do not provide financial, medical or legal advices
                      through my sessions.
                    </span>
                    <br className="classic-tarot-text13"></br>
                    <span className="classic-tarot-text14">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </header>
              </main>
            </div>
          </div>
        </div>
        <a
          href="https://booking.setmore.com/scheduleappointment/2687089c-bcd4-4858-add6-46fd40898130/services/846e65bf-229e-45fe-9d0f-0112f258e477"
          target="_blank"
          rel="noreferrer noopener"
          className="classic-tarot-link"
        >
          Book Now
        </a>
      </section>
      <div className="classic-tarot-container4">
        <div className="classic-tarot-container5"></div>
      </div>
      <div className="classic-tarot-testimonials-button-section">
        <div className="classic-tarot-testimonials-button-container">
          <Link to="/testimonials" className="classic-tarot-navlink">
            <div className="classic-tarot-testimonials-button get-started">
              <span className="classic-tarot-text15">
                <span>Testimonials</span>
                <br></br>
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="classic-tarot-container6">
        <div className="classic-tarot-container7"></div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default ClassicTarot
