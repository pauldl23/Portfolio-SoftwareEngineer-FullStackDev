import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IndicatorSidebar = ({ currentSection = 1, totalSections = 4 }) => {
  const progressHeight = ((currentSection || 1) / (totalSections || 4)) * 100;

  return (
    <aside className="sidebar sidebar-right">
      <motion.div 
        key={currentSection}
        className="indicator-inner-wrap"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="section-counter">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSection}
              className="current-num"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              0{currentSection}
            </motion.div>
          </AnimatePresence>
          <div className="total-num">/ 0{totalSections}</div>
        </div>
  
        <div className="utility-rail">
          <div className="utility-line-wrap">
            <motion.div 
              className="utility-progress" 
              initial={{ height: 0 }}
              animate={{ height: `${progressHeight}%` }}
              transition={{ duration: 0.5, ease: "circOut" }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </aside>
  );
};

export default IndicatorSidebar;
