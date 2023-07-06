import React from 'react'
import ContactLink from '../containers/ContactLink'
import AboutHero from '../components/Hero/AboutHero'
import Directors from '../containers/Directors'
import Clients from '../containers/Clients'

const About = () => {
  return (
    <div>
      <AboutHero />
      <Directors />
      <Clients />
      <ContactLink />
    </div>
  )
}

export default About
