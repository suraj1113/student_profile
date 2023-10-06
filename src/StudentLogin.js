import React, { useState } from 'react';
import './styles.css'; // Import your CSS file for styling

function StudentLogin({ places }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedName, setSelectedName] = useState('');

  const categories = ['All', 'pythan', 'java']; // Replace with your own categories

  const filterPlaces = (category,name) => {
    setSelectedCategory(category);
    setSelectedName(name);
  };

  return (
    <div className="portfolio-gallery">
      <h2>Course </h2>
      <div className='filters'>
        <div className="filter">
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
            <input
              type="text"
              placeholder="Filter by Name"
              value={selectedName}
              onChange={(e) => filterPlaces(selectedCategory, e.target.value)}
            />
          </div>
        </div>
      </div>
    
      <div className="place-container">
       
        {places.map((place, index) => (
          (selectedCategory === 'All' || place.category === selectedCategory) && (
            <div key={index} className="place-item">
              <p>Course Name : {place.name}</p>
              <p>Course Duration : {place.course}</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default StudentLogin;
