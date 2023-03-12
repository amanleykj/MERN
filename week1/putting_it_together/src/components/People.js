import React, { useState } from 'react';

const People = (props) => {
    const [ personAge, setPersonAge ] = useState( props.initialAge );

    return (
        <div>
            <h1>{ props.lastName }, { props.firstName } </h1>
            <p>Age: { personAge }</p>
            <p>Hair Color: { props.hairColor } </p>
            <button className='btn btn-dark' onClick = { (event) => setPersonAge( personAge + 1 )}>Birthday Button for { props.firstName } { props.lastName }</button>
        </div>
    );
}

export default People;
