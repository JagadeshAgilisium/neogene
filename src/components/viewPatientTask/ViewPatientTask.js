import React from 'react'
export default function ViewPatientTask({ fetchedPatientTask, status }) {
  if (status === 200) {
    return (
      <>
        <div className='overflow-x-auto relative my-3 sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-white  bg-blue-900 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  Execution Order
                </th>
                <th scope='col' className='py-3 px-6'>
                  Process Name
                </th>
                <th scope='col' className='py-3 px-7'>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {fetchedPatientTask.map((fetchedPatientTask, i) => {
                return (
                  <tr
                    className={
                      fetchedPatientTask.Status == 'WIP'
                        ? 'bg-blue-200   dark:bg-gray-900 dark:border-gray-700 hover:bg-blue-300 border-blue-500'
                        : fetchedPatientTask.Status=='Validation' ?'bg-gray-100 border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100' :'bg-white border-b text-black dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100'
                    }
                 key={i} >
                    <td className='py-4 px-6'>
                      {fetchedPatientTask.ExecutionOrder}
                    </td>
                    <td className='py-4 px-6'>
                      {fetchedPatientTask.Task.ProcessName}
                    </td>
                    {fetchedPatientTask.Status == 'Completed' ? (
                      <td className='py-4 px-6 '>
                        <span className='bg-green-100 text-green-500 border border-green-500 rounded px-1 py-1'>
                          {fetchedPatientTask.Status}
                        </span>
                      </td>
                    ) : fetchedPatientTask.Status == 'WIP' ? (
                      <td className='py-4 px-6 text-green-900'>
                        <div className='flex flex-row flex-auto gap-9'>
                          {/* <span className='bg-yellow-100 text-yellow-500 border border-yellow-500 rounded px-6 py-1'>
                            {fetchedPatientTask.Status}
                          </span>{' '} */}
                          <button className='px-5 py-1 bg-blue-500 text-white border rounded border-blue-700 uppercase'>Scan</button>{' '}
                        </div>
                      </td>
                    ) : fetchedPatientTask.Status == 'Pending' ? (
                      <td className='py-4 px-6 text-grey-900'>
                        {/* <span className='bg-grey-100 text-grey-500 border border-black rounded  px-3 py-1'>
                        Pending
                        </span> */}
                      </td>
                    ) : null}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </>
    )
  }

  return null
}
