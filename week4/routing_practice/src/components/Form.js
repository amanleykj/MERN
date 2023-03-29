import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Form = () => {

    const 


    return (
        <div>
            <form>
                <label>Insert a color here: </label>
                <input type="text"/>
                <label>Insert a number here: </label>
                <input type="number" />
            </form>
        </div>
    );
}

export default Form;
