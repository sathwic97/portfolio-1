import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';


type Props = {}

export default function About({}: Props) {
  return (
    <motion.div

initial={{
    opacity:0
}}
whileInView={{
    opacity:1
}}
transition={{
    duration:1.5
}}

     className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>

        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
        <motion.div
        className='relative mt-16 -mb-20 sm:mb-0 flex-shrink-0 w-36 h-36 md:w-64 md:h-96 
        xl:w-[256px] xl:h-[384px]'
          
          initial={{
            x:-200,
            opacity:0

        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        transition={{
            duration:1.5,
        }}
        viewport={{
            once: true
        }}><Image
        src="/img2.JPG"

     alt='another picture of me'
        className="rounded-full md:rounded-lg object-cover"
fill
         />
         </motion.div>
         <div className="px-0 space-y-10 md:px-10">
            <h4 className="text-4xl font-semibold" >A little <span className='text-[#39FF14]'>intro</span></h4>
           <p className='text-sm'>I'm a B. Com Computer Applications Graduate of 2021 
            ( GPA - 7.54). I've completed 6 months of training in MERN Full Stack Development 
            which deals in web development and creating responsive websites 
            using React Framework (REACT JS). I've completed Front-end development 
            module in AlmaBetter Full Stack Web Development course. 
            I've always been upto date with whatever tasks that were given to test our learnings. 
            I'm a curious learner, Resilient, Creative and Versatile.</p>
            
         </div>
         </motion.div>
    
  )
}

