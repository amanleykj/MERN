import React from 'react';
import background from '../assets/greeting_bg.jpg'


const Greeter = () => {
    return (
        <div>
            <img style={{width : '1200px'}} src={background} alt="gulf of mexico image" />
            {/* <table>
                <thead>
                    <tr>
                        <th>Info 1</th>
                        <th>Info 2</th>
                        <th>Info 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>info info</td>
                        <td>info info</td>
                        <td>info info</td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    );
}

export default Greeter;
