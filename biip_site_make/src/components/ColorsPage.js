import React from 'react';
import { useParams } from 'react-router-dom';

const ColorsPage = () => {

    const {color1, color2} = useParams()

    return (
        <div>
            <p>The {color1} and the {color2} are here to stay, m' nay.</p>
        </div>
    );
}

export default ColorsPage;
