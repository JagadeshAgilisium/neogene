import React from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { scan } from '../../store/features/scanSlice';
import Scanner from '../Scanner/Scanner';
import Table from '../Table/Table';


function patientScan() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isBatchSelector = useSelector((state) => state.temp.isBatchRecord);
  const isCoiSelector = useSelector((state) => state.temp.isCoi);

  const batchSelector = useSelector((state) => state.scan.batchRecord);

  const SubjectTask = useSelector((state) => state.subjectTask);
  var subjectTaskID;
  var subjectID;
  var taskID;

  SubjectTask?.subjectTask[0]?.data.map((data) => {
    subjectID = data?.SubjectID
    if (data?.Status === "WIP") {
      subjectTaskID = data?.SubjectTaskID
      taskID = data?.TaskID
    }
  })


  const handleClick = async () => {

    var temp = [];
    batchSelector.map((val, i) => {
      temp.push({
        SubjectTaskID: subjectTaskID,
        ScanTypeID: val.ScanTypeID,
        OperatorID: val.OperatorID,
        ScanDate: val.ScanDate,
        ScanRecord: val.ScanRecord,
        Result: val.Result,
        Comments: val.Comments
      })
    })

    const response = await axios.post(
      `${process.env.NEOGENE_SERVER_URL}/addSubjectTaskScan`, temp
    ).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error);
    });

    var result = {
      SubjectTaskID: subjectTaskID,
      SubjectID: subjectID,
      TaskID: taskID
    }

    const res = await axios.put(
      `${process.env.NEOGENE_SERVER_URL}/updateSubjectTaskStatus`, result
    ).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error);
    });

    navigate(`/patient/${subjectID}`)
    dispatch(scan.shouldRefresh(true))
  }


  return (
    <div className='flex flex-col w-full h-full bg-gray-200'>
      <div className='flex flex-col h-1/2 bg-gray-100 overflow-scroll'>
        <Scanner />
      </div>
      <hr className=' border-black border-t-2' />
      <div className='flex flex-col h-1/2 bg-gray-100 overflow-scroll '>
        <Table />
        <div className='flex justify-end pr-10 pt-2'>
          {(isBatchSelector && isCoiSelector) ? <button className=' bg-blue-700 px-4 py-2 rounded-lg text-white hover:text-blue-700 hover:bg-blue-200' onClick={() => { handleClick() }}>Done</button> : <></>}
        </div>
      </div>

    </div>
  )
}

export default patientScan;