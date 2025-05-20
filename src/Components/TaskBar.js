import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaNetworkWired, FaChartLine, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Logo from './NewLogo'; // Import the Logo component

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/home', icon: <FaHome /> },
    { name: 'Profile', path: '/profile', icon: <FaUser /> },
    { name: 'Network', path: '/network', icon: <FaNetworkWired /> },
    { name: 'Pathways', path: '/pathways', icon: <FaChartLine /> },
  ];

  const bottomItems = [
    { name: 'Settings', path: '/settings', icon: <FaCog /> },
    { name: 'Log Out', path: '/logout', icon: <FaSignOutAlt /> },
  ];

  const activeStyle = 'bg-red-600';
  const defaultStyle = 'hover:bg-red-300 transition duration-200';

  return (
    <div className="flex flex-col w-16 sm:w-20 lg:w-48 bg-red-700 text-white h-screen justify-between shadow-lg rounded-r-3xl">
      
      {/* Top section (Logo + Main Menu) */}
      <div className="flex flex-col items-center">
        
        {/* Logo */}
        <Logo /> {/* Inserted the logo component here */}

        {/* Main Navigation */}
        <nav className="mt-8 w-full space-y-4">
          {menuItems.map(item => (
            <Link to={item.path} key={item.name}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`flex items-center justify-center lg:justify-start space-x-2 py-3 px-4 rounded-xl mx-2 
                ${location.pathname === item.path ? activeStyle : defaultStyle}`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="hidden lg:block">{item.name}</span>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Section (Settings, Logout) */}
      <div className="pb-6 w-full">
        <hr className="border-gray-700 my-4 mx-4" />
        <nav className="w-full space-y-4">
          {bottomItems.map(item => (
            <Link to={item.path} key={item.name}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`flex items-center justify-center lg:justify-start space-x-2 py-3 px-4 rounded-xl mx-2 
                ${location.pathname === item.path ? activeStyle : defaultStyle}`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="hidden lg:block">{item.name}</span>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>

    </div>
  );
};

export default Sidebar;
