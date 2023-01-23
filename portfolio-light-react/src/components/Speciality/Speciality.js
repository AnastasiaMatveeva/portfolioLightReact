import React from 'react';
import './Speciality.scss';
import circle from '../../images/circle.png';
import crown from '../../images/crown.png';
import layers from '../../images/layers.png';
import minus from "../../images/minus.svg";


const speciality = [
  {img: crown, 
   title: "UI/UX Design",
   text: "Turn what you have in mind of a digital product into reality.For any platform you consider."
  },

  {img: circle, 
    title: "Application Development",
    text: "Standard designing, building,and implementing your applications with documentation."
   },

   {img: layers, 
    title: "Web Development",
    text: "Create and maintain your websites and also take care of its performance and traffic capacity."
   },
]

const Speciality = () => {
  return (
    <section className="speciality" id="Speciality">
        <div className="container">
        <div className="speciality-subheader inner-subheader">
        <img src={minus} alt=""/>
        <span className='inner-subheader-span'>SERVICES</span>
      </div>
      <h2 className="inner-subtitle speciality-subtitle">Specialized in</h2>
      <div className="speciality-blocks">

      {
        speciality.map((item, index) => (
          <div className="speciality-blocks-item" key={index}>
            <figure>
              <img src={item.img} alt="" />
            </figure>
          <div className="speciality-title">{item.title}</div>
          <p className="speciality-text">{item.text}</p>
      </div>
        ))
      }
      
      </div>
        </div>
    </section>
  )
}

export default Speciality;