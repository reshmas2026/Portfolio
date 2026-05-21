import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
// import Data from "./components/Data";
// import Counter from "./components/Counter";
function App(){
  return(
    <>
    <Navbar/>
    <Home/>
    <section id="about">
      <About/>
    </section>
    <Education/>
    <Skills/>
    <Project/>
    <Contact/> 
    <Footer/>
     {/* <Counter/>  
     <Data/>  */}
    </>
  )
}


export default App;