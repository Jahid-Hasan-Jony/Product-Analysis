import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='p-2 text-right'>
                <div className='container'>
                    <Link to='/'>Home</Link>
                    <Link to='/deshboard'>DeshBoard</Link>
                    <Link to='/reviews'>Reviews</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;