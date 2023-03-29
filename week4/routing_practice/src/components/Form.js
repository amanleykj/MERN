import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {

    const navigate = useNavigate()

    const [ number, setNumber ] = useState(0)
    const [ word, setWord ] = useState('anthony')
    const [ color1, setColor1 ] = useState('black')
    const [ color2, setColor2 ] = useState('red')
    // included this word and these colors to act as a default in case the form is empty

    const submitHandlerNum = (e) => {
        e.preventDefault();
        navigate(`/${number}`)
    }


// I tried seeing if somehow this submissio is creating a number, which is then somehow prompting
// the number route to take over. 
    const submitHandlerWord = (e) => {
        e.preventDefault();
        console.log("HEY FOLKS I'M HERE")
        console.log(type(e))
        console.log(e)
        navigate(`/${word}`)
    }

    const submitHandlerAll = (e) => {
        e.preventDefault();
        navigate(`/${word}/${color1}/${color2}`)
    }
    
    return (
        <div className='mb-3'>

            <form onSubmit = {submitHandlerNum}>
                <label>Insert a number here: </label>
                <input type="number" onChange={(e) => setNumber(e.target.value)} />
                <button className='btn btn-primary'>Submit Number</button>
            </form>
            <br />
            <form onSubmit = {submitHandlerWord}>
                <label>Insert a word here: </label>
                <input type="text" onChange={(e) => setWord(e.target.value)} />
                <button className='btn btn-primary'>Submit Word</button>
            </form>
            <br />
            <form onSubmit = {submitHandlerAll}>
                <label>Insert a word here: </label>
                <input type="text" onChange = {(e) => setWord(e.target.value)} />
                <label>Insert text color here: </label>
                <input type="text" onChange = {(e) => setColor1(e.target.value)} />
                <label>Insert background color here: </label>
                <input type="text" onChange = {(e) => setColor2(e.target.value)} />
                <button className='btn btn-primary'>Submit All</button>
            </form>
        </div>
    );
}

export default Form;
