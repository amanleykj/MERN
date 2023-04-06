import './App.css';
import PersonForm from './components/PersonForm';
import DisplayEntries from './components/DisplayEntries';

function App() {
  return (
    <div className="App">
      <h1>First Full Stack | Welcome</h1>
      <PersonForm />
      <DisplayEntries />
    </div>
  );
}

export default App;
