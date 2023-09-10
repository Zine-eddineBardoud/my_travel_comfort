import React from 'react';
// import Car from '../../assets/images/bg1.png';
import Form from './form';

const Content = () => {
    return (
        <div className='h-[95vh] overflow-hidden background-image'>
            <div className='ml-14 mt-[22vh]'>
                <p className='text-6xl font-extrabold text-white'>
                    Allez là où vous devez <br /> 
                    aller avec <span className='text-secondary'>notre service</span>
                </p>
                <p className='text-lg font-medium text-white mt-6'>
                    Où que vous soyez et quand vous en avez besoin, nous avons le véhicule <br />
                    parfait pour vous à un prix abordable.
                </p>
            </div>
            <div className='absolute bottom-2 w-full'>
                <Form />
            </div>
        </div>
    )
}

export default Content;