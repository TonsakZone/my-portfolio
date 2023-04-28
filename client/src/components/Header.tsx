import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center'>
        <motion.div 
        initial={{
          opacity: 0,
          scale: 0.5,
          x: -500
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'>
            {/* Social icons */}
            <SocialIcon
            url="https://instagram.com/tonsak_ttk"
            target='_blank'
            fgColor="white"
            bgColor='transparent' />
            <SocialIcon 
            url="https://www.facebook.com/supphakorn.innuphat.3"
            target='_blank'
            fgColor="white"
            bgColor='transparent' />
            <SocialIcon 
            url="https://twitter.com/tonsak_ttk"
            target='_blank'
            fgColor="white"
            bgColor='transparent' />
            <SocialIcon 
            url="https://github.com/TonsakZone"
            target='_blank'
            fgColor="white"
            bgColor='transparent' />
        </motion.div>

        {/* <motion.div 
        initial={{
          opacity: 0,
          scale: 0.5,
          x: 500
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center text-white-300 cursor-pointer'>
        <SocialIcon
            className='cursor-pointer' 
            network='email'
            fgColor="white"
            bgColor='transparent' />
        <p className='uppercase hidden md:inline-flex text-sm text-white-400'>Contact</p>
        </motion.div> */}
    </header>
  )
}