import React, { useState } from 'react';

const UserForm = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ hasBeenSubmitted, setHasBeenSubmitted ] = useState(false);
    // validations are below
    const [ firstNameError, setFirstNameError ] = useState("");
    const [ lastNameError, setLastNameError ] = useState("");
    const [ emailError, setEmailError ] = useState("");
    const [ passwordError, setPasswordError ] = useState("");
    const [ confirmPasswordError, setConfirmPasswordError ] = useState("");
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 3 && e.target.value.length > 0) {
            setFirstNameError("First name must be at least three characters long.")
        }
        else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 3 && e.target.value.length > 0) {
            setLastNameError("Last name must be at least three characters long.")
        }
        else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least five characters long.")
        }
        else if (e.target.value.length == 0) {
            setEmailError("");
        }
        else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least eight characters long.")
        }
        else if (e.target.value.length == 0) {
            setPasswordError("");
        }
        else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value != password)  {
            setConfirmPasswordError("Passwords must match.")
        }
        else {
            setConfirmPasswordError("");
        }
    }

    const createUser = (e) => {

        e.preventDefault();
        
        const newUser = { firstName, lastName, email, password, confirmPassword, hasBeenSubmitted };
        console.log("Welcome ", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted(true);
    };

    return (
        <div>
            <form onSubmit = { createUser }>
            {
            hasBeenSubmitted ?
            <h3>Thank you for submitting the form.</h3> : <h3>Welcome, please submit the form below.</h3>
            }
                <div className='form-floating mb-3'>
                    <label htmlFor="floatingInput">First Name: </label>
                    <input type="text" className='form-control' id='floatingInput' onChange={ handleFirstName } />
                </div>
                {
                    firstNameError ?
                    <p> { firstNameError }</p> : ''
                }

                <div className='form-floating mb-3'>
                    <label htmlFor="floatingInput">Last Name: </label>
                    <input type="text" className='form-control' id='floatingInput' onChange={ handleLastName } />
                </div>
                {
                    lastNameError ?
                    <p> { lastNameError }</p> : ''
                }

                <div className='form-floating mb-3'>
                    <label htmlFor="floatingInput">Email: </label>
                    <input type="text" className='form-control' id='floatingInput' onChange={ handleEmail }/>
                </div>
                {
                    emailError ?
                    <p> { emailError }</p> : ''
                }

                <div className='form-floating mb-3'>
                    <label htmlFor="floatingInput">Password: </label>
                    <input type="password" className='form-control' id='floatingInput' onChange={ handlePassword }/>
                </div>
                {
                    passwordError ?
                    <p> { passwordError }</p> : ''
                }

                <div className='form-floating mb-3'>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" className='form-control' id='floatingInput' onChange={ handleConfirmPassword } />
                </div>
                {
                    confirmPasswordError ?
                    <p> { confirmPasswordError }</p> : ''
                }

                <input type="submit" value="Create User" />
                {/* {
                    nameError ?
                    <input type='submit' value={ createUser } /> :
                    <input type = 'submit' value={ createUser } />
                } */}
            </form>

            <p>Your Form Data Here: </p>
            <p>{ firstName }</p>
            <p>{ lastName }</p>
            <p>{ email }</p>
            <p>{ password }</p>
            <p>{ confirmPassword }</p>

        </div>
    );
}

export default UserForm;
