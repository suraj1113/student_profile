import React from 'react'
import './Header.css'
import { RiFacebookCircleFill, RiInstagramFill,  RiYoutubeFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className='header'>
        <div className='left'>FAQ | Help Desk | Login</div>
        <div className='right'>
            <div className='icon1'>
                 <RiFacebookCircleFill />
                <RiInstagramFill/>
                <RiYoutubeFill/>
            </div>
        </div>
      
    </div>
  )
}

export default Header
