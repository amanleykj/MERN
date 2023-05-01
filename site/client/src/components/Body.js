import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Body = () => {

    const [ itemOne, setItemOne ] = useState([])

    const [ itemTwo, setItemTwo ] = useState([])

    useEffect(() => {
        axios.get(' https://www.thesportsdb.com/api/v1/json/3/all_leagues.php')
            .then((response) => {
                console.log(response)
                setItemTwo(response.data.leagues)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>

            <div className='container-fluid'>
                {
                    itemTwo.map(( value, index ) => (
                    <div key = { index }>
                        {
                            value.strSport === 'Basketball' ?
                            <div>
                                <h3>League name:</h3>
                                <ul>{value.strLeague}</ul>
                            </div>
                            : null
                        }
                    </div>
                    ))
                }
            </div>
            
        </div>
    );
}

export default Body;
