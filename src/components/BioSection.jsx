import React from 'react';
import { motion } from 'framer-motion';

const BioSection = () => {
  return (
    <section className="bio-section">
      <div className="bio-container">
        <div className="bio-visual-side">
          <div className="arched-frame-wrapper">
            <motion.div
              className="arched-glass-frame"
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src="assets/section2/25_bg.png" alt="nature" className="bio-frame-bg" />
              <img src="page-sections/otherassets/profile2.png" alt="Paul" className="bio-portrait" />

              <motion.div
                className="diagonal-lime-strip"
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
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
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

          <div style={{ marginTop: '50px' }}>
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

