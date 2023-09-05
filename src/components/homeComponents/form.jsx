import React from 'react';

const Form = () => {
    return (
        <div>
            <div className='w-[75%] mx-auto bg-white rounded-full flex justify-evenly py-6 border border-lightgray shadow-md'>
                {/* Start Date */}
                <div>
                    <p className='font-medium'>Date de départ</p>
                    <input type="date" className='outline-none text-gray text-lg' />
                </div>

                {/* Start time */}
                <div>
                    <p className='font-medium'>Heure de départ</p>
                    <input type="date" className='outline-none text-gray text-lg' />
                </div>

                {/* Start Location */}
                <div>
                    <p className='font-medium'>Lieu de départ</p>
                    <input type="text" className='outline-none text-gray text-lg' placeholder='Agadir, Agadir 80000' />
                </div>

                {/* Arrival location */}
                <div>
                    <p className='font-medium'>Lieu d'arrivée</p>
                    <input type="text" className='outline-none text-gray text-lg' placeholder='Agadir, Agadir 80000' />
                </div>

                {/* Type of transfer */}
                <div>
                    <p className='font-medium'>Type de transfert</p>
                    <select className='border-none outline-none rounded-full text-gray text-lg'>
                        <option value="opt1">Select an option</option>
                        <option value="opt1">Option 1</option>
                        <option value="opt2">Option 2</option>
                        <option value="opt3">Option 3</option>
                    </select>
                </div>
            </div>
            {/* Button */}
            <div className='flex justify-center mt-6'>
                <button className='text-primary bg-secondary px-8 py-4 rounded-full font-bold'>Reserve maintenant</button>
            </div>
        </div>
    )
}

export default Form;