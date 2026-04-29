import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  { name: 'Home', section: 1 },
  { name: 'Bio', section: 2 },
  { name: 'Services', section: 3 },
  { name: 'Experience', section: 4 },
  { name: 'Skills', section: 5 },
  { name: 'Developments', section: 6 },
  { name: 'Data Science', section: 7 },
  { name: 'Video Editing', section: 8 },
  { name: 'Contact', section: 9 },
];

const NavOverlay = ({ isOpen, onClose, activeSection, onNavigate }) => {
  return (
    <motion.div
      className="nav-overlay-container"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      exit={{ x: '-100%', transition: { duration: 0.3, ease: "easeIn" } }}
    >
      <div className="nav-menu-content">
        <div className="nav-links-list">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.section}
              className={`nav-menu-item ${activeSection === item.section ? 'active' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              onClick={() => {
                onNavigate(item.section);
                onClose();
              }}
            >
              {activeSection === item.section && <span className="nav-item-star">✦</span>}
              {item.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Vertical Ribbon */}
      <div className="nav-vertical-ribbon">
        <div className="ribbon-marquee">
          <span>AVAILABLE FOR COLLABORATIONS • LETS CREATE SMTH NEW TOGETHER • AVAILABLE FOR COLLABORATIONS • </span>
          <span>AVAILABLE FOR COLLABORATIONS • LETS CREATE SMTH NEW TOGETHER • AVAILABLE FOR COLLABORATIONS • </span>
        </div>
      </div>

      {/* Close Button */}
      <motion.button
        className="nav-close-pill"
        onClick={onClose}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        CLOSE
      </motion.button>
    </motion.div>
  );
};

export default NavOverlay;
