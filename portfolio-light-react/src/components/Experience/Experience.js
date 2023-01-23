import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Experience.scss';
import minus from "../../images/minus.svg";
import right_arrow from '../../images/right-arrow.svg';
import 'react-tabs/style/react-tabs.css';
import { EXPERIENCE } from '../../constant/experience';


const Experience = () => {

 
  return (
    <section className='experience' id="Experience">
        <div className="container">
        <div className="inner-subheader">
            <img src={minus} alt=""/>
            <span className='inner-subheader-span'>CAREER PATH</span>
        </div>
        <h2 className="inner-subtitle">Work Experience</h2>
        <div className="experience-tabs">
            <Tabs>
                <TabList>
                    {EXPERIENCE.map((item, index)=>(
                        <Tab key={index}>
                            {item.company}
                            <img src={right_arrow} alt="" />
                        </Tab>
                    ))}
                    
                </TabList>
                <div className="experience-tabs__group">       
                    {EXPERIENCE.map((item, index) => (
                      
                        <TabPanel key={index} className="experience-tab-panel">
                            <div className="experience-title">Front-end Developer</div>
                            <p className="experience-duration">{item.duration}</p>
                            <ul className="experience-tools-list">
                                {item.tools.map((tool, index) => (
                                    <li key={index}>{tool}</li>
                                ))}
                            </ul>
                            <div className="experience-line"></div>
                            <div className="experience-description">
                                <p>{item.description}</p>
                                <p>Role: {item.tasks}</p>

                            </div>

                        </TabPanel>
                    ))}
                    </div>
            </Tabs>
           
        </div>
           
            {/* <div className="experience-rigth-side">
            
            <div className="inner-title">Front-end Developer  Apple .Inc</div>
            <p className="inner-text">California, United States</p>
            <p className="inner-text">Nov 2020 - Present · Full-time</p>

            </div> */}
        </div>
    </section>
  )
}

export default Experience;