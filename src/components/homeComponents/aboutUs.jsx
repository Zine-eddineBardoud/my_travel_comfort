import React from 'react';
import Img4 from '../../assets/images/img4.jpg';

const AboutUs = () => {
    return (
        <div className='p-6 md:p-8 lg:p-10'>
            <div className='lg:flex justify-between items-center'>
                <div className='lg:w-1/2 p-4'>
                    <p className='text-3xl md:text-4xl font-bold text-primary text-center mb-16'><span className='text-lightGreen'>À propos</span> de MTC</p>
                    <p className='text-base text-primary font-medium'>
                        Notre société vous propose un service simple, ponctuel, confortable et sérieux.Un chauffeur pour vos trajets
                        vers les aéroports, les gares, vos rendez-vous médicaux…Nos chauffeurs sauront vous conseiller sur l'horaire
                        de départ depuis votre domicile en fonction de la circulation. Durant votre trajet, bénéficiez du wifi,
                        bouteille d'eau et de friandises sans aucun supplément.
                    </p>
                </div>
                <div className='lg:w-1/2 p-4'>
                    <img src={Img4} alt="" className='rounded-2xl' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
