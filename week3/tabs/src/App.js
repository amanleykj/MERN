import './App.css';
import TabDisplay from './components/TabDisplay';
import TabForm from './components/TabForm';
import { useState } from 'react';

function App() {

  const [ tabArray, setTabArray ] = useState([])


  return (
    <div className="App">
      <TabForm tabArray = { tabArray } setTabArray = {setTabArray}  />
      <TabDisplay tabArray = { tabArray }/>
    </div>
  );
}

export default App;
