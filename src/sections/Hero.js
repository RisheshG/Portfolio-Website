// src/sections/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          Hi, I’m Rishesh Gangwar. I’m a driven Full-Stack Developer specializing in the MERN Stack. Explore my portfolio to see how I transform cutting-edge technologies into innovative solutions.
        </p>
        <a href="#projects" className="hero-button">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
