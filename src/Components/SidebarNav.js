import React from 'react';
import { Link } from 'react-router-dom';
import { useSidebar } from './SidebarProvider'; // Import the SidebarProvider context

const SidebarNav = () => {
  const { isOpen, toggleSidebar } = useSidebar(); // Access the sidebar state and toggle function

  return (
    <div
      className={`${
        isOpen ? 'w-[180px]' : 'w-[60px]'
      } bg-gray-800 text-white h-full p-4 transition-all duration-300`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="text-white mb-4 bg-red-500 px-2 py-1 rounded"
      >
        {isOpen ? 'Close' : 'Open'}
      </button>

      {/* Navigation Links */}
      <ul>
        <li className="mb-4">
          <Link to="/home" className="hover:text-red-500">
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/profile" className="hover:text-red-500">
            Profile
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/settings" className="hover:text-red-500">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarNav;