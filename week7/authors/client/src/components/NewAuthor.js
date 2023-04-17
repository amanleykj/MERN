import React from 'react';
import { useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const NewAuthor = () => {

    const navigate = useNavigate()

    const [ errors, setErrors ] = useState({})

    const [ author, setAuthor ] = useState({
        firstName : '',
        lastName : ''
    })

    const changeHandler = (e) => {
        setAuthor({...author, [e.target.name] : e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/newAuthor', author)
        .then((response) => {
            console.log(response)
            setAuthor({
                firstName : '',
                lastName : ''
            })
            navigate('/')
        })
        .catch((errors) => {
            console.log(`Your errors are here: ` + errors)
            setErrors(errors.response.data.errors)
        })
    }

    return (
        <div>

            <h2>Create an author below</h2>
            <Link to = '/'><p>Home</p></Link>

                <div className='mb-3'>
                    <form onSubmit={submitHandler}>

                            <label className='form-label'>First Name: </label>
                            <input type="text" className='form-control' name = 'firstName' value = {author.firstName} onChange={changeHandler} />
                            {
                                errors.firstName?
                                <p className='danger-text'>{errors.firstName.message}</p> : null
                            }

                            <label className='form-label'>Last Name: </label>
                            <input type="text" className='form-control' name = 'lastName' value = {author.lastName} onChange={changeHandler} />
                            {
                                errors.lastName?
                                <p className='danger-text'>{errors.lastName.message}</p> : null
                            }

                            <button>Submit</button>

                    </form>
                    <Link to ='/'><button>Cancel</button></Link>
                </div>
        </div>
    );
}

export default NewAuthor;
