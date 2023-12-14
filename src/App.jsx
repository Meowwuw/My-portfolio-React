
import React, { useState } from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('main');

  return (
    <>
      <Header setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'main' && <MainContent />}
        {activeSection === 'about-me' && <AboutMe />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
    </>
  );
}

export default App;
