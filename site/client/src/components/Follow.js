import React from 'react';
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Follow = () => {

    const [ user, setUser ] = useState({})

    const [ errors, setErrors ] = useState({})

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/users')
            .then((response) => {
                setUser(response.data)
                navigate('/')
            })
            .catch((error) => {
                setErrors(error.response.data.errors)
            })
    }

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name] : e.target.value })

    }
    return (
        <div className='mb-3'>
            <h3>Register</h3>
            <form onSubmit={submitHandler}>
                <input type="text" id = 'userFirstName' name = 'userFirstName' onchange = {changeHandler} />
                <label htmlFor="userFirstName">First Name</label>

                <input type="text" id = 'userLastName' name = 'userLastName' onchange = {changeHandler} />
                <label htmlFor="userLastName">Last Name</label>

                <input type="text" id = 'userEmail' name = 'userEmail' onchange = {changeHandler} />
                <label htmlFor="userEmail">Email</label>

                <input type="text" id = 'userPassword' name = 'userPassword' onchange = {changeHandler} />
                <label htmlFor="userPassword">Password</label>
            </form>

            <h3>Login</h3>
            <form>
                <input type="text" id = 'userEmail' name = 'userEmail' onchange = {changeHandler} />
                <label htmlFor="userEmail">Email</label>

                <input type="text" id = 'userPassword' name = 'userPassword' onchange = {changeHandler}  />
                <label htmlFor="userPassword">Password</label>
            </form>
        </div>
    );
}

export default Follow;
