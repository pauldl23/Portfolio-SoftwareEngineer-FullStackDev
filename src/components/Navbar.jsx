import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-contact-row">
        <span className="nav-icon">✧</span>
        <span className="nav-link">PAULDELEON2303@GMAIL.COM</span>
        <span className="nav-icon mobile-hide">✧</span>
        <span className="nav-link mobile-hide">+63 919 617 4615</span>
        <span className="nav-icon mobile-hide">✧</span>
        <span className="nav-link mobile-hide">AVAILABLE FOR FREELANCE</span>
      </div>
    </nav>
  );
};

export default Navbar;

