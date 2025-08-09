import React from 'react'
import Header from '../../../components/header/Header'
import haloliving from '../../../../assets/img/halo-interior5.jpeg'

const MainHome = () => {
  return (
    <>
      <section className=' h-100% flex items-center w-full absolut '>
        <Header />
      </section>
      <section className='h-screen'>
        <div className='h-200'>
          <div>
            <img src={haloliving} alt='' />
          </div>
          <div></div>
        </div>
      </section>
    </>
  )
}

export default MainHome
