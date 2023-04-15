import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Display = (props) => {

    const { productList, setProductList} = props;

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
        .then((response) => {
            console.log(response);
            setProductList(response.data);
            navigate('/')
        })
        .catch((error) => {
            console.log(error);
        })

    }, [])

    const deleteHandler = (id) => {
        console.log(id)
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
        .then((response) => {
            console.log(response);
            const updatedProductList = productList.filter((product) => product._id !== id);
            setProductList(updatedProductList)
            navigate('/')
            // don't navigate when you're staying on the same page
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <h1>All Products: </h1>

                    {
                        productList.map((value, index) => (
                            <div key = {index}>
                                
                                <Link to = {`/oneProduct/${value._id}`}>{value.title}</Link>
                                <br />
                                <button className='btn btn-danger' onClick = {() => deleteHandler(value._id)} >Delete</button>
                                <br />
                                
                            </div>
                    ))
                }

        </div>
    );
}

export default Display;
