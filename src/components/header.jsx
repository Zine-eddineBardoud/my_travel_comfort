import React from 'react';
// Packages :
import { Link } from 'react-router-dom';
// Images :
import Logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center px-10 py-2 border-b border-lightgray'>
            {/* <p className='text-3xl font-bold italic'>MTC</p> */}
            <img src={Logo} alt="" className='w-24' />
            <div>
                <Link to="/sign-in" className='text-base mr-4 text-green font-bold'>Sign In</Link>
                <Link to="/sign-up" className='bg-green text-white font-semibold px-6 py-2 rounded-full'>Sign Up</Link>
            </div>
        </div>
    )
}

export default Header;