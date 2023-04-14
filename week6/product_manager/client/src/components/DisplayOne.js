import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const DisplayOne = (props) => {

    const { id } = useParams();

    const [ oneProduct, setOneProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
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

                <h2>{oneProduct.title}</h2>
                <p>${oneProduct.price}</p>
                <p>{oneProduct.description}</p>
                <Link to = '/' >Home</Link>
                
            </div>

        </div>
    );
}

export default DisplayOne;
