import React from 'react';
import './Bionote.css';
import profile from '../assets/profile.jpg'; // make sure this is correct path

function Bionote() {
  return (
    <div>
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

      {/* HERO SECTION WITH NAME LEFT + PIC RIGHT */}
      <div className="hero-section">
        <div className="hero-text">
          <h2>Rona Mae P. Gesim</h2>
          <p>BSIT 3A-PYTHON</p>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Profile" className="profile-pic" />
        </div>
      </div>

      {/* BOTTOM SCROLL SECTIONS */}
      <div className="bottom-section">
        <div id="about" className="section-content">
          <h3 className="section-title">About Me</h3>
          <p>I am a passionate developer who loves building web apps.</p>
        </div>

        <div id="skills" className="skills-vertical">
          <h3 className="skills-title">Skills</h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
        </div>

        <div id="interests" className="section-content">
          <h3 className="section-title">Interests</h3>
          <p>UI/UX Design, Web Development, Reading</p>
        </div>

        <div id="experience" className="section-content">
          <h3 className="section-title">Experience</h3>
          <p>Intern at XYZ Company (2024)</p>
        </div>

        <div id="education" className="section-content">
          <h3 className="section-title">Education</h3>
          <p>XYZ University - B.S. Computer Science</p>
        </div>

        <div id="projects" className="section-content">
          <h3 className="section-title">Feature Projects</h3>
          <ul>
            <li>Online Library System (Group)</li>
            <li>E-commerce Website (Group)</li>
            <li>Portfolio Website (Personal)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bionote;
