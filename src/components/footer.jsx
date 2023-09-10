import React from 'react';
// Images :
import Logo from '../assets/images/logo.png';
// Icons :
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='flex justify-between p-10'>
            <div className='w-1/3 p-2'>
                <div>
                    <img src={Logo} alt="" className='w-44' />
                    <p className='text-primary font-medium'>
                        Notre société vous propose un service simple, ponctuel, confortable et sérieux. Un chauffeur pour vos
                        trajets vers les aéroports, les gares, vos rendez-vous médicaux…
                    </p>
                </div>
                <div className='mt-8'>
                    <p className='text-3xl text-primary font-bold'>Suivez-nous sur</p>
                    <div className='mt-4 flex items-center'>
                        <FiInstagram className='text-3xl text-primary cursor-pointer hover:scale-[1.2] transition-all' />
                        <FiFacebook className='text-3xl text-primary mx-10 cursor-pointer hover:scale-[1.2] transition-all' />
                        <FiTwitter className='text-3xl text-primary cursor-pointer hover:scale-[1.2] transition-all' />
                    </div>
                </div>
            </div>

            <div className='w-1/3 p-2 flex flex-col'>
                <p className='text-3xl font-bold mb-10'>Contact</p>
                <div>
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