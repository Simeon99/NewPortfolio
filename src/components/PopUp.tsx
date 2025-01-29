'use client'

import { HiOutlineX } from "react-icons/hi";
import React, { useEffect } from 'react'
export interface IPopUp {
    isOpen: boolean;
    setIsOpen: (s: boolean) => void;
    title: string;
    text: string;
}

const PopUp: React.FC<IPopUp> = ({ isOpen, setIsOpen, title, text }) => {

    useEffect(() => {
        const body = document.body;
        const originalStyle = body.style.overflow;

        if (isOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = originalStyle;
        }

        return () => {
            body.style.overflow = originalStyle;
        };
    }, [isOpen]);

    return (
        <div className={`overflow-y-auto fixed  top-0 right-0 w-full h-full text-white bg-black shadow-xl z-40 transform transition-transform duration-500 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            {/* Mobile */}
            <div className='md:hidden flex flex-row justify-end pt-[51px] pr-[29px]'>
            <HiOutlineX size={40} className='hover:cursor-pointer' onClick={() => setIsOpen(false)}/>
                {/* <Image src={"/close-outline.svg"} alt={"close"}
                    className='hover:cursor-pointer'
                    width={40}
                    height={40}
                    onClick={() => setIsOpen(false)}
                    layout="fixed" /> */}
            </div>
            {/* Desktop */}
            <div className='w-full my-[123px]  flex flex-col items-center justify-center px-[41px] '>

                <div className={`max-w-[700px] ${isOpen ? 'animate-pop-up-return' : ''}`}>
                    <div className=' flex flex-row justify-between items-start mb-8'>
                        <div>
                            <h1 className={`md:text-[75px] text-[37pt] font-berghan leading-none`}>{title}</h1>
                        </div>
                        <div className='min-w-[40px] min-h-[40px] max-md:hidden'>
                        <HiOutlineX size={40} className='hover:cursor-pointer hover:scale-125 transform transition duration-200' onClick={() => setIsOpen(false)}/>
                            {/* <Image src={"/close-outline.svg"} alt={"close"}
                                className='hover:cursor-pointer'
                                width={40}
                                height={40}
                                onClick={() => setIsOpen(false)}
                                layout="fixed" /> */}
                        </div>
                    </div>
                    <p className='max-w-[661px] text-[#8B8B8B] text-[25px] font-bold max-md:text-[16pt]'>{text}</p>
                </div>

            </div>

        </div>
    )
}

export default PopUp