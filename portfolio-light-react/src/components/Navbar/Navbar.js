import React, {useState} from 'react';
import './Navbar.scss';
import logo from '../../images/logo.svg';
import pdf from '../../documents/resume.pdf';
import ScrollIntoView from 'react-scroll-into-view';


const Navbar = () => {

    const [isDarkTheme, setDarkTheme] = useState(false);
    const [isActiveMenu, setIsActiveMenu] = useState(true);

    const navLinks = [ "Portfolios", "Experience", "Education", "Contacts"];


    const onChangeTheme = () =>{
        document.body.classList.toggle('dark');
        setDarkTheme(!isDarkTheme);
    }
    

    const renderNavLink = (nav) => {
      const scrollToId = `${nav}`;
      return (

            <li key={nav} className='nav-list__item'>
              <ScrollIntoView selector={`#${scrollToId}`}>
                <button>{nav}</button>
              </ScrollIntoView>
            </li>
      )

    }
  return (
    <header className="header">
      <div className="header-fixed">
      <div className="header-wrapper container">
        <div className="header-logo">
          <a href="">
            <img src={logo} alt="logo" />
          </a>
            <span className="header-name">Anastasiia.</span>
        </div>
        <nav className={isActiveMenu ? "nav" : "nav active"} id="Home">
          <ul className="nav-list">
            {navLinks.map((nav) => renderNavLink(nav))}
          </ul>
        </nav>
        <div className="nav-btn">
          <button className="nav-theme-btn" onClick={()=>onChangeTheme()}>
              <svg className={isDarkTheme ? "nav-theme-svg d-none" : "nav-theme-svg"} width="25" height="49" viewBox="0 0 25 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.35449 29.5L3.504 28.7651C3.20486 28.7042 2.89868 28.8307 2.72977 29.085C2.56086 29.3393 2.56291 29.6706 2.73497 29.9227L3.35449 29.5ZM11.3545 15.5L11.3742 14.7503C11.0683 14.7422 10.7881 14.9209 10.6664 15.2017C10.5446 15.4824 10.6057 15.809 10.8207 16.0268L11.3545 15.5ZM21.1045 24.5C21.1045 19.1857 16.7618 14.8919 11.3742 14.7503L11.3348 16.2497C15.9486 16.371 19.6045 20.0373 19.6045 24.5H21.1045ZM11.3545 34.25C16.8956 34.25 21.1045 29.8776 21.1045 24.5H19.6045C19.6045 29.0653 16.0511 32.75 11.3545 32.75V34.25ZM2.73497 29.9227C4.54749 32.5791 7.90248 34.25 11.3545 34.25V32.75C8.34871 32.75 5.48025 31.2847 3.97401 29.0773L2.73497 29.9227ZM3.20499 30.2349C7.54605 31.118 11.2664 28.8566 13.1176 25.6399C14.9712 22.4189 15.0076 18.1336 11.8883 14.9732L10.8207 16.0268C13.3843 18.6242 13.3967 22.1476 11.8175 24.8917C10.236 27.6399 7.11497 29.4996 3.504 28.7651L3.20499 30.2349Z" fill="#232E35"/>
              </svg>  

              <svg className={isDarkTheme ? "nav-theme-svg" : "nav-theme-svg d-none"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 11.25C2.58579 11.25 2.25 11.5858 2.25 12C2.25 12.4142 2.58579 12.75 3 12.75V11.25ZM5 12.75C5.41421 12.75 5.75 12.4142 5.75 12C5.75 11.5858 5.41421 11.25 5 11.25V12.75ZM4.46973 18.4697C4.17684 18.7626 4.17684 19.2374 4.46973 19.5303C4.76262 19.8232 5.2375 19.8232 5.53039 19.5303L4.46973 18.4697ZM7.53039 17.5303C7.82328 17.2374 7.82328 16.7626 7.53039 16.4697C7.2375 16.1768 6.76262 16.1768 6.46973 16.4697L7.53039 17.5303ZM12.75 19C12.75 18.5858 12.4142 18.25 12 18.25C11.5858 18.25 11.25 18.5858 11.25 19H12.75ZM11.25 21C11.25 21.4142 11.5858 21.75 12 21.75C12.4142 21.75 12.75 21.4142 12.75 21H11.25ZM17.5303 16.4697C17.2374 16.1768 16.7626 16.1768 16.4697 16.4697C16.1768 16.7626 16.1768 17.2374 16.4697 17.5303L17.5303 16.4697ZM18.4697 19.5303C18.7626 19.8232 19.2374 19.8232 19.5303 19.5303C19.8232 19.2374 19.8232 18.7626 19.5303 18.4697L18.4697 19.5303ZM5.53033 4.46967C5.23744 4.17678 4.76256 4.17678 4.46967 4.46967C4.17678 4.76256 4.17678 5.23744 4.46967 5.53033L5.53033 4.46967ZM6.46967 7.53033C6.76256 7.82322 7.23744 7.82322 7.53033 7.53033C7.82322 7.23744 7.82322 6.76256 7.53033 6.46967L6.46967 7.53033ZM19 11.25C18.5858 11.25 18.25 11.5858 18.25 12C18.25 12.4142 18.5858 12.75 19 12.75V11.25ZM21 12.75C21.4142 12.75 21.75 12.4142 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25V12.75ZM16.4696 6.46967C16.1767 6.76256 16.1767 7.23744 16.4696 7.53033C16.7625 7.82322 17.2374 7.82322 17.5303 7.53033L16.4696 6.46967ZM19.5303 5.53033C19.8232 5.23744 19.8232 4.76256 19.5303 4.46967C19.2374 4.17678 18.7625 4.17678 18.4696 4.46967L19.5303 5.53033ZM12.75 3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3H12.75ZM11.25 5C11.25 5.41421 11.5858 5.75 12 5.75C12.4142 5.75 12.75 5.41421 12.75 5H11.25ZM14.25 12C14.25 13.2426 13.2426 14.25 12 14.25V15.75C14.0711 15.75 15.75 14.0711 15.75 12H14.25ZM12 14.25C10.7574 14.25 9.75 13.2426 9.75 12H8.25C8.25 14.0711 9.92893 15.75 12 15.75V14.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75V8.25C9.92893 8.25 8.25 9.92893 8.25 12H9.75ZM12 9.75C13.2426 9.75 14.25 10.7574 14.25 12H15.75C15.75 9.92893 14.0711 8.25 12 8.25V9.75ZM3 12.75H5V11.25H3V12.75ZM5.53039 19.5303L7.53039 17.5303L6.46973 16.4697L4.46973 18.4697L5.53039 19.5303ZM11.25 19V21H12.75V19H11.25ZM16.4697 17.5303L18.4697 19.5303L19.5303 18.4697L17.5303 16.4697L16.4697 17.5303ZM4.46967 5.53033L6.46967 7.53033L7.53033 6.46967L5.53033 4.46967L4.46967 5.53033ZM19 12.75H21V11.25H19V12.75ZM17.5303 7.53033L19.5303 5.53033L18.4696 4.46967L16.4696 6.46967L17.5303 7.53033ZM11.25 3V5H12.75V3H11.25Z" fill="#ffffff"/>
              </svg>
          </button>
      
         <a href={pdf} className="header-link" download>Resume</a>
        <div className="burger" onClick={()=>setIsActiveMenu(!isActiveMenu)}>
					<svg className={isActiveMenu ? "burger-icon" : "d-none"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
					<svg className={isActiveMenu ? "d-none" : "burger-icon"}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
        </div>
        </div>
       </div>
    </div>
  
    </header>

  )
}

export default Navbar;