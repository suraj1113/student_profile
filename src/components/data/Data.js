import React from 'react'
import './Data.css'
import { RiEmotionHappyLine } from "react-icons/ri";


const Data = () => {
  return (
    <div className='divide'>
        <div className='data1'>
            <div className='icon'><RiEmotionHappyLine/></div>
            <div className='happy'><h2>2450+</h2><div>HAPPY STUDENTS</div></div>
        </div>
        <div className='data2'>
            <div className='icon'><RiEmotionHappyLine/></div>
            <div className='happy'><h2>10+</h2><div>TOTAL TEACHERS</div></div>
        </div>
        <div className='data3'>
            <div className='icon'><RiEmotionHappyLine/></div>
            <div className='happy'><h2>500+</h2><div>CERTIFICATION</div></div>
        </div>
        <div className='data4'>
            <div className='icon'><RiEmotionHappyLine/></div>
            <div className='happy'><h2>2000+</h2><div>EXAMS</div></div>
        </div>
      
    </div>
  )
}

export default Data
