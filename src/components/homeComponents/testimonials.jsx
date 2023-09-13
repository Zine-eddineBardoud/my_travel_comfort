import React from 'react';
// Packages :
import { BiSolidQuoteAltRight } from "react-icons/bi";
// Images :
import User1 from '../../assets/images/user1.jpg';
import User2 from '../../assets/images/user2.jpg';
import User3 from '../../assets/images/user3.jpg';

const Testimonials = () => {
    return (
        <div className='p-10 gradient-background'>
            <div className='text-center'>
                <p className='text-4xl font-bold text-white'>Avis <span className='text-secondary'>clients</span></p>
                <p className='text-white text-sm w-[60%] mx-auto mt-2'>Nous mettons tout en œuvre afin de satisfaire nos clients. Découvrez leur avis.</p>
            </div>
            <div className='lg:flex justify-between items-center mt-10'>
                <div className="lg:w-1/3 p-2">
                    <div className='bg-white rounded-2xl p-6'>
                        <BiSolidQuoteAltRight className='text-secondary text-5xl' />
                        <p className='text-2xl font-bold my-4'>je pensais avoir déjà répondu ! réservation très simple, service efficace, bravo !</p>
                        <div className='flex items-center'>
                            <img src={User1} alt="" className='w-16 rounded-full mr-4' />
                            <p className='text-base font-bold'>Username 01</p>
                        </div>
                    </div>
                </div>

                <div className='lg:w-1/3 p-2'>
                    <div className='bg-white rounded-2xl p-6'>
                        <BiSolidQuoteAltRight className='text-secondary text-5xl' />
                        <p className='text-2xl font-bold my-4'>Très bien, service impeccable, soigneux et attentif. Je recommande !</p>
                        <div className='flex items-center'>
                            <img src={User2} alt="" className='w-16 rounded-full mr-4' />
                            <p className='text-base font-bold'>Username 02</p>
                        </div>
                    </div>
                </div>

                <div className='lg:w-1/3 p-2'>
                    <div className='bg-white rounded-2xl p-6'>
                        <BiSolidQuoteAltRight className='text-secondary text-5xl' />
                        <p className='text-2xl font-bold my-4'>Réservation rapide, site Web clair, confirmation rapide, digne de confiance.</p>
                        <div className='flex items-center'>
                            <img src={User3} alt="" className='w-16 rounded-full mr-4' />
                            <p className='text-base font-bold'>Username 03</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;