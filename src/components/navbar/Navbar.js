// Navbar.js
import React from 'react';
import './Navbar.css'; // Import CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/course">Course</a>
        </li>
        <li className="nav-item">
          <a href="/video">Video</a>
        </li>
        <li className="nav-item">
          <a href="/contactUs">Contact Us</a>
        </li>
        <li className="nav-item">
          <a href="/AboutUs">About Us</a>
        </li>
        <li className="nav-item">
          <a href="/StudentLogin">StudentLogin</a>
        </li>
        <li className="nav-item">
          <a href="/Blog">Blog</a>
        </li>
      </ul>
      <div className='batch'>NEW BATCH</div>
    </nav>
  );
}

export default Navbar;
