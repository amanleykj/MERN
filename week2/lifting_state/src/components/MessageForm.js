import React, { useState } from 'react';
    
const MessageForm = (props) => {
    
    const [msg, setMsg] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage(msg);
        // what should we do with the message?
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Set Message</h1>
            <textarea 
                rows="8"
                cols="100"
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value) }
                value={ msg }
                // Is this part above necessary? I took it out and there wasn't any noticeable change within the functionality
                // I will monitor this to see if that's the case.
            ></textarea>
            <input type="submit" value="Send Message" />
        </form>
    );
};
    
export default MessageForm;
