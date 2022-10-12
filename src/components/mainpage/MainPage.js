import React from 'react'
import Layout from '../layout/Layout'
import SideBar from '../sideBar/SideBar'
import NavPage from '../navPage/NavPage'

export default function MainPage() {
  return (
    <Layout>
      <div className='flex p-4'>
        <div className='w-1/6 bg-white h-screen pr-2 mt-10 '>
          <SideBar />
        </div>
        <div className='w-5/6 bg-gray-100 p-7 mt-10'>
          {' '}
          <NavPage />
        </div>
      </div>
    </Layout>
  )
}
