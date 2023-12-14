import React, { useState } from 'react';
import './Projects.css'; // Asegúrate de que la ruta al archivo CSS es correcta

const Projects = () => {
  // Información de los proyectos (podrías también obtener esto de un estado o prop)
  const projectsInfo = [
    {
      title: "Data Lovers | Pokemon Web Site",
      imageUrl: "img/pokemon.png",
      projectUrl: "https://meowwuw.github.io/Datalovers-Pokedex/src/index.html",
      githubUrl: "https://github.com/Meowwuw/Datalovers-Pokedex/tree/main/src",
      description: "A website where you can search and discover information about your favorite Pokémon.",
      date: "March 2023"
    },

    {
        title: "Social Network | Patitas",
        imageUrl: "img/patitas.jpg",
        projectUrl: "https://patitas-91318.web.app/",
        githubUrl: "https://github.com/adrieli2307/DEV005-social-network/tree/main",
        description: "Social network developed in SPA format, you can register, log in, post, edit and like.",
        date: "April 2023"
      },

      {
        title: "Movie Challengue | Movies",
        imageUrl: "img/movies.png",
        projectUrl: "https://movie-challenge-magenta-6b1a.vercel.app/",
        githubUrl: "https://github.com/Meowwuw/Movie-Challenge-Magenta",
        description: "Movie application that uses the TMDB API to have the best updated movies",
        date: "June 2023"
      },

      {
        title: "Cientifica Peruana | App",
        imageUrl: "img/cientifica.png",
        projectUrl: "https://cientificaperuana.com/",
        githubUrl: "https://www.figma.com/file/sIHQQZ5AC7Wp1igOMRYgyl/Cient%C3%ADfica-Mockup?type=design&node-id=0%3A1&mode=design&t=G8jzHEUHgexUYtrq-1",
        description: "Application built for the Cientifica Peruana, for the private use of its distributors.",
        date: "Nov 2023"
      },

      {
        title: "Sanke Nomabo | Textil",
        imageUrl: "img/Sanke.jpg",
        projectUrl: "https://www.figma.com/file/GzS6RljD0dIoXNe79dwUTQ/Saken-Nomabo?type=design&node-id=0%3A1&mode=design&t=BMyMUuhJkfCanj1s-1",
        description: "Sanke nomabo is a project created for the Shipiba community in Caimito",
        date: "August 2022",
        isFigma: true
      },

      {
        title: "MDP | Ticketing Prototype",
        imageUrl: "img/MDP.jpg",
        projectUrl: "https://www.figma.com/file/iWi6LocuGMq7Vy7RCl2gvo/MDP?type=design&node-id=0-1&mode=design&t=HLQdzt2J4nnOcnWD-0",
        description: "Prototyping in figma for ticketing incident attention",
        date: "October 2022",
        isFigma: true
      }
    
  ];

  const [flipped, setFlipped] = useState({});

  const handleFlip = (title) => {
    setFlipped({
      ...flipped,
      [title]: !flipped[title]
    });
  };


  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projectsInfo.map(project => (
          <div className="card-container" key={project.title}>
            <div
              className={`card-flip ${flipped[project.title] ? 'is-flipped' : ''}`}
              onClick={() => handleFlip(project.title)} 
            >
              <div className="card-front">
                <img className="card-img-top" src={project.imageUrl} alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <div className="card-actions">
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="view-project-btn">View Project</a>
                    {project.isFigma ? (<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="figma-icon">
                    <img src="img/figma.png" alt="Figma" /></a>) : (<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-icon">
                    <img src="img/github.png" alt="GitHub" />
                    </a>)}
                  </div>
                </div>
              </div>
              <div className="card-back">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="card-date">{project.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
