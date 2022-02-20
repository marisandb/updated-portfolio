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
      concept: "Feeling sad because you have too many things to do? Keep track of your moods and activities in this journal. A personalized gif will appear along with an inspirational quote when you submit an entry.",
      technologies: `API's, JavaScript, Materialize`,
      link: "https://zimmermanc6588.github.io/mood-tracker/",
      repo: "https://github.com/zimmermanc6588/mood-tracker"
    },
    {
      name: 'Coding Quiz',
      concept: "Test your knowledge in this timed coding quiz. Play multiple times to see if you can beat your own highscore!",
      technologies: 'JavaScript, HTML, CSS',
      link: "https://marisandb.github.io/coding-quiz/",
      repo: "https://github.com/marisandb/coding-quiz"
    },
    {
      name: 'Zookeepr',
      concept: "This app allows an admin to search for, add, and remove both zoopkeepers and animals in their zoo",
      technologies: `API's, Express, Jest`,
      link: "https://infinite-falls-48381.herokuapp.com/",
      repo: "https://github.com/marisandb/zookeepr"
    },
    {
      name: 'Book Search Engine',
      concept: "Users can create an account to save books to their reading list and remove them once read.",
      technologies: 'MERN Stack',
      link: "https://polar-anchorage-39217.herokuapp.com/",
      repo: "https://github.com/marisandb/book-search-engine"
    },
  ]);

  return (
    <div>
      <div>
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
