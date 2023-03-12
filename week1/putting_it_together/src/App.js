import './App.css';
import People from './components/People';

function App() {
  return (
    <div className="App">

      <div className='inner_div'>

        <People 
        firstName = {'Jane'} 
        lastName = {'Doe'} 
        hairColor = {'black'} 
        initialAge = {45}/>
      </div>

      <div className='inner_div'>
        <People 
        firstName = {'John'} 
        lastName = {'Smith'} 
        hairColor = {'brown'} 
        initialAge = {88}/>
      </div>

    </div>
  );
}

export default App;
