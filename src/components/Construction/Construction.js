import React from 'react'
import "./construction.scss"

function Construction() {

  return (
    <div className='bg-gradient-to-r from-indigo-500 to bg-blue-200 construction border mx-auto my-28 rounded-lg drop-shadow-2xl '>
      <div className='mx-auto mt-24' style={{ width: "55%" }}>
        <div style={{ width: "55%" }} className='text-4xl italic mx-auto text-white'>Coming Soon...
        </div><br></br>
        <div className='text-4xl italic text-white'>Page is under construction</div>
        <div style={{ width: "30%" }} className='mx-auto  mt-12'>
          <span class="material-symbols-outlined text-white text-9xl">
            engineering
          </span>
        </div>
      </div>
    </div>
  )
}

export default Construction