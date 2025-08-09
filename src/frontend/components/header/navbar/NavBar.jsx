import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='w-full flex justify-center gap-10'>
      <NavLink>Inicio</NavLink>
      <NavLink>Nosotros</NavLink>
      <NavLink>Sal Gorda Original</NavLink>
      <NavLink>Salpicón</NavLink>
      <NavLink>Contacto</NavLink>
    </nav>
  )
}

export default NavBar
