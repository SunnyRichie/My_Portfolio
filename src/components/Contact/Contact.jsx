import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
<div className="contact-section">
  <div className="contact-left">
    <h1>lets talk</h1>
    <p>I'm currently available to take on new projects, so feel free to send me a message about anything you want me to work on. You can contact anytime</p>
    <div className="contact-details">
      <div className="contact-detail">
      <img src={mail_icon} alt="" /><p>sunkanmiadeduwon@gmail.com</p>
      </div>
      <div className="contact-detail">
      <img src={call_icon} alt="" /><p>+234 810 529 7722 </p>

      </div>
      <div className="contact-detail">
    <img src={location_icon} alt="" /> <p>Lagos, Nigeria</p>

      </div>
    </div>
  </div>

  <form action="https://formspree.io/f/mzzppopq" method="post" className="contact-right">
<label htmlFor="Your Name">Your Name</label>
<input type="text" placeholder='Enter your name' name='name' />
<label htmlFor="Your Email">Your Email</label>
<input type="email" placeholder='Enter your email' name='email'/>
<label htmlFor="Write your message here">Write your message here</label>
<textarea name="message" rows='8' placeholder='Enter your message'></textarea>
<button type='submit' className='contact-submit'>Submit now</button>

  </form>
</div>

    </div>
  )
}

export default Contact