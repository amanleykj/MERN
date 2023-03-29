import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <p>Company Origin</p>

            <p>Our Team</p>
            
            <p>Product Overview</p>

                <form>
                    <div className='form-floating mb-3'>
                        <input type="text" className='form-control' id='floatingInput' />
                        <label htmlFor='floatingInput'>Contact Us</label>
                    </div>
                </form>
            
        </div>
    );
}

export default Footer;
