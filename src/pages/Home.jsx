import React from 'react'
import Hero from '../components/Hero/Hero'
import ContactLink from '../containers/ContactLink'
import Build from '../containers/BuildHome'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Build />

      <ContactLink />
      
    </div>
  )
}

export default Home
