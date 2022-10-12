import React from 'react'
import NeogeneLogo from '../../assets/logo/neogene_logo.png'
import Userlogo from '../../assets/icons/user.png'

export default function navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white border border-gray-200 px-6 py-3">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
     <img className='h-8' src={NeogeneLogo}></img>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">

      </div>
      <div className='flex flex-row px-7'>
        <a href="#" className="inline-block text-sm px-4 py-2 leading-none   text-black  hover:text-gray-500 hover:bg-gray-100 mt-4 lg:mt-0">John Doe</a>
        <img  className='h-7 text-gray-100'src={Userlogo}></img>
      </div>
    </div>
  </nav>
  )
}
