// Header.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const Header = ({ setActiveSection }) => {
  return (
    <div className="header" onClick={() => setActiveSection('main')}>
      <span className="header-name">Magenta Paredes</span>
    </div>
  );
};

Header.propTypes = {
  setActiveSection: PropTypes.func.isRequired
};

export default Header;
