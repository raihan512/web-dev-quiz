import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-cyan-600 py-3 md:flex justify-between px-5'>
            <Link to='/'>
                <h3 className='text-2xl font-bold text-white '>WEB-DEV-QUIZ</h3>
            </Link>
            <div className='text-xl text-white uppercase font-semibold  flex justify-evenly w-full md:w-7/12 lg:w-3/12'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;