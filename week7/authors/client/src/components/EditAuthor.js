import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

const EditAuthor = () => {

    const id = useParams()

    const navigate = useNavigate()
    
    const submitHandler = (e) => {
        axios.put(`http://localhost:8000/api/updateAuthor/${id}`
        .then((response) => {
            console.log(response.data)
            navigate(`/`)

        })
        )
    }
    return (
        <div>
            <h2>Edit this author below</h2>
            <Link to = '/'><p>Home</p></Link>

            <form onSubmit={submitHandler}>
                <div className='mb-3'>

                    <label className='form-label'>First Name: </label>
                    <input type="text" className='form-control' name = 'firstName' value = {author.firstName} onChange={changeHandler} />

                    <label className='form-label'>Last Name: </label>
                    <input type="text" className='form-control' name = 'lastName' value = {author.lastName} onChange={changeHandler} />

                    <button>Cancel</button>
                    <button>Submit</button>

                </div>
            </form>
        </div>
    );
}

export default EditAuthor;
