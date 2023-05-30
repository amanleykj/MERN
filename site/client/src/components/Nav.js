import React from 'react';
import { Link } from 'react-router-dom'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const Nav = () => {

    return (
        <div class='top-nav'>
            <div className='logo'>
                <h2>Anthony Manley</h2>
            </div>
            <ul>
                <li><Link className='nav-links' to = '/projects'><h4>Projects</h4></Link></li>
                <li><Link className='nav-links' to = '#comment-section'><h4>Contact</h4></Link></li>
                <li><Link className='nav-links' to = '/follow'><h4>Follow</h4></Link></li>
                <li><Link to = 'https://github.com/amanleykj'><img src={linkedin} style={{width : '30px', height : '30px'}} alt="linkedin icon"/></Link></li>
                <li><Link to = 'https://www.linkedin.com/in/anthonymanley/'><img src={github} style={{width : '30px', height : '30px'}} alt="github icon" /></Link></li>
            
            </ul>
        </div>
    );
}

export default Nav;
