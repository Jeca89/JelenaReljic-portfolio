import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = {
    email1: 'jelena.marko2013@gmail.com',
    email2: 'jeca_ceca89@hotmail.com',
    github: 'https://github.com/Jeca89',
    facebook: 'https://www.facebook.com/jelena.kotarlic/',
    linkedin: 'https://www.linkedin.com/in/jelena-reljic-547096228/',
    phone: '+381603726722'
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__circles-bg">
        <div className="contact__circle contact__circle--1"></div>
        <div className="contact__circle contact__circle--2"></div>
        <div className="contact__circle contact__circle--3"></div>
        <div className="contact__circle contact__circle--4"></div>
        <div className="contact__circle contact__circle--5"></div>
        <div className="contact__circle contact__circle--6"></div>
      </div>
      
      <div className="contact__container">
        
        <div className="contact__profile">
          <img 
            src="/images/cvimg.jpg" 
            alt="profile" 
            className="contact__profile-img"
            onClick={() => window.open('/cv.pdf', '_blank')}
          />
        </div>

        
        <div className="contact__divider">
          <span className="contact__line"></span>
          <span className="contact__dot"></span>
          <span className="contact__line"></span>
        </div>

        <div className="contact__left">
          <div className="contact__item">
            <FaEnvelope className="contact__icon contact__icon--email" />
            <div className="contact__info">
              <span className="contact__label">Email:</span>
              <a href="mailto:jelena.marko2013@gmail.com" className="contact__link">
                jelena.marko2013@gmail.com
              </a>
              <a href="mailto:jeca_ceca89@hotmail.com" className="contact__link">
                jeca_ceca89@hotmail.com
              </a>
            </div>
          </div>

          <div className="contact__item">
            <FaGithub className="contact__icon contact__icon--github" />
            <div className="contact__info">
              <span className="contact__label">GitHub:</span>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="contact__link">
                /Jeca89
              </a>
            </div>
          </div>

          <div className="contact__item">
            <FaFacebook className="contact__icon contact__icon--facebook" />
            <div className="contact__info">
              <span className="contact__label">Facebook:</span>
              <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="contact__link">
                jelena.kotarlic
              </a>
            </div>
          </div>

          <div className="contact__item">
            <FaLinkedin className="contact__icon contact__icon--linkedin" />
            <div className="contact__info">
              <span className="contact__label">LinkedIn:</span>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link">
                jelena-reljic
              </a>
            </div>
          </div>

          <div className="contact__item">
            <FaInstagram className="contact__icon contact__icon--instagram" />
            <div className="contact__info">
              <span className="contact__label">Instagram:</span>
              <a href="#" className="contact__link">
                @jelena_reljic
              </a>
            </div>
          </div>

          <div className="contact__item">
            <FaPhone className="contact__icon contact__icon--phone" />
            <div className="contact__info">
              <span className="contact__label">Phone:</span>
              <a href={`tel:${contactInfo.phone}`} className="contact__link">
                +381 60 3726722
              </a>
            </div>
          </div>
        </div>

        
        <div className="contact__right">
          <div className="contact__built">
            <p className="contact__built-text">Built by</p>
            <div className="contact__built-logo">
              <img 
                src="/images/logo.png" 
                alt="Jelena Reljic logo" 
                className="contact__built-img"
              />
            </div>
            <p className="contact__built-name">Jelena Reljic</p>
            <p className="contact__built-year">© 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;