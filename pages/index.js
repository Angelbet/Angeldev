import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

// ? STYLES
import styles from '@/styles/Home.module.css'

// ? COMPONENTS
import Footer from './Components/Footer'
import ProyectsHome from './Components/proyectsHome'
import SkillsScrollHome from './Components/skillsScrollHome'
import AboutHome from './Components/aboutHome'
import HeroHome from './Components/heroHome'
import LinesSection from './Components/linesSection'
import SkillHome from './Components/skillHome'
import NavTranslation from './Components/navTranslation'

import { LinkIcons } from './Components/Footer'

// ? FONTS
import { bold, extraLight, light, medium, regular, semiBold } from '@/fonts/fonts';


// ? GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export default function Home() {



  return (
    <>
      <Head>
        <title>Angeldev</title>
        <meta name="description" content="Angeldev Web Developer and Computer Engineer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon_ab.svg" />
      </Head>


      <div className={styles.grain} />

      <HeroHome />

      <NavTranslation />

      <SkillsScrollHome />

      <AboutHome />

      <LinesSection />

      <SkillHome />

      <ProyectsHome />


      <Footer />
    </>
  )
}
