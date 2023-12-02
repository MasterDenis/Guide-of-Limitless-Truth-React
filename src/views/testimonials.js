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
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/94890b22-8f85-4b4c-a613-cb52b2e58deb/737323fa-e3a4-4171-958a-f75be52ed3e9?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <section className="testimonials-section">
        <div className="testimonials-container1">
          <div className="testimonials-container2">
            <div className="testimonials-container3">
              <div className="testimonials-hero">
                <div className="testimonials-content">
                  <main className="testimonials-main">
                    <header className="testimonials-header">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
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
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="testimonials-image1"
          />
        </div>
        <h1 className="testimonials-heading">Testimonials &amp; Feedback</h1>
      </section>
      <div className="testimonials-testimonial">
        <div className="testimonials-container4">
          <div className="testimonials-container5">
            <h1 className="testimonials-text">
              <span>What they’re saying</span>
              <br></br>
            </h1>
            <span className="testimonials-text3">
              Here is what some of the Service Customers are saying about the
              service!
            </span>
          </div>
          <div className="testimonials-container6">
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
              quote="Ewa’s card readings are an incredible experience. Even months after her reading, I am still finding such strong connections with the themes of her reading. She is a great psychic, and she is very accurate."
              picture_src="https://media.discordapp.net/attachments/793905506409381919/1110671011877244968/image0.jpg"
              rootClassName="rootClassName2"
            ></TestimonialCard1>
            <TestimonialCard1
              name="Rishabh"
              role="Customer"
              Title="Great Session"
              quote="A great session with supreme leader of tarot club !! The cards , energy and aura that had in the session, was super great and can't be expressed in words."
              picture_src="/Testimonials/img_4144_edited%20-%20rishabh%20gulati-200w.jpeg"
              rootClassName="rootClassName3"
            ></TestimonialCard1>
            <TestimonialCard1
              name="Devin"
              role="Customer"
              Title="Highly Recommended!"
              quote="Ewa has an incredible gift. I was blown away by both her sensitivity and awareness, and the sheer depth of information she was able to communicate in just a short session. Ewa is so passionate about what she does as well, it is a joy to experience. Highly recommend!"
              picture_src="/Testimonials/20230904_181359%20-%20devin%20anderson-200w.jpg"
              rootClassName="rootClassName4"
            ></TestimonialCard1>
            <TestimonialCard1
              name="Brady"
              role="Customer"
              Title="Very Emotional Ride!"
              quote="I received a tarot reading from guide of limitless truth last night and I honestly can say that she gave me the most thorough and accurate reading I’ve ever received. I know each reading is different for each person, but sincerely, if you’re looking for someone who can give you an extremely genuine reading, she is definitely the first person I’d recommend. It was a very emotional ride for me and I can’t wait until the next reading!"
              picture_src="/Testimonials/signal-2023-09-07-213837_002-200h.jpeg"
              rootClassName="rootClassName5"
            ></TestimonialCard1>
          </div>
        </div>
      </div>
      <TrustPilot rootClassName="trust-pilot-root-class-name"></TrustPilot>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Testimonials
