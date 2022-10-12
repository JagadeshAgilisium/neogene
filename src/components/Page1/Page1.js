import Table from '../Table/Table';
import S1 from '../S1/S1';
import S2 from '../S2/S2';
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { scan } from '../../store/features/scanSlice';

// import images from './camera-icon.jpeg'



function Page1() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()


  var dat2 = useSelector((state) => state.temp.isCoi);
  var dat1 = useSelector((state) => state.temp.isBatchRecord);

  const data = useSelector((state) => state.scan.batchRecord);
 
  const SubjectTask =useSelector((state) => state.subjectTask);
  var test1;
  var test2;
  var test3;

  const SubjectTaskIdval= SubjectTask?.subjectTask[0]?.data.map((data) =>{

    console.log(data)
    test2=data?.SubjectID
    
    if (data?.Status==="WIP"){
      test1=data?.SubjectTaskID
      test3=data?.TaskID
    }
  })

  const handleClick = async () => {
    var temp=[];
    data.map((val,i)=>{
      temp.push({
        SubjectTaskID:test1,
        ScanTypeID:val.ScanTypeID,
        OperatorID:val.OperatorID,
        ScanDate:val.ScanDate,
        ScanRecord:val.ScanRecord,
        Result: val.Result,
        Comments:val.Comments
      })
    })
    console.log("Temp",temp);
    const response = await axios.post(
      `http://localhost:8000/addSubjectTaskScan`,temp
    ).then((response)=>{
        console.log(response)
    }).catch((error)=> {
      console.log(error);
    });
    var result={
      SubjectTaskID:test1,
      SubjectID:test2,
      TaskID:test3
    }
    const res = await axios.put(
      `http://localhost:8000/updateSubjectTaskStatus`,result
    ).then((response)=>{
        console.log(response)
    }).catch((error)=> {
      console.log(error);
    });
    console.log("Result",result);

    navigate(`/patient/${test2}`)
    dispatch(scan.shouldRefresh(true))


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
        {(dat1 && dat2)?<button className=' bg-blue-700 px-4 py-2 rounded-lg text-white hover:text-blue-700 hover:bg-blue-200' onClick={()=>{handleClick()}}>Done</button>:<></>}
        </div>
      </div>
      
    </div>
  )
}

export default Page1;














