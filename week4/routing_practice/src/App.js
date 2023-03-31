import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Form from './components/Form';
import Number from './components/Number';
import Word from './components/Word';
import All from './components/All';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Routing Practice</h1>
      <BrowserRouter>
      <br />
        <Routes>
          <Route path = '/home' element = {<Form/>}/>
          <Route path = '/:word' element = {<Word/>}/>
          <Route path = '/:word/:color1/:color2' element = {<All/>}/>
        </Routes>
      <Link to = {'/home'}>Home</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
