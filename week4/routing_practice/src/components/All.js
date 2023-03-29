import React from 'react';
import { useParams } from 'react-router-dom';

const All = () => {

    const { word, color1, color2 } = useParams();

    return (
        <div>
            <h1 style={{backgroundColor : color2, color : color1}}>The word is: {word}</h1>
        </div>
    );
}

export default All;
