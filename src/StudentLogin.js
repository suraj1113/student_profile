import React, { Component } from "react";
import "./App.css";

class StudentLogin extends Component {
  constructor() {
    super();
    this.state = {
      courses: [], 
      selectedType: "All", 
      selectedDuration: "All" 
    };
  }

  componentDidMount() {
    
    fetch("/courses.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ courses: data });
      });
  }

  handleTypeChange = (event) => {
    const selectedType = event.target.value;
    this.setState({ selectedType });
  };

  handleDurationChange = (event) => {
    const selectedDuration = event.target.value;
    this.setState({ selectedDuration });
  };

  render() {
    const { courses, selectedType, selectedDuration } = this.state;

    
    const filteredCourses = courses.filter((course) => {
      const typeMatch = selectedType === "All" || course.type === selectedType;
      const durationMatch =
        selectedDuration === "All" || course.duration === selectedDuration;
      return typeMatch && durationMatch;
    });

    return (
      <div className="App">
        <h1>Course Filter</h1>
        <div className="filter-section">
          <div>
            <label htmlFor="typeFilter">Course Type:</label>
            <select
              id="typeFilter"
              onChange={this.handleTypeChange}
              value={selectedType}
            >
              <option value="All">All</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
    
            </select>
          </div>
          <div>
            <label htmlFor="durationFilter">Course Duration:</label>
            <select
              id="durationFilter"
              onChange={this.handleDurationChange}
              value={selectedDuration}
            >
              <option value="All">All</option>
              <option value="8 weeks">8 weeks</option>
              <option value="12 weeks">12 weeks</option>
              
            </select>
          </div>
        </div>
        <div className="filtered-courses">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course-box">
              <div className="card"> 
                <div className="card-content">
                  <strong>{course.name}</strong>
                  <p>Type: {course.type}</p>
                  <p>Duration: {course.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StudentLogin;
