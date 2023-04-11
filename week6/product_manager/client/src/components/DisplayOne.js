import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const DisplayOne = (props) => {

    const { oneProductHere } = useParams();

    const [ oneProduct, setOneProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${oneProductHere}`)
        .then((response) => {
            console.log(response);
            console.log('HI FRIENDS AND FAMILY')
            setOneProduct(response.data);
        })
        .catch((error) => {
            console.log('Your error is ' + error)
        })
    }, [])


    return (
        <div>
            
            <div>

                <h1>{oneProduct.title}</h1>
                <h2>${oneProduct.price}</h2>
                <h2>{oneProduct.description}</h2>
                <Link to = '/' >Home</Link>
                
            </div>

        </div>
    );
}

export default DisplayOne;
