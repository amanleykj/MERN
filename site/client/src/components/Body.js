import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Body = () => {

    const navigate = useNavigate()

    const [ itemOne, setItemOne ] = useState([])

    const [ itemTwo, setItemTwo ] = useState([])

    const [ visitorComment, setVisitorComment ] = useState('')

    const [ errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(' https://www.thesportsdb.com/api/v1/json/3/all_leagues.php')
            .then((response) => {
                console.log(response)
                setItemTwo(response.data.leagues)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const visitorThank = () => {
        alert("Hey, thank you!")
    }

    const changeHandler = (e) => {
        setVisitorComment({... visitorComment, [e.target.name] : e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/comments', visitorComment)
            .then((response) => {
                console.log(response)
                setVisitorComment(visitorComment)
                visitorThank()
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
                setErrors(error.response.data.errors)
            })
    }

    return (
        <div>
            <div className='form-floating mb-3' id = "comment-section">
                <h2>Get in touch</h2>
                <form onSubmit={submitHandler}>

                    <input placeholder='First name' className='form-control' type="text" name = "firstName" onChange={changeHandler} />

                    {
                        errors.firstName?
                        <p className='danger-text'>{errors.firstName.message}</p> : null 
                    }

                    <input placeholder='Last name' className='form-control' type="text" name = "lastName" onChange={changeHandler} />

                    {
                        errors.lastName?
                        <p className='danger-text'>{errors.lastName.message}</p> : null 
                    }

                    <input placeholder='Email' className='form-control' type="text" name = "email" onChange={changeHandler} />

                    {
                        errors.email?
                        <p className='danger-text'>{errors.email.message}</p> : null 
                    }

                    <input placeholder='Comment here' className='form-control' type="text" name = "comment" onChange={changeHandler} />

                    {
                        errors.comment?
                        <p className='danger-text'>{errors.comment.message}</p> : null 
                    }

                    <button className='btn btn-primary'>Submit</button>

                </form>
                <br />
                <br />
            </div>

            <div className='container-fluid'>
                {
                    itemTwo.map(( value, index ) => (
                    <div key = { index }>
                        {
                            value.strSport === 'Basketball' ?
                            <div>
                                <h3>League name:</h3>
                                <ul>{value.strLeague}</ul>
                            </div>
                            : null
                        }
                    </div>
                    ))
                }
            </div>
            
        </div>
    );
}

export default Body;
