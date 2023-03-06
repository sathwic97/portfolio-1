import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';

type Props = {
    directionLeft?: boolean;
}

export default function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.div
        initial={{
            opacity:0,
            x: directionLeft ? -200 : 200,
        }}
        transition={{
            duration:1,
        }}
        whileInView={{
            opacity:1,
            x:0,
        }}
        className='relative  w-24 h-24 
        xl:w-32 xl:h-32 md:w-28 md:h-28'>
<Image 
fill
alt='skill'
src='/javascript.jpg'
className='rounded-full  border border-gray-500 object-cover filter group-hover:grayscale 
transition duration-300 ease-in-out'
/>
</motion.div>
<div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#343434] 
h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full'>
    <div className='flex items-center justify-center h-full'>
        <p className='text-3xl font-bold text-[#39FF14] opacity-100'>100%</p>
    </div>
</div>
    </div>
  )
}

