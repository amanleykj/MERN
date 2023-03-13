import React, { useState } from 'react';

const UserForm = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirm_password, setConfirm_password ] = useState("")
    
    const createUser = (e) => {

        e.preventDefault();
        
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirm_password
        };
        console.log("Welcome ", newUser);
    };

    return(
        <div>
            <form onSubmit= { createUser }>
                <div className='form-floating mb-3'>
                    <label htmlFor="floatingInput">First Name: </label>
                    <input type="text" className='form-control' id='floatingInput' onChange={ (e) => setFirstName(e.target.value)} value={ firstName } />
                </div>

                <div className='form-floating mb-3'>
                    <label htmlFor="floatingInput">Last Name: </label>
                    <input type="text" className='form-control' id='floatingInput' onChange={ (e) => setLastName(e.target.value)} value={ lastName } />
                </div>

                <div className='form-floating mb-3'>
                    <label htmlFor="floatingInput">Email: </label>
                    <input type="text" className='form-control' id='floatingInput' onChange={ (e) => setEmail(e.target.value)} value= { email }/>
                </div>

                <div className='form-floating mb-3'>
                    <label htmlFor="floatingInput">Password: </label>
                    <input type="text" className='form-control' id='floatingInput' onChange={ (e) => setPassword(e.target.value)} value = { password }/>
                </div>

                <div className='form-floating mb-3'>
                    <label htmlFor="confirm_password">Confirm Password: </label>
                    <input type="text" className='form-control' id='floatingInput' onChange={ (e) => setConfirm_password(e.target.value)} value= { confirm_password } />

                </div>
                <input type="submit" value="Create User" />
            </form>

            <p>Your Form Data Here: </p>
            <p>{ firstName }</p>
            <p>{ lastName }</p>
            <p>{ email }</p>
            <p>{ password }</p>
            <p>{ confirm_password }</p>

        </div>
    );
}

export default UserForm;
