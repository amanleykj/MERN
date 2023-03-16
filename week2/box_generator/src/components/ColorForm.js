import React, { useState } from 'react';

const ColorForm = (props) => {

    const [ msg, setMsg ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage(msg)
    };

    return (
        <div>
            <h1>Hi friends of mine</h1>
            <form onSubmit={ handleSubmit }>
                <textarea 
                placeholder='Submit color here.' 
                onChange={ (e) => setMsg(e.target.value)}>
                </textarea>
            </form>
            <input type="submit" value="Submit Here" />
        </div>
    );
}

export default ColorForm;
