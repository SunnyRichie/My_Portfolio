import React, { useState } from "react";
import "./services.css";
import theme_pattern from "../../assets/theme_pattern.png";
import Services_Data from "../../assets/services_data";
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [expanded, setExpanded] = useState(Array(Services_Data.length).fill(false));

  // Toggle the showMore state for a specific service
  const toggleReadMore = (index) => {
    setExpanded(expanded.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div id='services' className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          const isExpanded = expanded[index];
          const maxDescriptionLength = 100; // Set limit for shortened description

          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>
                {isExpanded
                  ? service.s_desc // Show full description if expanded
                  : `${service.s_desc.substring(0, maxDescriptionLength)}...`} {/* Show truncated description */}
              </p>
              <div className="services-readmore" onClick={() => toggleReadMore(index)}>
                <p>{isExpanded ? "Show Less" : "Read More"}</p>
                <img src={arrow_icon} alt="" className={isExpanded ? "rotate-arrow" : ""} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
