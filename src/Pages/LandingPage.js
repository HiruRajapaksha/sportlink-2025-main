// src/pages/LandingPage.js
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Login from '../Components/Login';
import Logo from '../Components/Logo';

const LandingPage = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-red-600 via-red-400 to-gray-800 flex items-center justify-center px-4 overflow-hidden">

      {/* Rain Effect */}
      <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(transparent,_transparent_1px,_rgba(255,255,255,0.1)_1px)] before:bg-[length:2px_10px] before:animate-[rain_1s_linear_infinite] z-0" />

      <div className="relative w-full max-w-6xl h-[85vh] bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-white/20 z-10">

        {/* Left Side */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center items-center bg-gradient-to-b from-white/30 to-white/10 text-white backdrop-blur-lg relative overflow-hidden">

          {/* Logo with 3D glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-6"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-red-500 to-yellow-300 blur-lg rounded-full opacity-60 animate-pulse z-0"></div>
            <div className="relative z-10">
              <Logo />
            </div>
          </motion.div>

          {/* Heading & CTA */}
          <motion.div
            className="text-center space-y-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
              New Here?
            </h1>
            <p className="text-lg text-white/80 max-w-md mx-auto">
              Create an account and join the <span className="text-yellow-300 font-semibold">Pro Sports</span> community today.
            </p>
            <Link to="/register">
              <button className="mt-4 px-8 py-3 bg-yellow-300 text-red-800 font-semibold rounded-full shadow-lg hover:bg-yellow-200 transition duration-300">
                Create Account
              </button>
            </Link>
          </motion.div>

          {/* Extra info section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 text-sm text-white/70 max-w-sm text-center"
          >
            <p>Already have an account? Log in from the right panel.</p>
            <p className="mt-2 italic">"Train, Connect, Compete – with Pro Sports."</p>
          </motion.div>
        </div>

        {/* Right Side - Login Form */}
        <div className="md:w-1/2 p-10 flex justify-center items-center bg-white/30 backdrop-blur-xl">
          <motion.div
            className="w-full max-w-md bg-white/60 p-8 rounded-xl shadow-lg backdrop-blur-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-red-700 text-center mb-6">
              Login to Your Account
            </h2>
            <Login />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
