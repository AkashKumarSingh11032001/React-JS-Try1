import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';

function App() {
  return (
    <>
      {/* NavBar */}
      <Navbar title="TextUtiles" aboutText="About Us" />

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
