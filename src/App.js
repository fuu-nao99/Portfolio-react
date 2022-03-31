import React from 'react';
import './App.css';
import './Responsive.css';
import Navbar from './Components/Navbar';
import Top from './Components/Top';
import Profile from './Components/Profile';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Contact from "./Components/Post/Contact";
import Works from './Components/Works';

function App() {
  return (
    
      <React.Fragment>
        <Navbar />
        <Top />
        <Profile />
        <Works />
        <Skills />
        <Contact />
        <Footer />
      </React.Fragment>
    
  );        
}

export default App;