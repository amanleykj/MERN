import React, { useState } from 'react';

const ColorForm = (props) => {
    
    const { boxColorArray, setBoxColorArray } = props;
    
    const [ color, setColor ] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxColorArray( [ ...boxColorArray, color ] );
    }


    return (
        <div>
            <h1>{props.title}</h1>
            <p>Enter value below</p>
            <form onSubmit={ handleSubmit } style={{ margin : '15px'}}>
                <input type = 'text' name = 'color' onChange = { (e) => setColor(e.target.value) } />
                <button>Add Square</button>
            </form>
            <p>Specify height and width of square</p>

    
        </div>
    );
}

export default ColorForm;
