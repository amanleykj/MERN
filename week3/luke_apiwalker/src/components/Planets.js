import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Planets = (props) => {

    const { choice, id} = useParams()

    const { peopleList, setPeopleList } = props

    return (
        <div>
            <p>Planets Component {choice} and the {id}</p>
        </div>
    );
}

export default Planets;
