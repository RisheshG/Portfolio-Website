// src/sections/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          Hi there! I’m Rishesh Gangwar, a passionate Full-Stack Developer with a strong foundation in <span className="highlight">React</span>, <span className="highlight">Node.js</span>, and other cutting-edge technologies. I am currently pursuing a <span className="highlight">Bachelor’s degree in Information Technology</span> from <span className="highlight">Motilal Nehru National Institute of Technology (MNNIT) Allahabad</span>, where I maintained a CGPA of 7.
        </p>
        <p>
          I am actively <span className="highlight">interning at XGrowth</span> since June 2024, where I’m gaining practical experience and working on real-world projects. This opportunity has allowed me to apply my skills in a professional setting and contribute to impactful solutions.
        </p>
        <p>
          My technical journey includes <span className="highlight">over 20 major and minor projects</span> in both web and app development. In addition to my technical skills, I hold certifications in Web Development, Data Analytics, and Cybersecurity, further enhancing my capabilities.
        </p>
        <p>
          Outside of academics and work, I am involved in various extracurricular activities, including participating in literary events, contributing to our football team, and enjoying sports and traveling. These activities keep me motivated and help me maintain a balanced lifestyle.
        </p>
        <p>
          I am always eager to learn new technologies and take on challenges. My goal is to leverage my skills and enthusiasm to create innovative solutions and make a meaningful impact in the tech industry.
        </p>
      </div>
    </section>
  );
};

export default About;
