import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'retro-gaming',
      description: 'MERN Stack Project',
      link: "https://retro-gaming-store-abm.herokuapp.com/",
      repo: "https://github.com/bryance97/Retro-Gaming-Store"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://bryance97.github.io/run-buddy/",
      repo: "https://github.com/bryance97/run-buddy"
    },
    {
      name: 'Recipe-Generator',
    description: 'HTML, CSS, Bootstrap, Javascript, Jest, Inquirer, node.js, OOP',
      link: "https://mital2021.github.io/Recipe-Generator/",
      repo: "https://github.com/mital2021/Recipe-Generator"
    },
    {
      name: 'pwa-budget',
      description: 'Express,MongoDB,Heroku, Service-worker',
      link: "https://pwa-budget-tracker-bc.herokuapp.com/",
      repo: "https://github.com/bryance97/PWA-Budget-Tracker"
    },
    {
      name: 'noSQL-api',
      description: 'Express.js,MongoDB,IndexDB,node.js,noSQL',
      link: "https://pwa-budget-tracker-bc.herokuapp.com/",
      repo: "https://github.com/bryance97/PWA-Budget-Tracker"
    },
    {
      name: 'techblog',
    description: 'HTML,CSS,Sequilize,Handlebars.js,mySQL',
      link: "https://morning-beach-10022.herokuapp.com/",
      repo: "https://github.com/bryance97/tech-blog"
    },
    {
      name: 'E-Commerce',
    description: 'Sequilize,Express.js, mySQL, node.js, javascript E6',
      link: "https://watch.screencastify.com/v/yqGlrxdYB3T8HzZ8YvxM",
      repo: "https://github.com/bryance97/E-Commerce"
    },
    {
      name: 'Employee-Tracker',
    description: 'SQL, mySQL, node,js, npm inquirer, npm console.table,javascript ES6',
      link: "https://watch.screencastify.com/v/1EvY6KrqFqh4LmE8FpnQ",
      repo: "https://github.com/bryance97/Employee-Tracker"
    },
   {
      name: 'Note-Taker',
    description: 'HTML, CSS, Bootstrap, Javascript, node.js, express.js, APIs',
      link: "https://watch.screencastify.com/v/1EvY6KrqFqh4LmE8FpnQ",
      repo: "https://github.com/bryance97/Note-Taker"
    },
    {
      name: 'Team-Profile-Generator',
    description: 'HTML, CSS, Bootstrap, Javascript, Jest, Inquirer, node.js, OOP',
      link: "https://bryance97.github.io/Team-Profile-Generator/",
      repo: "https://github.com/bryance97/Team-Profile-Generator"
    },
    {
      name: 'README-Generator',
    description: 'node.js',
      link: "https://watch.screencastify.com/v/5fZG53dvMPx9gv13QxdT",
      repo: "https://github.com/bryance97/README-Generator"
    },
    {
      name: 'weather-dashboard',
    description: 'HTML, CSS, Bootstrap, Javascript',
      link: "https://bryance97.github.io/Weather-Dashboard/",
      repo: "https://github.com/mital2021/Weather-Dashboard/"
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
