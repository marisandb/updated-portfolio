import React from 'react';
import "./style.css"

function Resume() {
  return (
    <section>
      <div>
      <p className='resume-link'>
       <a href="https://docs.google.com/document/d/1ll7l9QNPNN-B6B7QjztGFvHVe8LUcibsvgvXOGY-IrY/edit?usp=sharing">View My Resume Here</a>
      </p>
        <div className='flex-row'>
          <div className='list'>
          <h3>Front-end Proficiencies</h3>
            <ul className="skills">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>responsive design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        
        <div className='list'>
        <h3>Back-end Proficiencies</h3>
          <ul className="skills">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
