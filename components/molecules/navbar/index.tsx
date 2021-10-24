import React from 'react';

const Navbar: React.FC = () => (
  <nav>
    <div className="nav-inner">
      <img src="/images/logo.png" width="50px" height="50px" />
      <div className="nav-links">
        <a href="/about">About</a>
        <a href="/work">Work</a>
        <a href="/resume">Resume</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  </nav>
);

export { Navbar };
