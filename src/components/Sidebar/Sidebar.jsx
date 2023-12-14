import React from 'react';
import PropTypes from 'prop-types'; 
import './sidebar.css'; 

const Sidebar = ({ activeSection, setActiveSection }) => {
  // Esta función determina la clase de fondo basada en la sección activa
  const getSidebarBackgroundClass = () => {
    switch (activeSection) {
      case 'about-me':
        return 'sidebar-highlight-about';
      case 'projects':
        return 'sidebar-highlight-projects';
      case 'contact':
        return 'sidebar-highlight-contact';
      default:
        return '';
    }
  };

  return (
    <div className={`sidebar ${getSidebarBackgroundClass()}`}>
      <a href="#about-me" className={`icono sidebar-item ${activeSection === 'about-me' ? 'active' : ''}`} onClick={() => setActiveSection('about-me')}>
        <img src="/img/about-me.png" alt="About me" />
        <p>About me</p>
      </a>

      <a href="#projects" className={`icono sidebar-item ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => setActiveSection('projects')}>
        <img src="/img/proyects.png" alt="Projects" />
        <p>Projects</p>
      </a>

      <a href="#contact" className={`icono sidebar-item ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => setActiveSection('contact')}>
        <img src="/img/contact.png" alt="Contact" />
        <p>Contact</p>
      </a>
    </div>
  );
};


Sidebar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
};

export default Sidebar;
