import './App.css';
import { Link, BrowserRouter, Routes, Route} from 'react-router-dom'
import React, { useState, useEffect} from 'react'
import Nav from './components/Nav';
import PlayersList from './components/PlayersList';
import NewPlayer from './components/NewPlayer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <div className='static-top'>
                <Link to = '/players/list'><h2>List </h2></Link>
                <h2> | </h2>
                <Link to = '/players/addplayer'><h2>Add Player</h2></Link>
            </div>
        <Routes>
          <Route element = {<PlayersList/>} path = '/players/list' />
          <Route element = {<NewPlayer/>} path = '/players/addplayer' />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
