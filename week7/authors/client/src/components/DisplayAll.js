import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const DisplayAll = () => {

    const [ allAuthors, setAllAuthors ] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/allAuthors')
        .then((response) => {
            console.log(response)
            setAllAuthors(response.data)
        })
        .catch((errors) => {
            console.log(errors)
        })
        
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteAuthor/${id}`)
        .then((response) => {
            console.log(response)
            const updatedAuthorList = allAuthors.filter((author) => author._id !== id)
            setAllAuthors(updatedAuthorList)
        })
        .catch((errors) => {
            console.log(errors)
        })
    }

    
    return (
        <div>
            <h2>Authors are listed below</h2>

            <Link to = '/newAuthor'><button className='btn btn-primary'>Add your own author</button></Link>

            {
                
                allAuthors.map(( value, index ) => 
                    <div className='author-div' key = {index}>
                    <h3>{value.firstName} {value.lastName}</h3>
                    <button onClick={() => deleteHandler(value._id)}>Delete Author</button>
                    <br />
                    <Link to = {`/${value._id}`}><button>Update Author</button></Link>
                    </div>
                    )
}
        </div>
    );
}

export default DisplayAll;
