import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Projects = () => {

    const [ projects, setProjects ] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/projects`)
            .then((response) => {
                setProjects(response.data)
            .catch((error) => {
                console.log(error)
            })
            })
    }, [])

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th>Technologies Used</th>
                    </tr>
                </thead>
                <tbody>
                        { projects.map(( value, index) => (
                            <tr key = { index }>
                                <Link><td>{ value.projectName }</td></Link>
                                <td>{ value.shortDescription }</td>
                                <td>{ value.stack }</td>
                            </tr>
                        ))
                        }
                </tbody>
            </table>
        </div>
    );
}

export default Projects;
