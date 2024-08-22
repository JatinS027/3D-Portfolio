import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()} // Staggered animation for child elements
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }} // Triggers animation when 25% of the section is in view
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`} // Common padding and layout styles
      >
        <span className="hash-span" id={idName}>
          &nbsp; {/* Invisible space for smooth scrolling */}
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
