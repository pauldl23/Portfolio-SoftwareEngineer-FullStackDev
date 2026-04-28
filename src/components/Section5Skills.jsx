import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  // Card 2
  { id: '01', name: 'PYTHON', icon: '101_image_1.svg', category: 'Backend Development' },
  // Card 3
  { id: '02', name: 'C# / .NET', icon: '6_vector.svg', category: 'Enterprise Solutions' },
  // Card 4
  { id: '03', name: 'JAVA', icon: '107_image_2.svg', category: 'System Architecture' },
  // Card 5
  { id: '04', name: 'FLUTTER', icon: '110_image_3.svg', category: 'Mobile Framework' },
  // Card 6
  { id: '05', name: 'REACT', icon: '104_vector.svg', category: 'Frontend Specialist' },
  // Card 7
  { id: '06', name: 'NODE.JS', icon: '113_vector.svg', category: 'Runtime Environment' },
  // Card 8
  { id: '07', name: 'CSS & HTML', icon: '10_vector.svg', category: 'Layout & Design' },
  // Card 9 
  { id: '08', name: 'FIREBASE', icon: '117_vector.svg', category: 'Cloud Infrastructure' },
  // Card 10
  { id: '09', name: 'POSTGRESQL', icon: '114_vector.svg', category: 'Database Management' },
  // Card 11
  { id: '10', name: 'DOCKER', icon: '115_vector.svg', category: 'Containerization' },
  { id: '11', name: 'AFTER EFFECTS', icon: 'ae.png', category: 'Motion Graphics' },
  { id: '12', name: 'PREMIERE', icon: 'pre.png', category: 'Video Editing' },
  { id: '13', name: 'CAPCUT', icon: 'cc.png', category: 'Content Editing' }
];

const Section5Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container-premium">
        
        <div className="skills-content-grid">
          
          {/* Grid Item 1: Hero Block */}
          <motion.div 
            className="skills-header-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="skills-tag-pill">
              <span className="star-mini">★</span>
              <span className="tag-text">STARS / SKILLS</span>
            </div>
            <h2 className="skills-title-major">
              SELECTED<br />
              <span className="highlight-lime">STACK</span>
            </h2>
            <p className="skills-desc-text">
              My professional Toolkit — Experienced with various technologies to build premium digital solutions.
            </p>
          </motion.div>

          {/* Grid Items 2-11: Technology Cards */}
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.id}
              className="skill-card-premium"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ 
                y: -10, 
                backgroundColor: 'rgba(223, 243, 20, 0.03)',
                borderColor: 'rgba(223, 243, 20, 0.4)' 
              }}
            >
              <div className="skill-card-inner">
                <div className="skill-icon-box">
                  <img 
                    src={`page-sections/section5/${skill.icon}`} 
                    alt={skill.name} 
                    className="skill-svg-icon"
                  />
                </div>
                <div className="skill-meta">
                  <h3 className="skill-name-text">{skill.name}</h3>
                  <p className="skill-cat-text">{skill.category}</p>
                </div>
                <div className="skill-decor-line"></div>
                <span className="skill-id-tag">{skill.id}</span>
              </div>
              <div className="skill-card-aura"></div>
            </motion.div>
          ))}
          
        </div>
      </div>
      
      {/* Dynamic Background Elements */}
      <div className="skills-glow-orb top-orb"></div>
      <div className="skills-glow-orb bottom-orb"></div>
    </section>
  );
};

export default Section5Skills;

