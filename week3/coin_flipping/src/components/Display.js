import React from 'react';

const Display = () => {

    function fiveHeadsSync() {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5) {
        attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
                }
            }
        return `It took ${attempts} tries to flip five "heads" in a row.`;
    }

function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
    }
        
    console.log( fiveHeadsSync() );

    return (
        <div>
            
        </div>
    );
}

export default Display;