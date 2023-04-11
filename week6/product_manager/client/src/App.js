import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Main from './views/Main';
import DisplayOne from './components/DisplayOne';


function App() {

  return (
    <div className="App">

      <BrowserRouter>

        <h1>Product Manager</h1>

        <Routes>
          <Route element = {<Main/>} path = '/' default />
          <Route element = {<DisplayOne/>} path = '/oneProduct/:id' />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
