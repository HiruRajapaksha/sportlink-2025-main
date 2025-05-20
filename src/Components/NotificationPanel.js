import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaHeart, FaComment, FaUserPlus, FaBell } from 'react-icons/fa';

// Mock notification data inspired by Instagram
const mockNotifications = [
  {
    id: 1,
    user: { name: 'User1', avatar: 'https://via.placeholder.com/40' },
    action: 'liked',
    message: 'liked your post',
    time: '5 minutes ago',
    read: false,
  },
  {
    id: 2,
    user: { name: 'User2', avatar: 'https://via.placeholder.com/40' },
    action: 'commented',
    message: 'commented on your post',
    time: '10 minutes ago',
    read: true,
  },
  {
    id: 3,
    user: { name: 'User3', avatar: 'https://via.placeholder.com/40' },
    action: 'followed',
    message: 'started following you',
    time: '1 hour ago',
    read: false,
  },
];

// Map actions to icons
const actionIcons = {
  liked: FaHeart,
  commented: FaComment,
  followed: FaUserPlus,
};

const NotificationPanel = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState(mockNotifications);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 h-full w-[500px] bg-white text-black shadow-2xl z-50 flex flex-col"
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold">Notifications</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-black">
          <FaTimes size={24} />
        </button>
      </div>

      {/* Notification List */}
      <div className="flex-1 overflow-y-auto p-4 divide-y divide-gray-200">
        {notifications.length === 0 ? (
          <div className="text-center text-gray-500">No new notifications</div>
        ) : (
          notifications.map((notif) => {
            const Icon = actionIcons[notif.action] || FaBell;
            return (
              <div
                key={notif.id}
                className={`flex items-center space-x-3 p-2 ${notif.read ? 'bg-white' : 'bg-gray-100'} hover:bg-gray-200 cursor-pointer`}
                onClick={() => markAsRead(notif.id)}
              >
                <img src={notif.user.avatar} alt={notif.user.name} className="w-10 h-10 rounded-full" />
                <div className="flex-1 flex items-center space-x-2">
                  <p>
                    <span className="font-bold">{notif.user.name}</span> {notif.message}
                  </p>
                  {!notif.read && <span className="w-2 h-2 bg-blue-500 rounded-full" />}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{notif.time}</span>
                  <Icon className="text-gray-500" />
                </div>
              </div>
            );
          })
        )}
      </div>
    </motion.div>
  );
};

export default NotificationPanel;