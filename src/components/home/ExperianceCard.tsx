'use client'


import React, { useState } from 'react'
import Link from 'next/link'
import { ResponseDataExperiance } from '@/data/experiences'

const ExperianceCard = ({ item, className }: { item: ResponseDataExperiance, className: string }) => {

    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link href={`/experience/${item.id}`} className={`border-t-[1px] ${className} border-white py-4  text-white  hover:bg-green active:bg-green active:text-black hover:text-black  hover:cursor-pointer`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='grid grid-cols-4 max-[980px]:grid-cols-1 px-8 max-[980px]:px-4 font-berghan  place-content-center justify-start '>
                <div className='flex flex-col align-middle justify-center max-[980px]:hidden '>
                    <span className='text-[32px] '>
                        {item.fromTo}
                    </span>
                    <span className='font-quicksand'>
                        {item.duration}
                    </span>
                </div>
                <div className={`text-[32px] flex items-center  ${isHovered ? 'max-[980px]:text-black' : 'max-[980px]:text-green'} leading-none`}>{item.companyName}</div> 
                <div className='flex-row items-center  gap-2 align-middle hidden max-[980px]:flex'>
                    <div className={`h-[70%] w-[2px] bg-white ${isHovered ? 'max-[980px]:bg-black' : ''} leading-none`}>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[20px] '>
                            {item.fromTo}
                        </span>
                        <span className='text-[14px] font-quicksand'>
                            {item.duration}
                        </span>
                    </div>

                </div>
                <div className='text-[32px] max-[980px]:text-[20px] col-span-2 max-[980px]:col-span-1 max-[980px]:pt-4 flex items-center max-[980px]:font-quicksand'>{item.position}</div>
            </div>
        </Link>
    )
}

export default ExperianceCard