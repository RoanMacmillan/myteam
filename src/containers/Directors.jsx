import React from 'react'
import items from '../data/directors.json'
import cross from '../assets/images/icon-cross.svg'
import bgPattern from '../assets/images/bg-pattern-about-2-contact-1.svg'
import bgPattern2 from '../assets/images/bg-pattern-home-4-about-3.svg'

const Directors = () => {
  return (
    <div className='bg-deepJungleGreen px-6 pt-[88px] pb-[116px] text-center relative overflow-hidden'>

        <img className='absolute top-[-100px] left-[-100px]' src={bgPattern} alt='Background Pattern'></img>

        <h2 className=" text-[32px] font-bold text-white leading-[32px]">Meet the directors</h2>
      
      {items.map((item) => (
        <div className='mt-[52px] bg-stateGreen pt-8 pb-14 relative' key={item.id} >
        <img className='w-[96px] rounded-full mx-auto border-2 border-teal-200' src={item.image} alt='Director Image'></img>
        <h2 className='mt-4 font-bold text-[18px] leading-[28px] text-ruptureBlue'>{item.heading}</h2>
        <h3 className='italic text-[15px] leading-[25px] font-medium text-white'>{item.subheading}</h3>
        <div className='flex justify-center'>
        <button className='absolute bottom-[-28px] w-[56px] h-[56px] rounded-full bg-lightCoral flex items-center justify-center'><img src={cross} alt='Cross button'></img></button>
        </div>
        </div>
      ))}

      <img className='absolute bottom-0 right-0' src={bgPattern2} alt='background pattern'></img>

    </div>
  )
}

export default Directors
