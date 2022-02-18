import React from 'react';
import "./style.css"
import { HiOutlineMail } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';

function Contact() {

  return (
    <section>
     <table>
      <tr>
        <td>
        <FaPhoneAlt />
          Phone:
        </td>
        <td>608-323-0979</td>
      </tr>
      <tr>
        <td>
        <HiOutlineMail />
          Email:</td>
        <td><a href="mailto:marisandb@yahoo.com">marisandb@yahoo.com</a></td>
      </tr>
    </table>
    </section>
  );
}

export default Contact;
