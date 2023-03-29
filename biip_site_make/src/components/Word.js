import React from 'react';
import { useParams } from 'react-router-dom';

const Word = (props) => {

    const {color, number} = useParams()

    const theNumber = {color}

    const myArray = []

    return (
        <div>
            <h2>Word Component</h2>
            {
                <div>
                </div>
            }
            <p style={{backgroundColor: color}}>My color is this background color. My number was {number}</p>
        </div>
    );
}

export default Word;
