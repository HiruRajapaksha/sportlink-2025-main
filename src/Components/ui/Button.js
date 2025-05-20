import React from 'react';

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg ${className}`}
      {...props}
      
    >
      {children}
    </button>
    
  );
};

export default Button;