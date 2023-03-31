import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Form = () => {

    const [ userInput, setUserInput ] = useState('')

    const [ error, setError ] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        userInput.length > 0 ?
        navigate(`/pokemon/${userInput}`) : setError("You must put something here.") 
    }

    return (
        <div>
            <form onSubmit = {submitHandler}>
                <h2>Use Navigate</h2>
                <input type="text" onChange = {(e) => setUserInput(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;
