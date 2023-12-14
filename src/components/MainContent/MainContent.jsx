import React, { useState, useEffect } from 'react';
import './mainContent.css'; 

const MainContent = () => {
  const titles = ['>App developer 👩‍💻', '>UX Designer', '>Web Developer'];
  const [currentTitle, setCurrentTitle] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [deleting, setDeleting] = useState(false);
  
  useEffect(() => {
    let interval = setInterval(updateText, 200);
  
    function updateText() {
      setCurrentChar(prevCurrentChar => {
        if (deleting) {
          if (prevCurrentChar > 0) return prevCurrentChar - 1;
          setDeleting(false);
          setCurrentTitle((prevCurrentTitle) => (prevCurrentTitle + 1) % titles.length);
          return prevCurrentChar;
        } else {
          if (prevCurrentChar < titles[currentTitle].length) return prevCurrentChar + 1;
          setTimeout(() => setDeleting(true), 2000);
          return prevCurrentChar;
        }
      });
    }

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentTitle, deleting, titles]);

  return (
    <div className="main-content">
      <h1>Hello World! I am <br /><span className="nombre">Magenta</span></h1>
      <p className="subtitulo">
        <span>{titles[currentTitle].substring(0, currentChar)}</span>
      </p>
      <a href="/CV_Magenta_Paredes.pdf" download="CV_Magenta_Paredes.pdf" className="boton-cv">⬇️ CV</a>
    </div>
  );
};

export default MainContent;
