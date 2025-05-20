import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaHeart, FaComment, FaUserPlus, FaBell } from 'react-icons/fa';

const mockNotifications = [
  {
    id: 1,
    user: { name: 'User1', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
    action: 'liked',
    message: 'liked your post',
    time: '5 minutes ago',
    read: false,
  },
  {
    id: 2,
    user: { name: 'User2', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
    action: 'commented',
    message: 'commented on your post: "Awesome!"',
    time: '10 minutes ago',
    read: true,
  },
  {
    id: 3,
    user: { name: 'User3', avatar: 'https://randomuser.me/api/portraits/women/21.jpg' },
    action: 'followed',
    message: 'started following you',
    time: '1 hour ago',
    read: false,
  },
  {
    id: 4,
    user: { name: 'User4', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    action: 'liked',
    message: 'liked your story',
    time: '2 hours ago',
    read: false,
  },
  {
    id: 5,
    user: { name: 'User5', avatar: 'https://randomuser.me/api/portraits/women/56.jpg' },
    action: 'commented',
    message: 'commented: "Great shot!"',
    time: 'Yesterday',
    read: true,
  },
  {
    id: 6,
    user: { name: 'User6', avatar: 'https://randomuser.me/api/portraits/men/77.jpg' },
    action: 'followed',
    message: 'started following you',
    time: '2 days ago',
    read: true,
  },
];

// Instagram-like dark mode color scheme for icons and backgrounds
const actionIcons = {
  liked: {
    icon: FaHeart,
    color: 'text-pink-500',
    bg: 'bg-gradient-to-tr from-pink-800 to-pink-700',
  },
  commented: {
    icon: FaComment,
    color: 'text-blue-400',
    bg: 'bg-gradient-to-tr from-blue-800 to-blue-700',
  },
  followed: {
    icon: FaUserPlus,
    color: 'text-purple-400',
    bg: 'bg-gradient-to-tr from-purple-800 to-purple-700',
  },
};

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const panelVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -15 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -15 },
};

const NotificationPanel = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState(mockNotifications);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Popup panel */}
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-16 right-5 w-80 max-h-[460px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-50 flex flex-col overflow-hidden border border-gray-700"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700 sticky top-0 z-10 rounded-t-3xl bg-gradient-to-tr from-gray-900 to-gray-800">
              <h2 className="text-lg font-semibold text-white tracking-wide select-none">Notifications</h2>
              <button
                onClick={onClose}
                aria-label="Close notifications"
                className="text-gray-400 hover:text-white transition-transform hover:scale-110"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Notification List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              {notifications.length === 0 ? (
                <p className="text-center text-gray-500 italic select-none">No new notifications</p>
              ) : (
                notifications.map((notif) => {
                  const { icon: Icon, color, bg } = actionIcons[notif.action] || {
                    icon: FaBell,
                    color: 'text-gray-400',
                    bg: 'bg-gray-700',
                  };

                  return (
                    <motion.div
                      key={notif.id}
                      onClick={() => markAsRead(notif.id)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 10px 25px rgba(255,255,255,0.1)',
                        backgroundColor: '#2a2a2a',
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      className={`flex items-center space-x-4 p-3 rounded-2xl cursor-pointer select-none
                        ${notif.read ? 'bg-gray-900' : 'bg-gradient-to-r from-pink-900 to-pink-800'} shadow-md`}
                    >
                      {/* Avatar with ring if unread */}
                      <div
                        className={`relative flex-shrink-0 rounded-full ${
                          notif.read
                            ? 'ring-1 ring-gray-700'
                            : 'ring-2 ring-pink-500'
                        }`}
                      >
                        <img
                          src={notif.user.avatar}
                          alt={`${notif.user.name} avatar`}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {!notif.read && (
                          <span className="absolute top-0 right-0 block w-3 h-3 bg-pink-500 rounded-full ring-1 ring-gray-900" />
                        )}
                      </div>

                      {/* Text content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold truncate">
                          {notif.user.name}{' '}
                          <span className="font-normal text-gray-300">{notif.message}</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1 truncate">{notif.time}</p>
                      </div>

                      {/* Action icon in colored circle */}
                      <div
                        className={`flex items-center justify-center w-9 h-9 rounded-full ${bg} shadow-lg`}
                        aria-label={`${notif.action} icon`}
                      >
                        <Icon className={`text-lg ${color}`} />
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationPanel;
