import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div 
          className="hero-text-block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-greeting">HI I'M PAUL —</div>
          <h1 className="hero-title">
            A Digital <br />
            Solutions Specialist, <br />
            Based in <span className="neon-text">Philippines.</span>
          </h1>

          <div className="hero-stats-new">
            <div className="stat-item">
              <span className="stat-val">1500+</span>
              <span className="stat-lab">HOURS OF WORKING</span>
            </div>
            
            <div className="stat-divider"></div>

            <div className="stat-desc">
              Helping brands and creators <br />
              scale with high-end <br />
              digital experiences.
            </div>
          </div>
        </motion.div>

        <div className="hero-visual-zone">
          <div className="hero-glow-sphere"></div>
          <motion.div 
            className="portrait-frame"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img 
              src="/assets/13_profilephoto.png" 
              alt="Paul" 
              className="main-portrait"
            />
            
            <motion.div 
              className="resume-badge-wrap"
              whileHover={{ scale: 1.05 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              <div className="resume-badge">
                <img src="/assets/8_eye.png" alt="eye" className="eye-icon" />
                <svg viewBox="0 0 100 100" className="badge-svg">
                  <path id="circlePathHero" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text className="badge-text" fill="white">
                    <textPath xlinkHref="#circlePathHero">
                      • WATCH MY RESUME • WATCH MY RESUME 
                    </textPath>
                  </text>
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="hero-corner-detail">
        <div className="neon-dot-block"></div>
        <div className="plus-symbol">+</div>
      </div>
    </section>
  );
};

export default HeroSection;
