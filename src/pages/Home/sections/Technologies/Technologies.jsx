import React, { useState } from 'react';
import { 
  SiJavascript, 
  SiReact, 
  SiHtml5, 
  SiCss3, 
  SiSass, 
  SiGit, 
  SiNodedotjs, 
  SiWordpress, 
  SiCypress, 
  SiJest
} from 'react-icons/si';
import { VscDebug } from 'react-icons/vsc';
import { FiMonitor } from 'react-icons/fi';

const Technologies = () => {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (id) => {
    setActiveBox(activeBox === id ? null : id);
  };

  const technologies = [
    // Red 1
    {
  id: 1,
  icon: <SiJavascript className="si-javascript" />,
  title: 'JavaScript',
  description: 'Core language for both client and server-side development. Experienced in ES6+, async patterns, DOM manipulation, and building interactive web applications.'
},
    {
  id: 2,
  icon: <SiReact className="si-react" />,
  title: 'React',
  description: 'Building modern SPAs with functional components, hooks, and context API. State management using Redux Toolkit and React Query. UI development with Material UI and Styled Components. Strong TypeScript integration.'
},
    {
      id: 3,
      icon: <FiMonitor className="fi-monitor" />,
      title: 'Responsive Design',
      description: 'Adapting aplications for different screens using media queries, responsive images and grid. Mobile first and desktop first approach.'
    },
    {
      id: 4,
      icon: <SiHtml5 className="si-html5" />,
      title: 'HTML',
      description: 'Creating HTML structure of the web page, inserting links, videos and pictures, working with semantic elements, using BEM methodology.'
    },
    // Red 2
    {
  id: 5,
  icon: <SiCss3 className="si-css3" />,
  title: 'CSS',
  description: 'Crafting responsive layouts with Flexbox and CSS Grid. Advanced animations, transitions, and modern selectors. Cross-browser compatibility and BEM methodology for scalable code.'
},
    {
      id: 6,
      icon: <SiSass className="si-sass" />,
      title: 'Sass',
      description: 'Using variables and mixins, nesting specific elements, structuring project in separate modules. 7-1 sass architecture.'
    },
    {
      id: 7,
      icon: <SiGit className="si-git" />,
      title: 'Git',
      description: 'Used version controll system for different versions of the app. Creating branches, pushing on dev environment, rebasing, deploying on production etc.'
    },
    {
      id: 8,
      icon: <SiNodedotjs className="si-nodedotjs" />,
      title: 'Node.js',
      description: 'Working in node enviroment, using NPM(node package manager) packages and scripts, worked with node on backend.'
    },
    // Red 3
    {
      id: 9,
      icon: <SiWordpress className="si-wordpress" />,
      title: 'WordPress',
      description: 'Custom theme development, plugin customization, and building dynamic websites. Experienced with ACF, WooCommerce, and page builders like Elementor.'
    },
    {
      id: 10,
      icon: <SiCypress className="si-cypress" />,
      title: 'Cypress',
      description: 'End-to-end testing framework for web applications. Writing reliable tests, mocking API responses, and debugging with time-travel.'
    },
    {
      id: 11,
      icon: <SiJest className="si-jest" />,
      title: 'Jest',
      description: 'Unit testing made simple. Snapshot testing, mocking modules, and code coverage reports. Works great with React Testing Library.'
    },
    {
      id: 12,
      icon: <VscDebug className="vsc-debug" />,
      title: 'Playwright',
      description: 'Cross-browser automation for testing. Single API for Chromium, Firefox, and WebKit. Auto-waiting, mobile emulation, and video recording.'
    }
  ];

  return (
    <section id="technologies" className="technologies">
      <div className="technologies__overlay"></div>
      <div className="technologies__container">
        <h2 className="technologies__title">Technologies and Tools</h2>
        
        <div className="technologies__grid">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className={`technologies__box ${activeBox === tech.id ? 'technologies__box--active' : ''}`}
              onClick={() => handleBoxClick(tech.id)}
            >
              <div className="technologies__header">
                <div className="technologies__icon">{tech.icon}</div>
                <h3 className="technologies__box-title">{tech.title}</h3>
              </div>
              <p className="technologies__description">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;