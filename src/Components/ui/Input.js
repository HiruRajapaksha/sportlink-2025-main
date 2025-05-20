// src/components/ui/Input.js
import React from 'react';

const Input = ({ className, ...props }) => {
  return (
    <input
      className={`bg-gray-700 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500 ${className}`}
      {...props}
    />
  );
};

export default Input;
// src/components/ui/Input.js