import React from 'react'
import { Link } from 'react-router-dom'
import bgPattern from '../assets/images/bg-pattern-home-6-about-5.svg'

const ContactLink = () => {
  return (
    <div className='bg-lightCoral text-center text-stateGreen pt-[83px] pb-[83px] relative overflow-hidden'>
        <h4 className='text-[32px] leading-[32px] font-bold '>Ready to get<br></br> started?</h4>
        <div className='font-semibold text-[18px] leading-[28px] border-stateGreen border-solid border-2 rounded-3xl w-[153px] h-12 flex items-center justify-center mx-auto mt-6'>
        <Link  to='/contact'>contact us</Link>    
        </div>  
        <img className='absolute top-[180px] ' src={bgPattern} alt='Background Pattern'></img>
    </div>
  )
}

export default ContactLink
