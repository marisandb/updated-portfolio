import React from 'react';
import "./style.css"
import { HiOutlineMail } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { IconContext } from "react-icons";


function Contact() {

  return (
    <section>
      <h1 className='contact-header'>If you have questions, or would just like to get to know me better, please reach out through your preffered method listed below. <br /> I look forward to hearing from you!</h1>
      <div className='contact-info'>
        <div>
        <p><FaPhoneAlt /> Phone: 608-323-0979</p> 
        </div>
        <div>
        <p>
        <HiOutlineMail /> Email: 
        <a href="mailto:marisandb@yahoo.com">marisandb@yahoo.com</a>
        </p>
        </div>
      </div>

    <div className='icons'>
    <IconContext.Provider value={{ className: 'react-icons', color: "black", size: "45px"}}>
      <div>
    <a href="https://www.linkedin.com/in/marisa-bartelt-28119b20a/">
        <AiFillLinkedin/>
    </a>
    <a href="https://github.com/marisandb">
        <AiFillGithub/>
    </a>
      </div>
    </IconContext.Provider>
    </div>
    </section>
  );
}

export default Contact;
