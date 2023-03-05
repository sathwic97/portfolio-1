import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div className='flex flex-row items-center'>
            <SocialIcon url='https://www.twitter.com/sathwic97'
            fgColor='gray'
            bgColor='transparent'/>
            <SocialIcon url='https://www.linkedin.com/in/sathwic-raj'
            fgColor='gray'
            bgColor='transparent'/>
            <SocialIcon url='https://www.github.com/sathwic97'
            fgColor='gray'
            bgColor='transparent'/>
        </div>
    </header>
  )
}

