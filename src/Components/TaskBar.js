import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaNetworkWired,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// ... imports unchanged

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

  const activeStyle = 'bg-[#FF1E56] text-black shadow-lg';
  const defaultStyle =
    'hover:bg-[#FF3A6B] hover:text-white hover:shadow-md transition-all duration-300';

  // 🚀 More vibrant animation
  const textVariants = {
    animate: {
      color: ['#FF1E56', '#FF3A6B', '#FFC107', '#00E5FF', '#FF1E56'],
      textShadow: [
        '0 0 15px #FF3A6B, 0 0 25px #FFC107, 0 0 35px #00E5FF',
        '0 0 20px #FF1E56, 0 0 30px #FF3A6B, 0 0 40px #FFC107',
        '0 0 15px #FF3A6B, 0 0 25px #00E5FF, 0 0 35px #FF1E56',
      ],
      scale: [1, 1.1, 1],
      rotateY: [0, 25, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div
      className="fixed top-0 left-0 flex flex-col w-16 sm:w-20 lg:w-56 text-white h-screen justify-between shadow-xl rounded-r-3xl z-50"
      style={{
        background: `linear-gradient(180deg, #000000 0%, #323232 100%)`,
        borderRight: '4px solid #FF1E56',
      }}
    >
      <div className="flex flex-col items-center pt-8">
        {/* 💡 More vibrant SportLink */}
        <motion.div
          className="text-4xl font-extrabold tracking-wide cursor-default select-none"
          variants={textVariants}
          animate="animate"
          style={{
            userSelect: 'none',
            perspective: 600,
            textAlign: 'center',
          }}
        >
          SportLink
        </motion.div>

        {/* Navigation unchanged */}
        <nav className="mt-10 w-full space-y-4">
          {menuItems.map((item) => (
            <Link to={item.path} key={item.name}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`flex items-center justify-center lg:justify-start space-x-4 py-3 px-6 rounded-xl mx-4 cursor-pointer
                  ${location.pathname === item.path ? activeStyle : defaultStyle}`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="hidden lg:block font-semibold tracking-wide">{item.name}</span>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>

      <div className="pb-8 w-full">
        <hr className="border-gray-700 my-6 mx-6" />
        <nav className="w-full space-y-4">
          {bottomItems.map((item) => (
            <Link to={item.path} key={item.name}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`flex items-center justify-center lg:justify-start space-x-4 py-3 px-6 rounded-xl mx-4 cursor-pointer
                  ${location.pathname === item.path ? activeStyle : defaultStyle}`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="hidden lg:block font-semibold tracking-wide">{item.name}</span>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
