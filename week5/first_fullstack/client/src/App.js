import './App.css';
import { useEffect, useState } from 'react';
import PersonForm from './components/PersonForm';
import OneUser from './components/OneUser';
import axios from 'axios';
import DisplayEntries from './components/DisplayEntries';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

// useEffect used to make sure that things are loaded once and not a million times, breaking your server
// You are wrapping your axios request inside the useEffect
// useState stores data on the React side

function App() {

  const [ userList, setUserList] = useState([])
  // this is array in useState([]) because it's like that as we're getting it from the DB

  useEffect(() => {
    axios.get('http://localhost:8000/api/allUsers')
      .then((response) => {
        console.log(response);
        setUserList(response.data.users)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <h1>First Full Stack | Welcome</h1>
        <Link to ='/'>Home</Link>
          <Routes>
            <Route path = '/' element = {<PersonForm/>}/>
            <Route path = '/' element = {<DisplayEntries userList = {userList} setUserList = { setUserList }/>}/>
            <Route path = '/viewUser/:id' element = {<OneUser />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
