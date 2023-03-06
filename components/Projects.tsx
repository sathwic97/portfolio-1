import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';

type Props = {}

export default function Projects({}: Props) {
    const projects = [1,2,3,4,5] ;
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
    
    
    className='h-screen relative flex overflow-hidden flex-col
    text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
    
<div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
snap-mandatory z-20'>
 
{projects.map((project,i)=>(

<motion.div
// initial={{
//     opacity:0,
    
// }}
// transition={{
//     duration:1,
// }}
// whileInView={{
//     opacity:1,
    
// }}

 key={project} className='group relative flex-shrink-0 snap-center flex flex-col space-y-5 items-center
justify-center p-20 md:p-44 w-screen h-screen'>

<motion.div
initial={{y: -300,opacity:0}}
whileInView={{y:0,opacity:1}}
transition={{duration:1.2}}
viewport={{once:true}} className='relative h-28 w-28'
>
<Image src='/img2.jpg' alt='image' fill />
</motion.div>

<div className='space-y-10 px-0 md:px-10 max-w-6xl max-h-36'>
<h4 className='text-4xl font-semibold text-center'>
    <span className='underline decoration-[#39FF14]/50'>
        Case Study {i + 1} of {projects.length}
    </span>{' '}
    Project 1
</h4>
<motion.p className='text-center text-sm md:text-left opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out overflow-x-clip overflow-y-scroll max-h-28'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ducimus nisi? Temporibus exercitationem voluptatum sequi consequatur veritatis perspiciatis earum animi ad minima aperiam? Dolorem iure voluptas porro soluta, veritatis dicta. Eveniet repudiandae, aperiam magni numquam laboriosam voluptatem aspernatur eos, non amet cumque beatae possimus vero, deserunt soluta. Ratione aperiam repellat iste temporibus sed distinctio nihil obcaecati facere tenetur! Unde, quibusdam ullam. Neque quod ducimus, ab corporis at fugiat iure vitae quia nemo, eum veritatis vero perspiciatis modi incidunt? Modi asperiores suscipit eaque magni optio tempore, amet vero, esse aut blanditiis omnis quod expedita perferendis dicta maxime ipsa? Aliquid, dolorum beatae.   Lorem ipsum dolor, sit amet consectetur
 adipisicing elit. Unde dolores, nihi
 l dolorum, dignissimos quibusdam repellendus, accus
 antium voluptatem minus id dolorem et pe
 rspiciatis quaerat deserunt mollitia nostrum nobis num
 quam facilis! Hic quo aut similique ex iste, maiores rem doloremque  

</motion.p>

</div>


</motion.div>


))}



  

</div>

    <div className='w-full absolute top-[30%] bg-[#39FF14]/10 
    left-0 h-[500px] -skew-y-12'></div>
    
    </motion.div>
  )
}

