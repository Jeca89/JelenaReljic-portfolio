import React, { useState } from 'react';
import { FaWordpress, FaHtml5, FaReact, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';
import { SiJest } from 'react-icons/si';
import { VscDebug } from 'react-icons/vsc';

const MyWork = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  const projects = [
    {
      id: 1,
      icon: <FaWordpress className="fa-wordpress" />,
      title: 'WordPress Development',
      company: 'ZCorp Development',
      period: '6 months internship',
      description: [
        'Developed and maintained websites using Divi Builder and custom WordPress themes',
        'Created custom post types, taxonomies, and advanced custom fields (ACF)',
        'Implemented responsive designs and optimized website performance',
        'Managed WordPress installations, updates, and security configurations',
        'Collaborated with design team to convert Figma mockups to WordPress sites'
      ],
      buttonIcon: <FaFilePdf />,
      buttonText: 'Recommendation Letter',
      buttonAction: 'pdf',
      pdfUrl: '/recommendation-zcorp.pdf'
    },
    {
      id: 2,
      icon: <FaHtml5 className="fa-html5" />,
      title: 'HTML/CSS Site for Karate Club',
      description: [
        'Built a modern one-page website for a local karate club',
        'Implemented smooth scrolling navigation and animated section transitions',
        'Created animated title with CSS keyframes and hover effects',
        'Fully responsive design using Flexbox and CSS Grid',
        'Optimized for performance and accessibility (semantic HTML)',
        'Custom color scheme matching club\'s identity'
      ],
      buttonIcon: <FaExternalLinkAlt />,
      buttonText: 'Visit Website',
      buttonAction: 'link',
      projectUrl: 'https://jeca89.github.io/karate-kizami/'
    },
    {
      id: 3,
      icon: <FaReact className="fa-react" />,
      title: 'Portfolio for Milan Kotarlić',
      description: [
        'Built a modern portfolio website using React and Vite',
        'Implemented React Router for multi-page navigation',
        'Created custom store using Context API for state management',
        'Integrated JSON files for multi-language support (SRB/EN)',
        'Used SASS with 7-1 architecture and BEM methodology',
        'Comprehensive testing: Unit tests with Jest, E2E tests with Playwright',
        'Dynamic YouTube playlist integration for gallery page',
        'Mobile-first responsive design with dark theme'
      ],
      techIcons: [
        <SiJest key="jest" className="si-jest" />,
        <VscDebug key="debug" className="vsc-debug" />
      ],
      buttonIcon: <FaExternalLinkAlt />,
      buttonText: 'View Project',
      buttonAction: 'link',
      projectUrl: 'https://milan-kotarlic-website.vercel.app/'
    }
  ];

  return (
    <section id="work" className="work">
      <div className="work__overlay"></div>
      <div className="work__container">
        <h2 className="work__title">My Work</h2>
        
        <div className="work__cards">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`work__card work__card--${index === 0 ? 'left' : index === 1 ? 'center' : 'right'} ${activeCard === project.id ? 'work__card--active' : ''}`}
              onClick={() => handleCardClick(project.id)}
            >
              <div className="work__card-inner">
                <div className="work__icon">{project.icon}</div>
                <h3 className="work__card-title">{project.title}</h3>
                
                {project.company && (
                  <p className="work__company">{project.company}</p>
                )}
                
                {project.period && (
                  <p className="work__period">{project.period}</p>
                )}
                
                <div className="work__description">
                  {project.description.map((item, i) => (
                    <p key={i} className="work__description-item">
                      {item}
                    </p>
                  ))}
                </div>
                
                {project.techIcons && (
                  <div className="work__tech-icons">
                    {project.techIcons.map((icon, i) => (
                      <span key={i} className="work__tech-icon">{icon}</span>
                    ))}
                  </div>
                )}
                
                <button 
                  className="work__button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (project.buttonAction === 'pdf') {
                      window.open(project.pdfUrl, '_blank');
                    } else {
                      window.open(project.projectUrl, '_blank');
                    }
                  }}
                >
                  <span className="work__button-icon">{project.buttonIcon}</span>
                  {project.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;