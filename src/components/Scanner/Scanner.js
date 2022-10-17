import { useState } from 'react'
import { useSelector } from 'react-redux'
import QRScanner from '../QRBarCodeReader/QRBarCodeReader'
import { Html5Qrcode } from 'html5-qrcode'
import cameraIcon from '../../assets/icons/camera-icon.jpeg'


function Scanner() {
  const [html5QrCode, setHtml5QrCode] = useState({});

  const subjectSelector = useSelector((state) => state.subject)

  return (
    <>
      <div className="flex justify-between w-full h-2/6 items-center">
        <div>
          <p className="text-2xl text-blue-800 m-auto">Patient Scan</p>
        </div>
        <div className="flex">
          <div className="px-4">
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:text-blue-900 hover:bg-blue-200">View All Patients</button>
          </div>
          <div>
            <button className="bg-purple-800 text-white px-4 py-2 rounded-md hover:text-purple-900 hover:bg-purple-200">+ Add Patient</button>
          </div>
        </div>
      </div>
      <hr className=' border-black border-t-2' />
      <div className='flex h-full'>
        <div className=' w-2/5 items-center h-full flex justify-center'>
          <div id="scanner"><img src={cameraIcon} alt="Camera Icon" className='flex w-52'></img></div>
        </div>
        <div className='w-3/5  items-center h-full bg-gray-100'>
          <div className='flex h-full'>
            <div className=' w-3/12 flex md:flex-col md:items-center lg:flex-row'>
              <QRScanner html5QrCode={html5QrCode} setHtml5QrCode={setHtml5QrCode} />
            </div>
            <div className='w-9/12 flex items-center'>
              <div>
                {subjectSelector.subject.map((details, i) => (
                  <div key={i} >
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
                    <br />
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
        </div>
      </div>
    </>
  )
}

export default Scanner
