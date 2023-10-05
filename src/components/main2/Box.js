import React from 'react'
import './Box.css'

const Box = () => {
  return (
    <div className='box'>
        <div className='box1'>
            <div className='text1'>WELCOME TO OUR <span>UNIVERSITY</span>
            <p>We care to children, protect their welfare, and prepare them for the future</p>
            <br/>
            <p>Both approaches work fine, however there are some subtle differences, especially in terms of performance and rendering quality. Whenever possible SVG is preferred as it allows code splitting, supports more icons, and renders faster and better.
            </p>
            <button className='button'>view Details</button>
            </div>
        </div>
        <div className='box2'>
            <div className='btop'></div>
            <div className='bbottom'>
            <div className="half-underline">EXPERIENCE YOURSELF</div>
            <p>We care to children, protect their welfare, and prepare them for the future</p>
            
            </div>
        </div>
        <div className='box3'>
        <div className='btop'></div>
            <div className='bbottom'>
            <div className="half-underline">ONLINE LEARNING</div>
            <p>We care to children, protect their welfare, and prepare them for the future</p>
            
            </div>
        </div>
        <div className='box4'>
        <div className='btop'></div>
            <div className='bbottom'>
            <div className="half-underline">MASTRERY LEARNING</div>
            <p>We care to children, protect their welfare, and prepare them for the future</p>
            
            </div>
        </div>
      
    </div>
  )
}

export default Box
