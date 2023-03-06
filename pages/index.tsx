import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>portfolio</title>
     </Head>
    <Header/>
    <section id='hero' className='snap-start'>
     <Hero/>

    </section>

    <section id="about" className='snap-center'>
      <About/>
    </section>
    <section id='experience' className='snap-center'>
      <Experience/>
    </section>
    <section id='skills' className='snap-center'>
      <Skills/>
    </section>
    <section id='projects' className='snap-start'>
      <Projects/>
    </section>
<section className='snap-start'>
  <ContactMe/>
</section>
    </div>
  )
}
