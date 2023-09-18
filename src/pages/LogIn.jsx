import React, { useState } from 'react';
// Packages :
import { Link, useNavigate } from 'react-router-dom';
// Images :
import Logo from '../assets/images/logo.png';
import { Login } from '../config/LoginConfig';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await Login(email, password);
            const token = response.data.token;

            if (response.data.success == true) {
                navigate('/', { replace: true });
                localStorage.setItem('token', token);
            } else {
                setMessage(response.data.message);
                setShowMessage(true)
            }
        } catch (error) {
            console.log('Error login functio (Login.jsx) :', error);
        };
    };

    return (
        <div className='min-h-[80vh] md:min-h-screen flex flex-col justify-center items-center'>
            <div className='w-full mx-auto flex justify-center mb-20'>
                <Link to='/'>
                    <img src={Logo} alt="" className='w-52' />
                </Link>
            </div>

            <div className='lg:w-1/2 mx-auto flex flex-col items-center'>
                {/* Email */}
                <div className='lg:w-[50%] w-[90%] mx-auto mb-6'>
                    <p className='font-medium mb-2'>Email</p>
                    <input
                        type="email"
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
                <button onClick={handleLogin} className='bg-primary py-2 lg:w-[50%] w-[90%] mx-auto rounded-md text-white font-medium mb-4'>
                    Sign in
                </button>
                <p className='text-sm'>I don't have an account ? <Link to='/sign-up' className='text-primary underline font-medium'>Sign up</Link></p>
            </div>
        </div>
    )
}

export default LogIn;