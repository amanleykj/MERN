import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayEntries = (props) => {

    const { message, setMessage } = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/api/allUsers')
            .then( response => setMessage(response.data.message))
            .catch( error => console.log(error))
    }, [])

    return (
        <div>
            <p>Information Here</p>
            <p>aaa</p>
        </div>
    );
}

export default DisplayEntries;
