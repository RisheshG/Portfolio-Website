// src/sections/Skills.js
import React, { useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  useEffect(() => {
    const bars = document.querySelectorAll('.skill-bar-inner');
    bars.forEach((bar) => {
      bar.style.width = bar.dataset.skillLevel;
    });
  }, []);

  const skills = [
    { name: "React.js", level: "90%", proficiency: "Proficient" },
    { name: "Node.js", level: "90%", proficiency: "Proficient" },
    { name: "MongoDB", level: "60%", proficiency: "Intermediate" },
    { name: "SQL", level: "70%", proficiency: "Intermediate" },
    { name: "C", level: "90%", proficiency: "Proficient" },
    { name: "Python", level: "60%", proficiency: "Intermediate" },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skill-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-header">
              <p>{skill.name}</p>
              <span>{skill.level}</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-bar-inner" 
                data-skill-level={skill.level}
                title={`Proficiency: ${skill.proficiency}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
