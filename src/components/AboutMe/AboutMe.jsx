import React from 'react';
import './aboutMe.css'; // Asegúrate de que la ruta al archivo CSS es correcta

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-actions">
        <img src="https://avatars.githubusercontent.com/u/85425689?v=4" alt="Magenta Paredes" className="about-me-photo" />
      </div>
      <p className="about-me-description">
      Hi! I am Magenta, a passionate web developer with a love for creating 
        intuitive and dynamic user experiences. With a background in graphic 
        design and coding, I blend visual creativity with technical skills.
        <br></br>
        When I am not coding, I enjoy videogames and my pets. Check out my projects
        or download my CV to learn more about my work!
      </p>
      <div className="technical-skills">
        <h2>Aptitudes Técnicas</h2>
        <div className="skills-icons">
            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="JavaScript"/>
            <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML"/>
            <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS"/>
            <img src="https://img.icons8.com/color/48/000000/firebase.png" alt="Firebase"/>
            <img src="https://img.icons8.com/color/48/000000/sql.png" alt="SQL"/>
            <img src="https://img.icons8.com/color/48/000000/php.png" alt="PHP"/>
            <img src="https://img.icons8.com/color/48/000000/python--v1.png" alt="Python"/>
            <img src="https://img.icons8.com/color/48/000000/typescript.png" alt="TypeScript"/>
            <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js"/>
            <img src="https://img.icons8.com/color/48/000000/wordpress.png" alt="WordPress"/>      
        </div>
        <p>These are some of my featured technical skills! I feel comfortable working with these technologies and have used them in various projects.</p>
      </div>
    </div>
  );
};

export default AboutMe;
