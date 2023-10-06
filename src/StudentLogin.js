import React, { useState } from 'react';
import './styles.css';
//import { PlaceSharp } from '@mui/icons-material';

function StudentLogin({ places }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedName, setSelectedName] = useState('');

  const categories = ['All', 'Advance Diploma in Computer Application (ADCA) - Old', 'Diploma in Fire and Safty Management']; 
  const duration = ['All', '6 months', '1 Year'];

  const filterPlaces = (category,course) => {
    setSelectedCategory(category);
    setSelectedName(course);
  };

  return (
    <div className="portfolio-gallery">
      
      <div className='filters'>
      <h2>Filters </h2>
        <div className="filter">
          <h5>Course Name</h5>
          <select
            onChange={(e) => filterPlaces(e.target.value)}
            value={selectedCategory}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="filter">
            <h5>Course Duration</h5>
            <select
            onChange={(e) => filterPlaces(e.target.value)}
            value={selectedName}
          >
            {duration.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
          </div>
        </div>
      </div>
    
      <div className="place-container">
       <div>
        {places.map((place, index) => (
          (selectedCategory === 'All' || place.category === selectedCategory) && (
            <div key={index} className="place-item">
              <h4>{place.name}</h4>
              <h5>{place.course}</h5>
              <div className='sem'>
              <h4>SAMESTER -1</h4>
                <li>Unlimited Access</li>
                <li>10+ Courses</li>
                <li>Expert Teachers</li>
                <li>Valid Certification</li>
                <li>On-the-go Learning</li>
                <li>24x7 Super support</li>
               </div> 
            </div> 
          )
        ))}
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
