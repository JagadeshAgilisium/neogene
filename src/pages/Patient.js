import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ViewPatientTable from '../components/viewPatientTable/ViewPatientTable'
import ViewPatientTask from '../components/viewPatientTask/ViewPatientTask'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { subjectTask } from '../store/features/subjectTaskSlice'
import { subject } from '../store/features/subjectSlice'


export default function Patient() {
  const [fetchedData, setFetchedData] = useState([])
  const [fetchedPatientTask, setFetchedPatientTask] = useState([])
  const [status, setStatus] = useState(400)

  const params = useParams()
  
  const dispatch = useDispatch()

  let readData = {
    batchNumber: "",
    patientName: "",
    COINumber: "",
    DINNumber: "",
    subjectIDNumber: "",
    taskName: "",
    operatorName: "",
    operatorId: ""
  };

  useEffect(() => {
    
    fetchDataById(params.id)
  }, [])

  const fetchDataById = async (id) => {
    const response = await axios.get(
      `${process.env.NEOGENE_SERVER_URL}/getSubjectById/${id}`
    ).catch((error) => {console.log("Error at fetchPatientTask");alert("OOps! Records doesn't exists")}) 
    try {
      setFetchedData(response.data.data[0])
      setStatus(response.data.status)
      fetchSubjectTask(response.data.data[0].SubjectID)
      console.log("Response from fetchdata",response.data.data)
      readData = {
        batchNumber: response.data.data[0].BatchNumber,
        patientName: response.data.data[0].FName + " " + response.data.data[0].LName,
        COINumber: response.data.data[0].COI,
        DINNumber: response.data.data[0].DIN,
        subjectIDNumber: response.data.data[0].SubjectNumber,
        operatorName: "Mitzi simpson",
        operatorId: "2"
      }
    } catch (error) {
      console.error('error')
    }
  }
  const fetchSubjectTask = async (id) => {
    const response = await axios.get(
      `https://tx4iostqze.execute-api.us-east-1.amazonaws.com/getSubjectTasks/${id}`
    )
    dispatch(subjectTask.subjectTaskSFetch(response.data))
    setFetchedPatientTask(response.data)
    console.log("Fetch Subject task: ", response.data);
    response.data.data.map((val) => {
      if (val?.Status === "WIP") {
        readData.taskName = val.Task.ProcessName;
      }
    })
    console.log("ReadData",readData)
    dispatch(subject.subjectFetch(readData));
  }

  return (
    <>
      <ViewPatientTable subjectData={fetchedData} status={status} />
      <ViewPatientTask
        fetchedPatientTask={fetchedPatientTask.data}
        status={fetchedPatientTask.status}
      />
    </>
  )
}
