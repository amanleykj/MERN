import './App.css';
import Footer from './components/Footer';
import Register from './components/Register';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Word from './components/Word';
import ColorsPage from './components/ColorsPage';
import Form from './components/Form';

function App() {

// LINK IS AN ANCHOR TAG!
  return (
    <div className="App">
      <h1>This should stay each time.</h1>
      <BrowserRouter>
      <Link to = {'/home'}>Home </Link>
      <br/>
      <Link to = {'/about'}> About</Link>
      <br />
      <Link to = {'/colorspage'}>Colors Page</Link>
        <Routes>
          <Route path = '/' element = {<Form/>}/>
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/about' element = {<About/>}/>
          <Route path = '/word/:color' element = {<Word/>}/>
          <Route path = '/word/:color/:number' element = {<Word/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
