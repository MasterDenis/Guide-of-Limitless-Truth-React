import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './packages.css'

const Packages = (props) => {
  return (
    <div className="packages-container">
      <Helmet>
        <title>Packages - Guide of Limitless Truth</title>
        <meta
          name="description"
          content="Spiritual Guidance and Tarot Reading Services."
        />
        <meta
          property="og:title"
          content="Packages - Guide of Limitless Truth"
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
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <section className="packages-section">
        <div className="packages-container01">
          <img
            alt="image"
            src="/Images/ewa_photo_2bd-500w.png"
            className="packages-image"
          />
          <div className="packages-hero">
            <div className="packages-content">
              <main className="packages-main">
                <header className="packages-header">
                  <img
                    alt="image"
                    src="/Images/ewa_photo_2bd-500w.png"
                    className="packages-image1"
                  />
                  <h1 className="packages-heading">Booking an Appointment</h1>
                  <span className="packages-caption">
                    <span>
                      I am so glad that you are interested in booking a session
                      with me !
                    </span>
                    <br className="packages-text01"></br>
                    <br className="packages-text02"></br>
                    <span>
                      To book an appointment please choose a service that fits
                      best to your needs then select the corresponding button to
                      that service.
                    </span>
                    <br className="packages-text04"></br>
                    <br></br>
                    <span>
                      This will redirect you to my &quot;SetMore&quot; Schedule
                      Page where you will be able to appoint to your desired
                      time frame depending on the selected service&apos;s time
                      length. 
                    </span>
                    <span>
                      Sessions are Live and Done via the Teleport App.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      To see more details about the service, click
                      &apos;&apos;See Details&quot;.
                    </span>
                    <br></br>
                  </span>
                </header>
              </main>
            </div>
          </div>
        </div>
      </section>
      <div className="packages-container02">
        <div className="packages-container03">
          <img
            alt="image"
            src="/SectionImages/golt-logo-seperatorca-200h.png"
            className="packages-image2"
          />
        </div>
      </div>
      <div className="packages-sale">
        <a href="#price-discounted" className="packages-link">
          <div className="packages-pricing-card">
            <span className="packages-text12">Choose your Package!</span>
          </div>
        </a>
      </div>
      <div className="packages-pricing">
        <div className="packages-container04">
          <div className="packages-pricing-card1">
            <span className="packages-text13">Classic Tarot Reading</span>
            <div className="packages-container05">
              <ol className="packages-ul list">
                <li className="packages-li list-item">
                  <span className="packages-text14">
                    Focuses on specific area, situation or question of
                    individual&apos;s choice
                  </span>
                </li>
                <li className="packages-li01 list-item">
                  <span className="packages-text15">
                    {' '}
                    Guided process to asking relevant questions and gaining
                    insight into wellbeing and self improvement
                  </span>
                </li>
                <li className="packages-li02 list-item">
                  <span className="packages-text16">
                    {' '}
                    Utilizes Tarot &amp; Oracle cards, energy and psychic
                    reading skills for spiritual understanding
                  </span>
                </li>
                <li className="packages-li03 list-item">
                  <span className="packages-text17">
                    {' '}
                    Fully customizable to focus on a specific area, situation or
                    question
                  </span>
                </li>
                <li className="packages-li04 list-item">
                  <span className="packages-text18">
                    {' '}
                    Not Fortune-Telling, Meant for Self-Development
                  </span>
                </li>
                <li className="packages-li05 list-item">
                  <span className="packages-text19">
                    {' '}
                    View sample readings on Twitch or YouTube
                  </span>
                </li>
                <li className="packages-li06 list-item">
                  <span className="packages-text20">
                    {' '}
                    Duration: 25-45 minutes
                  </span>
                </li>
              </ol>
            </div>
            <div id="price-discounted" className="packages-container06">
              <img
                alt="image"
                src="/Images/15-500h.png"
                className="packages-image3"
              />
              <span className="packages-text21">15</span>
              <span className="packages-text22">€</span>
            </div>
            <a
              href="https://booking.setmore.com/scheduleappointment/2687089c-bcd4-4858-add6-46fd40898130/services/846e65bf-229e-45fe-9d0f-0112f258e477?source=easyshare"
              target="_blank"
              rel="noreferrer noopener"
              className="packages-link1"
            >
              Book Now
            </a>
            <Link to="/classic-tarot" className="packages-navlink">
              <span className="packages-text23">See Details</span>
              <br></br>
            </Link>
          </div>
          <div className="packages-pricing-card2">
            <span className="packages-text25">Spiritual Session</span>
            <div className="packages-container07">
              <ul className="packages-ul1 list">
                <li className="packages-li07 list-item">
                  <span className="packages-text26">
                    Conversation for self-help and healing
                  </span>
                </li>
                <li className="packages-li08 list-item">
                  <span className="packages-text27">
                    {' '}
                    Flexible focus ranging from general concepts to specific
                    questions and struggles
                  </span>
                </li>
                <li className="packages-li09 list-item">
                  <span className="packages-text28">
                    {' '}
                    Suitable for individuals new to spirituality, seekers of
                    guidance, and those looking for alternative perspectives
                  </span>
                </li>
                <li className="packages-li10 list-item">
                  <span className="packages-text29">
                    {' '}
                    Can serve as a therapeutic session to broaden perspectives
                  </span>
                </li>
                <li className="packages-li11 list-item">
                  <span className="packages-text30"> Duration: 60 minutes</span>
                </li>
              </ul>
            </div>
            <div className="packages-container08">
              <img
                alt="image"
                src="/Images/20-500h.png"
                className="packages-image4"
              />
              <span className="packages-text31">20</span>
              <span className="packages-text32">€</span>
            </div>
            <a
              href="https://booking.setmore.com/scheduleappointment/2687089c-bcd4-4858-add6-46fd40898130/services/3a46f629-71e7-4695-8991-6d656268b54e?source=easyshare"
              target="_blank"
              rel="noreferrer noopener"
              className="packages-link2"
            >
              Book Now
            </a>
            <Link to="/spiritual-session" className="packages-navlink1">
              <span className="packages-text33">See Details</span>
              <br></br>
            </Link>
          </div>
          <div className="packages-pricing-card3">
            <span className="packages-text35">Taro-HEALING</span>
            <div className="packages-container09">
              <ul className="packages-ul2 list">
                <li className="packages-li12 list-item">
                  <span className="packages-text36">
                    Mix of tarot readings and spiritual coaching
                  </span>
                </li>
                <li className="packages-li13 list-item">
                  <span className="packages-text37">
                    {' '}
                    Holistic healing on subconscious level
                  </span>
                </li>
                <li className="packages-li14 list-item">
                  <span className="packages-text38">
                    {' '}
                    Welcomes conversation throughout the reading
                  </span>
                </li>
                <li className="packages-li15 list-item">
                  <span className="packages-text39">
                    {' '}
                    Addresses multiple areas and situations, as well as the
                    individual&apos;s entire life
                  </span>
                </li>
                <li className="packages-li16 list-item">
                  <span className="packages-text40">
                    {' '}
                    Not Fortune-Telling, Meant for Self-Development
                  </span>
                </li>
                <li className="packages-li17 list-item">
                  <span className="packages-text41">
                    {' '}
                    Recommended for self-aware, open-minded individuals open to
                    new perspectives and approaches to life and mindset.
                  </span>
                </li>
                <li className="packages-li18 list-item">
                  <span className="packages-text42">
                    {' '}
                    Duration: 60-180 minutes
                  </span>
                </li>
              </ul>
            </div>
            <div className="packages-container10">
              <img
                alt="image"
                src="/Images/30-500h.png"
                className="packages-image5"
              />
              <span className="packages-text43">
                <span>30</span>
                <br></br>
              </span>
              <span className="packages-text46">€</span>
            </div>
            <a
              href="https://booking.setmore.com/scheduleappointment/2687089c-bcd4-4858-add6-46fd40898130/services/08ac15cc-1e95-4bb4-9a27-7f823847e3da?source=easyshare"
              target="_blank"
              rel="noreferrer noopener"
              className="packages-link3"
            >
              Book Now
            </a>
            <Link to="/taro-healing" className="packages-navlink2">
              <span className="packages-text47">See Details</span>
              <br></br>
            </Link>
          </div>
        </div>
      </div>
      <div className="packages-container11">
        <div className="packages-container12">
          <img
            alt="image"
            src="/SectionImages/golt-logo-seperatorca-200h.png"
            className="packages-image6"
          />
        </div>
      </div>
      <div className="packages-testimonials-button-section">
        <div className="packages-testimonials-button-container">
          <Link to="/testimonials" className="packages-navlink3">
            <div className="packages-testimonials-button get-started">
              <span className="packages-text49">
                <span className="packages-text50">Testimonials</span>
                <br className="packages-text51"></br>
              </span>
            </div>
          </Link>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Packages
