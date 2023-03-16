import './App.css';
import React, { useState } from "react";
import ColorForm from './components/ColorForm.js';
import ColorDisplay from './components/ColorDisplay.js';

function App() {
  const [ currentMsg, setCurrentMsg ] = useState("Listed item be here, please.");

  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( newMessage );
  }

  return (
    <div className="App">
      
      <ColorForm onNewMessage = { youveGotMail } />
      <ColorDisplay message = { currentMsg }/>

    </div>
  );
}

export default App;
