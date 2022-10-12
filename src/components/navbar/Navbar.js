import React, { useState } from 'react'
import NeogeneLogo from '../../assets/logo/neogene_logo.png'
import Userlogo from '../../assets/icons/user.png'

export default function navbar() {
  const [menuDropDown, setMenuDropDown] = useState(false)

  const handleDropDown = () => {
    setMenuDropDown(!menuDropDown)
  }

  return (
    <nav class='bg-white fixed w-full z-10'>
      <div class='mx-auto  sm:px-6 md:px-6'>
        <div class='relative flex h-14 items-center justify-between'>
          <img className='h-10 pl-4' src={NeogeneLogo}></img>
          <div class='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <div class='relative ml-3'>
              <button
                type='button'
                class='flex flex-row text-xs hover:bg-gray-200 px-4 py-2 rounded-lg'
                onClick={handleDropDown}
              >
                <div className='py-2 pr-3'>{'Simpson	Mitzi'}</div>
                <img class='h-8 w-8 rounded-full' src={Userlogo} alt='' />
              </button>

              {menuDropDown && (
                <div
                  class='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu-button'
                  tabindex='-1'
                >
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 '
                    role='menuitem'
                    tabindex='-1'
                    id='user-menu-item-0'
                  >
                    Your Profile
                  </a>
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 '
                    role='menuitem'
                    tabindex='-1'
                    id='user-menu-item-1'
                  >
                    Settings
                  </a>
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 '
                    role='menuitem'
                    tabindex='-1'
                    id='user-menu-item-2'
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}