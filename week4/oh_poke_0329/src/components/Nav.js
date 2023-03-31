import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {


    return (
        <div>
            <Link to = '/pokemon'>Pokemon</Link>
            <Link to = '/form'>Form</Link>
            <Link to = '/'>Home</Link>
            
        </div>
    );
}

export default Nav;
