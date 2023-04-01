import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

  const [ pokemonChars, setPokemonChars ] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        console.log('RESPONSE LOOK HERE');
        console.log(response);
        setPokemonChars(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
  },[])

  return (
    <div className="App">
      <h1>Using Pokemon API</h1>
      {
        pokemonChars.map((pokemon, idx) => (
          <div key = { idx }>
            <h2>Name: { pokemon.name }</h2>
          </div>
        ))
      }
    </div>
  )
}

export default App;