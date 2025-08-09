import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='w-full flex justify-center gap-10'>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/nosotros">Nosotros</NavLink>
      <NavLink to="/sal-gorda-original">Sal Gorda Original</NavLink>
      <NavLink to="/salpicon">Salpicón</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  )
}

export default NavBar
