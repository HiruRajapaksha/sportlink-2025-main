import React, { useState } from 'react';
import { FaSearch, FaBell, FaCommentDots } from 'react-icons/fa'; // Icons
import { AnimatePresence } from 'framer-motion';
import Button from '../Components/ui/Button';  // Importing the Button component
import Input from '../Components/ui/Input';    // Importing the Input component
import Sidebar from '../Components/TaskBar';   // Correct path to TaskBar
import MessagingPanel from '../Components/MessagingPanel'; // Importing the MessagingPanel component
import NotificationPanel from '../Components/NotificationPanel';

const HomePage = () => {
  const [isMessagingOpen, setIsMessagingOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
            <div className="flex-1 p-8">
              {/* Top Bar */}
              <div className="bg-black rounded-3xl p-3 flex justify-between items-center mb-6">
                <div className="relative flex-1 max-w-lg">
                  <FaSearch className="absolute left-4 top-3 text-gray-500" />
                  <input
                    type="search"
                    placeholder="Search"
                    className="bg-[#222] border-none pl-12 py-3 w-full text-white rounded-full"
            />
          </div>

          {/* Notification & Messaging Buttons */}
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="bg-gray-700 rounded-full h-12 w-12 flex items-center justify-center hover:bg-red-600 transition"
              aria-label="Notifications"
              onClick={() => setIsNotificationOpen(true)}
            >
              <FaBell className="text-white text-xl" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-gray-700 rounded-full h-12 w-12 flex items-center justify-center hover:bg-red-600 transition"
              aria-label="Messages"
              onClick={() => setIsMessagingOpen((prev) => !prev)}
            >
              <FaCommentDots className="text-white text-xl" />
            </Button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex space-x-4">
          {/* Left Column: Share Achievements + Feed */}
          <div className="flex-1">
            {/* Share Your Achievements */}
            <div className="bg-black p-5 rounded-3xl mb-4">
              <h2 className="text-2xl text-white mb-6">Share Your Achievements</h2>
              <div className="flex items-center mb-7">
                <div className="w-20 h-20 bg-cover rounded-full border-2 border-red-700 mr-5">
                  <img
                    src="https://via.placeholder.com/80"
                    alt="User"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <Input
                  type="text"
                  placeholder="What's on your mind?"
                  className="bg-gray-700 text-white p-4 rounded-lg w-full"
                />
              </div>
              <div className="flex justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <Button className="bg-black p-2 rounded-full text-white">Cricket</Button>
                </div>
                <Button className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition">
                  Create
                </Button>
              </div>
            </div>

            {/* Feed */}
            <div className="space-y-4">
              {/* Post 1 */}
              <div className="bg-black p-5 rounded-3xl">
                <div className="flex items-center mb-4">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">User1</p>
                    <p className="text-sm text-gray-400">2 hours ago</p>
                  </div>
                </div>
                <p className="mb-4">This is my first post!</p>
                <div className="flex space-x-4">
                  <Button className="text-white">Like</Button>
                  <Button className="text-white">Comment</Button>
                </div>
              </div>
              {/* Post 2 */}
              <div className="bg-black p-5 rounded-3xl">
                <div className="flex items-center mb-4">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">User2</p>
                    <p className="text-sm text-gray-400">1 day ago</p>
                  </div>
                </div>
                <p className="mb-4">Just achieved a new milestone in my sport!</p>
                <div className="flex space-x-4">
                  <Button className="text-white">Like</Button>
                  <Button className="text-white">Comment</Button>
                </div>
              </div>
              {/* Add more posts as needed */}
            </div>
          </div>

          {/* Right Column: Suggested For You */}
          <div className="w-64">
            <div className="bg-black p-6 rounded-3xl">
              <h2 className="text-2xl text-white mb-6">Suggested For You</h2>
              <div className="space-y-5">
                <div className="flex justify-between">
                  <span className="text-lg">Faraz Tariq (Cricketer)</span>
                  <Button className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition">
                    Follow
                  </Button>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg">Tina Tzoo (Badminton)</span>
                  <Button className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition">
                    Follow
                  </Button>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg">MK8HD (Rugby)</span>
                  <Button className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition">
                    Follow
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Panel */}
        <AnimatePresence>
          {isNotificationOpen && (
            <NotificationPanel
              isOpen={isNotificationOpen}
              onClose={() => setIsNotificationOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Messaging Panel */}
        <AnimatePresence>
          {isMessagingOpen && (
            <MessagingPanel
              isOpen={isMessagingOpen}
              onClose={() => setIsMessagingOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomePage;
