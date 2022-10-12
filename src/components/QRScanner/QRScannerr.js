import { Html5Qrcode } from 'html5-qrcode';
import { useEffect } from 'react'


const QRScanner = ({scannerState,setScannerState,setData}) => {

    const qrboxFunction = function (viewfinderWidth, viewfinderHeight) {
        let minEdgePercentage = 0.8;
        let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
        let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
        return true ? {
            width: qrboxSize,
            height: qrboxSize
        } : {
            width: viewfinderHeight,
            height: qrboxSize / 2
        };
    }

    const qrConfig = { fps: 2, qrbox: qrboxFunction };

    const qrCodeSuccessCallback = (decodedText, decodedResult, html5QrCode) => {
        setData(decodedResult)
        console.log(decodedText);
        console.log(decodedResult);
        console.log(html5QrCode.isScanning)
        html5QrCode.pause()
        stopScanning(html5QrCode);
        console.log(html5QrCode.isScanning)
    }

    const qrErrorCallback = (errorMessage) => {
        console.log("Reading for QR... ", errorMessage)
    }

    // useEffect(() => {
    //     const html5QrCode = new Html5Qrcode("scanner", {
    //         experimentalFeatures: {
    //             useBarCodeDetectorIfSupported: true,
    //         },
    //     });
    // });
    const startScanning = (html5QrCode) => {
        console.log("Start Initiated")
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
        console.log("Stop Initiated")

        html5QrCode.stop().then(() => {
            console.log("Scanning Stopped.")
        }).catch((err) => {
            console.log("Error while closing the camera.")
        });
    }

    Html5Qrcode.getCameras().then((devices) => {
        if (devices && devices.length) {
            const cameraId = devices[0].id;
            const html5QrCode = new Html5Qrcode("scanner", {
                experimentalFeatures: {
                    useBarCodeDetectorIfSupported: true,
                },
            });
            startScanning(html5QrCode);

        }
    }).catch(err => {
        console.log("Please allow to use the camera...", err)
    });
    return (
        <>
            <div className='flex h-full bg-gray-300'>
                <div className='m-auto'>
                    <div id="scanner"></div>
                </div>
            </div>
        </>
    )
}
export default QRScanner;