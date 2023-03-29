import React, { useState } from 'react';

const Register = (props) => {

    const { usersList, setUsersList } = props;

    const [ user, setUser ] = useState({
        firstName : 'firstName',
        lastName : 'lastName',
        email : 'email',
        password : 'password',
        idVerified : false
    })

    const submitHandler = (e) => {
        e.preventDefault();
        setUsersList([...usersList, ])
        setUser({
            firstName : 'firstName',
            lastName : 'lastName',
            email : 'email',
            password : 'password',
            idVerified : false
        })
    }

    return (
        <div className='register_page'>
            
            <form onSubmit={submitHandler}>
                
                <div className='form-floating mb-3'>
                    <input type="text" name = 'firstName' className='form-control' id='floatingInput'/>
                    <label htmlFor='floatingInput'>First Name: </label>
                </div>

                <div className='form-floating mb-3'>
                    <input type="text" name = 'lastName' className='form-control' id='floatingInput'/>
                    <label htmlFor='floatingInput'>Last Name: </label>
                </div>

                <div className='form-floating mb-3'>
                    <input type="email" name = 'email' className='form-control' id='floatingInput'/>
                    <label htmlFor='floatingInput'>Email: </label>
                </div>

                <div className='form-floating mb-3'>
                    <input type="password" name = 'password' className='form-control' id='floatingInput'/>
                    <label htmlFor='floatingInput'>Password: </label>
                </div>
            
            <button className='btn btn-light'>Sign Up</button>
            </form>
        </div>
    );
}

export default Register;
