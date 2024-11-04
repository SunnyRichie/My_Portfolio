import React from 'react';
import './Hero.css';
import profile_img from '../../assets/richie8.jpg';
import resume from '../../assets/resume.pdf'; // Make sure to replace with your actual resume file path
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='profile-img' src={profile_img} alt="Sunkanmi Richard" />
      <h1><span>I'm Sunkanmi Richard,</span> frontend developer based in Nigeria.</h1>
      <p>
        I am a passionate frontend developer based in Lagos, Nigeria, dedicated to crafting intuitive and engaging web experiences. I am passionate about developing dynamic applications, having a keen eye for design and a commitment to delivering high-quality solutions that meet user needs.
      </p>
      <div className="hero-action">
        <div className="hero-connect"> 
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <a href={resume} download className="hero-resume">
          My resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
