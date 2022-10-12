import { useState } from "react"
import { useSelector } from "react-redux"

function Compare() {
    const selector1 = useSelector(state => state.scan.coi)
    const selector2 = useSelector(state => state.subject)

    const [COIValue1, setCOIValue1] = useState();
    const [COIValue2, setCOIValue2] = useState();

    function checkValidate() {
        setCOIValue1(selector1[0]?.decodedText);
        setCOIValue2(selector2?.subject[0]?.COI);
    }

    return (
        <>
            <div className="p-4">
                <button className=" bg-blue-700 px-2 py-2 rounded-lg text-white hover:bg-blue-500" onClick={() => { checkValidate() }}>Check Validation</button>
                <div className="flex justify-center">
                    {
                        (COIValue1 !== undefined && COIValue2 !== undefined) ?
                            (COIValue1 === COIValue2) ? <p className="text-bold text-xl text-green-600">Validated</p> : <p className="text-bold text-xl text-red-600">Not Validated</p> :
                            <p>Please scan both Batch and COI to get results</p>
                    }
                </div>
            </div>
        </>
    )
}
export default Compare;