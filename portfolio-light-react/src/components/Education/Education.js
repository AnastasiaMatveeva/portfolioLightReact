import React from 'react';
import './Education.scss';
import ProgressBar from "@ramonak/react-progress-bar";
import minus from "../../images/minus.svg";


const EDUCATION = [
    {
        name: "ITEA School",
        speciality: "HTML+JS",
        duration: "2017, 3 months"
    },
    {
        name: "Go It School",
        speciality: "Front-End Core",
        duration: "2017, 4 months"
    },
    {
        name: "Go It School",
        speciality: "Front-End Advance",
        duration: "2018, 5 months"
    },
    {
        name: "Go It School",
        speciality: "React",
        duration: "2021, 3 months"
    }
]

const SKILLS = [
    {
        skill: "HTML/CSS",
        completed: "85%"
    },
    {
        skill: "Java Script",
        completed: "80%"
    },
    {
        skill: "React",
        completed: "60%"
    }
]
const Education = () => {
  return (
    <section className='education' id="Education">
        <div className="container">
         <div className="inner-subheader">
            <img src={minus} alt=""/>
            <span className='inner-subheader-span'>LEARNING PATH</span>
        </div>
        <h2 className="inner-subtitle">Education & Skills</h2>
        </div>
        <div className="container education-wrapper">
       

            <div className="education-path">
            <ul className="education-list">

                    {
                        EDUCATION.map((item, index) => (
                                <li className="education-list__item" key={index}>
                                <h2 className="education-list__item-name">{item.name}</h2>
                                <p className="education-list__item-speciality">{item.speciality}</p>
                                <p className="education-list__item-duration">{item.duration}</p>
                                </li>
                        ))
                    }
            </ul>

            </div>
            <div className="education-description">
                <p className='education-description__text'>For 5+ years, I have been continuously learning in the field of front-end and experimenting with new technologies and frameworks, and here you can see a
                 summary of my skills.</p>
                <div className="education-description__progress">
                    {
                        SKILLS.map((item, index) => (
                            <div className="education-description__progress-item" key={index}>
                                <p>{item.skill}</p>
                                 <ProgressBar 
                                 completed={item.completed} 
                                 bgColor = {"#7E74F1"}
                                 className="education-progress__wrapper"
                                 barContainerClassName="education-progress__container"
                                 completedClassName="education-progress__barCompleted"/>
                            </div>
                        ))
                    }
                
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education;