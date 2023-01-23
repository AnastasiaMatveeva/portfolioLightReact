import React from 'react';
import './About.scss';
import picture_purple from '../../images/bg-purple-light.jpg';
import minus from "../../images/minus.svg";
import {ICONS_SOCIAL} from '../../constant/icons';



const About = () => {
  return (
    <section className="about" id="About">
      <div className="container about-wrapper">
      <div className="about-left">
      <div className="about-subheader inner-subheader">
        <img src={minus} alt=""/>
        <span className='inner-subheader-span'>MY NAME IS</span>
      </div>
        <h1 className='about-header'>
          <span className="about-header-black">Anastasiia </span>
          <span className="about-header-purple">Matviiva</span>
        </h1>
        <p className="about-text">
        Creative front-end developer with more than +5 years of experience in enterprise companies and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX
        </p>
        <div className="about-social">
        <ul className="social-list">

          {
            ICONS_SOCIAL.map((icon, index) => (
              <li key={index}><a href={`https://${icon.id}.com`} target="_blank">
                  <icon.icon />
                </a> 
              </li>
            ))
          }        
    </ul>
        </div>
      </div>
     <div className="about-right">
     <figure className="about-background">
      <img src={picture_purple} alt="" />
        </figure>
     </div>
     </div>
    </section>
  )
}

export default About