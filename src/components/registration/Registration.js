import React from 'react'
import './Registration.css';

const Registration = () => {
  return (
    <div className='reg'>
      <div className='text'>Get A Free <span>Registration</span>!</div>
      <div className='search-container'>
        <div className='search-bar'>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Select Course" ></input>
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Date of Birth" />
            <button className='btn'>Submit Now</button>
        </div>
      </div>
    </div>
  )
}

export default Registration
