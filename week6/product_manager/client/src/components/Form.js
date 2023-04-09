import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form = () => {

    const [ title, setTitle ] = useState('')

    const [ price, setPrice ] = useState(0)

    const [ description, setDescription ] = useState('')

    const createProduct = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/createProduct', {
            title,
            price,
            description
        })
        .then(response => {
            console.log(response);
            console.log(response.data)
        })
        .catch(error => console.log(error))

    }

    return (
        <div className = 'mb-3'>
            <form onSubmit = { createProduct }>
                
                <label className='form-label'>Title: </label>
                <input type="text" className='form-control' onChange={(e) => setTitle(e.target.value)}/>
                
                <label className='form-label'>Price: </label>
                <input type="number" className='form-control' onChange={(e) => setPrice(e.target.value)} />

                <label className='form-label'>Description: </label>
                <input type="text" className='form-control' onChange={(e) => setDescription(e.target.value)} />
            
            <button className='btn btn-primary'>Create</button>
            </form>
        </div>
    );
}

export default Form;
