import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
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
    <p>I am experienced Frontend Developer with over 2 years of professional expertise in the field. Throughout my career, I have had the priviledge of collaborating with prestigious organizations, contributing to their success and growth.</p>
    <p>My passion for frontend developement is not only reflected in my extensive experiences but also in the enthusiasm and dedication I bring to each project</p>
  </div>
  <div className="about-skills">
    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: '60%'}}/></div>
    <div className="about-skill"><p>React Js</p><hr style={{width: '40%'}}/></div>
    <div className="about-skill"><p>Javascript</p><hr style={{width: '45%'}}/></div>
    <div className="about-skill"><p>Angular Js</p><hr style={{width: '40%'}}/></div>
  </div>
  </div>
</div>
<div className="about-achievements">
  <div className="about-achievement">
    <h1>2+</h1>
    <p>YEARS OF EXPERIENCE</p>
  </div>
  <hr />
  <div className="about-achievement">
    <h1>20+</h1>
    <p>PROJECTS COMPLETED</p>
  </div>
  <hr />
  <div className="about-achievement">
    <h1>8+</h1>
    <p>HAPPY CLIENTS</p>
  </div>
</div>
    </div>
  )
}

export default About