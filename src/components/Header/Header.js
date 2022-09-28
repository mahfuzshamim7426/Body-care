import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header-content'>
            <img className='logo' src={logo} alt="" />
            <h3 className='header-text'>Body Care</h3>
        </div>
    );
};

export default Header;