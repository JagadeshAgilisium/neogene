import React from 'react'
import Patients from '../../pages/Patients'
import Patient from '../../pages/Patient'
import { Route,Routes } from 'react-router-dom'
import Page1 from '../Page1/Page1'
import Tasks from '../../pages/Tasks/Tasks'
import Dashboard from '../../pages/Dashboard/Dashboard'
import User from '../../pages/User/User'

export default function NavPage() {
  return (
   <Routes>
    <Route path='/patients' element={<Patients/>}/>
    <Route path='/patient/:id' element={<Patient/>}/>
    <Route path='/patient/:id/scan' element={<Page1/>}/>
    <Route path='/tasks' element={<Tasks/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/patient-tasks' element={<User/>}/>
    <Route path='/patient-scans' element={<User/>}/>
    <Route path='/user' element={<User/>}/>
   </Routes>
  )
}
