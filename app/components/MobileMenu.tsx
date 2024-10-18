'use client'
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';

const MobileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const [subMenuOpen, setSetMenuOpen] = useState(false);


    return (
        <div className='z-50'>
            <div className="text-3xl text-blue cursor-pointer" onClick={toggleMenu}>
                <AiOutlineMenu />
            </div>
            {isOpen && (
                <div className="absolute h-screen flex flex-col justify-between pt-4  bg-white shadow-md rounded-b-2xl font-poppins px-5 top-0 left-0 w-full" ref={menuRef}>

                    <div className='flex flex-col'>
                        <div className='flex flex-row items-center justify-between '>
                            <div className='min-w-16 md:min-w-24 max-w-24 pr-3 md:pr-0 border-r py-1 md:py-0 md:border-r-0'>
                                <Image alt='' width={200} height={200} src={'/logo.png'} />
                            </div>
                            <div className='text-3xl text-blue cursor-pointer' onClick={toggleMenu}>
                                <IoClose />
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2 mt-5'>
                            <div>About Us</div>
                            <div>Why Glance</div>
                            <div className='flex flex-row items-center gap-x-1'>Solutions <MdKeyboardArrowDown className={`${subMenuOpen && 'rotate-180'}`} onClick={() => setSetMenuOpen((prev) => !prev)} /></div>
                            {subMenuOpen && <div className='ps-3'>Solutions SubMenu Content Here</div>}
                            <div>Knowledge Centre</div>
                        </div>
                    </div>
                    <div>
                        <div className='border-b-slate-400 border-b min-w-full  opacity-35'></div>
                        <div className="flex flex-row justify-end gap-x-3 my-2">
                            <button className='text-blue border border-blue px-5 py-2 text-xs rounded-full'>Log In</button>
                            <div className='rounded-full shadow-md shadow-blue-400  p-0.5 bg-gradient-to-r from-pink from-10% via-blue via-50% to-pink to-100%'>
                                <button className='text-xs rounded-full  bg-blue text-white px-2  py-2  '>Contact Us</button>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default MobileMenu;
