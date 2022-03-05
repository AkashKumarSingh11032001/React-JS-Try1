// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Item from './MyItem'

class StarWars extends React.Component {
    getNewChar(){
      alert("Here's your new charater")
    }

    render() {
      return (
        <div>
        <h1>This is StarWars</h1>
        <p>Name: </p>
        <p>HomeWorld</p>
        <ul>
          <li>Film</li>
        </ul>
        <button className="btn" onClick={()=> this.getNewChar()}>Randomized Characters</button>
        </div>
      )
    }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars/>
      </header>
    </div>
  );
}

export default App;
