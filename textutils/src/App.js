import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';

function App() {
  return (
    <>
      {/* NavBar */}
      <Navbar title="TextUtiles" aboutText="About Us" />

      {/* Text-area */}
      <div className="container">
        <TextForm name = "Enter your text here"/>
      </div>

    </>
  );
}

export default App;
