import React, { useState } from 'react';

const PersonCard = (props) => {
    const [ avail, setAvail ] = useState(props.initialAvail);
    // using a getter and a setter (getter, setter)
    const [ name, setName ] = useState("")

    const nameClick = () => {
        setName("Scary Terry")
    }

    return (
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <p>Available to meet: {  avail }  </p>
            <button onClick = { () => setAvail(avail - 1) }>Plan a meeting with { props.firstName } </button>
        </div>
    );
}

export default PersonCard;
