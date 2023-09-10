import React from 'react';
// Packages :
import { Link } from 'react-router-dom';
// Images :
import Logo from '../assets/images/logo.png';
import Google from '../assets/images/google.svg';

const SignUp = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <div className='w-full mx-auto flex justify-center mb-20'>
                <Link to='/'>
                    <img src={Logo} alt="" className='w-52' />
                </Link>
            </div>

            <form className='w-1/2 mx-auto flex flex-col items-center mb-16'>
                {/* First Name */}
                <div className='w-[50%] mx-auto mb-6'>
                    <p className='font-medium mb-2'>First name</p>
                    <input type="text" placeholder='eg: First name' className='border border-lightgray rounded-md p-2 pl-4 w-full outline-none' />
                </div>

                {/* Last Name */}
                <div className='w-[50%] mx-auto mb-6'>
                    <p className='font-medium mb-2'>Last name</p>
                    <input type="text" placeholder='eg: Last name' className='border border-lightgray rounded-md p-2 pl-4 w-full outline-none' />
                </div>

                {/* Email */}
                <div className='w-[50%] mx-auto mb-6'>
                    <p className='font-medium mb-2'>Email</p>
                    <input type="text" placeholder='eg: example@email.com' className='border border-lightgray rounded-md p-2 pl-4 w-full outline-none' />
                </div>

                {/* Password */}
                <div className='w-[50%] mx-auto mb-10'>
                    <p className='font-medium mb-2'>Password</p>
                    <input type="password" placeholder='Enter your password' className='border border-lightgray rounded-md p-2 pl-4 w-full outline-none' />
                </div>

                {/* Button */}
                <button className='bg-primary py-2 w-[50%] mx-auto rounded-md text-white font-medium mb-4'>
                    Sign in
                </button>

                {/* Google Button */}
                <div className='mb-4 w-[50%]'>
                    <div className='flex flex-row items-center mb-4'>
                        <div className='flex-1 h-[.5px] bg-lightgray'></div>
                        <p className='p-1 px-2'>Ou</p>
                        <div className='flex-1 h-[.5px] bg-lightgray'></div>
                    </div>
                    <button className='w-full flex items-center justify-center border-2 border-lightgray rounded-lg p-2'>
                        <img src={Google} alt="google_icon" className='w-[20px] mx-3' />
                        <p className='font-medium'>Google</p>
                    </button>
                </div>

                <p className='text-sm'>Already have an account? <Link to='/sign-in' className='text-primary underline font-medium'>Sign in</Link></p>
            </form>
        </div>
    )
}

export default SignUp;