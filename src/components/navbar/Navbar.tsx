"use client"

import { useNavbar } from '@/context/NavbarContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export interface INavbarProps {
    items: INavbarItem[];
}

export interface INavbarItem {
    text: string;
    href: string;
}

const Navbar: React.FC<INavbarProps> = (props) => {

    const { items } = props;
    const [hovered, setHobered] = useState<number>();
    const [isOpen, setIsOpen] = useState(false);
    const { scrollTo } = useNavbar();
    const pathname = usePathname();

    const isInverted = pathname?.match(/^\/experience\/\d+$/)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const handleScroll = (section: string) => {
        scrollTo(section)
        setIsOpen(false);
    }

    return (
        <nav className='overflow-hidden select-none'>
            <div className='mx-auto max-w-screen-sw   w-full my-auto'>
                {/*Desktop*/}
                <div className="max-ssw:hidden py-4 flex relative  sw:px-32 lsw:px-14 px-8  justify-center w-full flex-row items-center ">
                    {isInverted ?
                        <Link href={'/'} className='text-black absolute text-[20px] left-[0px] max-sw:left-[32px] hover:scale-110 transition-transform'>{"</>"}</Link>
                        :
                        <Link href={'/'} className='text-green absolute text-[20px] left-[0px] max-sw:left-[32px] hover:scale-110 transition-transform'>{"</>"}</Link>
                    }
                    <div className='flex flex-row items-center gap-8'>
                        {items.map((i, index) =>
                            <div key={index} className='flex flex-col items-center relative justify-center h-11'>
                                <div className='hover:cursor-pointer'
                                    onMouseEnter={() => setHobered(index)}
                                    onMouseLeave={() => setHobered(-1)}
                                    onClick={() => {
                                        handleScroll(i.href)
                                    }}
                                >

                                    <div className='relative'>
                                        <span className={`font-berghan block w-full text-[20px] ${isInverted ? 'text-black' : 'text-white'}`}>{i.text}</span>
                                        <div className={`${hovered === index ? 'opacity-100' : 'opacity-0 '} absolute left-1/2 -translate-x-1/2 transition-opacity duration-300 mx-auto rounded-full w-2 h-2 ${isInverted ? 'bg-black' : 'bg-white'}`}></div>
                                    </div>

                                </div>

                            </div>
                        )}

                    </div>
                </div>

                {/*Mobile*/}
                <div className="ssw:hidden py-8 flex sw:px-32 lsw:px-14 px-8  justify-between w-full flex-row items-center ">
                    <div className={"flex flex-row items-center w-full justify-between "}>
                        {isInverted ?
                            <Link href={'/'} className='text-black text-[20px]'>{"</>"}</Link>
                            :
                            // <GoHomeFill className='hover:scale-110 transition-transform' color='#B0FF92' size={30} />}
                            <Link href={'/'} className='text-green text-[20px]'>{"</>"}</Link>
                        }
                        <div className='flex flex-row justify-end w-full'>
                            <button
                                className="focus:outline-none hidden max-ssw:block z-50"
                                onClick={toggleMenu}
                            >
                                <div className={`w-6 h-0.5 ${isInverted ? 'bg-black' : 'bg-white'} mb-1 rounded-full transition-transform ${isOpen ? `bg-white transform rotate-45 translate-y-1` : ''}`}></div>
                                <div className={`w-6 h-0.5 ${isInverted ? 'bg-black' : 'bg-white'} mb-1 rounded-full transition-opacity ${isOpen ? 'bg-white opacity-0' : 'opacity-100'}`}></div>
                                <div className={`w-6 h-0.5 ${isInverted ? 'bg-black' : 'bg-white'} rounded-full transition-transform ${isOpen ? 'bg-white transform -rotate-45 -translate-y-2' : ''}`}></div>
                            </button>
                        </div>
                        <div className={`overflow-y-auto fixed top-0 right-0 w-full h-full text-white bg-primary shadow-xl z-40 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                            <div className='flex flex-col text-[26px] pt-[76px] m-[57px] gap-8'>
                                {items.map((i, index) =>
                                    <div key={index}
                                        onClick={() => {
                                            handleScroll(i.href)
                                        }}
                                        className="hover:text-[#505050] hover:cursor-pointer font-berghan">{i.text}</div>
                                )}
                            </div>
                            <div className='flex flex-col gap-[42px] mx-[57px] my-[68px]'>
                                <div className='flex flex-row   gap-8'>
                                    <Link href={`https://www.linkedin.com/in/simeon-ilic/`} target='_blank'>
                                        <FaLinkedin size={32} color='#b0ff92' />
                                    </Link>
                                    <Link href={`https://github.com/Simeon99`} target='_blank'>
                                        <FaGithub size={32} color='#b0ff92' />
                                    </Link>
                                    <Link href={`mailto:simeonilic9@gmail.com`}>
                                        <SiGmail size={32} color='#b0ff92' />
                                    </Link>
                                </div>
                                <div>
                                    <p className='text-green'>All Rights reserved Simeon Ilić 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar