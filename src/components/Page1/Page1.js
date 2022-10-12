import Table from '../Table/Table';
import S1 from '../S1/S1';
import S2 from '../S2/S2';
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
// import images from './camera-icon.jpeg'



function Page1() {
  const navigate = useNavigate();


  var dat2 = useSelector((state) => state.temp.isCoi);
  var dat1 = useSelector((state) => state.temp.isBatchRecord);

  const data = useSelector((state) => state.scan.batchRecord);
  const handleClick =() => {

    console.log(data);
  }


  return (
    <div className='flex flex-col w-full h-full px-10 bg-gray-200'>
      <div className='h-1/6 align-middle flex'><S1 /></div>
      <hr className=' border-black border-t-2' />
      <div className='flex flex-row h-2/6 bg-white'>
        <div className=' w-2/5 items-center h-full flex justify-center bg-slate-700'>
          <div id="scanner"></div>
        </div>
        <div className='w-3/5  items-center h-full bg-gray-100'>
          <S2/>
        </div>
      </div>
      <hr className=' border-black border-t-2' />
      <div className='flex flex-col h-2/5 bg-gray-100 overflow-scroll'>
        <div><Table/></div>
        <div className='flex justify-end pr-20'>
        {(dat1 && dat2)?<button className=' bg-blue-700 px-4 py-2 rounded-lg text-white hover:text-blue-700 hover:bg-blue-200' onClick={()=>{handleClick()}}>Back</button>:<></>}
        </div>
      </div>
      
    </div>
  )
}

export default Page1;














