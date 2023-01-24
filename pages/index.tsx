import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Courses from '@/components/Courses'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 '>
      <Head>
        <title>Portfolio Website</title>
      </Head>
      
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id='hero' className='snap-start'>
      <Hero/>
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
      <About/>  
      </section>

      {/* Courses */}
      <section id='courses' className='snap-center'>
      <Courses/>
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
      <Skills/>  
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
      <Projects/> 
      </section>

      {/* Contact Me */}
      <section id='Contact' className='snap-start'>
      <ContactMe/>
      </section>
      
      <Link href='#hero'>
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' 
          src="https://media.tenor.com/IVCnKbtTeRQAAAAC/programming-computer.gif" 
          alt="icon" />
        </div>
      </footer>
      </Link>
    </div>
  )
}
