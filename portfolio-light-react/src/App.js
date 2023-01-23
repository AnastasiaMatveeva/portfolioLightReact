import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Speciality from './components/Speciality/Speciality';
import Portfolios from './components/Portfolios/Portfolios';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

const App = () => {

  
  return (
    <div className="app">
      <Navbar/>
      <About/>
      <Speciality/>
      <Portfolios/>
      <Experience/>
      <Education/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App;