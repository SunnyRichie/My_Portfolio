import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.PNG'
import profile_img from '../../assets/richie1.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
<div className="about-title">
  <h1>About me</h1>
  <img src={theme_pattern} alt="" />
</div>
<div className="about-section">
  <div className="about-left">
    <img className='about-img' src={profile_img} alt="" />
  </div>
  <div className="about-right">
  <div className="about-para">
    <p>I am experienced Frontend Developer with a year of professional expertise in the field. Since I started my career, I have had the priviledge of collaborating with prestigious organizations, contributing to their success and growth.</p>
    <p>My passion for frontend developement is not only reflected in my extensive experiences but also in the enthusiasm and dedication I bring to each project</p>
  </div>
  <div className="about-skills">
    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: '42%'}}/></div>
    <div className="about-skill"><p>React Js</p><hr style={{width: '30%'}}/></div>
    <div className="about-skill"><p>Javascript</p><hr style={{width: '35%'}}/></div>
    <div className="about-skill"><p>Angular Js</p><hr style={{width: '20%'}}/></div>
  </div>
  </div>
</div>
<div className="about-achievements">
  <div className="about-achievement">
    <h1>1+</h1>
    <p>YEAR OF EXPERIENCE</p>
  </div>
  <hr />
  <div className="about-achievement">
    <h1>10+</h1>
    <p>PROJECTS COMPLETED</p>
  </div>
  <hr />
  <div className="about-achievement">
    <h1>6+</h1>
    <p>HAPPY CLIENTS</p>
  </div>
</div>
    </div>
  )
}

export default About