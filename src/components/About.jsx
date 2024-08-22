import React from 'react';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants'; // Assuming services contains your service data
import { fadeIn, textVariant } from '../utils/motion'; // Import motion utilities

const ServiceCard =({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      
      <div
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] 
      flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
      </ motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)}
              className="mt-4 text-secondary text-[17px] leading-[30px]">
     I am a recent graduate with a bachelor’s degree in Artificial Intelligence and Data Science, equipped with a solid foundation in AI, machine learning, and data science. 
     My academic background is complemented by hands-on experience from internships and projects in full-stack development and advanced technologies. Proficient in Python, R, JavaScript, React, Node.js, HTML, 
     CSS, SQL, and C++, I excel in building scalable web applications and robust solutions. My recent work includes projects on blockchain and AI in the pharmaceutical supply chain, focusing on optimizing solutions and 
     integrating cutting-edge technologies. I am seeking opportunities in software engineering, data engineering, and AI/ML engineering to apply my skills and contribute to innovative projects. Passionate about technology and problem-solving, 
     I stay updated with the latest trends to drive impactful solutions.
    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10">{services.map((service, index) => (
     <ServiceCard key={service.title} index={index}{...service}  />
     ))}
    </div>    
    </>
  )
}

export default SectionWrapper(About, "about")