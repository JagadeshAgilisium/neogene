import { useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { subject } from '../../store/features/subjectSlice'
import QRScanner from '../QRScanner/QRScanner'
import { scan } from '../../store/features/scanSlice'

function S2() {
  const isBatch = true

  const dispatch = useDispatch()
  // dispatch(scan.batchScan(scanData))

  const selector1 = useSelector((state) => state.scan.batchRecord)
  const selector2 = useSelector((state) => state.subject)

  console.log('Selector1 @ S2', selector1)
  console.log('Selector2 @ S2', selector2)

  const fetchFromDB = () => {
    if (selector1.length > 0) {
      axios
        .get(`http://localhost:8000/getSubject/${selector1[0].decodedText}`)
        .then((response) => {
          dispatch(subject.subjectFetch(response.data.result))
        })
        .catch(function (error) {
          console.log('Error @ S2', error)
        })
    }
  }

  return (
    <>
      <div className='flex h-full'>
        <div className='w-1/5 flex md:flex-col md:items-center lg:flex-row '>
          <QRScanner isBatch={isBatch} />
        </div>
        <div className='w-4/5'>
          <div className='font-bold text-lg lg:text-xl lg:text-center h-1/6'>
            Results of Batch scan
          </div>
          <div className='pl-10 py-5'>
            Actual Scanned Value :
            <span className=' text-green-600 pl-2 font-bold'>
              {selector1[0]?.decodedText}
            </span>
          </div>
          <div className='w-full flex justify-center pb-2'>
            <button
              className=' bg-blue-600 px-2 py-1 rounded-lg hover:bg-blue-400 text-white'
              onClick={() => {
                fetchFromDB()
              }}
            >
              Fetch from DB
            </button>
          </div>
          <div className='flex justify-center h-4/6'>
            <table className='table border-2 border-black w-2/3 h-2/6'>
              <thead className='border-2 border-black'>
                <tr>
                  <th className='border-2 border-black'>Name</th>
                  <th className='border-2 border-black'>DIN</th>
                  <th className='border-2 border-black'>COI</th>
                </tr>
              </thead>
              <tbody className='border-2 border-black'>
                <tr>
                  <td className='border-2 border-black px-4'>
                    {selector2.subject[0]?.Subject?.FullName}
                  </td>
                  <td className='border-2 border-black px-4'>
                    {selector2.subject[0]?.DIN}
                  </td>
                  <td className='border-2 border-black px-4'>
                    {selector2.subject[0]?.COI}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default S2
