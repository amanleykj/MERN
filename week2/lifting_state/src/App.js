import './App.css';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
import React, { useState } from "react";

function App() {
  const [ currentMsg, setCurrentMsg ] = useState("There are no messages here.");

  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( newMessage );
  }

  return (
    <div className="App">

      <MessageForm onNewMessage = { youveGotMail } />
      <MessageDisplay message = { currentMsg } />
      
    </div>
  );
}

export default App;
