import React, { useState, useEffect } from 'react';
import { useAsyncError, useParams } from 'react-router-dom';
import axios from 'axios';


const OneUser = (props) => {

    const [ user, setUser ] = useState({})

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneUser/${id}`)
        .then((response) => {
            console.log(response.data.user);
            setUser(response.data.user)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])


    return (
        <div>
            <h1>User</h1>
            <h2>{user.firstName} {user.lastName} is the person. They are {user.age} years old.</h2>
        </div>
    );
}

export default OneUser;
