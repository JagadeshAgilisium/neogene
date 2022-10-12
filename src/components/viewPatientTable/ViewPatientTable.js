import React from 'react'

export default function ViewPatientTable({ status, subjectData }) {
  if (status === 200) {
    return (
      <>
        <div className='overflow-x-auto'>
          <div className='min-w-screen font-sans "'>
            <div className=' w-full  sm:w-auto'>
              <div className='bg-white rounded my-6 overflow-auto md:overflow-scroll'>
                <table className=' min-w-max w-full table-auto'>
                  <thead>
                    <tr className='bg-blue-900 text-white  text-sm leading-normal'>
                      <th className='py-3 px-6 text-center'>First Name</th>
                      <th className='py-3 px-6 text-center'>Last Name</th>
                      <th className='py-3 px-6 text-center'>COI</th>
                      <th className='py-3 px-6 text-center'>BatchNumber</th>
                      <th className='py-3 px-6 text-center'>DIN</th>
                      <th className='py-3 px-6 text-center'>SubjectNumber</th>
                      <th className='py-3 px-6 text-center'>LotNumber</th>
                      <th className='py-3 px-6 text-center'>DOB</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-600 text-sm font-light'>
                    <tr className='border-b border-gray-200 hover:bg-gray-100'>
                      <td className='py-3 px-4 text-center '>
                        <div className='flex items-center'>
                          <span className='font-medium m-auto'>
                            {subjectData.FName}
                          </span>
                        </div>
                      </td>
                      <td className='py-3 px-4 text-center '>
                        <div className='flex items-center'>
                          <span className='font-medium m-auto'>
                            {subjectData.LName}
                          </span>
                        </div>
                      </td>
                      
                      <td className='py-3 px-4 text-center '>
                        <div className='flex items-center'>
                          <span className='font-medium m-auto'>{subjectData.COI}</span>
                        </div>
                      </td>
                      <td className='py-3 px-4 text-center '>
                        <div className='items-center'>
                          <span className='font-medium m-auto'>
                            {subjectData.BatchNumber
                              ? subjectData.BatchNumber
                              : 'Not Found'}
                          </span>
                        </div>
                      </td> 
                      <td className='py-3 px-4 text-center '>
                        <div className='flex items-center'>
                          <span className='font-medium m-auto'>
                            {subjectData.DIN ? subjectData.DIN : 'Not Found'}
                          </span>
                        </div>
                      </td>
                      <td className='py-3 px-4 text-center '>
                        <div className='flex items-center'>
                          <span className='font-medium m-auto'>
                            {subjectData.SubjectNumber}
                          </span>
                        </div>
                      </td>
                      <td className='py-3 px-4 text-center '>
                        <div className='flex items-center'>
                          <span className='font-medium m-auto'>
                            {subjectData.LotNumber}
                          </span>
                        </div>
                      </td>
                      <td className='py-3 px-4 text-center '>
                        <div className='flex items-center'>
                          <span className='font-medium m-auto'>{subjectData.DOB}</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <hr className='border-black'></hr>
      </>
    )
  }
  return null
}
