import Image from "next/image";
import CaseStudyCard from "./components/CaseStudyCard";
import { Poppins } from "next/font/google";



export default function Home() {

  return (
    <div className={`mt-12 md:mt-28 font-poppins`} >
      <div className="flex flex-row items-center px-5 md:ps-5 md:pe-0 lg:ps-10 xl:ps-28 ">
        <span className="text-zinc-800 md:text-neutral-400 font-medium lg:text-sm">Home</span>
        <div className="w-1 h-1 bg-slate-200 rounded-full mx-4"></div>
        <span className="text-blue text-sm lg:text-sm font-medium">HCP</span>
      </div>
      <div className="flex flex-row px-5 md:ps-5 md:pe-0 lg:ps-10 xl:ps-28 py-4 flex-wrap md:gap-x-14 gap-y-6 justify-between md:flex-nowrap">
        <div className="flex flex-col justify-start w-full md:w-3/5  gap-y-6">
          <div className="hidden md:flex flex-row items-center flex-wrap gap-y-2 gap-x-3 text-nowrap">
            <span className="bg-blue rounded-xl px-3 text-white text-xs xl:text-sm">HEALTHCARE PROVIDERS</span>
            <div className="w-3 h-3 bg-slate-200 rounded-full mx-2"></div>
            <span className="text-neutral-400 text-xs xl:text-sm">Hospital</span>
            <div className="w-3 h-3 bg-slate-200 rounded-full mx-2"></div>
            <span className="text-neutral-400 text-xs xl:text-sm">Polyclinic</span>
            <div className="w-3 h-3 bg-slate-200 rounded-full mx-2"></div>
            <span className="text-neutral-400 text-xs xl:text-sm">Primary Care Providers</span>
          </div>
          <p className="text-black font-medium text-5xl lg:text-6xl w-10/12 md:w-full">Pioneering Innovation in Healthcare Solutions</p>
          <p className="text-gray-700 text-lg md:text-xl">Transforming Saudi Healthcare: Revolutionizing Efficiency, Accuracy, and Innovation at Every Glance.</p>
          <div className='rounded-full hidden md:inline w-min text-nowrap shadow-contactBtn shadow-blue-400 md:rounded-3xl lg:rounded-full p-0.5 bg-gradient-to-r from-pink from-10% via-blue via-50% to-pink to-100%'>
            <button className='text-xs md:text-sm lg:text-lg bg-blue text-white px-5 lg:px-6 py-2 lg:py-3 rounded-full md:rounded-3xl lg:rounded-full'>Contact Us</button>
          </div>
        </div>


        <div className="w-full md:w-2/5 md:my-5 xl:my-0 my-2 flex md:items-center lg:items-start justify-end"><Image src="/home-doctor-img.png" alt="" height={1000} width={1000} /> </div>
      </div>

      <div className="bg-landingCases bg-no-repeat lg:bg-repeat bg-cover lg:bg-contain py-16 md:py-20 mt-20 xl:mt-40 md:px-20">
        <div className="flex flex-col items-center">
          <p className="text-blue font-medium text-xs mb-4">CASE STUDY</p>
          <p className="text-black font-medium text-3xl mb-20 md:text-4xl text-center ">Customers’ Use Cases</p>
          <div className="flex flex-row flex-wrap md:gap-x-6 justify-center gap-y-10">
            <CaseStudyCard image="/casestudy1.png" content="Medical group to increase claim revenue and improve documentation quality using GlanceClaim" />
            <CaseStudyCard image="/casestudy2.png" content="20+ doctor medical center prevents revenue leakage and increases coding accuracy using GlanceClaim™" />
            <CaseStudyCard image="/casestudy3.png" content="40-year-old multi-specialty improves patien..." />
          </div>
        </div>
      </div>


    </div >
  );
}
