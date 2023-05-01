import React from 'react';
import background from '../assets/greeting_bg.jpg'


const Greeter = () => {
    return (
        <div>
            <img style={{width : '1200px', borderRadius : '15px'}} src={background} alt="gulf of mexico image" />
            <div className='centered'><h2>Full-stack Development with Anthony Manley</h2></div>

        </div>
    );
}

export default Greeter;
