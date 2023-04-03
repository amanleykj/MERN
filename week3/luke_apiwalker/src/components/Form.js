import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {

const navigate = useNavigate()

const [ peopleList, setPeopleList ] = useState({
    choice : '',
    id : ''
})

const [ id, setId ] = useState('')
const [ choice, setChoice ] = useState('')

const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/${choice}/${id}`)


}


    return (
<div>
    <h1>Form Component</h1>
    <form onSubmit={submitHandler}>

    <label>Search for: </label>
        <select onChange={(e) => setChoice(e.target.value)}>
            <option value="people" >People</option>
            <option value="planets" >Planets</option>
        </select>

    <label>ID search: </label>
    <input type="text" name = 'id_choice' onChange={(e) => setId(e.target.value)}/>

    <button>Find this</button>
    </form>
</div>
    );
}

export default Form;
