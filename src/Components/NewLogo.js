// src/components/Logo.js
import React from 'react';
import logo from '../assets/Screenshot 2025-05-10 024021.png';

const Logo = () => {
  return (
    <div className="flex justify-center items-center mb-8">
      {/* SPORTLINK Logo Image */}
      <img
        src={logo}
        alt="SportLink Logo"
        className="w-28 h-28"  // Adjust the size of the logo image as needed
      />
    </div>
  );
};

export default Logo;