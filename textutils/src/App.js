import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState("light");
  const[alert,setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
    
  }
  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled")
    }
  }
  return (
    <>
      {/* NavBar */}
      <Navbar title="TextUtiles" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>

      {/* Alert */}
      <Alert alert={alert}/>
      {/* Text-area */}
      <div className="container">
        <TextForm name = "Enter your text here" mode={mode}/>
      </div>

      {/* About -Dark mode */}
      {/* <About/> */}

    </>
  );
}

export default App;
