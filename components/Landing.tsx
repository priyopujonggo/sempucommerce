import React from 'react'
import Image from 'next/image'
import Button from './Button'

function Landing() {
  return (
    <section className='sticky top-0 mx-auto flex h-screen max-w[1350px] items-center justify-between px-8'> 
        <div className='space-y-8'>
            <h1 className='space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl'>
                <span className='block bg-gradient-to-r 
                from-pink-500 to-violet-500 bg-clip-text text-transparent'>Powered</span>
                <span className='block'>By Sempu </span>
                <span className='block'>Driven By Sanity.io</span>
            </h1>
            <div className='space-x-8'>
                <Button title="Buy Now"/>
                <a className='link' href="">Learn More</a>
            </div>
        </div>

        <div className='relative hidden h-[450px] transition-all duration-500
        md:inline lg:h-[650] lg:w-[650px]'>
            <Image src="/iphone.png" layout="fill" objectFit="contain" />.
        </div>
    </section>
  )
}

export default Landing