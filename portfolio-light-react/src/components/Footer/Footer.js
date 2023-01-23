
import React from 'react';
import {ICONS_SOCIAL} from '../../constant/icons';
import './Footer.scss';


const Footer = () => {

  const year = new Date();

  return (
    <footer className='footer' id="Footer">
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
      <p className="footer-copyright">© {year.getFullYear()}  -  DevChapter</p>
    </footer>
  )
}

export default Footer;