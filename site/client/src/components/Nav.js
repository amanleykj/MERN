import React from 'react';
import { Link } from 'react-router-dom'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import face from '../assets/anthony_face.jpg'
import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate()

    return (
        <div id='nav-top'>
            <div className='nav-top-left'>
            <Link className='nav-links' to = '/'><img src={face} alt="anthony face" /></Link>
            </div>
            <div className='nav-top-right'>
                <Link className='nav-links' to = '/projects'><h4>Projects</h4></Link>
                <Link className='nav-links' to = '/contact'><h4>Contact</h4></Link>
                <Link className='nav-links' to = '/follow'><h4>Follow</h4></Link>
                <Link to = 'https://github.com/amanleykj'><img src={linkedin} style={{width : '30px', height : '30px'}} alt="linkedin icon"/></Link>
                <Link to = 'https://www.linkedin.com/in/anthonymanley/'><img src={github} style={{width : '30px', height : '30px'}} alt="github icon" /></Link>
            </div>
        </div>
    );
}

export default Nav;
