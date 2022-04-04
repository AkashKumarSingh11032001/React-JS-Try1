import './App.css';
import {useState, useEffect} from 'react';
// props ---step 1
// const Person = (props) => {
//   return(
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Age : {props.age}</h2>
//       <h3>DOB : 11/3/2001 </h3>
//     </>
//   );
// }

const App = () => {
  const name = "Akash"

  const [counter,setCounter] = useState(0);
  
  useEffect(()=>{
    setCounter(100);
  },[]);

  return (
    <div className="App">
      <h1>Hello React! {name}</h1>
      {/* props --- step 1 */}
      {/* <Person name={'John'} age={21}/>
      <Person name={'Hello'} age={22}/>
      <Person name={'World'} age={23}/>
      <Person name={'React'} age={24}/> */}

      {/* event trigger and onClick event (states) */}
      <button onClick={()=>setCounter((prevCount)=> prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCount)=> prevCount+1)}>+</button>
    
    </div>
  );
}

export default App;
