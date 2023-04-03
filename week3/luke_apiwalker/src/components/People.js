import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const People = (props) => {

    const { choice, id } = useParams()

    const { peopleList, setPeopleList } = props

    return (
        <div>
            <p>People Component and this is the {choice} and {id}</p>
        </div>
    );
}

export default People;
