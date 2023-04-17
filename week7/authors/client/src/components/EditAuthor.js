import React, { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

const EditAuthor = (props) => {

    const {id} = useParams()

    const navigate = useNavigate()

    const [ authorErrors, setAuthorErrors ] = useState({})

    const [ oneAuthor, setOneAuthor ] = useState({
        firstName: '',
        lastName : ''
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAuthor/${id}`)
        .then((response) => {
            console.log(response)
            setOneAuthor(response.data)
        })
        .catch((errors) => {
            console.log(errors)
        })
    }, [])
    
    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/updateAuthor/${id}`, oneAuthor)
        .then((response) => {
            console.log(response.data)
            navigate(`/`)
        })
        .catch((err) => {
            console.log(err)
            console.log(err.response.data.message)
            setAuthorErrors(err.response.data.message)
        })
    }
    
    const changeHandler = (e) => {
        setOneAuthor({...oneAuthor, [e.target.name] : e.target.value})
    }

    return (
        <div>
            <h2>Edit this author below</h2>
            <Link to = '/'><p>Home</p></Link>

                <div className='mb-3'>
                    <form onSubmit={submitHandler}>

                            <label className='form-label'>First Name: </label>
                            <input type="text" className='form-control' name = 'firstName' value = {oneAuthor.firstName} onChange={changeHandler} />
                            {
                                authorErrors.firstName?
                                <p className='danger-text'>{authorErrors.firstName.message}</p> : null
                            }

                            <label className='form-label'>Last Name: </label>
                            <input type="text" className='form-control' name = 'lastName' value = {oneAuthor.lastName} onChange={changeHandler} />
                            {
                                authorErrors.lastName?
                                <p className='danger-text'>{authorErrors.lastName.message}</p> : null
                            }

                            <button>Submit</button>
                    </form>
                    <Link to ='/'><button>Cancel</button></Link>
                </div>
        </div>
    );
}

export default EditAuthor;
