import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: `Chef's Kiss Daily Food Blog`,
      concept: `A food blog that allows users to view, comment, and upvote their favorite recipes. A user can also create a profile and upload their own favorite recipes to the website to share with their peers. Users who are indecisive are in luck as the website allows a user to generate a random recipe.`,
      technologies: 'Express.js, MySQL, Handlebars',
      link: "https://rocky-dusk-49928.herokuapp.com/",
      repo: "https://github.com/ksore85/daily-recipes",
      image: "./assets/projects/ChefsBlog.png"
    },
    {
      name: 'My Mood Tracker',
      technologies: `API's, JavaScript, Materialize`,
      link: "https://zimmermanc6588.github.io/mood-tracker/",
      repo: "https://github.com/zimmermanc6588/mood-tracker"
    },
    {
      name: 'Coding Quiz',
      technologies: 'JavaScript, HTML, CSS',
      link: "https://marisandb.github.io/coding-quiz/",
      repo: "https://github.com/marisandb/coding-quiz"
    },
    {
      name: 'Zookeepr',
      technologies: `API's, Express, Jest`,
      link: "https://infinite-falls-48381.herokuapp.com/",
      repo: "https://github.com/marisandb/zookeepr"
    },
    {
      name: 'Book Search Engine',
      technologies: 'MERN Stack',
      link: "https://polar-anchorage-39217.herokuapp.com/",
      repo: "https://github.com/marisandb/book-search-engine"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
