import React from 'react'
import Image from 'next/image'
import later from '../image/spongebob-later.gif'

type Props = {}

export default function Projects({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 
    justify-evenly mx-auto items-center'>
      <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>
      <Image className='relative mx-auto object-cover sm:w-64 sm:h-64 lg:h-auto lg:w-auto'
        src={later} alt='Will Be back' width={800} height={800}/>
    </div>
  )
}