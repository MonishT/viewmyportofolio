import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#hero">Home</a></li>
        <li className="navbar-item"><a href="#skills">Skills</a></li>
        <li className="navbar-item"><a href="#projects">Projects</a></li>
        <li className="navbar-item"><a href="#about">About</a></li>
        <li className="navbar-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
