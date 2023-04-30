import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Contact = () => {

    const navigate = useNavigate()

    const [ comment, setComment ] = useState({})

    const changeHandler = (e) => {
        setComment({...comment, [e.target.name] : e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/contact', comment)
            .then((response) => {
                setComment(response.data)
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <div>
                <form className='form-floating mb-3' onSubmit = { submitHandler }>
                <div>
                    <input type="text" className='form-control' id='floatingInput' name = 'firstName' value = { comment.firstName } onChange={changeHandler} />
                    <label htmlFor = 'floatingInput'>First Name</label>
                </div>
                <div>
                    <input type="text" className='form-control' id = 'floatingInput' name = 'lastName' value = { comment.lastName } onChange={changeHandler} />
                    <label htmlFor = 'floatingInput'>Last Name</label>
                </div>
                <div>
                    <input type="text" className='form-control' id='floatingInput' name = 'email' value = { comment.email } onChange={changeHandler} />
                    <label htmlFor = 'floatingInput'>Email</label>
                </div>
                <div>
                    <input type="textarea" className='form-control' id='floatingInput' name = 'comment' value = { comment.comment } onChange={changeHandler} />
                    <label htmlFor = 'floatingInput'>Your Question/Comment</label>
                </div>

                <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
