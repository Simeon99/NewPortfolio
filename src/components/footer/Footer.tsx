'use client'

import { useNavbar } from '@/context/NavbarContext'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

const Footer = () => {

    const { scrollTo } = useNavbar();

    const handleScroll = (section: string) => {
        scrollTo(section);
    }

    return (
        <div id='contact' className="overflow-hidden  mx-auto bg-[#000000] flex flex-col items-center  font-sans-pro text-grey pt-[20px] text-white">

            <div className='max-w-screen-sw mx-auto w-full mt-10 mb-40'>
                <div >
                    {/*Desktop*/}
                    <div className='grid grid-cols-3 place-items-center items-start max-lsw:mx-7 max-md:hidden'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex  flex-row items-center gap-[27px]'>
                                <div className='w-6 h-[4px] bg-green'></div>
                                <div onClick={() => handleScroll("whatIDo")} className="hover:text-[#505050] text-[20px] font-berghan hover:cursor-pointer">What I do</div>
                            </div>
                            <div className='flex  flex-row items-center gap-[27px]'>
                                <div className='w-6 h-[4px] bg-green'></div>
                                <div onClick={() => handleScroll("about")} className="hover:text-[#505050] text-[20px] font-berghan hover:cursor-pointer">About me</div>
                            </div>
                            <div className='flex  flex-row items-center gap-[27px]'>
                                <div className='w-6 h-[4px] bg-green'></div>
                                <div onClick={() => handleScroll("experience")} className="hover:text-[#505050] text-[20px] font-berghan hover:cursor-pointer">Experience</div>
                            </div>
                            <div className='flex  flex-row items-center gap-[27px]'>
                                <div className='w-6 h-[4px] bg-green'></div>
                                <div onClick={() => handleScroll("tools")} className="hover:text-[#505050] text-[20px] font-berghan hover:cursor-pointer">Tools and languages</div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className='flex  flex-row items-center gap-[27px]'>
                            <FaLinkedin size={32} color='#b0ff92' />
                                <Link href={`https://www.linkedin.com/in/simeon-ilic/`} className="hover:text-[#505050] text-[20px] font-berghan">Simeon Ilic</Link>
                            </div>
                            <div className='flex  flex-row items-center gap-[27px]'>
                            <FaGithub size={32} color='#b0ff92' />
                                <Link href={`https://github.com/Simeon99`} className="hover:text-[#505050] text-[20px] font-berghan">Simeon99</Link>
                            </div>
                            <div className='flex  flex-row items-center gap-[27px]'>
                            <SiGmail size={32} color='#b0ff92' />
                                <Link href={'mailto:simeonilic9@gmail.com'} className="hover:text-[#505050] text-[20px] font-berghan">simeonilic9@gmail.com</Link>
                            </div>
                            <div className='flex  flex-row items-center gap-[27px]'>
                            <FaLocationDot size={32} color='#b0ff92' />
                                <Link href={`https://www.google.com/maps?sca_esv=15f94b9b5faf5c15&output=search&q=belgrade&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpmDtIGL1r84kuKz6yAcD_ivAVmKZxU_UoutG-TG5lqbs6lRwhrq5ZB_F86GMJ9ziSoxblqzsgsvx3IOHrG7qW4DMb6qK8PtwMvQGlwflrzrM_9O49yaXUC5JNwy8Snr8G8S5eB0rpFj6KdWoPWPj-SE59f1HdXqYJFNTdpa6lugtNmuiY&entry=mc&ved=1t:200715&ictx=111`} className="hover:text-[#505050] text-[20px] font-berghan">Belgrade, Serbia</Link>
                            </div>
                        </div>
                        <div>
                            <span className='text-[#505050] text-[15px]'>© 2024 Simeon Ilić. All rights reserved.</span>
                        </div>

                    </div>
                    {/*Mobile*/}
                    <div className='grid grid-cols-2 gap-y-6 mx-7 md:hidden'>
                        <Link href={`https://www.linkedin.com/in/simeon-ilic/`} className='flex flex-col gap-3'>
                            <FaLinkedin size={32} color='#b0ff92' />
                            <div className="hover:text-[#505050] text-[20px]">LinkedIn</div>
                        </Link>
                        <Link href={`https://github.com/Simeon99`} className='flex flex-col gap-3'>
                            <FaGithub size={32} color='#b0ff92' />
                            <div  className="hover:text-[#505050] text-[20px]">GitHub</div>
                        </Link>
                        <div className='w-full h-1 bg-green  mt-8'></div>
                        <div className='flex flex-col gap-4 col-span-2 mt-8'>
                            <div className='flex  flex-row items-center gap-[27px]'>
                                <div onClick={() => handleScroll("whatIDo")} className="hover:text-[#505050] text-[20px] font-berghan">What I do</div>
                            </div>
                            <div className='flex  flex-row items-center gap-[27px]'>
                                <div onClick={() => handleScroll("about")} className="hover:text-[#505050] text-[20px] font-berghan">About me</div>
                            </div>
                            <div className='flex  flex-row items-center gap-[27px]'>
                                <div onClick={() => handleScroll("experience")} className="hover:text-[#505050] text-[20px] font-berghan">Experience</div>
                            </div>
                            <div className='flex  flex-row items-center gap-[27px]'>
                                <div onClick={() => handleScroll("tools")} className="hover:text-[#505050] text-[20px] font-berghan">Tools and languages</div>
                            </div>
                        </div>
                        <div className='w-full h-1 bg-green  mt-8'></div>
                        
                        <div className='col-span-2 flex flex-col gap-3 mt-8'>
                            <Link href={`https://www.google.com/maps?sca_esv=15f94b9b5faf5c15&output=search&q=belgrade&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpmDtIGL1r84kuKz6yAcD_ivAVmKZxU_UoutG-TG5lqbs6lRwhrq5ZB_F86GMJ9ziSoxblqzsgsvx3IOHrG7qW4DMb6qK8PtwMvQGlwflrzrM_9O49yaXUC5JNwy8Snr8G8S5eB0rpFj6KdWoPWPj-SE59f1HdXqYJFNTdpa6lugtNmuiY&entry=mc&ved=1t:200715&ictx=111`} className="hover:text-[#505050] text-[20px]">Belgrade, Serbia</Link>
                            <Link href={'mailto:simeonilic9@gmail.com'} className="hover:text-[#505050] text-[20px]">simeonilic9@gmail.com</Link>
                            <div className=" text-[20px]">Simeon Ilić</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer