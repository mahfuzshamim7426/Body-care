import React from 'react';
import logo from '../../images/person.jpg'
import './Personal.css'

const Personal = () => {
    return (
        <div>
            <div className='person-info'>
                <img className="person-image" src={logo} alt="" />
                <h3>Rashed Khan</h3>
            </div>
        </div>
    );
};

export default Personal;