import React from 'react'
import Patients from '../../pages/Patients'
import Patient from '../../pages/Patient'
import { Route,Routes } from 'react-router-dom'

export default function NavPage() {
  return (
   <Routes>
    <Route path='/patients' element={<Patients/>}/>
    <Route path='/patient/:id' element={<Patient/>}/>
    <Route path='/patient/:id/scan' element={<Patient/>}/>

   </Routes>
  )
}
