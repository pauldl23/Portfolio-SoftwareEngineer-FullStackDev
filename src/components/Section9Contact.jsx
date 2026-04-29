import React from 'react';
import { motion } from 'framer-motion';

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
              <p className="detail-value">+7 (921) 125-14-16</p>
            </motion.div>

            <motion.div
              className="contact-detail-item"
              custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <div className="detail-label">
                <span className="detail-star">✦</span> ADDRESS
              </div>
              <p className="detail-value">875 Alderwood St.San Pedro, CA 90731</p>
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
          <form action="https://formspree.io/f/mnjlebne" method="POST" className="contact-form">

            <motion.div className="form-step-group" custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="step-indicator active">01</div>
              <div className="form-input-wrap">
                <label>What's your name?</label>
                <input type="text" name="name" placeholder="Type your full name" className="premium-input" required />
              </div>
            </motion.div>

            <motion.div className="form-step-group" custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="step-indicator">02</div>
              <div className="form-input-wrap">
                <label>What's your email address?</label>
                <input type="email" name="email" placeholder="example@gmail.com" className="premium-input" required />
              </div>
            </motion.div>

            <motion.div className="form-step-group" custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="step-indicator">03</div>
              <div className="form-input-wrap">
                <label>What service are you looking for?</label>
                <input type="text" name="service" placeholder="Web Design, Web Development ..." className="premium-input" />
              </div>
            </motion.div>

            <motion.div className="form-step-group" custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="step-indicator">04</div>
              <div className="form-input-wrap">
                <label>Your message</label>
                <input type="text" name="message" placeholder="Hello Paul, can you help me with ..." className="premium-input border-last" required />
              </div>
            </motion.div>

            <motion.div className="form-submit-wrap" custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <button type="submit" className="submit-message-btn">
                SEND MESSAGE
                <span className="btn-dot-marker-dark"></span>
              </button>
            </motion.div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Section9Contact;

