import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 4,
    year: "2026",
    role: "Full Stack Developer",
    company: "FREELANCE"
  },
  {
    id: 3,
    year: "2025",
    role: "Assistant End-user Support",
    company: "UBIQUITY GLOBAL SERVICES"
  },
  {
    id: 1,
    year: "2024-PRESENT",
    role: "Video Editor",
    company: "CLEAVER CREATIVES"
  },
  {
    id: 2,
    year: "2024-PRESENT",
    role: "Video Editor",
    company: "COACHTUBE"
  }
];

const Section4Works = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <div className="exp-content-grid">
          <motion.div 
            className="exp-text-side"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="exp-badge">MY EXPERIENCE</div>
            <h2 className="exp-headline">
              My Work <br />
              Experiences 🤘
            </h2>
            <p className="exp-desc-text">
              Collaborating with global brands and remote teams to deliver 
              high-end visual stories and digital platforms.
            </p>

            <motion.a 
              href="https://drive.google.com/file/d/1O2hAYS4jZraRplw7YGogBhzqyxpnfyl7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="watch-resume-btn-new"
              whileHover={{ scale: 1.05 }}
              style={{ display: 'inline-flex', textDecoration: 'none' }}
            >
              WATCH RESUME
              <div className="btn-dot"></div>
            </motion.a>
          </motion.div>

          <div className="exp-list-side">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                className="exp-row-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="exp-year-col">
                  <div className="neon-pill">{exp.year}</div>
                </div>
                
                <div className="exp-info-col">
                  <h3 className="exp-item-title">{exp.role}</h3>
                  <span className="exp-item-company">{exp.company}</span>
                </div>

                <div className="exp-arrow-col">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="exp-row-divider"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="exp-bg-glow"></div>
    </section>
  );
};

export default Section4Works;

