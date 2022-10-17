import { Html5Qrcode } from 'html5-qrcode'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { scan } from '../../store/features/scanSlice'
import { temp } from '../../store/features/tempSlice'



const QRBarCodeReader = ({ html5QrCode, setHtml5QrCode }) => {

  const [scannerState, setScannerState] = useState(false)

  const dispatch = useDispatch()
  const subjectSelector = useSelector((state) => state.subject);
  const batchSelector = useSelector((state) => state.scan.batchRecord);

  const isBatchSelector = useSelector((state) => state.temp.isBatchRecord);
  const isCoiSelector = useSelector((state) => state.temp.isCoi);

  var buttonVisibility = "visible";

  if (isBatchSelector && isCoiSelector) {
    buttonVisibility = "invisible";
  }
  var batchFilter = batchSelector.filter(batch => (batch.ScanType === "Batch" && batch.Result === "Failure"))
  var coiFilter = batchSelector.filter(coi => (coi.ScanType === "COI" && coi.Result === "Failure"))

  const condition = batchSelector.filter(batch => ((batch.ScanType === "Batch" && batch.Result === "Success") || (batch.ScanType === "COI" && batch.Result === "Success")))

  if (condition.length === 2) {
    batchFilter.splice(0, batchFilter.length)
    coiFilter.splice(0, coiFilter.length)
  }


  if (subjectSelector.subject.length > 0) {
    var coi = subjectSelector.subject[0].COINumber;
    var batch = subjectSelector.subject[0].batchNumber;
    var elxi = (isBatchSelector === false && isCoiSelector === false) ? "Batch" : "COI";
    var detail = {
      OperatorName: subjectSelector.subject[0].operatorName,
      OperatorID: subjectSelector.subject[0].operatorId,
      ScanDate: new Date().toLocaleString().split(",").join(""),
      ScanTypeID: elxi === "Batch" ? "1" : "2",
      ScanType: elxi,
      SubjectTaskID: ""
    };
  }

  const qrboxFunction = function (viewfinderWidth, viewfinderHeight) {
    let minEdgePercentage = 0.7
    let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight)
    let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage)
    let isQR = true;
    return isQR
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

    const value = {
      ...detail,
      ScanRecord: decodedResult.decodedText,
      Comments: 'None',
      Result:
        elxi === "Batch"
          ? batch === decodedResult.decodedText
            ? "Success"
            : "Failure"
          : coi === decodedResult.decodedText
            ? "Success"
            : "Failure",
    };


    // console.log("Value : ",value);

    if (isBatchSelector === false && isCoiSelector === false) {
      // console.log("Dispatched Batch scan");
      dispatch(scan.batchScan(value))
      if (value.Result === "Success") {
        dispatch(temp.isBatchScan(true))
      }
    } else if (isBatchSelector === true && isCoiSelector === false) {
      // console.log("Dispatched coi scan");
      dispatch(scan.batchScan(value))
      if (value.Result === "Success") {
        dispatch(temp.isCoiScan(true))
      }
    }
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
    setHtml5QrCode(new Html5Qrcode('scanner', {
      experimentalFeatures: {
        useBarCodeDetectorIfSupported: true,
      },
    }));
  }, []);

  return (
    <>
      <div className='flex items-center w-full justify-center h-1/5'>

        {
          !scannerState ?
            (
              !useSelector((state) => state.temp.isBatchRecord) ?
                <button
                  className='rounded-lg bg-purple-700 py-2 px-2 text-white hover:bg-purple-200 hover:text-purple-800'
                  onClick={() => startScanning()}
                >
                  {batchFilter.length === 0 ? "Start Batch Scan" : "Rescan Batch"}
                </button> :
                <button
                  className={`rounded-lg bg-purple-800 py-2 px-2 text-white hover:bg-purple-200 hover:text-purple-800 ${buttonVisibility}`}
                  onClick={() => startScanning()}
                >
                  {coiFilter.length === 0 ? "Start COI Scan" : "Rescan COI"}
                </button>
            ) : (
              !useSelector((state) => state.temp.isBatchRecord) ?
                <button
                  className='rounded-lg bg-purple-700 py-2 px-2 text-white hover:bg-purple-200 hover:text-purple-800'
                  onClick={() => stopScanning()}
                >
                  Stop Batch Scan
                </button> :
                <button
                  className='rounded-lg bg-purple-700 py-2 px-2 text-white hover:bg-purple-200 hover:text-purple-800'
                  onClick={() => stopScanning()}
                >
                  Stop COI Scan
                </button>
            )
        }
      </div>
    </>
  )
}
export default QRBarCodeReader