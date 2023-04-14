import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {

    const { productList, setProductList } = props;

    const [ newProduct, setNewProduct ] = useState({
        title : "",
        price : "",
        description : ""
    });

    const changeHandler = (e) => {
        setNewProduct({...newProduct, [e.target.name] : e.target.value})
    }

    const createProduct = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/createProduct', {
            title : 'title',
            price : 'price',
            description : 'description'
        })
        .then((response) => {
            console.log(response);
            console.log(response.data);
            setProductList([...productList, response.data]);
            setNewProduct({
                title : "",
                price : "",
                description : ""
            })
        })
        .catch((error) => {
            console.log('The following are errors' + error)
        })
    }

    return (

        <div className = 'mb-3'>

            <h1>Product Manager</h1>
            
            <form onSubmit = { createProduct }>
                
                <label className='form-label'>Title: </label>
                <input type="text" name = 'title' className='form-control' value = {newProduct.title} onChange={changeHandler}/>
                
                <label className='form-label'>Price: </label>
                <input type="number" name = 'price' className='form-control' value = {newProduct.price} onChange={changeHandler} />

                <label className='form-label'>Description: </label>
                <input type="text" name = 'description' className='form-control' value = {newProduct.description} onChange={changeHandler} />
            
            <button className='btn btn-primary'>Create</button>
            </form>
        </div>
    );
}

export default Form;
