import React from 'react';

const Dashboard = (props) => {

        const [people, setPeople] = useState([]);
    
        useEffect(() => {
            fetch('https://swapi.dev/api/people/')
                .then(response => response.json())
                .then(response => setPeople(response.results))
        }, []);

// dependency array (above) will only run after the component updates
// won't have anything inside this array in this course; data can be put in, and when that specific data changes
// the useEffect hook will run 


        return (
            <div>
                {people.length > 0 && people.map((person, index)=>{
                    return (<div key={index}>{person.name}</div>)
                })}
            </div>
        );
    

    
    return (
        <div>
            
        </div>
    );
}

export default Dashboard;
