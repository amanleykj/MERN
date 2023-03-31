import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pokemon = () => {

    const { pokeName } = useParams();

    const [ pokemonName, setPokemonName ] = useState(null)

    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((response) => {
            console.log(response.data)
            setPokemonName(response.data.sprites.front_shiny)
        } )
        .catch((error) => {
            console.log('Something went terribly wrong, ->', error)
        })
    }, [])

    return (
        <div>
            <h2>UseParams</h2>
            <hr />
            {
                pokemonName ? 
                <img src = {pokemonName} alt="pokemon hanging out" /> :
                <h2>...awaiting Pokemon</h2>
            }
        </div>
    );
}

export default Pokemon;
