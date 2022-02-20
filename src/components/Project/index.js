import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';
import { AiFillGithub } from 'react-icons/ai';
import "./style.css"

function Project({ project }) {

  const { name, repo, link, technologies, concept } = project;

  return (
    <div className="project" key={name}>
      <img
        src={require(`../../assets/projects/${name}.png`)}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div>
        <h3>
          <a href={link} className="project-name">{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
            <i><AiFillGithub /></i>
          </a>
        </h3>
        <div className='project-text'>
          <p>{concept}</p>
          <h4>Technologies:</h4>
          <p>{technologies}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
