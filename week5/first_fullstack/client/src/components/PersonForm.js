import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonForm = () => {

    const [ message, setMessage ] = useState('Loading...')

    const [ firstName, setFirstName ] = useState('')

    const [ lastName, setLastName ] = useState('')

    const [ age, setAge ] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then( response => setMessage(response.data.message))
            .catch( error => console.log(error))
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName,
            age
        })
            .then(response => {
                console.log(response)
                console.log(response.data)
            })
            .catch(error => console.log(error));
        
    }

    return (
        <div>
            <br />
            <div class = 'mb-3'>
                <form onSubmit={submitHandler}>
                    <label>First Name: </label>
                    <input type="text" class = 'form-control' onChange={(e) => setFirstName(e.target.value)}/>

                    <label>Last Name: </label>
                    <input type="text" class = 'form-control' onChange={(e) => setLastName(e.target.value)} />

                    <label>Age: </label>
                    <input type = 'text' class = 'form-control' onChange={(e) => setAge(e.target.value)} />

                    <button type='submit'>Submit Entry</button>
                </form>
            </div>
        </div>
    );
}

export default PersonForm;