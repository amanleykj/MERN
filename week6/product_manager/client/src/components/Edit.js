import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link, Form } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';


const Edit = (props) => {

    const {id} = useParams()

    const [ oneProduct, setOneProduct ] = useState({})

    const [ loaded, setLoaded ] = useState(false)

    const navigate = useNavigate()

    const changeHandler = (e) => {
        setOneProduct({...oneProduct, [e.target.name] : e.target.value})
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
        .then((response) => {
            console.log(response);
            setOneProduct(response.data);
            setLoaded(true)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    const updateProduct = (productParam) => {
        axios.put(`http://localhost:8000/api/updateProduct/${id}`, productParam)
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log('The following are errors' + error)
        })
    }

    return (
        <div>

            <h1>Edit Page</h1>
            {
                loaded && <Form onSubmitProp = {updateProduct} initialTitle = {oneProduct.title} initialPrice = {oneProduct.price} initialDescription = {oneProduct.description} />
            }
        </div>
    );
}

export default Edit;
