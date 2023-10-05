import React from 'react'
import './Course.css'

const Course = () => {
  return (
    <div className='wrapper'>
        <div className='contain'>
                <div className='text '>OUR <span>COURSES</span></div>
                <button className='btn1'>View all</button>
        </div>
    
        <div className='course'>
            
            <div className='course1'>
                <div className='tcourse'></div>
                <div className='bcourse'>
                   <div class="half-underline">CSIR-NET/JRF</div>
                   <p>We care to children, protect their welfare, and prepare them for the future</p>
                   <button className='button'>view Details</button>
                </div>
            </div>
            <div className='course2'>
                <div className='tcourse'></div>
                <div className='bcourse'>
                   <div className="half-underline">CSIR-NET/JRF</div>
                   <p>We care to children, protect their welfare, and prepare them for the future</p>
                   <button className='button'>view Details</button>
                </div>
            </div>
            <div className='course3'>
                <div className='tcourse'></div>
                <div className='bcourse'>
                   <div className="half-underline">CSIR-NET/JRF</div>
                   <p>We care to children, protect their welfare, and prepare them for the future</p>
                   <button className='button'>view Details</button>
                </div>
            </div>
            <div className='course4'>
                <div className='tcourse'></div>
                <div className='bcourse'>
                   <div className="half-underline">CSIR-NET/JRF</div>
                   <p>We care to children, protect their welfare, and prepare them for the future</p>
                   <button className='button'>view Details</button>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Course
