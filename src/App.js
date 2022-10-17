import './app.styles.scss'
import React, { useMemo, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainPage from './components/Mainpage/MainPage'


function App() {
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  )
}

export default App
