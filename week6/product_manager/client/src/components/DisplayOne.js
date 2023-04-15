import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const DisplayOne = (props) => {

    const { id } = useParams();

    const navigate = useNavigate()

    const [ oneProduct, setOneProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
        .then((response) => {
            console.log(response);
            setOneProduct(response.data);
        })
        .catch((error) => {
            console.log('Your error is ' + error)
        })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
        .then((response) => {
            console.log(response);
            navigate('/')
        })
        .catch((error) => {
            console.log(error)
        })
    }


    return (
        <div>
            
            <div>

                <h2>{oneProduct.title}</h2>
                <p>${oneProduct.price}</p>
                <p>{oneProduct.description}</p>
                <Link to = {`/updateProduct/${id}`}>Edit Product</Link>
                <br />
                <button className='btn btn-danger' onClick = {() => deleteHandler(oneProduct._id)}>Delete</button>
                <br />
                <Link to = '/' >Home</Link>
                
            </div>

        </div>
    );
}

export default DisplayOne;
