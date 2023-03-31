import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [ pokemonChars, setPokemonChars ] = useState('')

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((response) => {

        console.log('RESPONSE');

        setPokemonChars(response.data.results)
      })
      .catch((err) => {
        console.log(err);
      })
  },[])

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <a href="https://swapi.dev/" target='_blank'>Click here to view the <b>swapi</b> documentation</a>
      {
        starWarsCharacters.map((character, idx) => (
          <div key={idx}>
            <h2>Name: {character.name}</h2>

    </div>
  );
}

export default App;