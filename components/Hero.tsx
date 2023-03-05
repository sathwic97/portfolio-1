import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';

type Props = {}

export default function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words:[
            "Hey there, Sathwic here!",
            "Appreciate you checking my portfolio",
        ],
        loop: true,
        delaySpeed: 3000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden z-50'>
        <BackgroundCircles/>

        <Image className='relative rounded-full h-32 w-32 mx-auto object-cover '
        src='/img1.webp'
        alt="my image"
        width="200"
        height="200"/>
        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Front-End Developer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
<span className='mr-3'>{text}</span>
<Cursor cursorColor='#39FF14'/>
</h1></div>
    </div>
  )
}

