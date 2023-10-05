import React from 'react'
import './Personal.css'
import { RiFacebookCircleFill, RiInstagramFill,  RiYoutubeFill, RiPhoneFill} from "react-icons/ri";

const Personal = () => {
  return (
    <div className='container'>
      <div className='container1'>
        <div className='logo'>LOGO</div>
        <div className='para'>Note that the development build is not optimized.
To create a production build, use npm run build.You can now view project in the browser.</div>
        <div className='social'>
            <RiFacebookCircleFill />
            <RiInstagramFill/>
            <RiYoutubeFill/>
        </div>
      </div>
      <div className='container2'>
        <h3>Course</h3>
        <div className='cour'>HTML & CSS <br/> Java <br/>Python<br/>MS Word<br/>Power Point</div>
      </div>
      <div className='container3'>
      <h3>Useful Links</h3>
        <div className='cour'>About Us <br/> Gallary<br/>Testimonial<br/>Courses<br/>Students</div>
      </div>
      <div className='container4'>
        <div className='mob'>
            <div className='icon4'><RiPhoneFill/></div>
            <div className='text2'>For more Details<br/>+91 9999998877</div>
        </div>
      </div>
    </div>
  )
}

export default Personal
