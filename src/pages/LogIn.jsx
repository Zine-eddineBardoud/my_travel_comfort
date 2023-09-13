import React from 'react';
// Packages :
import { Link } from 'react-router-dom';
// Images :
import Logo from '../assets/images/logo.png';

const LogIn = () => {
    return (
        <div className='min-h-[80vh] md:min-h-screen flex flex-col justify-center items-center'>
            <div className='w-full mx-auto flex justify-center mb-20'>
                <Link to='/'>
                    <img src={Logo} alt="" className='w-52' />
                </Link>
            </div>

            <form action="" className='lg:w-1/2 mx-auto flex flex-col items-center'>
                {/* Email */}
                <div className='lg:w-[50%] w-[90%] mx-auto mb-6'>
                    <p className='font-medium mb-2'>Email</p>
                    <input type="text" placeholder='eg: example@email.com' className='border border-lightgray rounded-md p-2 pl-4 w-full outline-none' />
                </div>

                {/* Password */}
                <div className='lg:w-[50%] w-[90%] mx-auto mb-10'>
                    <p className='font-medium mb-2'>Password</p>
                    <input type="password" placeholder='Enter your password' className='border border-lightgray rounded-md p-2 pl-4 w-full outline-none' />
                </div>

                {/* Button */}
                <button className='bg-primary py-2 lg:w-[50%] w-[90%] mx-auto rounded-md text-white font-medium mb-4'>
                    Sign in
                </button>
                <p className='text-sm'>I don't have an account ? <Link to='/sign-up' className='text-primary underline font-medium'>Sign up</Link></p>
            </form>
        </div>
    )
}

export default LogIn;