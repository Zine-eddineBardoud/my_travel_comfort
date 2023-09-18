import React, { useState } from 'react';
import ReserveModal from './reserveModal';

const Form = () => {
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [typeTrnasfer, setTypeTransfer] = useState('');

    // const handleSendFormData = async () => {
    //     try {
    //         console.log('Start Date :', startDate)
    //         console.log('Start Time :', startTime)
    //         console.log('Start Location :', startLocation)
    //         console.log('End Location :', endLocation)
    //         console.log('Type Trnasfer :', typeTrnasfer)
    //     } catch (error) {
    //         console.log('Error sending from data (form.jsx) :', error);
    //     }
    // };

    // const handleCheckInputs = () => {
    //     if (startDate != '' && startTime != '' && startLocation != '' && endLocation != '' && typeTrnasfer != '') {
    //         handleSendFormData();
    //     } else {
    //         setShowMessage(true);
    //         setMessage('You should fill all the inputs !!')
    //     }
    // }

    return (
        <div>
            <div className='w-[90%] mx-auto bg-white rounded-3xl flex lg:flex-row flex-col justify-evenly py-6 px-4 lg:px-0 border border-lightgray shadow-md'>
                {/* Start Date */}
                <div className=''>
                    <p className='font-medium'>Date de départ</p>
                    <input
                        type="date"
                        className='outline-none text-gray text-lg w-full rounded-sm'
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                {/* Start time */}
                <div className='lg:mt-0 mt-4'>
                    <p className='font-medium'>Heure de départ</p>
                    <input
                        type="time"
                        className='outline-none text-gray text-lg w-full rounded-sm'
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </div>

                {/* Start Location */}
                <div className='lg:mt-0 mt-4'>
                    <p className='font-medium'>Lieu de départ</p>
                    <input
                        type="text"
                        className='outline-none text-gray text-lg w-full rounded-sm' placeholder='Agadir, Agadir 80000'
                        value={startLocation}
                        onChange={(e) => setStartLocation(e.target.value)}
                    />
                </div>

                {/* Arrival location */}
                <div className='lg:mt-0 mt-4'>
                    <p className='font-medium'>Lieu d'arrivée</p>
                    <input
                        type="text"
                        className='outline-none text-gray text-lg w-full rounded-sm'
                        placeholder='Agadir, Agadir 80000'
                        value={endLocation}
                        onChange={(e) => setEndLocation(e.target.value)}
                    />
                </div>

                {/* Type of transfer */}
                <div className='lg:mt-0 mt-4'>
                    <p className='font-medium'>Type de transfert</p>
                    <select
                        className='border-none outline-none text-gray text-lg w-full rounded-sm'
                        value={typeTrnasfer}
                        onChange={(e) => setTypeTransfer(e.target.value)}
                    >
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
                <ReserveModal
                    startDate={startDate}
                    startTime={startTime}
                    startLocation={startLocation}
                    endLocation={endLocation}
                    typeTrnasfer={typeTrnasfer}
                />
            </div>
        </div>
    )
}

export default Form;