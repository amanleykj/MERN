import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';


const Edit = (props) => {

    const {id} = useParams()

    const navigate = useNavigate()

    const [ oneProduct, setOneProduct ] = useState({
        title : '',
        price : '',
        description : ''
    })

    const changeHandler = (e) => {
        setOneProduct({...oneProduct, [e.target.name] : e.target.value})
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
        .then((response) => {
            console.log(response);
            setOneProduct(response.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    const createProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateProduct/${id}`, oneProduct)
        .then((response) => {
            console.log(response.data);
            navigate(`/oneProduct/${id}`)
        })
        .catch((error) => {
            console.log('The following are errors' + error)
        })
    }

    return (
        <div>
            <h1>Edit Page</h1>

            <form onSubmit = { createProduct }>
                
                <label className='form-label'>Title: </label>
                <input type="text" name = 'title' className='form-control' value = {oneProduct.title} onChange={changeHandler}/>
                
                <label className='form-label'>Price: </label>
                <input type="number" name = 'price' className='form-control' value = {oneProduct.price} onChange={changeHandler} />

                <label className='form-label'>Description: </label>
                <input type="text" name = 'description' className='form-control' value = {oneProduct.description} onChange={changeHandler} />
            
            <button className='btn btn-primary'>Edit</button>
            <Link to = '/' >Home</Link>

            </form>
        </div>
    );
}

export default Edit;
