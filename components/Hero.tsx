import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import myImage from '../image/me.jpg'
import Link from 'next/link'

type Props = {}

function Hero({}: Props) {
    const[text,count] = useTypewriter({
        words:[
            "Howdy, I am Kelvin",
            "Studying In CUHK",
            "Cinephile"
        ],
        loop:true,
        delaySpeed:1750,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden mb-32'>
        <BackgroundCircles/>
        <Image className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={myImage} alt='page website' width={500} height={300}/>

        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[8px]'>Computer Engineering Student</h2>
            <h1 className='text-5xl lg:text-6xl px-10 font-extralight'>
             <span className='mr-3'>{text}</span>
             <Cursor cursorColor='#e4efe9'/>
            </h1>

            <div className='pt-5'>
              <Link href="#about">
                <button className='heroButton'>About</button>
              </Link>
              <Link href="#courses">
                <button className='heroButton'>Courses</button>
              </Link> 
              <Link href="#skills">
                <button className='heroButton'>Skills</button>
              </Link> 
              <Link href="#projects">
                <button className='heroButton'>Projects</button>
              </Link>   
            </div>
        </div>
    </div>
  )
}

export default Hero