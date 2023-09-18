import React, { useEffect, useState } from 'react';
// Packages :
import { Box, Modal, Rating } from '@mui/material';
// Icons :
import { GrFormClose } from "react-icons/gr";
import { MdOutlineLocationOn } from 'react-icons/md';
import { CiLocationArrow1 } from 'react-icons/ci';
import { AiOutlineSend } from 'react-icons/ai';
// Images :
import Car1 from '../../assets/images/car3.png'
import Car2 from '../../assets/images/car4.png'
import Car3 from '../../assets/images/car5.png'
import Car4 from '../../assets/images/car6.png'
import Car5 from '../../assets/images/car7.png'

const ReserveModal = ({ startDate, startTime, startLocation, endLocation, typeTrnasfer }) => {
    const [open, setOpen] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');

    const handleOpen = () => {
        setOpen(true)
        handleCheckInputs();
    };

    const handleClose = () => setOpen(false);

    const currentWdith = window.innerWidth;
    const [width, setWidth] = useState('80%');
    const [padding, setPadding] = useState(4);

    useEffect(() => {
        if (currentWdith <= 770) {
            setWidth('90%');
            setPadding(2);
        }
    });

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: width,
        height: 'auto',
        maxHeight: '90vh',
        borderRadius: '8px',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: padding,
        overflowY: 'scroll'
    };

    const fakeData = [
        { id: 1, driverName: 'Ernest E. Smith', distance: '3 Km', time: '10 min', price: 34, driverRate: 4, carImg: Car1 },
        { id: 2, driverName: 'Steven C. Lewis', distance: '6 Km', time: '20 min', price: 50, driverRate: 5, carImg: Car2 },
        { id: 3, driverName: 'Edwin S. Bowen', distance: '4 Km', time: '13 min', price: 36, driverRate: 3.5, carImg: Car3 },
        { id: 4, driverName: 'Jeff M. Nichols', distance: '2.1 Km', time: '8 min', price: 30, driverRate: 4.5, carImg: Car4 },
        { id: 5, driverName: 'John B. Miller', distance: '1 Km', time: '3 min', price: 12, driverRate: 3, carImg: Car5 },
    ];

    // ============================================================
    const handleSendFormData = () => {
        // try {
        console.log('Start Date :', startDate);
        console.log('Start Time :', startTime);
        console.log('Start Location :', startLocation);
        console.log('End Location :', endLocation);
        console.log('Type Trnasfer :', typeTrnasfer);
        // } catch (error) {
        //     console.log('Error sending from data (form.jsx) :', error);
        // }
    };

    const handleCheckInputs = () => {
        if (startDate != '' && startTime != '' && startLocation != '' && endLocation != '' && typeTrnasfer != '') {
            // handleSendFormData();
            console.log('Start Date :', startDate);
            console.log('Start Time :', startTime);
            console.log('Start Location :', startLocation);
            console.log('End Location :', endLocation);
            console.log('Type Trnasfer :', typeTrnasfer);
            handleOpen();
            return;
        } else {
            setShowMessage(true);
            setMessage('You should fill all the inputs !!')
        }
    }

    return (
        <div>
            {
                showMessage && (
                    <div className='mb-4'>
                        <p className='text-[red] font-medium text-sm text-center'>{message}</p>
                    </div>
                )
            }

            <button onClick={handleCheckInputs} className='text-sm md:text-base text-primary bg-secondary px-10 md:px-14 py-2 md:py-4 rounded-full font-bold'>
                Reserve maintenant
            </button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <div className='flex justify-between items-center mb-10'>
                        <p className='text-2xl font-bold'>Reserve maintenant</p>
                        <GrFormClose className='text-2xl cursor-pointer' onClick={handleClose} />
                    </div>

                    {/* Cards */}
                    <div className='flex flex-wrap justify-between items-center'>
                        {/* Card 01 */}
                        {
                            fakeData?.map((data, index) => (
                                <div key={index} className="lg:w-1/2">
                                    <div className='m-2 border border-gray rounded-xl mx-2'>
                                        <div className='flex justify-between items-center border-b border-gray p-4'>
                                            <div className='w-1/2'>
                                                <p className='text-xl font-semibold'>{data?.driverName}</p>
                                                <p className='flex items-center mb-4'>
                                                    <MdOutlineLocationOn className='text-xl' />
                                                    <p>{data?.distance} ({data?.time})</p>
                                                </p>
                                                <Rating name="read-only" value={data?.driverRate} precision={0.5} readOnly />
                                            </div>
                                            <div className='w-1/2 flex flex-col justify-end'>
                                                <img src={data?.carImg} alt="" className='w-72' />
                                            </div>
                                        </div>
                                        <div className='flex justify-between items-center p-4'>
                                            <p className='font-extrabold text-2xl text-green'>{data?.price} EUR</p>
                                            <button className='bg-green p-2 px-10 rounded-md font-medium text-white flex items-center'>
                                                <AiOutlineSend className='text-lg mr-2 font-bold' />
                                                Lancer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </Box>
            </Modal>
        </div>
    )
}

export default ReserveModal;