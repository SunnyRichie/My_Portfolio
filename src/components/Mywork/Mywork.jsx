import React, { useState } from 'react';
import './mywork.css';
import theme_pattern from '../../assets/theme_pattern.PNG';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Mywork = () => {
  const [visibleWorks, setVisibleWorks] = useState(6); // Initially show 4 works
  const [isExpanded, setIsExpanded] = useState(false); // To toggle between show more/less

  const toggleWorks = () => {
    if (isExpanded) {
      setVisibleWorks(6); // Show less (initial count of works)
    } else {
      setVisibleWorks(mywork_data.length); // Show all works
    }
    setIsExpanded(!isExpanded); // Toggle state
  };

  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} className='theme-img' alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.slice(0, visibleWorks).map((work, index) => {
          return <img key={index} src={work.w_img} alt='' loading="lazy" />;
        })}
      </div>
      <div className="mywork-showmore" onClick={toggleWorks}>
        <p>{isExpanded ? "Show Less" : "Show More"}</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Mywork;
