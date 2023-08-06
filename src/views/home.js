import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import IntroVideo from '../components/intro-video'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div id="app" className="home-container">
      <Helmet>
        <title>Guide of Limitless Truth</title>
        <meta
          name="description"
          content="Spiritual Guidance and Tarot Reading Services."
        />
        <meta property="og:title" content="Guide of Limitless Truth" />
        <meta
          property="og:description"
          content="Spiritual Guidance and Tarot Reading Services."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c444808c-576c-421e-b40a-c4e3bc218822/737323fa-e3a4-4171-958a-f75be52ed3e9?org_if_sml=1"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <div className="home-container01">
        <div className="home-container02"></div>
      </div>
      <div className="home-banner">
        <h1 className="home-heading">
          <span>Holistic Healing</span>
          <br></br>
        </h1>
        <h1 className="home-heading1">
          <span>Psychic Readings</span>
          <br></br>
        </h1>
        <h1 className="home-heading2">
          <span>Spiritual Coaching</span>
          <br></br>
        </h1>
      </div>
      <section className="home-about-me">
        <div id="about-me" className="home-container03">
          <img
            alt="image"
            src="/Images/ewa21-500w.png"
            className="home-image"
          />
          <div className="home-hero">
            <div className="home-content">
              <main className="home-main">
                <header className="home-header">
                  <img
                    alt="image"
                    src="/Images/ewa21-500w.png"
                    className="home-image1"
                  />
                  <h1 className="home-heading3">Few Things about me...</h1>
                  <span className="home-caption">
                    <span>
                      My name is Ewa, and in media I am know as Guide of
                      Limitless Truth.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text07"></br>
                    <br className="home-text08"></br>
                    <span>
                      My passion for spirituality started in 2017 and since then
                      I dived into a lot of themes and practices related to
                      metaphysics, esoterism, parapsychology and self
                      development. This came out to be my life passion, and
                      along with it I discovered tarot, which I came out to be
                      more passionate about than I initially would&apos;ve
                      expected.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text10"></br>
                    <br className="home-text11"></br>
                    <span>
                      Through-out my journey I created a spiritually themed
                      YouTube channel which now has a count of almost 10k
                      subscribers and some videos with over 200k views.
                      Currently I am also a streamer on twitch and I happily
                      make free of charge readings for people, which lead me to
                      realize how much fullfillment I find in reading for
                      others.
                    </span>
                    <br className="home-text13"></br>
                    <br className="home-text14"></br>
                    <span>
                      I am also an artist from a very young age, and I
                      specialize in both traditional and digital art.
                      Additonally I am also a huge music lover.
                    </span>
                    <br className="home-text16"></br>
                    <span className="home-text17">
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
      </section>
      <div className="home-container04">
        <div className="home-container05"></div>
      </div>
      <IntroVideo rootClassName="intro-video-root-class-name"></IntroVideo>
      <div className="home-container06">
        <div className="home-container07"></div>
      </div>
      <section id="services-info" className="home-services">
        <div className="home-container08">
          <div className="home-hero1">
            <div className="home-content1">
              <main className="home-main1">
                <header className="home-header1">
                  <img
                    alt="image"
                    src="/Images/1684159515569-600w.jpg"
                    className="home-image2"
                  />
                  <h1 className="home-heading4">Services</h1>
                  <span className="home-caption1">
                    <span className="home-text18">
                      In my readings I use energy reading skills, and I would
                      call myself an intuitive reader.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text19"></br>
                    <span className="home-text20">
                      I work both with oracles and tarot cards, and I specialize
                      in rather deep readings. I love doing psychological and
                      self focused sessions, with goal of understanding either
                      yourself or situations more deeply.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text21"></br>
                    <span className="home-text22">
                      I encourage You to book a reading with me especially if
                      You&apos;re looking to do some inner work and most
                      importantly if You&apos;re open minded.
                    </span>
                    <br className="home-text23"></br>
                    <span className="home-text24">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text25"></br>
                    <span className="home-text26">
                      You can Choose between 3 different packages, head to
                      &quot;
                    </span>
                    <span className="home-text27">
                      Book
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text28">a</span>
                    <span className="home-text29"> Session</span>
                    <span className="home-text30">&quot;</span>
                    <span className="home-text31">
                      {' '}
                      to see the packages and their details.
                    </span>
                    <br className="home-text32"></br>
                    <br className="home-text33"></br>
                    <span className="home-text34">Disclaimers</span>
                    <span className="home-text35">
                      :
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text36"></br>
                    <span className="home-text37">
                        I do not provide financial, medical or legal advices
                      through my sessions.
                    </span>
                    <br className="home-text38"></br>
                    <span className="home-text39">
                        I am not a fortune teller, thus I do not provide fortune
                      telling kinds of readings.
                    </span>
                    <br className="home-text40"></br>
                    <span className="home-text41">
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
          <img
            alt="image"
            src="/Images/1684159515569-600w.jpg"
            className="home-image3"
          />
        </div>
      </section>
      <div className="home-sale">
        <a href="#price-discounted" className="home-link">
          <div className="home-pricing-card">
            <span className="home-text42">Choose your Package!</span>
          </div>
        </a>
      </div>
      <div className="home-pricing">
        <div className="home-container09">
          <div className="home-pricing-card1">
            <span className="home-text43">Classic Tarot Reading</span>
            <div className="home-container10">
              <ol className="home-ul list">
                <li className="home-li list-item">
                  <span className="home-text44">
                    Focuses on specific area, situation or question of
                    individual&apos;s choice
                  </span>
                </li>
                <li className="home-li01 list-item">
                  <span className="home-text45">
                    {' '}
                    Guided process to asking relevant questions and gaining
                    insight into wellbeing and self improvement
                  </span>
                </li>
                <li className="home-li02 list-item">
                  <span className="home-text46">
                    {' '}
                    Utilizes Tarot &amp; Oracle cards, energy and psychic
                    reading skills for spiritual understanding
                  </span>
                </li>
                <li className="home-li03 list-item">
                  <span className="home-text47">
                    {' '}
                    Fully customizable to focus on a specific area, situation or
                    question
                  </span>
                </li>
                <li className="home-li04 list-item">
                  <span className="home-text48">
                    {' '}
                    Not Fortune-Telling, Meant for Self-Development
                  </span>
                </li>
                <li className="home-li05 list-item">
                  <span className="home-text49">
                    {' '}
                    View sample readings on Twitch or YouTube
                  </span>
                </li>
                <li className="home-li06 list-item">
                  <span className="home-text50"> Duration: 25-45 minutes</span>
                </li>
              </ol>
            </div>
            <div id="price-discounted" className="home-container11">
              <img
                alt="image"
                src="/Images/15-500h.png"
                className="home-image4"
              />
              <span className="home-text51">15</span>
              <span className="home-text52">€</span>
            </div>
            <a
              href="https://booking.setmore.com/scheduleappointment/2687089c-bcd4-4858-add6-46fd40898130/services/846e65bf-229e-45fe-9d0f-0112f258e477?source=easyshare"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1"
            >
              Book Now
            </a>
            <Link to="/classic-tarot" className="home-navlink">
              <span className="home-text53">See Details</span>
              <br></br>
            </Link>
          </div>
          <div className="home-pricing-card2">
            <span className="home-text55">Spiritual Session</span>
            <div className="home-container12">
              <ul className="home-ul1 list">
                <li className="home-li07 list-item">
                  <span className="home-text56">
                    Conversation for self-help and healing
                  </span>
                </li>
                <li className="home-li08 list-item">
                  <span className="home-text57">
                    {' '}
                    Flexible focus ranging from general concepts to specific
                    questions and struggles
                  </span>
                </li>
                <li className="home-li09 list-item">
                  <span className="home-text58">
                    {' '}
                    Suitable for individuals new to spirituality, seekers of
                    guidance, and those looking for alternative perspectives
                  </span>
                </li>
                <li className="home-li10 list-item">
                  <span className="home-text59">
                    {' '}
                    Can serve as a therapeutic session to broaden perspectives
                  </span>
                </li>
                <li className="home-li11 list-item">
                  <span className="home-text60"> Duration: 60 minutes</span>
                </li>
              </ul>
            </div>
            <div className="home-container13">
              <img
                alt="image"
                src="/Images/20-500h.png"
                className="home-image5"
              />
              <span className="home-text61">20</span>
              <span className="home-text62">€</span>
            </div>
            <a
              href="https://booking.setmore.com/scheduleappointment/2687089c-bcd4-4858-add6-46fd40898130/services/3a46f629-71e7-4695-8991-6d656268b54e?source=easyshare"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2"
            >
              Book Now
            </a>
            <Link to="/spiritual-session" className="home-navlink1">
              <span className="home-text63">See Details</span>
              <br></br>
            </Link>
          </div>
          <div className="home-pricing-card3">
            <span className="home-text65">Taro-HEALING</span>
            <div className="home-container14">
              <ul className="home-ul2 list">
                <li className="home-li12 list-item">
                  <span className="home-text66">
                    Mix of tarot readings and spiritual coaching
                  </span>
                </li>
                <li className="home-li13 list-item">
                  <span className="home-text67">
                    {' '}
                    Holistic healing on subconscious level
                  </span>
                </li>
                <li className="home-li14 list-item">
                  <span className="home-text68">
                    {' '}
                    Welcomes conversation throughout the reading
                  </span>
                </li>
                <li className="home-li15 list-item">
                  <span className="home-text69">
                    {' '}
                    Addresses multiple areas and situations, as well as the
                    individual&apos;s entire life
                  </span>
                </li>
                <li className="home-li16 list-item">
                  <span className="home-text70">
                    {' '}
                    Not Fortune-Telling, Meant for Self-Development
                  </span>
                </li>
                <li className="home-li17 list-item">
                  <span className="home-text71">
                    {' '}
                    Recommended for self-aware, open-minded individuals open to
                    new perspectives and approaches to life and mindset.
                  </span>
                </li>
                <li className="home-li18 list-item">
                  <span className="home-text72"> Duration: 60-180 minutes</span>
                </li>
              </ul>
            </div>
            <div className="home-container15">
              <img
                alt="image"
                src="/Images/30-500h.png"
                className="home-image6"
              />
              <span className="home-text73">
                <span>30</span>
                <br></br>
              </span>
              <span className="home-text76">€</span>
            </div>
            <a
              href="https://booking.setmore.com/scheduleappointment/2687089c-bcd4-4858-add6-46fd40898130/services/08ac15cc-1e95-4bb4-9a27-7f823847e3da?source=easyshare"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link3"
            >
              Book Now
            </a>
            <Link to="/taro-healing" className="home-navlink2">
              <span className="home-text77">See Details</span>
              <br></br>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-testimonials-button-section">
        <div className="home-testimonials-button-container">
          <Link to="/testimonials" className="home-navlink3">
            <div className="home-testimonials-button get-started">
              <span className="home-text79">
                <span>Testimonials</span>
                <br></br>
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="home-image-slider">
        <div className="home-code-embed">
          <Script
            html={`<div class="container">
  <div style="overflow:hidden; border-radius: 35px;" id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
        <img src="https://i.imgur.com/x3bti6S.png" alt="?" style="width:100%;">
      </div>

      <div class="item">
        <img src="https://i.imgur.com/ijzPNKy.png" alt="?" style="width:100%;">
      </div>
    
      <div class="item">
        <img src="https://i.imgur.com/yUlE1QA.png" alt="?" style="width:100%;">
      </div>
      <div class="item">
        <img src="https://i.imgur.com/WURwBbC.png" alt="?" style="width:100%;">
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>`}
          ></Script>
        </div>
      </div>
      <Footer
        image_src1="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        rootClassName="footer-root-class-name"
      ></Footer>
    </div>
  )
}

export default Home
