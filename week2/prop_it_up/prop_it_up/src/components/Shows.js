import React from 'react';

const Shows = (props) => {
    console.log(props.title)
    return (
        <div>
            <h2>Title: {props.title} </h2>
            <h3>Release Year: {props.releaseYear} </h3>
        </div>
    );
}

export default Shows;
