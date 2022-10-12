import { useState } from 'react'
import QRScanner from '../QRScanner/QRScanner'
import { useSelector, useDispatch } from 'react-redux'
import { scan } from '../../store/features/scanSlice'

function S3() {
  const isBatch = false

  const dispatch = useDispatch()
  // dispatch(scan.coiScan(scanData))

  const selector = useSelector((state) => state.scan.coi)

  console.log('Selector @ S3', selector)

  return (
    <>
      <div className='flex h-full'>
        <div className='w-1/5 flex md:flex-col md:items-center lg:flex-row'>
          <QRScanner isBatch={isBatch} />
        </div>
        <div className='w-4/5'>
          <div className='font-bold text-lg lg:text-xl lg:text-center h-1/6'>
            Results of Patient COI scan
          </div>
          <div className='pl-10 py-5'>
            Actual Scanned Value :{' '}
            <span className=' text-green-600 pl-2 font-bold'>
              {selector[0]?.decodedText}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default S3
