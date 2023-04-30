import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
            <table>
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Most Recent Update</th>
                        <th>Other</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Projects;
