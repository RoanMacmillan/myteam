import React from 'react'
import Logo from '../../assets/images/logo.svg'
import Hamburger from '../../assets/images/icon-hamburger.svg'


const Header = () => {
  return (
    <header className='flex justify-between items-center px-6 pt-12'>
        <img className='w-[128px]' src={Logo} alt='Company Logo'></img>

        <img src={Hamburger} alt='Hamburger Button'></img>


    </header>
  )
}

export default Header
