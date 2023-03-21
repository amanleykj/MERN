import './App.css';
import React, { useState } from "react";
import ColorDisplay from './components/ColorDisplay';
import ColorForm from './components/ColorForm';

function App() {
  const [ currentMsg, setCurrentMsg ] = useState("No messages yet.");

  const [ boxColorArray, setBoxColorArray ] = useState([])

  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( newMessage );
  }

  return (
    <div className="App">
      
      <ColorForm title = {'Form One'} boxColorArray = { boxColorArray } setBoxColorArray = { setBoxColorArray } onNewMessage = {youveGotMail} />
      <ColorDisplay boxColorArray = { boxColorArray } message = { currentMsg } />

    </div>
  );
}

export default App;
