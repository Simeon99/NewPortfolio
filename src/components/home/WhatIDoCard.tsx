'use client'

import PopUp from '@/components/PopUp'
import { SlArrowRightCircle } from "react-icons/sl";
import React, { useState } from 'react'


interface ICardItem {
    title: string;
    text: string;
}

const WhatIDoCard = ({ item }: { item: ICardItem }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className='bg-[#F4F4F4] relative w-[290px] h-[384px] cursor-pointer'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsOpen(true)}
            >
                <div className='w-full h-[12px] bg-black'></div>
                <div className='px-[26px] pt-[29px] flex-col'>
                    <div className={`h-[85px] flex flex-col justify-end  ${isHovered ? 'translate-y-[-10px] transition duration-300 ease-out' : 'ease-out duration-300'}`}>
                        <h1 className={`#000000 sm:text-[36px] text-[32px] leading-tight font-bold  font-berghan`}>{item.title}</h1>
                    </div>
                    <p className={`pt-[21px] line-clamp-3 ${isHovered ? 'translate-y-[-10px] transition duration-300 ease-out' : 'ease-out duration-300'}`}>{item.text}</p>
                    <div className='flex flex-row justify-center absolute bottom-[27px] gap-[14px]'>
                        <div className={`${isHovered ? '-rotate-45 transition duration-300 ease-out' : 'ease-out duration-300'}`}>
                            {/* <Image src={'/arrow-right-circle.svg'} alt={"Logo"}
                                width={22.5}
                                height={36} /> */}
                                <SlArrowRightCircle  size={30}/>
                        </div>
                        <span className='flex flex-col justify-center'>View more</span>
                    </div>
                </div>
            </div>
            <PopUp isOpen={isOpen} setIsOpen={setIsOpen} title={item.title} text={item.text} />
        </>

    )
}

export default WhatIDoCard