import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import React, { useState } from 'react'

function App() {
  const [mode,setMode] = useState("light");
  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark")
    }
    else{
      setMode("light")
    }
  }
  return (
    <>
      {/* NavBar */}
      <Navbar title="TextUtiles" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>

      {/* Text-area */}
      <div className="container">
        <TextForm name = "Enter your text here"/>
      </div>

      {/* About -Dark mode */}
      <About/>

    </>
  );
}

export default App;
