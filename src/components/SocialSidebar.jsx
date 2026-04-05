import React from 'react';
import { motion } from 'framer-motion';

const SocialSidebar = () => {
  return (
    <aside className="sidebar sidebar-left">
      <div className="sidebar-top">
        <motion.div 
          className="sidebar-logo"
          whileHover={{ rotate: 10, scale: 1.1 }}
        >
          <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="16" r="9" stroke="white" strokeWidth="1.5" />
            <circle cx="20" cy="16" r="9" stroke="white" strokeWidth="1.5" />
            <circle cx="16" cy="16" r="3" fill="white" />
          </svg>
        </motion.div>
      </div>

      <div className="vertical-text-main">
        <motion.a 
          href="#facebook" 
          className="social-link active-link"
          whileHover={{ color: 'var(--accent-lime)' }}
        >
          FACEBOOK
        </motion.a>
        <motion.a 
          href="#linkedin" 
          className="social-link"
          whileHover={{ color: 'var(--accent-lime)' }}
        >
          LINKEDIN
        </motion.a>
      </div>

      <div className="sidebar-bottom">
        <motion.div 
          className="skills-square"
          whileHover={{ scale: 1.05 }}
        >
          <svg className="arrow-icon" width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12H28M28 12L20 4M28 12L20 20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="skills-text">05_SKILLS</span>
        </motion.div>
      </div>
    </aside>
  );
};

export default SocialSidebar;
