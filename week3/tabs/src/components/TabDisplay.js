import React, { useState } from 'react';

const TabDisplay = (props) => {

    const { tabArray } = props; 

    return (
        <div>
            <table class="table table-hover">
            <thead>
                <tr> 
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td>One  </td>
                    <td>Two  </td>
                    <td>Three  </td>
                </tr>
            </tbody>
        </table>

        </div>
    );
}

export default TabDisplay;
