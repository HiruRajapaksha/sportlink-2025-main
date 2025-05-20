// src/pages/LandingPage.js
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Login from '../Components/Login';  // Import the Login component
import Logo from '../Components/Logo';

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      {/* Main Content Wrapper */}
      <div className="flex w-full h-screen">

        {/* Left Side - Welcome Message and Register Button */}
        <div className="w-1/2 h-full p-8 bg-red-700 rounded-l-lg flex flex-col justify-center items-center">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {/* Logo */}
            <Logo /> {/* Inserted the logo component here */}

            <h1 className="text-4xl font-bold text-white">Hello, Welcome</h1>
            <p className="font-bold text-black mb-12">Don't have an account?</p>
            {/* Link to Register page */}
            <Link to="/register">
              <button className="px-6 py-3 bg-white text-red-600 rounded-lg hover:bg-gray-300 transition duration-200">
                Registration
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 h-full p-8 bg-gray-500 shadow-xl rounded-r-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          {/* Content Container */}
          <motion.div
            className="p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-center text-red-900 mb-2">Welcome To Your Professional Sports Comunity</h1>
            {/* Login Component */}
            <Login /> {/* Render the Login component */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

