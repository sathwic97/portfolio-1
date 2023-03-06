import React from 'react';
import {motion} from 'framer-motion';

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]'>
<div className='px-0 md:px-10'> 
  <h4 className='text-4xl font-light'>ReactJS Intern/Trainee</h4>
  <p className='font-bold text-2xl text-[#39FF14] mt-1'>BRN Infotech</p>
  <div className='flex space-x-2 my-2'>

  </div>
  <p className='space-y-4 ml-5  text-gray-300'>01/05/2022 - 31/10/2022</p>

  <ul className='list-disc space-y-4 ml-5 text-lg'>
    <li>Summary</li>
    <li>Summary</li>
    <li>Summary</li>
    <li>Summary</li>
  </ul>
</div>



    </article>
  )
}

