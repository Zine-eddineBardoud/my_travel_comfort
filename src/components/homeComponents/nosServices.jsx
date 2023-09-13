import React from 'react';
import Img1 from '../../assets/images/img1.jpg';
import Img2 from '../../assets/images/img2.jpg';
import Img3 from '../../assets/images/img3.jpg';
import Img4 from '../../assets/images/img5.jpg';

const NosServices = () => {
    return (
        <div className='p-6 md:p-8 lg:p-10 bg-primary'>

            {/* Cards */}
            <div className='lg:flex justify-between mt-10'>
                {/* Card 01 */}
                <div className='lg:w-[40%] px-2 flex flex-col justify-between mb-4'>
                    <div className='mb-6'>
                        <p className='text-3xl md:text-4xl font-bold text-white'>Découvrez <span className='text-secondary'>nos services</span></p>
                        <p className='text-white text-sm mx-auto mt-2'>
                            Nous assurons vos déplacements quotidiens personnels et professionnels.
                        </p>
                    </div>

                    <div className='relative overflow-hidden'>
                        <div className='gradient'></div>
                        <img src={Img4} alt="" className='rounded-2xl' />
                        <div className='absolute bottom-4 px-4'>
                            <p className='text-white font-extrabold text-4xl mb-4'>
                                Service de VTC
                            </p>
                            <p className='text-lg font-medium text-white'>
                                Nous assurons vos déplacements quotidiens personnels et professionnels.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 02 */}
                <div className='lg:w-[30%] px-2'>
                    <div className='relative overflow-hidden mb-4'>
                        <div className='gradient'></div>
                        <img src={Img2} alt="" className='rounded-2xl' />
                        <div className='absolute bottom-4 px-4'>
                            <p className='text-white font-extrabold text-4xl mb-4'>
                                Transfert aéroport
                            </p>
                            <p className='text-lg font-medium text-white'>
                                Nous assurons vos déplacements quotidiens personnels et professionnels.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 03 */}
                <div className='lg:w-[30%] px-2'>
                    <div className='relative overflow-hidden'>
                        <div className='gradient'></div>
                        <img src={Img3} alt="" className='rounded-2xl' />
                        <div className='absolute bottom-4 px-4'>
                            <p className='text-white font-extrabold text-4xl mb-4'>
                                Service personnalisé
                            </p>
                            <p className='text-lg font-medium text-white'>
                                Besoin d'un accompagnement longue durée ? Des rendez-vous médicaux ? Nous vous assurons un transport pour vos besoins personnalisés.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NosServices;