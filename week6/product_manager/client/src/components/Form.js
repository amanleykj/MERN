import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {

    const { productList, setProductList } = props;

    const [ newProduct, setNewProduct ] = useState({
        title : "",
        price : "",
        description : ""
    });

    const navigate = useNavigate()

    const changeHandler = (e) => {
        setNewProduct({...newProduct, [e.target.name] : e.target.value})
    }

    const createProduct = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/createProduct', newProduct)
        .then((response) => {
            console.log(response)
            setNewProduct({
                title : "",
                price : "",
                description : ""
            })
            setProductList([...productList, newProduct])
            navigate('/')
        })
        .catch((error) => {
            console.log('The following are errors' + error)
        })
    }

    return (

        <div className = 'mb-3'>

            <form onSubmit = { createProduct }>
                
                <label className='form-label'>Title: </label>
                <input type="text" name = 'title' className='form-control' value = {newProduct.title} onChange={changeHandler}/>
                
                <label className='form-label'>Price: </label>
                <input type="number" name = 'price' className='form-control' value = {newProduct.price} onChange={changeHandler} />

                <label className='form-label'>Description: </label>
                <input type="text" name = 'description' className='form-control' value={newProduct.description} onChange={changeHandler} />
            
            <button className='btn btn-primary'>Create</button>
            </form>
        </div>
    );
}

export default Form;
