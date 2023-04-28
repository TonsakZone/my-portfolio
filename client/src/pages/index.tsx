import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/Header'
import Me from '@/components/Me'
import About from '@/components/About'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Project from '@/components/Project'

const Home: NextPage = () => {
  return (
    <div className="bg-[#b08968] text-[#ede0d4] h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Tonsak&lsquo;s Portfolio</title>
      </Head>
      {/* Header */}
      <Header />

      {/* ME */}
      <section id="me" className='snap-center'>
        <Me />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* Education */}
      <section id="education" className='snap-center'>
        <Education />
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      {/* Project */}
      <section id="project" className='snap-center'>
        <Project />
      </section>

    </div>
  )
}

export default Home;
