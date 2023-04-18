import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewPlayer = () => {

    const [ player, setPlayer ] = useState({
        playerName : '',
        prefPosition : ''
    })

    const navigate = useNavigate()

    const [ errors, setErrors ] = useState({})

    const changeHandler = (e) => {
        setPlayer({...player, [e.target.name] : e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/players', player)
            .then((response) => {
                console.log(response)
                setPlayer({
                    playerName : '',
                    prefPosition : ''
                })
                navigate('/players/list')
            })
            .catch((error) => {
                console.log(`Your error(s) is/are ${error}`)
                setErrors(error.response.data.errors)
            })
    }

    return (
        <div>
            <h1>Add Player</h1>
            <form onSubmit={submitHandler}>
                <label className='form-label'>Player Name: </label>
                <input type="text" className='form-control' name = 'playerName' value={player.playerName} onChange={changeHandler} />
                {
                    errors.playerName?
                    <p className='danger-text'>{errors.playerName.message}</p> : null
                }

                <label className='form-label'>Preferred Position: </label>
                <select className='form-select' name = 'prefPosition' value={player.prefPosition} onChange={changeHandler}>
                    <option value=""></option>
                    <option value="C">C</option>
                    <option value="PF">PF</option>
                    <option value="SF">SF</option>
                    <option value="SG">SG</option>
                    <option value="PG">PG</option>
                </select>
                
            <button>Submit</button>
            

                </form>
        </div>
    );
}

export default NewPlayer;