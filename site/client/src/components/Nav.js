import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav-top'>
            <h1>Anthony</h1>
            <div className='nav-top-right'>
                <Link className='nav-links' to = '/projects'><h4>Projects</h4></Link>
                <Link className='nav-links' to = '/contact'><h4>Contact</h4></Link>
                <Link className='nav-links' to = '/follow'><h4>Follow</h4></Link>
            </div>
        </div>
    );
}

export default Nav;
