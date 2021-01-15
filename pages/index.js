import React from 'react'
import Navbar from 'components/navbar'
import Hero from 'components/hero'
import Services from 'components/services'
import Reviews from 'components/reviews'

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <div className="content">
        <Services />
        <Reviews />
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  )
}