import React from 'react'

const ButtonHeader = ({ children }) => {
  return (
    <button className='w-50 h-15 border-1 bg-black text-yellow-50'>
      {children}
    </button>
  )
}

export default ButtonHeader
