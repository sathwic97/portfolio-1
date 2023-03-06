import React from 'react';
import {motion} from 'framer-motion';
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';

type Props = {}

export default function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center
     md:text-left md:flex-rowmax-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>

<div className='flex flex-col space-y-10 max-h-72 mb-20'>
    <h4 className='text-4xl font-semibold -mb-5 text-center'>Lets {" "}
    <span className='text-[#39FF14]/50'>talk</span></h4>

<div>
    <div className='flex items-center p-1 space-x-5 justify-center'>
    <PhoneIcon className='text-[#39FF14] h-7 w-7 animate-pulse'/>
    <p className='text-sm'>+91-7780745188</p>
    </div>
    <div className='flex items-center p-1 space-x-5 justify-center'>
    <MapPinIcon className='text-[#39FF14] h-7 w-7 animate-pulse'/>
    <p className='text-sm'>Proddatur,Andhra Pradesh - 516360.</p>
    </div>
    <div className='flex items-center p-1 space-x-5 justify-center'>
    <EnvelopeIcon className='text-[#39FF14] h-7 w-7 animate-pulse'/>
    <p className='text-sm'>sathwic97@gmail.com</p>
    </div>
</div>

<form className='flex flex-col space-y-2 w-fit mx-auto'>
    <div className='flex space-x-2'>
        <input type='text' placeholder='Name' className='contactInput h-9'/>
        <input type='email' placeholder='Email' className='contactInput h-9'/>
    </div>
    <input type='text' placeholder='Subject' className='contactInput h-9'/>
    <textarea placeholder='Message' className='contactInput overflow-x-clip overflow-y-scroll max-h-24'/>
    <button className='bg-[#39FF14] py-5 px-10 rounded-md text-black font-bold text-lg' type='submit'>Submit</button>
</form>

</div>

    </div>
  )
}

