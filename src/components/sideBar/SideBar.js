import React from 'react'
import { SideBarData } from '../../data/sideBarData'
import { NavLink } from 'react-router-dom'

export default function SideBar() {
  const activeLink =
    'hover:bg-gray-100 text-blue-500 mt-4 py-6 px-4 w-full h-7 flex justify-start items-center  bg-gray-100'
  const normalLink =
    'hover:bg-gray-100  hover:text-blue-500 px-4 py-6 mt-4 w-full h-7 flex justify-start items-center text-gray-600 '

  return (
    <React.Fragment>
      <section className='fixed w-1/6'>
        <div className='text-black w-full'>
          {SideBarData.map((item, index) => {
            return (
              <div key={index} className="w-5/6">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span>{item.title}</span>
                </NavLink>
              </div>
            )
          })}
        </div>
      </section>
    </React.Fragment>
  )
}
