import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import People from './components/People';
import Planets from './components/Planets';
import Form from './components/Form';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {

  const [ peopleList, setPeopleList ] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(response => setPeopleList(response.results))
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Form />
        <Route path = '/' element = {<App/>}/>
        <Route path = '/planets/:id' element = {<Planets/>}/>
        <Route path = '/people/:id' element = {<People/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
