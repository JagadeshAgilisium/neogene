import { Html5Qrcode } from 'html5-qrcode'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { scan } from '../../store/features/scanSlice'

const QRScanner = ({ isBatch, html5QrCode }) => {
  const [scannerState, setScannerState] = useState(false)

  const dispatch = useDispatch()
  const selector1 = useSelector((state) => state.scan.batchRecord)
  const selector2 = useSelector((state) => state.scan.coi)

  const qrboxFunction = function (viewfinderWidth, viewfinderHeight) {
    let minEdgePercentage = 0.8
    let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight)
    let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage)
    return true
      ? {
          width: qrboxSize,
          height: qrboxSize,
        }
      : {
          width: viewfinderHeight,
          height: qrboxSize / 2,
        }
  }

  const qrConfig = { fps: 10, qrbox: qrboxFunction }

  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    isBatch
      ? dispatch(scan.batchScan(decodedResult))
      : dispatch(scan.coiScan(decodedResult))
    html5QrCode.pause()
    stopScanning()
  }

  const qrErrorCallback = (errorMessage) => {
    console.log('Reading for Bar/QR Code... ', errorMessage)
  }

  const stopScanning = () => {
    try {
      console.log('Stop Initiated')
      setScannerState(false)

      html5QrCode
        .stop()
        .then(() => {
          console.log('Scanning Stopped.')
        })
        .catch((err) => {
          console.log('Error while closing the camera.')
        })
    } catch {
      console.log('Catch block of stop scanning')
    }
  }

  const startScanning = () => {
    console.log('Start Initiated')
    setScannerState(true)
    html5QrCode
      .start(
        { facingMode: 'environment' },
        qrConfig,
        qrCodeSuccessCallback,
        qrErrorCallback
      )
      .catch((err) => {
        console.log('Camera start error')
      })
  }

  useEffect(() => {
    html5QrCode = new Html5Qrcode('scanner', {
      experimentalFeatures: {
        useBarCodeDetectorIfSupported: true,
      },
    })
  })

  return (
    <>
      <div className='flex items-center w-full justify-center h-1/5'>
        {!scannerState ? (
          <button
            className='rounded-lg bg-purple-700 py-2 px-2 text-white hover:bg-purple-500'
            onClick={() => startScanning()}
          >
            Start Scan
          </button>
        ) : (
          <button
            className='rounded-lg bg-purple-700 py-2 px-2 text-white hover:bg-purple-500'
            onClick={() => stopScanning()}
          >
            Stop Scan
          </button>
        )}
      </div>
    </>
  )
}
export default QRScanner
