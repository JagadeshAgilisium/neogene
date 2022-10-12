import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ViewPatientTable from '../components/viewPatientTable/ViewPatientTable'
import ViewPatientTask from '../components/viewPatientTask/ViewPatientTask'
import axios from 'axios'

export default function Patient() {
  const [fetchedData, setFetchedData] = useState([])
  const [fetchedPatientTask, setFetchedPatientTask] = useState([])
  const [status, setStatus] = useState(400)

  const params = useParams()
  

  useEffect(() => {
    
    fetchDataById(params.id)
  }, [])

  const fetchDataById = async (id) => {
    const response = await axios.get(
      `http://localhost:8000/getSubjectById/${id}`
    )
    setFetchedData(response.data.data[0])
    setStatus(response.data.status)
    try {
      fetchSubjectTask(response.data.data[0].SubjectID)
    } catch (error) {
      console.error('error')
    }
  }
  const fetchSubjectTask = async (id) => {
    const response = await axios.get(
      `http://localhost:8000/getSubjectTasks/${id}`
    )
    setFetchedPatientTask(response.data)
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
