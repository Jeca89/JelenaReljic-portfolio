import React, { useState } from 'react';
import '../../styles/pages/home.scss';
import Technologies from './sections/Technologies/Technologies';
import About from './sections/About/About';
import MyWork from './sections/MyWork/Mywork';
import Contact from './sections/Contact/Contact';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home" id="home">
      
      
      <div className="home__circles-bg">
        <div className="home__circle home__circle--1a"></div>
        <div className="home__circle home__circle--1b"></div>
        <div className="home__circle home__circle--1c"></div>
        <div className="home__circle home__circle--2a"></div>
        <div className="home__circle home__circle--2b"></div>
        <div className="home__circle home__circle--3a"></div>
        <div className="home__circle home__circle--3b"></div>
        <div className="home__circle home__circle--3c"></div>
      </div>
      
      <div className="home__profile">
        <img 
          src="/images/cvimg.jpg" 
          alt="profile" 
          className="home__profile-img"
          onClick={() => window.open('/cv.pdf', '_blank')}
        />
      </div>

      <button 
        className={`home__hamburger ${menuOpen ? 'home__hamburger--open' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`home__menu-overlay ${menuOpen ? 'home__menu-overlay--open' : ''}`}>
        <div className="home__menu-container">
          <img src="/images/logo.png" alt="logo" className="home__menu-logo" />
          <nav className="home__menu-nav">
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('technologies')}>Technologies</button>
            <button onClick={() => scrollToSection('about')}>About me</button>
            <button onClick={() => scrollToSection('work')}>My work</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>
        </div>
      </div>

      <main className="home__main">
        <h1 className="home__title" data-text="Welcome">Welcome</h1>
        <p className="home__subtitle">to my portfolio page</p>
        <button 
          className="home__button"
          onClick={() => scrollToSection('about')}
        >
          Learn about me
        </button>
      </main>
      <Technologies />
      <About />
      <MyWork />
      <Contact />
    </div>
  );
};

export default Home;