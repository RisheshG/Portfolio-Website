// src/sections/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    { title: "F1 Website", description: "A fully functional website that fetches live data from the F1 API and displays it in real-time. Built using React.", link: "https://f1-website-psi.vercel.app/" },
    { title: "DNS Checker", description: "A DNS record checker that verifies TXT, DKIM, DMARC, and other DNS records. React-based with a user-friendly interface.", link: "https://dnsrecords.netlify.app/" },
    { title: "Keeper's App", description: "A sticky notes application that helps users organize tasks and reminders, created using React.", link: "https://keeper-app-hazel.vercel.app/" },
    { title: "Ramp-Up Plan Generator", description: "Generates ramp-up plans for domains, allowing users to download in .csv format. Built using React.", link: "https://rampup-plan.vercel.app/" },
    { title: "Blacklist Checker", description: "A tool that checks the blacklisting status of IPs or domains across multiple websites, built using React.", link: "https://blacklistchecker.netlify.app/" },
    { title: "Email Tools Website", description: "A collection of essential tools for email marketers, including a secondary domain name generator and email header analyzer. Built with React.", link: "https://email-tools.vercel.app/" },
    { title: "To-Do List", description: "A simple yet effective to-do list app that helps users organize tasks. Developed using React.", link: "https://to-do-list-nine-phi-61.vercel.app/" },
    { title: "Simon Game", description: "A memory-based game that challenges players to repeat sequences of colors. Built using HTML, CSS, and JavaScript.", link: "https://risheshg.github.io/Simon-Game/" },
    { title: "E-Commerce Website", description: "A comprehensive e-commerce platform featuring user authentication, SQL database integration, and a responsive design, all built using React.", link: "https://e-commerce-five-rho-42.vercel.app/" },
    { title: "Python Automation Script", description: "A Python script designed to automate the manual warmup process for email marketing.", link: "https://github.com/RisheshG/Automation-Script" },
    { title: "Kanban Board", description: "A task management board that fetches data from APIs and allows sorting based on user needs. Created using React.", link: "https://kanbanboard-20208105.netlify.app/" },
    { title: "Spammy Words Checker", description: "A tool designed for email marketers to identify and highlight spammy words in their content, helping to improve email deliverability. Built using React.", link: "https://spam-words-checker.vercel.app/" },
    { title: "Lead List Verifier", description: "A bulk email verification tool that validates email lists, making it ideal for email marketing campaigns. Built with React.", link: "https://lead-list-verifier.vercel.app/" },
    { title: "ESP Finder", description: "A tool to find email service providers by verifying MX records. It supports both single and bulk verification. Built using React.", link: "https://github.com/RisheshG/Esp-Finder" },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <h3>{project.title}</h3>
              </div>
              <div className="project-card-back">
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
