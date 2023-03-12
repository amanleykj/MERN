import React from 'react';

const Nav = (props) => {
    return(
        <div>
            <h1>Hello React NOW! Welcome, {props.name} </h1>
            <span>This is a NAV bar aspect.</span>
            <span>Links are here.</span>
            <span>Links are here.</span>
            <span>Links are here.</span>
        </div>
    )
}

export default Nav;