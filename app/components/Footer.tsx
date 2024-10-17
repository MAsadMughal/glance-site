import React from 'react'
import SolutionsCard from './SolutionsCard'
import { BiSolidPieChartAlt2 } from 'react-icons/bi'
import { HiDocumentMagnifyingGlass } from 'react-icons/hi2'
import { IoDocumentText, IoShieldCheckmarkSharp } from 'react-icons/io5'
import Image from 'next/image'
import { BsInstagram, BsLinkedin, BsMedium, BsTwitter } from 'react-icons/bs'
import { FaMedium } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='font-poppins'>
            <div className="flex flex-col mt-24 items-center px-5 md:px-5 lg:px-10 xl:px-28 py-4 ">
                <p className="text-blue font-medium md:text-xs mb-4">SOLUTIONS</p>
                <p className="text-black font-medium text-3xl mb-10 md:text-4xl text-center">Solutions for Healthcare Providers</p>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex justify-center md:hidden">
                        <Image alt="" className="rounded-2xl object-cover"  src="/solutionsLanding.png" width={1000} height={1000} />
                    </div>
                    <SolutionsCard title="Healthcare Business Analytics" Icon={<BiSolidPieChartAlt2 />}  />
                    <SolutionsCard title="Revenue Cycle Management Solutions" Icon={<HiDocumentMagnifyingGlass />}  />
                    <div className="flex justify-center row-span-2 max-md:hidden">
                        <Image alt="" className="rounded-2xl object-cover"  src="/solutionsLanding.png" width={1000} height={1000} />
                    </div>
                    <SolutionsCard title="Clinical documentation improvement Solutions" Icon={<IoDocumentText />}  />
                    <SolutionsCard title="Advance Clinical Decision Support Solutions" Icon={<IoShieldCheckmarkSharp />} />
                </div>
            </div>
            <div className='bg-footer mt-20 bg-no-repeat bg-cover px-5 md:px-5 lg:px-10 xl:px-28 py-4'>
                <div className='bg-white flex flex-col rounded-3xl my-20 py-12 md:px-5 lg:px-10 xl:px-24 px-2'>
                    <div className='flex flex-col md:flex-row gap-y-10 md:gap-y-6 gap-x-20 justify-start md:justify-between px-8'>
                        <div className='flex flex-col md:w-1/3'>
                            <p className='text-blue font-semibold md:text-lg mb-6'>Company</p>
                            <ul className='list-none text-sm md:text-base text-gray-500 space-y-6'>
                                <li className='font-medium '>About Us</li>
                                <li className='font-medium '>Why Glance</li>
                                <li className='font-medium '>Career</li>
                                <li className='font-medium '>Partners</li>
                            </ul>
                        </div>
                        <div className='flex flex-col md:w-1/3'>
                            <p className='text-blue font-semibold text-lg mb-6'>Solution</p>
                            <ul className='list-none text-sm md:text-base text-gray-500 space-y-6'>
                                <li className='font-medium '>For Clinical Care Team</li>
                                <li className='font-medium '>For Clinical documentation improvement</li>
                                <li className='font-medium '>For Revenue Cycle management </li>
                                <li className='font-medium '>For Healthcare Business analytics</li>
                            </ul>
                        </div>
                        <div className='flex flex-col md:w-1/3'>
                            <p className='text-blue font-semibold text-lg mb-6'>Knowledge center</p>
                            <ul className='list-none text-sm md:text-base text-gray-500 space-y-6'>
                                <li className='font-medium '>News</li>
                                <li className='font-medium '>Events</li>
                                <li className='font-medium '>Resources</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-16 flex flex-col gap-y-4 md:gap-y-6 items-center px-8'>
                        <div className=' max-w-24'>
                            <Image alt='' width={200} height={200} src={'/logo.png'} />
                        </div>
                        <p className='font-medium text-xs max-w-96 text-center text-gray-500 md:text-sm'>Transforming Saudi Healthcare: One Breakthrough at a Time. Optimize Operations, Enhance Outcomes, Reduce Costs. Join the transformation.</p>
                        <div className='flex flex-row justify-center my-4 gap-x-2 text-gray-400'>
                            <div className='hover:text-blue w-10 h-10 hover:bg-slate-100  rounded-md flex items-center justify-center'><BsTwitter /></div>
                            <div className='hover:text-blue w-10 h-10 hover:bg-slate-100  rounded-md flex items-center justify-center'><FaMedium /></div>
                            <div className='hover:text-blue w-10 h-10 hover:bg-slate-100  rounded-md flex items-center justify-center'><BsInstagram /></div>
                            <div className='hover:text-blue w-10 h-10 hover:bg-slate-100  rounded-md flex items-center justify-center'><BsLinkedin /></div>
                        </div>
                        <div className='flex flex-row flex-nowrap text-xs justify-center  min-w-full md:text-sm'>
                            <div className='text-center md:w-44 w-1/3'>
                                <p className='text-gray-400'>Cookies</p>
                            </div>
                            <div className='text-center md:w-44 w-1/3' >
                                <p className='text-gray-400'>Privacy Policy</p>
                            </div>
                            <div className='text-center md:w-44 w-1/3' >
                                <p className='text-gray-400'>Term of Conditions</p>
                            </div>
                        </div>
                        <div className='border-b-slate-400 border-b min-w-full opacity-35'></div>

                        <p className='text-gray-400 mt-4 text-center text-xs'>
                            ©2024 Glance. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer