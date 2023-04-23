import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


const GameOne = () => {

    const [ allPlayers, setAllPlayers ] = useState([])

    const [ player, setPlayer ] = useState({
        gameOneStatus : '',
    })

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
        .then((response) => {
            console.log(response)
            setAllPlayers(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    const changeStatus = (id) => {
        axios.put(`http://localhost:8000/api/players/${id}`)


        setPlayer({...player, [e.target.name] : e.target.value})

    }


    return (
        <div>
            <h1>Player Status - Game 1</h1>
            <div>
                <Link to = '/status/game/1'>Game 1</Link>
                <br />
                <Link to = '/status/game/2'>Game 2</Link>
                <br />
                <Link to = '/status/game/3'>Game 3</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
            {
                allPlayers.map((value, index) => (
                    <tr key = {index}>
                        <td>{value.playerName}</td>
                            {
                                value.gameOneStatus === ''? <td>
                                    <button name = 'playing' value = 'playing' onclick = {() => changeStatus(value._id)}>Playing</button>
                                    <button name = 'notPlaying' value = 'notPlaying' onclick = {() => changeStatus(value._id)}>Not Playing</button>
                                    <button name = 'undecided' value = 'undecided' onclick = {() => changeStatus(value._id)}>Undecided</button>
                                    </td> : <td>Blank</td>
                            }
                    </tr>
                ))
            }
                </tbody>

            </table>
        </div>
    );
}

export default GameOne;
