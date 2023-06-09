import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom'


const Nav = () => {
    return (
        <div className='static-top2'>
            <Link to = '/players/list'><h2>Manage Players</h2></Link>
            
            <br />
            <h2>|</h2>
            <Link to = '/status/game/1'><h2>Manage Player Status</h2></Link>
            <br />
        </div>
    );
}

export default Nav;
