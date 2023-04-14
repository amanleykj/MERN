import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Display = (props) => {

    const { productList, setProductList } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
        .then((response) => {
            console.log(response);
            setProductList(response.data);
        })
        .catch((error) => {
            console.log(error);
        })

    }, [])

    return (
        <div>
            <h1>All Products: </h1>

                    {
                        productList.map((value, index) => (
                            <div key = {index}>
                                
                                <Link to = {`/oneProduct/${value._id}`}>{value.title}</Link>
                                <br />
                                <br />
                                
                            </div>
                    ))
                }

        </div>
    );
}

export default Display;
