import React, { useState } from 'react';
// Packages :
import { Link, useNavigate } from 'react-router-dom';
// Images :
import Logo from '../assets/images/logo.png';
import Google from '../assets/images/google.svg';
// Functions :
import { Register } from './../config/signUpConfig';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await Register(firstName, lastName, email, phone, city, password);
            if (response.data.success == true) {
                navigate('/sign-in', { replace: true });
            } else {
                setMessage(response.data.message);
                setShowMessage(true);
            }
        } catch (error) {
            console.log('Error in handleSignUp function (SignUp.jsx) :', error);
        }
    };

    return (
        <div className='min-h-[100vh] md:min-h-screen flex flex-col items-center justify-center'>
            <div className='w-full mx-auto flex justify-center mb-20 mt-10'>
                <Link to='/'>
                    <img src={Logo} alt="" className='w-52' />
                </Link>
            </div>

            <div className='lg:w-1/2 mx-auto flex flex-col items-center mb-16'>
                {/* First Name */}
                <div className='lg:w-[50%] w-[90%] mx-auto mb-6'>
                    <p className='font-medium mb-2'>First name</p>
                    <input
                        type="text"
                        placeholder='eg: First name'
                        className='border border-lightgray rounded-md p-2 pl-4 w-full outline-none'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                {/* Last Name */}
                <div className='lg:w-[50%] w-[90%] mx-auto mb-6'>
                    <p className='font-medium mb-2'>Last name</p>
                    <input
                        type="text"
                        placeholder='eg: Last name'
                        className='border border-lightgray rounded-md p-2 pl-4 w-full outline-none'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                {/* Phone */}
                <div className='lg:w-[50%] w-[90%] mx-auto mb-6'>
                    <p className='font-medium mb-2'>Phone number</p>
                    <input
                        type="text"
                        placeholder='eg: 06 01 02 03 04'
                        className='border border-lightgray rounded-md p-2 pl-4 w-full outline-none'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                {/* City */}
                <div className='lg:w-[50%] w-[90%] mx-auto mb-6'>
                    <p className='font-medium mb-2'>City</p>
                    <input
                        type="text"
                        placeholder='eg: Paris'
                        className='border border-lightgray rounded-md p-2 pl-4 w-full outline-none'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>

                {/* Email */}
                <div className='lg:w-[50%] w-[90%] mx-auto mb-6'>
                    <p className='font-medium mb-2'>Email</p>
                    <input
                        type="text"
                        placeholder='eg: example@email.com'
                        className='border border-lightgray rounded-md p-2 pl-4 w-full outline-none'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password */}
                <div className='lg:w-[50%] w-[90%] mx-auto mb-10'>
                    <p className='font-medium mb-2'>Password</p>
                    <input
                        type="password"
                        placeholder='Enter your password'
                        className='border border-lightgray rounded-md p-2 pl-4 w-full outline-none'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>


                {/* Error Message */}
                {
                    showMessage && (
                        <div className='mb-4'>
                            <p className='text-sm text-[red] font-medium'>{message}</p>
                        </div>
                    )
                }

                {/* Button */}
                <button onClick={handleRegister} className='bg-primary py-2 lg:w-[50%] w-[90%] mx-auto rounded-md text-white font-medium mb-4'>
                    Sign in
                </button>

                {/* Google Button */}
                {/* <div className='mb-4 lg:w-[50%] w-[90%]'>
                    <div className='flex flex-row items-center mb-4'>
                        <div className='flex-1 h-[.5px] bg-lightgray'></div>
                        <p className='p-1 px-2'>Ou</p>
                        <div className='flex-1 h-[.5px] bg-lightgray'></div>
                    </div>
                    <button className='w-full flex items-center justify-center border-2 border-lightgray rounded-lg p-2'>
                        <img src={Google} alt="google_icon" className='w-[20px] mx-3' />
                        <p className='font-medium'>Google</p>
                    </button>
                </div> */}

                <p className='text-sm'>Already have an account? <Link to='/sign-in' className='text-primary underline font-medium'>Sign in</Link></p>
            </div>
        </div>
    )
}

export default SignUp;