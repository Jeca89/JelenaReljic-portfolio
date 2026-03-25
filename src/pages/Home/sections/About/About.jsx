import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__overlay"></div>
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        
        <div className="about__content">
          
          <div className="about__left">
            <h3 className="about__subtitle">Education</h3>
            
            <div className="about__item">
              <h4 className="about__item-title">Economics Management</h4>
              <p className="about__item-school">Faculty of Economics</p>
              <p className="about__item-date">09/2007 - 10/2010</p>
            </div>

            <div className="about__item">
              <h4 className="about__item-title">Basic course of programming</h4>
              <p className="about__item-school">Vivify Academy</p>
              <p className="about__item-date">09/2021 - 11/2021</p>
              <p className="about__item-desc">Html, CSS, JS</p>
            </div>

            <div className="about__item">
              <h4 className="about__item-title">QA course</h4>
              <p className="about__item-school">Vivify Academy - Novi Sad</p>
              <p className="about__item-date">Courses</p>
              <p className="about__item-desc">Postman, Cypress, Test Cases, CSS</p>
            </div>

            <div className="about__item">
              <h4 className="about__item-title">Complete web development course</h4>
              <p className="about__item-school">Udemy</p>
              <p className="about__item-date">02/2022 - 03/2022</p>
              <p className="about__item-desc">PHP, SQl, Git, Wordpress</p>
            </div>
          </div>

          
          <div className="about__right">
            <p className="about__text">
              Where logic meets creativity – that’s where I build.

              My journey is a unique blend of analytical thinking and digital craftsmanship. With a Bachelor’s degree in Economics, I developed a mindset for structured problem-solving, which I now translate into clean and efficient code.</p>
            
            <p className="about__text">
              As a Frontend Developer with a QA background, I don’t just build web applications – I ensure they work flawlessly. I bridge the gap between aesthetic design and technical precision, using a 'QA eye' to catch what others might miss.            </p>
            
            <p className="about__text">
              I am an AI-forward developer, actively using artificial intelligence to optimize my workflow, speed up debugging, and stay ahead of modern industry standards.            </p>
            
            <p className="about__text">
             Beyond the code, I am a writer of poetry and short stories. This creative outlet isn't just a hobby; it’s my secret weapon for thinking outside the box and approaching complex technical challenges with a fresh, empathetic perspective.

            I don’t just write code. I create digital solutions with a soul.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;