import About from '@/components/About'
import Experience from '@/components/Experience'
import ExperienceCard from '@/components/ExperienceCard'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skill from '@/components/Skill'
import Skills from '@/components/Skills'
import {NextStudio} from 'next-sanity/studio'
import {StudioProvider, StudioLayout} from 'sanity'

import config from '../../sanity.config'

export default function StudioPage() {
  return (
    <NextStudio config={config}>
      <StudioProvider config={config}>
      <Header/>
      <Hero/>
      <About/>
        <Experience/>
        <Skills/>
       <Projects/>
        
        
        {/* Put components here and you'll have access to the same React hooks as Studio gives you when writing plugins */}
        <StudioLayout />
      </StudioProvider>
    </NextStudio>
  )
}