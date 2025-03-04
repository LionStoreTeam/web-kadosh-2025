import React from 'react'
import { Hero } from './_sections/Hero'
import { About } from './_sections/About'
import Content from './_sections/Content'
import { Banners } from './_sections/Banners'

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center text-center cursor-default select-none'>
      <Hero />
      <About />
      <Content />
      <Banners />
    </main>
  )
}
