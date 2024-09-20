import React from 'react'
import './Hero.css'
import profile_img from '../../assets/richie.jpg'
import resume from '../../assets/resume.pdf' // Make sure to replace with your actual resume file path
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='profile-img' src={profile_img} alt="" />
      <h1><span>I'm Sunkanmi Richard,</span> frontend developer based in Nigeria.</h1>
      <p>I am a frontend developer from Lagos, Nigeria with 2 years of experience in companies like Appclick and Delaware</p>
      <div className="hero-action">
        <div className="hero-connect"> 
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <a href={resume} download className="hero-resume">
          My resume
        </a>
      </div>
    </div>
  )
}

export default Hero
