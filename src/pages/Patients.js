import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchPatient from '../components/searchPatient/SearchPatient'

export default function Patients() {
  const [allPatientData, setAllPatientData] = useState([])

  const navigate=useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.NEOGENE_SERVER_URL}/getAllSubject`)
      setAllPatientData(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <div className='flex flex-row'>
      <div className=''></div>
    </div>
     <SearchPatient></SearchPatient>
      <div className='overflow-x-auto'>
        <div className='min-w-screen   font-sans "'>
          <div className=' w-full  sm:w-auto'>
            <div className='bg-white rounded my-6 overflow-auto md:overflow-scroll'>
              <table className=' min-w-max w-full table-auto'>
                <thead>
                  <tr className='bg-blue-900 text-white  text-sm leading-normal'>
                    <th className='py-3 px-4 text-left'>Last Name</th>
                    <th className='py-3 px-4 text-center'>First Name</th>
                    <th className='py-3 px-4 text-center'>DOB</th>
                    <th className='py-3 px-4 text-center'>COI</th>
                    <th className='py-3 px-4 text-center'>BatchNumber</th>
                    <th className='py-3 px-4 text-center'>SubjectNumber</th>
                    <th className='py-3 px-4 text-center'>LotNumber</th>
                    <th className='py-3 px-4 text-center'>DIN</th>
                    <th className='py-3 px-4 text-center'>Actions</th>
                  </tr>
                </thead>
                <tbody className='text-gray-600 text-sm font-light'>
                  {allPatientData.map((data, i) => {
                    return (
                      <tr
                        className='border-b border-gray-200 hover:bg-gray-100'
                        key={i}
                      >
                        <td className='py-3 px-4 text-left '>
                          <div className='flex items-center'>
                            <span className='font-medium'>{data.LName}</span>
                          </div>
                        </td>
                        <td className='py-3 px-4 text-left '>
                          <div className='flex items-center'>
                            <span className='font-medium'>{data.FName}</span>
                          </div>
                        </td>
                        <td className='py-3 px-4 text-left '>
                          <div className='flex items-center'>
                            <span className='font-medium'>{data.DOB}</span>
                          </div>
                        </td>
                        <td className='py-3 px-4 text-left '>
                          <div className='flex items-center'>
                            <span className='font-medium'>{data.COI}</span>
                          </div>
                        </td>
                        <td className='py-3 px-4 text-left '>
                          <div className='flex items-center'>
                            <span className='font-medium'>
                              {data.BatchNumber}
                            </span>
                          </div>
                        </td>
                        <td className='py-3 px-4 text-left '>
                          <div className='flex items-center'>
                            <span className='font-medium'>
                              {data.SubjectNumber}
                            </span>
                          </div>
                        </td>
                        <td className='py-3 px-4 text-left '>
                          <div className='flex items-center'>
                            <span className='font-medium'>
                              {data.LotNumber}
                            </span>
                          </div>
                        </td>
                        <td className='py-3 px-4 text-left '>
                          <div className='flex items-center'>
                            <span className='font-medium'>{data.DIN}</span>
                          </div>
                        </td>
                        <td className='py-3 px-4 text-left '>
                          <button
                            className='px-3 bg-blue-500 py-1 text-white rounded hover:bg-blue-600'
                            value={data.SubjectID}
                            onClick={()=>navigate(`/patient/${data.SubjectID}`)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
