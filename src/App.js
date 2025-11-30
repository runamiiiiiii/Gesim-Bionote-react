import React from 'react';
import './components/Bionote.css';
import Name from './components/Name';
import About from './components/About';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div className="bionote-label">BioNote</div>

      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#interests">Interests</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      {/* HERO SECTION (NAME LEFT + PIC RIGHT) */}
      <div className="hero-section">
        <Name />

        <div className="hero-image">
          <img
            src={require('./assets/profile.jpg')}
            alt="Profile"
            className="profile-pic"
          />
        </div>
      </div>

      <div className="bottom-section">
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="interests"><Interests /></div>
        <div id="experience"><Experience /></div>
        <div id="education"><Education /></div>
        <div id="projects"><Projects /></div>
      </div>
    </>
  );
}

export default App;
