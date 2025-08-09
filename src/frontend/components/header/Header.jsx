import React from 'react'
import NavBar from './navbar/NavBar'
import logo from '../../../assets/img/logo.png'
import ButtonHeader from '../buttons/ButtonHeader'

const Header = () => {
  return (
    <header className='flex row items-center  justify-between w-full '>
      <div className='flex items-center justify-center '>
        <img src={logo} alt='logo' className='w-32 h-32' />
      </div>
      <div className='flex  justify-center w-2xl'>
        <NavBar />
        <h1 className='hidden'>holaaa</h1>
      </div>
      <ButtonHeader>Reservar</ButtonHeader>
    </header>
  )
}

export default Header
