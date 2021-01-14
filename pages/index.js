import React from 'react'
import Navbar from 'components/navbar'
import Hero from 'components/hero'
import About from 'components/about'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="content">
        <About />
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  )
}