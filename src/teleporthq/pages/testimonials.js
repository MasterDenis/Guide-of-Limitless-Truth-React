import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import TestimonialCard1 from '../components/testimonial-card1'
import TrustPilot from '../components/trust-pilot'
import Footer from '../components/footer'
import './testimonials.css'

const Testimonials = (props) => {
  return (
    <div className="testimonials-container">
      <Helmet>
        <title>Testimonials - Guide of Limitless Truth</title>
        <meta
          name="description"
          content="Spiritual Guidance and Tarot Reading Services."
        />
        <meta
          property="og:title"
          content="Testimonials - Guide of Limitless Truth"
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
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <section className="testimonials-section">
        <div className="testimonials-container01">
          <div className="testimonials-container02">
            <div className="testimonials-container03">
              <div className="testimonials-hero">
                <div className="testimonials-content">
                  <main className="testimonials-main">
                    <header className="testimonials-header">
                      <img
                        alt="image"
                        src="/hibiscus-spiritual-coaching-tarot-readings.png"
                        className="testimonials-image"
                      />
                    </header>
                  </main>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/hibiscus-spiritual-coaching-tarot-readings.png"
            className="testimonials-image1"
          />
        </div>
        <h1 className="testimonials-heading">Testimonials &amp; Feedback</h1>
      </section>
      <div className="testimonials-container04">
        <div className="testimonials-container05">
          <img
            alt="image"
            src="/golt-logo-seperatorca.png"
            className="testimonials-image2"
          />
        </div>
      </div>
      <div className="testimonials-testimonial">
        <div className="testimonials-container06">
          <div className="testimonials-container07">
            <h1 className="testimonials-text">
              <span>What they’re saying</span>
              <br></br>
            </h1>
            <span className="testimonials-text3">
              Here is what some of the Service Customers are saying about the
              service!
            </span>
          </div>
          <div className="testimonials-container08">
            <TestimonialCard1
              name="Dennis"
              role="Customer"
              Title="Ewa is a great Tarot &amp; Card Reader"
              quote="Ewa is a great Tarot &amp; Card Reader, the overall session feels like talking to a good and understanding friend who is in tune with how things are and does their best to help bring clarity and personal growth, I really Loved Working with her along my Journeys!"
              picture_src="https://user-images.trustpilot.com/6467a096e857cc0013ed1a6d/73x73.png"
              rootClassName="rootClassName1"
            ></TestimonialCard1>
            <TestimonialCard1
              name="Paulina"
              role="Customer"
              Title="Our Encounter Changed my Life"
              quote="I am thrilled to share my extraordinary experience with Guide of Limitless Truth, a talented tarot reader who has brought immense happiness into my life and helped me discover my true path. My encounter with.  For quite some time, I had been feeling lost and uncertain about my future. I yearned for answers regarding my career, relationships, and the purpose of my existence. That's when I came across her, I decided to take a chance, seeking guidance from this gifted individual who claimed to offer profound insights and illuminate the truth. From the moment I connected with Guide of Limitless Truth, I sensed a unique energy. Her compassionate and genuine nature instantly put me at ease, creating a safe and welcoming space for me to explore my innermost thoughts and desires.  Her guidance not only provided clarity but also inspired me to embrace my authentic self and follow my passions fearlessly. Guide of Limitless Truth's wisdom extended beyond their tarot reading skills. Her unwavering support and encouragement instilled in me a newfound confidence to make bold decisions and take control of my life. As I embarked on this journey of self-discovery guided by Guide of Limitless Truth, the results were truly remarkable. I experienced a profound sense of happiness and contentment that had eluded me for years. I found myself aligned with my true purpose, pursuing endeavors that brought me joy and happiness. Guide of Limitless Truth's impact on my life cannot be overstated. She  possess a rare gift for harnessing the power of tarot to awaken the dormant potential within each individual. Her innate ability to connect on a soul level and provide transformative guidance is nothing short of extraordinary. If you find yourself at a crossroads, searching for meaning or seeking direction, I wholeheartedly recommend . She have the remarkable ability to illuminate the path that lends to your authentic self, enabling you to embark on a journey of self-discovery and transformation. Open yourself to the magic of tarot and let Guide of Limitless Truth be your guiding light - it may just change your life forever"
              picture_src="https://cdn.discordapp.com/attachments/793905506409381919/1109565813318496327/IMG_4346.jpg"
              rootClassName="rootClassName"
            ></TestimonialCard1>
            <TestimonialCard1
              name="Li"
              role="Customer"
              Title="Very Accurate"
              quote="Ewa’ card readings are an incredible experience. Even months after her reading, I am still finding such strong connections with the themes of her reading. She is a great psychic, and she is very accurate."
              picture_src="https://media.discordapp.net/attachments/793905506409381919/1110671011877244968/image0.jpg"
              rootClassName="rootClassName2"
            ></TestimonialCard1>
          </div>
        </div>
      </div>
      <TrustPilot rootClassName="trust-pilot-root-class-name"></TrustPilot>
      <div className="testimonials-container09">
        <div className="testimonials-container10">
          <img
            alt="image"
            src="/golt-logo-seperatorca.png"
            className="testimonials-image3"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Testimonials
