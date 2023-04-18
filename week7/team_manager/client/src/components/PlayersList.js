import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const PlayersList = () => {

    const [ allPlayers, setAllPlayers ] = useState([])

    const navigate = useNavigate()

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

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/players/${id}`)
            .then((response) => {
                console.log(response)
                const updatedPlayerList = allPlayers.filter((player) => player._id !== id)
                setAllPlayers(updatedPlayerList)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>

            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            </table>
            {
                allPlayers.map((value, index) => (
                    <div key = {index} className='boxes'>
                        <p>{value.playerName}</p>
                        <p>{value.prefPosition}</p>
                        <button onClick={() => deleteHandler(value._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default PlayersList;
