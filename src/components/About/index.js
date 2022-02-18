import React from 'react';
import myselfImage from '../../assets/about/me.jpg';



function About() {
  return (
    <section>
      <div className="flex">
        <div>
          <img class="about" src={myselfImage} alt="selfie of Marisa" />
        </div>
        <p className="about-text">
          I spent the last 5 years working in animal welfare. While I loved working with the animals, I knew it was time for a change. That's when I enrolled in a 6 month intensive coding bootcamp through UW-Extended Campus.
          In the bootcamp I learned full stack web development. We covered MERN stack, PWA's, Object-Oriented Programming, MVC's, and a variety of languages. Throughout the bootcamp we built over 30 projects, 3 of which were colaboritave group projects. 
        </p>
      </div>
    </section>
  );
}

export default About;
