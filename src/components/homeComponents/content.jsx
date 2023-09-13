import React, { useEffect, useState } from 'react';
// import Car from '../../assets/images/bg1.png';
import Form from './form';

const Content = () => {
    const currentWdith = window.innerWidth;
    const [background, setBackground] = useState('background-image');

    useEffect(() => {
        if (currentWdith <= 770) {
            setBackground('bg-primary');
        }
    });

    // gradient-background md:background-image

    return (
        <div className={`min-h-[95vh] overflow-hidden ${background}`}>
            <div className='lg:w-[60%] px-5 lg:ml-14 mt-14 lg:mt-[22vh]'>
                <p className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-white'>
                    Allez là où vous devez aller avec <span className='text-secondary'>notre service</span>
                </p>
                <p className='text-base md:text-lg font-medium text-white mt-3 lg:mt-6'>
                    Où que vous soyez et quand vous en avez besoin, nous avons le véhicule parfait pour vous à un prix abordable.
                </p>
            </div>
            <div className='absolute bottom-2 w-full'>
                <Form />
            </div>
        </div>
    )
}

export default Content;