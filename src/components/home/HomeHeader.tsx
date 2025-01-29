"use client"

import React from 'react'
import Button from '../Button'

const HomeHeader = () => {

    
    return (
        <div className='text-white font-berghan text-5xl h-[474px] flex flex-col justify-end py-8'>
            {/*  */}
            <h1 className="text-[70px] max-lg:text-[50px] max-ssw:text-[45px]   text-white leading-none animate-pupSlideIn font-berghan">Hello,</h1>
            <h1 className="text-[70px] max-lg:text-[50px] max-ssw:text-[45px]  text-white leading-none animate-pupSlideIn font-berghan">I am Simeon Ilić</h1>
            <h1 className="text-[70px] max-lg:text-[50px] max-ssw:text-[45px]  text-green leading-none animate-pupSlideIn font-berghan">Software Developer.</h1>

            <div className='w-[200px] my-8'>
                <Button variant="primary" className='font-berghan' size="large" onClick={() => alert("Primary Button Clicked!")}>
                    Download CV
                </Button>
            </div>
        </div>
    )
}

export default HomeHeader