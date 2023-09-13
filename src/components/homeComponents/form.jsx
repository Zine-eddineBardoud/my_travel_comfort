import React from 'react';
import ReserveModal from './reserveModal';

const Form = () => {
    return (
        <div>
            <div className='w-[90%] mx-auto bg-white rounded-3xl flex lg:flex-row flex-col justify-evenly py-6 px-4 lg:px-0 border border-lightgray shadow-md'>
                {/* Start Date */}
                <div className=''>
                    <p className='font-medium'>Date de départ</p>
                    <input type="date" className='outline-none text-gray text-lg w-full rounded-sm' />
                </div>

                {/* Start time */}
                <div className='lg:mt-0 mt-4'>
                    <p className='font-medium'>Heure de départ</p>
                    <input type="date" className='outline-none text-gray text-lg w-full rounded-sm' />
                </div>

                {/* Start Location */}
                <div className='lg:mt-0 mt-4'>
                    <p className='font-medium'>Lieu de départ</p>
                    <input type="text" className='outline-none text-gray text-lg w-full rounded-sm' placeholder='Agadir, Agadir 80000' />
                </div>

                {/* Arrival location */}
                <div className='lg:mt-0 mt-4'>
                    <p className='font-medium'>Lieu d'arrivée</p>
                    <input type="text" className='outline-none text-gray text-lg w-full rounded-sm' placeholder='Agadir, Agadir 80000' />
                </div>

                {/* Type of transfer */}
                <div className='lg:mt-0 mt-4'>
                    <p className='font-medium'>Type de transfert</p>
                    <select className='border-none outline-none text-gray text-lg w-full rounded-sm'>
                        <option value="opt1">Select an option</option>
                        <option value="opt1">Option 1</option>
                        <option value="opt2">Option 2</option>
                        <option value="opt3">Option 3</option>
                    </select>
                </div>
            </div>

            {/* Button */}
            <div className='flex justify-center mt-6'>
                {/* <button className='text-primary bg-secondary px-14 py-4 rounded-full font-bold'>Reserve maintenant</button> */}
                <ReserveModal />
            </div>
        </div>
    )
}

export default Form;