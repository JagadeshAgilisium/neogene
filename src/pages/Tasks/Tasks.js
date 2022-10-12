import React from 'react'
import ViewTaskDetails from '../../components/viewPatientTaskDetails/viewTaskDetails'

function Tasks() {
  return (
    <div>
      <div className='flex justify-between ' style={{ width: '100%' }}>
        <div className='mt-1 font-semibold text-2xl'>Tasks</div>

        <div className='flex justify-between'>
          <div className='mr-5'>
            <button
              type='button'
              className='inline-block colour px-6 py-2.5  text-white font-medium text-sm leading-tight  rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-xl transition duration-150 ease-in-out bg-blue-700 hover:text-blue-700 hover:bg-white'
            >
              Edit Tasks
            </button>
          </div>
          <div>
            <button
              type='button'
              className='inline-block colour px-6 py-2.5  text-white font-medium text-sm  leading-tight  rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-xl transition duration-150 ease-in-out bg-blue-700  hover:text-blue-700 hover:bg-white'
            >
              + Add Tasks
            </button>
          </div>
        </div>
      </div>
      <ViewTaskDetails></ViewTaskDetails>
    </div>
  )
}

export default Tasks