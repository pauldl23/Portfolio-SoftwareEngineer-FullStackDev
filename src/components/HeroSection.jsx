import React from 'react';
import { motion } from 'framer-motion';
import { fastTransition } from '../utils/animations';

const HeroSection = () => {
  return (
    <section className="hero-section mobile-ambient-glow">
      <div className="hero-content">
        <motion.div 
          className="hero-text-block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={fastTransition}
        >
          <div className="hero-greeting">HI I'M PAUL —</div>
          <h1 className="hero-title">
            A Digital <br className="mobile-hide" />
            Solutions Specialist, <br className="mobile-hide" />
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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={fastTransition}
          >
            <img 
              src="assets/13_profilephoto.png" 
              alt="Paul" 
              className="main-portrait"
              loading="eager"
              fetchpriority="high"
            />
            
            <motion.a 
              href="https://drive.google.com/file/d/1O2hAYS4jZraRplw7YGogBhzqyxpnfyl7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-badge-wrap"
              whileHover={{ scale: 1.05 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              <div className="resume-badge">
                <img src="assets/8_eye.png" alt="eye" className="eye-icon" loading="lazy" decoding="async" />
                <svg viewBox="0 0 100 100" className="badge-svg">
                  <path id="circlePathHero" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text className="badge-text">
                    <textPath xlinkHref="#circlePathHero">
                      • WATCH MY RESUME • WATCH MY RESUME 
                    </textPath>
                  </text>
                </svg>
              </div>
            </motion.a>
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

