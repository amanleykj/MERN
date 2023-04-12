import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const DisplayEntries = (props) => {

    const { userList, setUserList } = props;

    const { message, setMessage } = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/api/allUsers')
            .then((response) => {
                console.log(response);
                setUserList(response.data.users)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <p>Information Here:</p>
            {
                userList.map((value, index) => (
                    <div key = {index}>
                        <h2>{value.firstName}</h2>
                        <h2>{value.lastName}</h2>
                        <Link to = {`/${value._id}`}>View</Link>
                    </div>
                ))
            }
            <p>aaa</p>
        </div>
    );
}

export default DisplayEntries;
