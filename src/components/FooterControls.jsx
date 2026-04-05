import React from 'react';
import { motion } from 'framer-motion';

const FooterControls = () => {
  return (
    <footer className="footer-row">
      <motion.div 
        className="footer-btn-left-glass"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      <div className="footer-spacer"></div>

      <motion.div 
        className="footer-btn-right-glass"
        whileHover={{ rotate: 90, scale: 1.1 }}
      >
        <div className="plus-icon">+</div>
      </motion.div>
    </footer>
  );
};

export default FooterControls;
