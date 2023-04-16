import './App.css';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import NewAuthor from './components/NewAuthor';
import DisplayAll from './components/DisplayAll';


function App(props) {

  const [ authorList, setAuthorList ] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
      <h1>AUTHORS</h1>
      <Routes>
        <Route element = {<DisplayAll/>} path = '/' />
        <Route element = {<NewAuthor/>} path = '/newAuthor' authorList = {authorList} setAuthorList = {setAuthorList} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
