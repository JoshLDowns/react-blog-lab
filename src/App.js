import React from 'react';
import Header from './Header';
import Clock from './Clock';
import './App.css';

function App(props) {
  let ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  return (
    <div id="main-container">
      <Clock />
      <h1>{props.greeting}</h1>
      {ids.map(id => {
        return (<Header key={id} id={id} />)
      })}
      <button onClick={() => console.log('hey')}>CLICK</button>
    </div>
  );
}
export default App;