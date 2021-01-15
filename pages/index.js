import React from 'react'
import Navbar from 'components/navbar'
import Hero from 'components/hero'
import Services from 'components/services'

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <div className="content">
        <Services />
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  )
}