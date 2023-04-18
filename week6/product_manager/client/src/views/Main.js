import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import Display from '../components/Display';

const Main = (props) => {

    const [ productList, setProductList ] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/allProducts`)
        .then((response) => {
            setProductList(response.data)
        })
        .catch((error) => {
            console.log(error   )
        })
    }, [])

    const removeFromDom = (productId) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${productId}`)
        .then((response) => {
            console.log(response)
            console.log(response.data)
            setProductList(productList.filter((product) => product._id !== productId))
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const createProduct = (e) => {
        axios.post('http://localhost:8000/api/createProduct', productParam)
        .then((response) => {
            console.log(response)
            console.log(response.data)
            setProductList([...productList, response.data])
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>

            <Form onSubmitProp = {createProduct} initialTitle = '' initialPrice = '' initialDescription = '' />
            <hr />
            <Display productList = { productList } removeFromDom = { removeFromDom } />
            
        </div>
    )
}

export default Main;
