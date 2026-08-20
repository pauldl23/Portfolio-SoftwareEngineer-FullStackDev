import React from 'react';
import { motion } from 'framer-motion';
import { fastTransition } from '../utils/animations';

const BioSection = () => {
  return (
    <section className="bio-section">
      <div className="bio-container">
        <div className="bio-visual-side">
          <div className="arched-frame-wrapper">
            <motion.div
              className="arched-glass-frame"
              initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0, scale: 0.96, rotateX: 6 }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={fastTransition}
              style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
            >
              <img src="assets/section2/25_bg.png" alt="nature" className="bio-frame-bg" loading="lazy" decoding="async" />
              <img src="page-sections/otherassets/profile2.png" alt="Paul" className="bio-portrait" loading="lazy" decoding="async" />

              <motion.div
                className="diagonal-lime-strip mobile-edge-to-edge"
                animate={{ x: [-100, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="strip-marquee">
                  <span>CREATIVE VIDEO EDITOR • FULL STACK DEVELOPER • DIGITAL STRATEGIST • </span>
                  <span>CREATIVE VIDEO EDITOR • FULL STACK DEVELOPER • DIGITAL STRATEGIST • </span>
                </div>
              </motion.div>
            </motion.div>


            <div className="frame-focus-outline"></div>
          </div>
        </div>

        <motion.div
          className="bio-text-side"
          initial={{ opacity: 0, y: 30, scale: 0.96, rotateX: 6 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={fastTransition}
          style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
        >
          <div className="bio-pill">BIO</div>
          <h2 className="bio-headline">
            I help brands and <br />
            creators <span className="neon-text">stand out</span> <br />
            in the digital noise.
          </h2>

          <div className="bio-metrics-box">
            <div className="metric-item-large">
              <span className="metric-val">3+</span>
              <div className="metric-stack">
                <span>YEARS OF</span>
                <span>EXPERIENCE</span>
              </div>
            </div>
          </div>

          <p className="bio-body-text">
            I am a graduate of Bachelor of Science in Computer Science,
            passionate about creating high-end digital solutions and
            captivating visual stories.
          </p>

          <div className="bio-cta-wrapper">
            <a href="#contact" className="lets-work-cta">
              LET'S WORK <span className="accent-spark">✦</span>
              <div className="cta-underline"></div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BioSection;

