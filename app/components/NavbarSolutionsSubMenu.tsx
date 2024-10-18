'use client'
import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const NavbarSolutionsSubMenu = () => {
    const [subMenuOpen, setSubMenuOpen] = useState(false)
    return (
        <div className='relative'>
            <div className='cursor-pointer px-2 lg:px-4 py-1 lg:py-2 text-black font-medium text-xs md:text-sm lg:text-lg flex items-center gap-x-1' onClick={() => setSubMenuOpen((prev) => !prev)}>Solutions <MdKeyboardArrowDown className={`${subMenuOpen && 'rotate-180'}`} /></div>
            {subMenuOpen && <div className='absolute md:top-10 lg:top-14 h-40 shadow-md rounded-lg py-3  px-5 md:px-5 lg:px-10 xl:px-28  left-0 bg-white'>Solutions Section Content.</div>}
        </div>

    )
}

export default NavbarSolutionsSubMenu