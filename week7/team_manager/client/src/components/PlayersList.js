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
        let deleteConfirmed = window.confirm(`Are you sure you want to delete this player?`)
        if(deleteConfirmed == true){
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
        else{
            navigate('/players/list')
        }
    }

    return (
        <div>

            <table className='table table-success table-striped'>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
            {
                allPlayers.map((value, index) => (
                    <tr key = {index}>
                        <td>{value.playerName}</td>
                        <td>{value.prefPosition}</td>
                        <td><button onClick={() => deleteHandler(value._id)}>Delete</button></td>
                    </tr>
                ))
            }
                </tbody>
            
            </table>
        </div>
    );
}

export default PlayersList;
