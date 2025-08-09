import React from 'react'
import Header from '../../../components/header/Header'
import haloliving from '../../../../assets/img/halo-interior5.jpeg'
import barliving from '../../../../assets/img/bar-interior.png'

const MainHome = () => {
  return (
    <>
      <section className=' h-100% flex items-center w-full absolut '>
        <Header />
      </section>
      <section className='h-screen'>
        {/* <div className='h-200'>
          <div>
            <img src={haloliving} alt='' />
          </div>
          <div></div>
        </div> */}
        <main className="px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bar Sal Gorda Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-stone-900 mb-4 tracking-tight">BAR SAL GORDA</h1>
                  <div className="w-24 h-1 bg-amber-400"></div>
                </div>

                <p className="text-lg text-stone-600 leading-relaxed max-w-md">
                  Ubicado en el céntrico barrio de la alfalfa, fue el primero de los establecimientos que los hermanos
                  cabrera abrieron en 2015
                </p>
              </div>

              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={barliving}
                  alt="Interior del Bar Sal Gorda"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Salpicon Section */}
            <div className="space-y-8">
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={haloliving}
                  alt="Interior de Salpicon"
                  width={600}
                  height={350}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-stone-900 mb-4 tracking-tight">SALPICON</h2>
                  <div className="w-24 h-1 bg-amber-400"></div>
                </div>

                <p className="text-lg text-stone-600 leading-relaxed">
                  Ubicado en el céntrico barrio de la alfalfa, fue el primero de los establecimientos que los hermanos
                  cabrera abrieron en 2015
                </p>

                <div className="flex items-center space-x-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg">
                    <img
                      src="/gourmet-food-preparation.png"
                      alt="Plato de Salpicon"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm text-stone-500 font-medium">Especialidad de la casa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </section>
    </>
  )
}

export default MainHome
