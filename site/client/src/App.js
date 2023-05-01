import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect} from 'react'
import Main from './views/Main'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Follow from './components/Follow'
import Nav from './components/Nav';

function App() {

  // window.onscroll = function() {navDrag()}

  // const navbar = document.getElementById("nav-top")

  // const sticky = navbar.offsetTop

  // const navDrag = () => {
  //   if(window.pageYOffset >= sticky){
  //     navbar.classList.add("sticky")
  //   }
  //   else{
  //     navbar.classList.remove("sticky")
  //   }
  // }
  
  return (
    <div className="App">

      <BrowserRouter>
      <Nav />
        <Routes>
          <Route element = {<Main/>} path = '/' default />
          <Route element = {<Projects/>} path = '/projects' />
          <Route element = {<Contact/>} path = '/contact' />
          <Route element = {<Follow/>} path = '/follow' />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
