import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Form from './components/Form';
import Home from './components/Home';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/form' element = {<Form/>} />
        <Route path = '/pokemon' element = {<Pokemon/>} />
        <Route path = '/pokemon/:pokeName' element = {<Pokemon/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
