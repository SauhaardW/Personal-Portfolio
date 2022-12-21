import React, { useRef } from 'react';
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4177yx2', 'template_7zj0oub', form.current, 'xsiXpb2Nd-poNvnlf')
      .then((response) => {
        console.log(response);
      });
      alert("Your message was submitted!");
      
  };

  return (
    <section id='contact'>
        <h2 className='title-projects'>Get In Touch!</h2>
        <div className="container contact_container">
          <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className='contactIcon'/>
            <h4>Email</h4>
            <h5>sauhaard.walia@mail.utoronto.ca</h5> 
            <a href="mailto:sauhaard.walia@mail.utoronto.ca" target="_blank" className='redirect'>Send an email</a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className='contactIcon'/>
            <h4>LinkdIn</h4>
            <h5>linkedin.com/in/sauhaard/</h5> 
            <a href="https://www.linkedin.com/in/sauhaard/" target="_blank" className='redirect'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsTelephone className='contactIcon'/>
            <h4>Phone</h4>
            <h5>(+1)437-988-3065</h5> 
            <a href="tel:+14379883065" target="_blank" className='redirect'>Call me</a>
          </article>

          
          

          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="9" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn send-btn' >Send Message</button>
          </form>

        </div>


    </section>
  )
}

export default Contact