import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ViewTaskDetails() {
  const [taskDetails, setTaskDetails] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEOGENE_SERVER_URL}/getTaskDetails`)
        setTaskDetails(response.data.data)
        console.log(response.data.data)
      } catch (error) {
        console.error(error.message)
      }
    }

    fetchData()
  }, [])

  const zebraStripe = (i) => {
    return (i + 1) % 2 === 0 ? 'bg-blue-300' : 'bg-white'
  }

  return (
    <div>
      <div className=' pt-16 '>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-6 inline-block min-w-full sm:px-6 lg:px-8 '>
            <div className='overflow-hidden rounded'>
              <table className='min-w-full text-center '>
                <thead className=''>
                  <tr>
                    <th
                      scope='col'
                      className='text-sm font-medium px-1 py-4 text-center bg-blue-900 text-white '
                    >
                      Task Number
                    </th>
                    <th
                      scope='col'
                      className='text-sm font-medium px-1 py-4 text-left bg-blue-900 text-white '
                    >
                      Process Name
                    </th>
                    <th
                      scope='col'
                      className='text-sm font-medium px-1 py-4 ml- text-left bg-blue-900 text-white '
                    >
                      Step Name
                    </th>
                    <th
                      scope='col'
                      className='text-sm font-medium px-32 py-4  text-left bg-blue-900 text-white '
                    >
                      Description
                    </th>
                  </tr>
                </thead>

                {taskDetails &&
                  taskDetails?.map((details, i) => (
                    <tbody key={i}>
                      <tr className={`${zebraStripe(i)}`}>
                        <td className='text-sm text-gray-900 font-light px-8 py-4 text-left whitespace-nowrap  '>
                          {details.TaskID}
                        </td>
                        <td className='text-sm text-gray-900 font-light px-1 py-4 ml- text-left whitespace-nowrap  '>
                          {details.ProcessName}
                        </td>
                        <td className='text-sm text-gray-900 font-light px-1 py-4 ml- text-left whitespace-nowrap  '>
                          {details.StepName}
                        </td>
                        <td className='text-sm text-gray-900 font-light px-10 py-4 ml- text-left whitespace-nowrap  '>
                          {details.StepDesc}
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewTaskDetails
