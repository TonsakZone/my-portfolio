import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';

type Props = {};

export default function Me({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Tonsak",
            "<GuyWhoLovesToPlayPiano />",
            "And-also-coding.tsx"
        ],
        loop: true,
        delaySpeed: 2500,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircle />
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover' 
            src='https://drive.google.com/uc?export=view&id=1f-ukBUdkZaXvpjnG0LXJLCMKZGJW7k__' />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-white texl-2lg pb-2 tracking-[10px]'>Computer Science Student</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#e6ccb2' />
            </h1>
            <div className='pt-5'>
                <Link href='#about'>
                <button className='meButton'>About</button>
                </Link>
                <Link href='#education'>
                <button className='meButton'>Education</button>
                </Link>
                <Link href='#skills'>
                <button className='meButton'>Skills</button>
                </Link>
                <Link href='#project'>
                <button className='meButton'>Project</button>
                </Link>
            </div>
            </div>
        </div>
    )
}