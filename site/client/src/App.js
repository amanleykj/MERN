import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect} from 'react'
import Main from './views/Main'

function App() {

  // const [ allComments, setAllComments ] = useState([])

  // useEffect(() => {
  //   axios.get('http://localhost:8000/api/users')
  //     .then((response) => {
  //       console.log(response.data)
  //       setAllComments(response.data)
  //     })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  // }, [])
  
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route element = {<Main/>} path = '/' default />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
