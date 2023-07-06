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
        <div className="home-btn-group">
          <a href="#services-info" className="home-button">
            Learn More
          </a>
        </div>
      </div>
      <section className="home-about-me">
        <div id="about-me" className="home-container1">
          <img
            alt="image"
            src="/Images/ewa1111-500w.png"
            className="home-image"
          />
          <div className="home-hero">
            <div className="home-content">
              <main className="home-main">
                <header className="home-header">
                  <img
                    alt="image"
                    src="/Images/ewa1111-500w.png"
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
      <div className="home-seperator">
        <div className="home-container2">
          <img
            alt="image"
            src="/SectionImages/golt-logo-seperatorca-200h.png"
            className="home-image2"
          />
        </div>
      </div>
      <IntroVideo rootClassName="intro-video-root-class-name"></IntroVideo>
      <div className="home-seperator1">
        <div className="home-container3">
          <img
            alt="image"
            src="/SectionImages/golt-logo-seperatorca-200h.png"
            className="home-image3"
          />
        </div>
      </div>
      <section id="services-info" className="home-services">
        <div className="home-container4">
          <div className="home-hero1">
            <div className="home-content1">
              <main className="home-main1">
                <header className="home-header1">
                  <img
                    alt="image"
                    src="/Images/1684159515569-600w.jpg"
                    className="home-image4"
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
            className="home-image5"
          />
        </div>
      </section>
      <div className="home-testimonials-button-section">
        <div className="home-testimonials-button-container">
          <Link to="/testimonials" className="home-navlink">
            <div className="home-testimonials-button get-started">
              <span className="home-text42">
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
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
