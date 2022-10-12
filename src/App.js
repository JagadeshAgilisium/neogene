  import './app.styles.scss';
import React, { useMemo, useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import MainPage from './components/Mainpage/MainPage';


function App() {
  // const [COIValue1, setCOIValue1] = useState();
  // const [COIValue2, setCOIValue2] = useState();

  return (
    <BrowserRouter>
    {/* <div className='flex flex-col w-screen h-screen px-6'>
      <div className='h-1/5 align-middle flex'><S1 /></div>
      <hr className=' border-black' />
      <div className='flex flex-row h-4/5 bg-gray-100'>
        <div className=' w-1/3 items-center h-full flex justify-center bg-gray-100'>
          <div id="scanner"></div>
        </div>
        <div className='w-2/3  items-center h-full'>
          <div className=' h-2/5'><S2 /></div>
          <hr className=' border-black' />
          <div className='h-2/5'><S3 /></div>
          <hr className=' border-black' />
          <div className=' h-1/5'><Compare /></div>
        </div>
      </div>
     
    </div> */}
    <MainPage/>
    </BrowserRouter>
  )
}

export default App;
