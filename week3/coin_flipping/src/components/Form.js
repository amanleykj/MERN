import React, { useState } from 'react';

const Form = (props) => {

    const { inputtedNums, setInputtedNums } = props;

    const [ number, setNumber ] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        setNumber('');

    }
    const changeHandler = (e) => {
        e.target.value;

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type = 'number' >Insert Number Here: </input>

            <button onChange={changeHandler}>Click Here</button>
            </form>
            
        </div>
    );
}

export default Form;
