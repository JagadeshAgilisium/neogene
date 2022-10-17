import React, { useState ,useEffect } from 'react'
import axios from 'axios'

export default function SearchPatient() {
  const [viewData, setViewData] = useState({
    COI: '',
    SubjectNumber: '',
    LotNumber: '',
  })
  const [sendingSingleData, setSendingSingleData] = useState('')
  const [error, setError] = useState('')
  const [fetchedData, setFetchedData] = useState([])

  useEffect(() => {
    if (!viewData.COI) {
      if (!viewData.SubjectNumber) {
        if (!viewData.LotNumber) {
        } else {
          setSendingSingleData(viewData.LotNumber)
        }
      } else {
        setSendingSingleData(viewData.SubjectNumber)
      }
    } else {
      setSendingSingleData(viewData.COI)
    }
  }, [viewData, fetchedData])

  const fetchData = async (sendingSingleData) => {
    const response = await axios.get(
      `${process.env.NEOGENE_SERVER_URL}/getSubject/${sendingSingleData}`
    )
   
    try {
        setFetchedData(response.data)
    } catch (error) {
      console.error('error')
    }
  }
  
  const handleChange = (e) => {
    setViewData({ ...viewData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (sendingSingleData) {
      try {
        fetchData(sendingSingleData)
      } catch (error) {
        console.log('error')
      }
      setError('')
    } else {
      setError('*Fill Any One to View the data')
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-wrap gap-8  '>
        <div>
          <label className='block  tracking-wide text-gray-700 text-xs  '>
            COI :{' '}
          </label>
          <input
            className='appearance-none block   text-gray-700 border  rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            name='COI'
            value={viewData.COI}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label className='block  tracking-wide text-gray-700 text-xs  '>
            Subject Number :{' '}
          </label>
          <input
            className='appearance-none block  text-gray-700 border  rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            name='SubjectNumber'
            value={viewData.SubjectNumber}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label className='block  tracking-wide text-gray-700 text-xs  '>
            LOT Number :
          </label>
          <input
            className='appearance-none block  text-gray-700 border  rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            name='LotNumber'
            value={viewData.LotNumber}
            onChange={handleChange}
          ></input>
        </div>
        <button
          className='text-white bg-purple-600 px-7  h-9 mt-4 rounded-sm hover:bg-purple-700'
          type='submit'
        >
          Search
        </button>
      </div>
      <div
        className='my-5  align-center'
        style={{
          color: '#D8000C',
          backgroundColor: '#FFBABA',
          display: 'inline-block',
        }}
      >
        {error}
      </div>
    </form>
  )
}
