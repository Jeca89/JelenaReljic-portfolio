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
              Highly motivated and dedicated Web Developer with comprehensive knowledge of both manual and automatic testing. Proficient in a wide range of technologies from HTML, CSS to programming languages like JavaScript and PHP.
            </p>
            
            <p className="about__text">
              I am a dedicated team player with strong work ethic, always ready to collaborate and contribute to project success. My approach combines technical expertise with creative problem-solving, ensuring high-quality results in every task.
            </p>
            
            <p className="about__text">
              In my free time, I enjoy reading books across various genres, which helps me maintain a fresh perspective and continuously learn. I also express my creativity through writing poetry and short stories, which enhances my ability to think outside the box and approach challenges from different angles.
            </p>
            
            <p className="about__text">
              I believe that being a well-rounded individual with diverse interests makes me not only a better developer but also a more empathetic and effective team member.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;