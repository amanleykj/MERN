import React from 'react';

const ColorDisplay = (props) => {

    const { boxColorArray } = props;
    
    return (
        <div>
            <p>All below</p>
            <p>You chose {boxColorArray}</p>
            {
                boxColorArray.map((color, index) => (
                    <div key = {index} style=
                    {{display : 'inline-block', margin : '10px', height : '50px', width : '50px', backgroundColor : color }}>
                    </div>
                ))
            }
        </div>
    );
}

export default ColorDisplay;
