import React from 'react'
import "./construction.scss"

function Construction() {
  return (
    <div className='bg-gradient-to-r from-indigo-500 to bg-blue-200 construction border mx-auto my-28 rounded-lg drop-shadow-2xl '>
      <div className='mx-auto mt-24 flex flex-col'>
        <div className='text-5xl italic text-white m-auto pb-10'>Feature Coming Soon...</div>
        <div className='text-2xl text-white m-auto '>Page is under construction</div>
        <div className='mx-auto mt-12'>
          <span className="material-symbols-outlined text-white text-9xl">
            Engineering
          </span>
        </div>
      </div>
    </div>
  )
}

export default Construction