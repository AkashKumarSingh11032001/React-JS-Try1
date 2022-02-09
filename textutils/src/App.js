import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success")
      document.title = "TextUtiles - Dark Mode"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled")
      document.title = "TextUtiles - Light Mode"
    }
  }
  return (
    <>
    <Router>
      {/* NavBar */}
      <Navbar title="TextUtiles" aboutText="About Us" mode={mode} toggleMode={toggleMode} />

      {/* Alert */}
      <Alert alert={alert} />
      {/* Text-area */}
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/"
            element = {
            <TextForm name="Enter your text here" mode={mode} />}
          />
        </Routes >

      </div>

      {/* About -Dark mode */}
      {/* <About /> */}
      </Router>
    </>
  );
}

export default App;
