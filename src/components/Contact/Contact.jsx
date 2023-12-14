import React from 'react';
import './contact.css'; 

const Contact = () => {
  return (
    <div className="contact-icons">
      <a href="https://www.linkedin.com/in/magentaparedes/" className="social-btn flex-center" id="linkedin" target="_blank" rel="noopener noreferrer">
          <img src="img/linkedin.png" alt="LinkedIn" />
      </a>
      <a href="https://github.com/Meowwuw" className="social-btn flex-center" id="github" target="_blank" rel="noopener noreferrer">
          <img src="img/github.png" alt="GitHub" />
      </a>
      <a href="mailto:paredesponcemagenta@gmail.com" className="social-btn flex-center" id="email">
          <img src="img/email.png" alt="Email" />
      </a>
    </div>
  );
};

export default Contact;
