import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { subject } from '../../store/features/subjectSlice'
import QRScanner from '../QRScanner/QRScanner'
import { scan } from '../../store/features/scanSlice'


function S2() {
  const [html5QrCode, setHtml5QrCode] = useState({});
  const [hide, setHide] = useState(false)

  const dispatch = useDispatch()

  const selector1 = useSelector((state) => state.scan.batchRecord)
  const selector3 = useSelector((state) => state.scan.coi)
  const selector2 = useSelector((state) => state.subject)

  console.log('Selector1 @ S2', selector1)
  console.log('Selector2 @ S2', selector2)
  console.log('Selector3 @ S2', selector3)

  return (
    <>
      <div className='flex h-full'>
        <div className=' w-3/12 flex md:flex-col md:items-center lg:flex-row'>
          <QRScanner html5QrCode={html5QrCode} setHtml5QrCode={setHtml5QrCode} hide={hide} setHide={setHide} />
        </div>
        <div className='w-9/12 flex items-center ml-5'>
          <div>
            {selector2.subject.map((details, i) => (
              <div key={i} className="">
                <div className="grid grid-cols-2 justify-items-start">
                  <div className="font-bold text-md"> Patient name</div>
                  <div className='font-semibold'>{details.patientName}</div>
                </div>
                <div className="grid grid-cols-2 justify-items-start ">
                  <div className="font-bold text-md">COI Number</div>
                  <div>{details.COINumber}</div>
                </div>
                <div className="grid grid-cols-2 justify-items-start ">
                  <div className="font-bold text-md">DIN Number</div>
                  <div>{details.DINNumber}</div>
                </div>
                <div className="grid grid-cols-2 justify-items-start">
                  <div className="font-bold text-md"> Batch Number</div>
                  <div>{details.batchNumber}</div>
                </div>
                <div className="grid grid-cols-2 justify-items-start  ">
                  <div className="font-bold text-md">Subject Task ID</div>
                  <div>{details.subjectIDNumber}</div>
                </div>
                <div className="grid grid-cols-2 justify-items-start  ">
                  <div className="font-bold text-md">Task Name</div>
                  <div>{details.taskName}</div>
                </div>
                <br/>
                <div className="grid grid-cols-2 justify-items-start">
                  <div className="font-bold text-md">Operator ID</div>
                  <div>{details.operatorId}</div>
                </div>
                <div className="grid grid-cols-2 justify-items-start">
                  <div className="font-bold text-md">Operator name</div>
                  <div>{details.operatorName}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default S2
