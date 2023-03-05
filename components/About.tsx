import React from 'react';
import {motion} from 'framer-motion';


type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>

        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
        <motion.img 
        src="/img2.JPG"
       
        initial={{
            x:-200,
            opacity:0

        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        transition={{
            duration:1.2,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95
        xl:w-[200px] xl:h-[300px]"

         />
         <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold" >A little <span className='text-[#39FF14]'>intro</span></h4>
         </div>
         </div>
    
  )
}

