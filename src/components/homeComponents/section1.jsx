import React from 'react';
import Car from '../../assets/images/car2.png';

const Section1 = () => {
    return (
        <div className='p-10'>
            <p className='text-4xl font-bold text-primary text-center mb-10'>
                Réservez <span className='text-secondary'>votre chauffeur</span> en toute  <span className='text-secondary'>simplicité</span>
            </p>
            <div className='flex justify-between items-center'>
                <div className='w-1/2 flex'>
                    <div className='w-1/2 mr-4'>
                        <p className='font-medium text-[16px]'>
                            MTC vous offre la possibilité de vous déplacer en toute sérénité sur réservation. Planifiez vos trajets privés ou professionnels grâce à notre service VTC disponible 24h/24, 7j/7 et toutes distances.
                            Nous assurons un service premium pour nos clients, quels que soient leurs besoins, et garantissons des trajets en toute sécurité.
                        </p>
                    </div>
                    <div className='w-1/2'>
                        <p className='font-medium text-[16px]'>
                            MTC met à votre service son expérience de 6 ans dans le domaine du transport privé et vous fait voyager dans des conditions optimales. Sécurité, confort, ponctualité et satisfaction sont la priorité pour nos clients.
                            Contactez-nous dès à présent !
                        </p>
                    </div>
                </div>

                <div className='w-1/2 flex justify-center'>
                    <img src={Car} alt="" className='w-[500px]' />
                </div>
            </div>
        </div>
    )
}

export default Section1
