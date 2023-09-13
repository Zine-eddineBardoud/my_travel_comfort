import React from 'react';
// Images :
import Logo from '../assets/images/logo.png';
// Icons :
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='lg:flex justify-between p-10'>
            <div className='lg:w-1/3 p-2 mb-10 lg:mb-0'>
                <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                    <img src={Logo} alt="" className='w-44 mb-4' />
                    <p className='text-primary font-medium lg:text-start text-center'>
                        Notre société vous propose un service simple, ponctuel, confortable et sérieux. Un chauffeur pour vos
                        trajets vers les aéroports, les gares, vos rendez-vous médicaux…
                    </p>
                </div>
                <div className='mt-8 flex flex-col justify-center lg:justify-start'>
                    <p className='text-3xl text-primary font-bold text-center lg:text-start'>Suivez-nous sur</p>
                    <div className='mt-4 flex items-center justify-center lg:justify-start'>
                        <FiInstagram className='text-3xl text-primary cursor-pointer hover:scale-[1.2] transition-all' />
                        <FiFacebook className='text-3xl text-primary mx-10 cursor-pointer hover:scale-[1.2] transition-all' />
                        <FiTwitter className='text-3xl text-primary cursor-pointer hover:scale-[1.2] transition-all' />
                    </div>
                </div>
            </div>

            <div className='lg:w-1/3 p-2 flex flex-col'>
                <p className='text-3xl font-bold mb-10 text-center lg:text-start'>Contact</p>
                <div className='flex flex-col justify-center lg:justify-start items-center lg:items-start'>
                    <p className='font-medium flex items-center'>
                        <MdOutlinePhone className='text-primary text-2xl mr-4' />
                        +123 456 789 125
                    </p>
                    <p className='my-4 font-medium flex items-center'>
                        <MdOutlineEmail className='text-primary text-2xl mr-4' />
                        info@mtc.fr
                    </p>
                    <p className='font-medium flex items-center'>
                        <MdOutlineLocationOn className='text-primary text-2xl mr-4' />
                        France, Paris 00000
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;