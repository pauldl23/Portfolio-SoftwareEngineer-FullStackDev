import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

/* Reveal animation variants */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  })
};

const Section9Contact = () => {
  const [state, handleSubmit] = useForm('mnjlebne');
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="contact-section">
      {/* Background Map Texture Overlay */}
      <div className="contact-map-bg"></div>

      {/* Dynamic Background Glow */}
      <div className="contact-glow-overlay"></div>

      <div className="contact-container">
        {/* LEFT COLUMN */}
        <div className="contact-left-col">
          <motion.div
            className="contact-pill"
            custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <span className="contact-star">✦</span>
            <span className="contact-pill-text">DROP ME A LINE</span>
          </motion.div>

          <motion.h2
            className="contact-headline"
            custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            Contact me today and <span className="text-lime">let's <br />explore</span> how I can bring <br />your vision to life <span className="wave-emoji" role="img" aria-label="wave">👋</span>
          </motion.h2>

          <div className="contact-details-wrap">
            <motion.div
              className="contact-detail-item"
              custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <div className="detail-label">
                <span className="detail-star">✦</span> PHONE
              </div>
              <p className="detail-value">+63 916 436 7516</p>
            </motion.div>

            <motion.div
              className="contact-detail-item"
              custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <div className="detail-label">
                <span className="detail-star">✦</span> ADDRESS
              </div>
              <p className="detail-value">Bacolod City, Negros Occidental 6100, Philippines</p>
            </motion.div>
          </div>

          {/* Button removed as part of layout refinements */}
        </div>

        {/* CENTER DECORATIVE BADGE (Rotating 'Watch My Resume') */}
        <motion.a
          href="https://drive.google.com/file/d/1O2hAYS4jZraRplw7YGogBhzqyxpnfyl7/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-resume-badge"
          initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="resume-badge-inner">
            <svg viewBox="0 0 100 100" width="120" height="120" className="resume-circular-text">
              <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text>
                <textPath href="#curve" startOffset="0%" className="resume-text">
                  WATCH MY RESUME • WATCH MY RESUME •
                </textPath>
              </text>
            </svg>
            <div className="resume-arrow-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 7L17 17M17 17V7M17 17H7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </motion.a>

        {/* RIGHT COLUMN (Form) */}
        <div className="contact-right-col">
          {state.succeeded ? (
            <motion.div
              className="form-success-screen"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="success-icon-wrap">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent-lime)" strokeWidth="2">
                  <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="success-title">Message Sent Successfully!</h3>
              <p className="success-text">Thank you for reaching out, Paul. I will get back to you shortly.</p>
              <button onClick={() => window.location.reload()} className="back-btn-premium">
                SEND ANOTHER MESSAGE
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">

              <motion.div className="form-step-group" custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div className={`step-indicator ${activeStep === 1 ? 'active' : ''}`}>01</div>
                <div className="form-input-wrap">
                  <label htmlFor="name">What's your name?</label>
                  <input 
                    id="name" 
                    type="text" 
                    name="name" 
                    placeholder="Type your full name" 
                    className="premium-input" 
                    required 
                    onFocus={() => setActiveStep(1)}
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
              </motion.div>

              <motion.div className="form-step-group" custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div className={`step-indicator ${activeStep === 2 ? 'active' : ''}`}>02</div>
                <div className="form-input-wrap">
                  <label htmlFor="email">What's your email address?</label>
                  <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    placeholder="example@gmail.com" 
                    className="premium-input" 
                    required 
                    onFocus={() => setActiveStep(2)}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </motion.div>

              <motion.div className="form-step-group" custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div className={`step-indicator ${activeStep === 3 ? 'active' : ''}`}>03</div>
                <div className="form-input-wrap">
                  <label htmlFor="service">What service are you looking for?</label>
                  <input 
                    id="service" 
                    type="text" 
                    name="service" 
                    placeholder="Web Design, Web Development ..." 
                    className="premium-input" 
                    onFocus={() => setActiveStep(3)}
                  />
                  <ValidationError prefix="Service" field="service" errors={state.errors} />
                </div>
              </motion.div>

              <motion.div className="form-step-group" custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div className={`step-indicator ${activeStep === 4 ? 'active' : ''}`}>04</div>
                <div className="form-input-wrap">
                  <label htmlFor="message">Your message</label>
                  <input 
                    id="message" 
                    type="text" 
                    name="message" 
                    placeholder="Hello Paul, can you help me with ..." 
                    className="premium-input border-last" 
                    required 
                    onFocus={() => setActiveStep(4)}
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
              </motion.div>

              <motion.div className="form-submit-wrap" custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <button type="submit" disabled={state.submitting} className="submit-message-btn">
                  {state.submitting ? 'SENDING...' : 'SEND MESSAGE'}
                  <span className="btn-dot-marker-dark"></span>
                </button>
              </motion.div>

            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section9Contact;

