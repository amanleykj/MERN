import React, { useState } from 'react';
import styles from './ColorDisplay.module.css';

const ColorDisplay = (props) => {

    // const bucketOfSquares = [];

    // const getSquares = (array) => {
    //     for (let index = 0; index < array.length; index++) {
    //         const element = array[index];
            
    //     }
    // }

    return (
        <div>
            <h1>Your color blocks are below</h1>
            
            <div className='square_make'> 
                <p>{ props.message }</p>
            </div>
            
            
        </div>
    );
}

export default ColorDisplay;
