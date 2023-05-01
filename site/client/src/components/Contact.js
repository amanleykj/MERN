import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'

const Contact = () => {

    const navigate = useNavigate()

    const [ allComments, setAllComments ] = useState([])

    const [ comment, setComment ] = useState({})
    
    const [ errors, setErrors ] = useState({})

    const changeHandler = (e) => {
        setComment({ ...comment, [e.target.name] : e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/comments', comment)
            .then((response) => {
                console.log(response)
                setComment(comment)
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
                setErrors(error.response.data.errors)
            })
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/comments')
            .then((response) => {
                setAllComments(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>

            <div className='contact-card'>
                <p><Link to = 'https://github.com/amanleykj'> GitHub </Link></p>
                <p><Link to = 'https://www.linkedin.com/in/anthonymanley/'> LinkedIn </Link></p>

            </div>

            <div>
                <p>Thank you for having a look at my site. Get in touch through the form below and let me know if you have any questions or comments.</p>
                <form className='form-floating mb-3' onSubmit = { submitHandler }>
                <div>
                    <input type="text" className='form-control' id='floatingInput' name = 'firstName' value = { comment.firstName } onChange={changeHandler} />
                    <label htmlFor = 'floatingInput'>First Name</label>
                    {
                        errors.firstName?
                        <p className='danger-text'> {errors.firstName.message} </p> : null
                    }
                </div>
                <div>
                    <input type="text" className='form-control' id = 'floatingInput' name = 'lastName' value = { comment.lastName } onChange={changeHandler} />
                    <label htmlFor = 'floatingInput'>Last Name</label>
                    {
                        errors.lastName?
                        <p className='danger-text'> {errors.lastName.message} </p> : null
                    }
                </div>
                <div>
                    <input type="text" className='form-control' id='floatingInput' name = 'email' value = { comment.email } onChange={changeHandler} />
                    <label htmlFor = 'floatingInput'>Email</label>
                    {
                        errors.email?
                        <p className='danger-text'> {errors.email.message} </p> : null
                    }
                </div>
                <div>
                    <input type="textarea" className='form-control' id='floatingInput' name = 'comment' value = { comment.comment } onChange={changeHandler} />
                    <label htmlFor = 'floatingInput'>Your Question/Comment</label>
                    {
                        errors.comment?
                        <p className='danger-text'> {errors.comment.message} </p> : null
                    }
                </div>

                <button>Submit</button>
                </form>
            </div>

            <div className='comments-show'>
                {
                    allComments.map(( value, index ) => (
                        <div key = {index} >
                            <p>
                                {value.comment}
                            </p>
                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default Contact;
