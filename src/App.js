import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills'
import Contact from './Components/Contact';
function App() {
  return (
    <div className='bg-[#0a192f]'>
      <Navbar />
      <Hero />
      <About /> 
      <Skills />
      <Contact/>
    </div>
  );
}

export default App;
