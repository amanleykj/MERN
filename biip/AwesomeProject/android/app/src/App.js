import './App.css';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import DisplayAll from './components/DisplayAll';
import Create from './components/Create'
import DisplayOne from './components/DisplayOne';
import Edit from './components/Edit'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Store Finder</h1>
        <Routes>
          <Route element = {<DisplayAll/>} path = '/' default  />
          <Route element = {<Create/>} path = '/stores/add' />
          <Route element = {<DisplayOne/>} path = '/stores/:id' />
          <Route element = {<Edit/>} path = 'stores/edit/:id' />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;