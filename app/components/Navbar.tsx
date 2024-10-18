import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import MobileMenu from './MobileMenu'
import { useState } from 'react'
import NavbarSolutionsSubMenu from './NavbarSolutionsSubMenu'
const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 bg-white px-5 md:px-5 lg:px-10 xl:px-28 py-4 border-b md:border-none'>
            <div className='flex flex-row items-center justify-between'>
                <div className='min-w-16 md:min-w-24 max-w-24 pr-3 md:pr-0 border-r py-1 md:py-0 md:border-r-0'>
                    <Image alt='' width={200} height={200} src={'/logo.png'} />
                </div>
                <div className='hidden md:flex flex-row text-nowrap justify-between gap-x-5 font-poppins'>
                    <div className='flex flex-row text-nowrap items-center gap-x-1'>
                        <div className='cursor-pointer px-2 lg:px-4 py-1 lg:py-2 text-black font-medium text-xs md:text-sm lg:text-lg'>About Us</div>
                        <div className='cursor-pointer px-2 lg:px-4 py-1 lg:py-2 text-black font-medium text-xs md:text-sm lg:text-lg'>Why Glance</div>
                        <NavbarSolutionsSubMenu />
                        <div className='cursor-pointer px-2 lg:px-4 py-1 lg:py-2 text-black font-medium text-xs md:text-sm lg:text-lg'>Knowledge Centre</div>
                    </div>
                    <div className='text-black font-medium flex text-lg gap-x-2'>
                        <button className='text-blue border border-blue px-2 lg:px-6 py-2 lg:py-3 md:rounded-3xl lg:rounded-full text-xs md:text-sm lg:text-lg'>Log In</button>
                        <div className='rounded-full shadow-contactBtn shadow-blue-400 md:rounded-3xl lg:rounded-full p-0.5 bg-gradient-to-r from-pink from-10% via-blue via-50% to-pink to-100%'>
                            <button className='text-xs md:text-sm lg:text-lg bg-blue text-white px-2 lg:px-6 py-2 lg:py-3 md:rounded-3xl lg:rounded-full'>Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className='md:hidden'>
                    <MobileMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar