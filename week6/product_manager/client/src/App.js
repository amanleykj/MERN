import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Main from './views/Main';
import DisplayOne from './components/DisplayOne';


function App() {

  return (
      <BrowserRouter>
    <div className="App">

        <Routes>
          <Route element = {<Main/>} path = '/' default />
          <Route element = {<DisplayOne/>} path = '/oneProduct/:id' />
        </Routes>


    </div>
      </BrowserRouter>
  );
}

export default App;
