import React from 'react';
// Packages :
import { Link } from 'react-router-dom';
// Images :
import Logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center px-4 lg:px-10 py-2 border-b border-lightgray'>
            {/* <p className='text-3xl font-bold italic'>MTC</p> */}
            <img src={Logo} alt="" className='w-16 lg:w-24' />
            <div>
                <Link to="/sign-in" className='text-sm lg:text-base mr-4 text-green font-bold'>Login</Link>
                <Link to="/sign-up" className='text-sm lg:text-base bg-green text-white font-semibold px-6 py-2 rounded-full'>Registre</Link>
            </div>
        </div>
    )
}

export default Header;