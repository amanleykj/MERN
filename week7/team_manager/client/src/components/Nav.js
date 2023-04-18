import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom'


const Nav = () => {
    return (
        <div>
            <Link to = '/'>Manage Players</Link>
            <br />
            <Link to = '/'>Manage Player Status</Link>
            <br />
            <Link to = '/players/addplayer'>Add a Player</Link>
        </div>
    );
}

export default Nav;
