import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className='App'>
      <div className = "first_top">
        <PersonCard lastName = {'Doe'} firstName = {'Jane'}  age = {45} hairColor = {'black'} initialAvail = {3} />
        <p>If you'd like to learn more about this person, please click <a href="#" onClick = { () => alert("This person has been clicked!") }>here</a></p>

      </div>
      <div>
        <PersonCard lastName = {'Smith'} firstName = {'John'}  age = {88} hairColor = {'brown'} initialAvail = {8}/>
        <p>If you'd like to learn more about this person, please click <a href="#" onClick = { () => alert("This person has been clicked!") }>here</a></p>

      </div>
      <div>
        <PersonCard lastName = {'Fillmore'} firstName = {'Millard'}  age = {50} hairColor = {'brown'} initialAvail = {15} />
        <p>If you'd like to learn more about this person, please click <a href="#" onClick = { () => alert("This person has been clicked!") }>here</a></p>

      </div>
      <div>
        <PersonCard lastName = {'Smith'} firstName = {'Maria'}  age = {62} hairColor = {'brown'} initialAvail = {2} />
        <p>If you'd like to learn more about this person, please click <a href="#" onClick = { () => alert("This person has been clicked!") }>here</a></p>

      </div>
    </div>
  );
}

export default App;
