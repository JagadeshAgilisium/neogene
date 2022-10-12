import { Html5Qrcode } from 'html5-qrcode';
import { useState } from 'react'


const QRScanner = (props) => {

    const [isQR, setisQR] = useState(true);
    const [isScanning, setIsScanning] = useState(false);

    const scanQrCode = () => {
        setisQR(true);
    }

    const scanBarCode = () => {
        setisQR(false);
    }

    const scanningState1 = () => {
        setIsScanning(true);
    }
    const scanningState2 = () => {
        console.log("Im here")
        setIsScanning(false);
    }

    const startScanning = (html5QrCode) => {
        html5QrCode.start(
            { facingMode: "environment" },
            qrConfig,
            qrCodeSuccessCallback,
            qrErrorCallback
        ).catch((err) => {
            console.log("Camera start error")
        })
    };

    const stopScanning = (html5QrCode) => {
        html5QrCode.stop().then(() => {
            console.log("Scanning Stopped.")
        }).catch((err) => {
            console.log("Error while closing the camera.")
        });
    }


    let qrboxFunction = function (viewfinderWidth, viewfinderHeight) {
        let minEdgePercentage = 0.7;
        let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
        let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
        return isQR ? {
            width: qrboxSize,
            height: qrboxSize
        } : {
            width: viewfinderHeight,
            height: qrboxSize / 2
        };
    }

    const qrConfig = { fps: 2, qrbox: qrboxFunction };

    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        props.updateData(decodedResult)
        console.log(decodedText);
        console.log(decodedResult);
        console.log(html5QrCode.isScanning)
        html5QrCode.pause()
        console.log(html5QrCode.isScanning)
    }

    const qrErrorCallback = (errorMessage) => {
        console.log("Reading for QR... ", errorMessage)
    }

    Html5Qrcode.getCameras().then((devices) => {
        if (devices && devices.length) {
            const cameraId = devices[0].id;
            var html5qrcodeConfig = {
                experimentalFeatures: {
                    useBarCodeDetectorIfSupported: true
                }
            };
            const html5QrCode = new Html5Qrcode("scanner", html5qrcodeConfig);
            if (isScanning) {
                startScanning(html5QrCode);
            }
            else {
                stopScanning(html5QrCode);
            }
        }
    }).catch(err => {
        console.log("Please allow to use the camera...", err)
    });
    return (
        <>
            <div className='flex flex-col items-center bg-purple-100 h-screen pt-20'>
                <div className='h-1/2 flex justify-center align-middle w-4/6 '>
                    <div className=' flex justify-center align-middle items-center'>
                        <div id="scanner"></div>
                    </div>
                </div>
                <div className='h-1/2'>
                    <div className='flex py-6 justify-center'>
                        <div className='px-10'>
                            <button onClick={scanQrCode} className="p-3 bg-purple-500 rounded-md text-white" >QRCode</button>
                        </div>
                        <div className='px-10'>
                            <button onClick={scanBarCode} className="p-3 bg-purple-500 rounded-md text-white" >BarCode</button>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        {!isScanning ?
                            <button onClick={scanningState1} className="p-3 bg-purple-500 rounded-md text-white">Start Scanning</button> :
                            <button onClick={scanningState2} className="p-3 bg-purple-500 rounded-md text-white">Stop Scanning</button>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default QRScanner;