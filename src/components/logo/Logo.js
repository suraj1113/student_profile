import React from 'react'
import './Logo.css'
import { IoIosCall } from "react-icons/io";
import { RxClock } from "react-icons/rx";
const Logo = () => {
  return (
    <div className='logo1'>
        <div className='left1'>LOGO</div>
        <div className='right1'>
            <div className='clock'>
            <div className='icon3'><IoIosCall/></div>
            <div className='text2'>CALL US TODAY <br/> +91 9999998877</div>
            </div>
            <div className='clock'>
            <div className='icon3'><RxClock/></div>
            <div className='text2'>We ARE OPEN <br/> MON-FRI 8:00-16:00</div>
            </div>
        </div>

      
    </div>
  )
}

export default Logo
