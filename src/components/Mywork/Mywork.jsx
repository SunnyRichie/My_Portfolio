import React, { useState } from 'react';
import './mywork.css';
import theme_pattern from '../../assets/theme_pattern.png';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Mywork = () => {
  const [visibleWorks, setVisibleWorks] = useState(6); // Initially show 6 works
  const [isExpanded, setIsExpanded] = useState(false); // Toggle between show more/less

  const toggleWorks = () => {
    setVisibleWorks(isExpanded ? 6 : mywork_data.length); // Toggle number of works
    setIsExpanded(!isExpanded); // Toggle expanded state
  };

  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} className="theme-img" alt="Theme pattern" />
      </div>

      <div className="mywork-container">
        {mywork_data.slice(0, visibleWorks).map((work, index) => (
          <div key={index} className="work-item">
            <img src={work.w_img} alt={`Project ${index + 1}`} loading="lazy" />
            <div className="work-overlay">
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <p className="tech-stack">Tech Stack: {work.techStack}</p>
              <div className="button-container">
    <a href={work.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-github">
      GitHub
    </a>
    <a href={work.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-live">
      Live Demo
    </a>
  </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mywork-showmore" onClick={toggleWorks} role="button" aria-label="Show more or less works">
        <p>{isExpanded ? "Show Less" : "Show More"}</p>
        <img 
          src={arrow_icon} 
          alt="Toggle show more or less" 
          className={`arrow-icon ${isExpanded ? "rotate" : ""}`}
        />
      </div>
    </div>
  );
};

export default Mywork;
