import React from 'react';
import { motion } from 'framer-motion';

const FooterControls = ({ onMenuOpen }) => {
  return (
    <footer className="footer-row">
      <motion.div 
        className="footer-btn-left-glass"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onMenuOpen}
        title="Open Menu"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      <div className="footer-spacer" onClick={onMenuOpen} style={{ cursor: 'pointer' }}>
        <div className="footer-dock-center">
          <span className="dock-pill-dot"></span>
          <span className="dock-title">EXPLORE & MENU</span>
        </div>
      </div>

      <motion.div 
        className="footer-btn-right-glass"
        whileHover={{ rotate: 90, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onMenuOpen}
        title="Open Menu"
      >
        <div className="plus-icon">+</div>
      </motion.div>
    </footer>
  );
};

export default FooterControls;

