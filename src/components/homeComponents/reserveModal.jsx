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

const ReserveModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const currentWdith = window.innerWidth;
    const [width, setWidth] = useState('80%');
    const [padding, setPadding] = useState(4);

    useEffect(() => {
        if (currentWdith <= 770) {
            setWidth('95%');
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
        border: '2px solid #000',
        boxShadow: 24,
        p: padding,
    };

    return (
        <div>
            <button onClick={handleOpen} className='text-primary bg-secondary px-14 py-4 rounded-full font-bold'>
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
                    <div>
                        {/* Card 01 */}
                        <div className='w-1/2 border border-gray p-2 rounded-xl'>
                            <div className='flex justify-between'>
                                <div className='w-1/2'>
                                    <p className='font-semibold'>Jhon Doe</p>
                                    <p className='flex items-center'>
                                        <MdOutlineLocationOn className='text-xl' />
                                        <p>3 km (10 min)</p>
                                    </p>
                                    <Rating name="read-only" value={5} readOnly />
                                    <p className='font-extrabold text-2xl text-green'>$12</p>
                                </div>
                                <div className='w-1/2 flex flex-col justify-end'>
                                    <img src={Car1} alt="" className='w-72' />
                                    <div className='flex justify-end'>
                                        <button className='bg-green p-2 px-8 rounded-md font-medium text-white flex items-center'>
                                            <AiOutlineSend className='text-lg mr-2 font-bold' />
                                            Lancer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    )
}

export default ReserveModal;