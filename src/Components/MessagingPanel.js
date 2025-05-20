import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPaperPlane, FaArrowLeft } from "react-icons/fa";
import Button from '../Components/ui/Button';

const chatsMockInitial = [
  {
    id: 1,
    user: "BigDaddy",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    status: "online",
    messages: [
      { id: 1, user: "BigDaddy", text: "Lorem ipsum?", time: "Just now" },
      { id: 2, user: "You", text: "Hello!", time: "1 min ago" },
    ],
  },
  {
    id: 2,
    user: "NoobPlayer69",
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    status: "offline",
    messages: [
      { id: 1, user: "NoobPlayer69", text: "Lorem ipsum dolor sit amet", time: "2h ago" },
    ],
  },
  {
    id: 3,
    user: "Queen_444",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    status: "offline",
    messages: [
      { id: 1, user: "Queen_444", text: "Lorem ipsum dolor sit amet.", time: "2h ago" },
    ],
  },
];

const MessagingPanel = ({ isOpen, onClose }) => {
  const [chats, setChats] = useState(chatsMockInitial);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (selectedChatId !== null) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats, selectedChatId]);

  const handleSend = () => {
    if (!input.trim() || selectedChatId === null) return;
    const selectedChat = chats.find(chat => chat.id === selectedChatId);
    const newMessage = {
      id: selectedChat.messages.length + 1,
      user: "You",
      text: input.trim(),
      time: "Just now",
    };
    setChats(chats.map(chat =>
      chat.id === selectedChatId
        ? { ...chat, messages: [...chat.messages, newMessage] }
        : chat
    ));
    setInput("");
  };

  const onEnterPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const selectedChat = selectedChatId !== null ? chats.find(chat => chat.id === selectedChatId) : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full w-96 bg-[#121212] text-white shadow-2xl z-50 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-labelledby="messaging-panel-title"
        >
          {selectedChatId === null ? (
            <>
              {/* Chat List Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <h2 className="text-2xl font-semibold tracking-wide font-sans">Messages</h2>
                <button onClick={onClose} aria-label="Close chat panel" className="text-gray-500 hover:text-white transition-colors duration-200">
                  <FaTimes size={26} />
                </button>
              </div>
              {/* Chat List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-[#121212]">
                {chats.map(chat => (
                  <div
                    key={chat.id}
                    className="flex items-center space-x-4 cursor-pointer hover:bg-[#222] p-3 rounded-xl transition-colors duration-200"
                    onClick={() => setSelectedChatId(chat.id)}
                  >
                    <div className="relative">
                      <img src={chat.avatar} alt={chat.user} className="w-12 h-12 rounded-full object-cover" />
                      {chat.status === "online" && (
                        <span className="absolute bottom-0 right-0 h-4 w-4 bg-green-500 rounded-full border-2 border-[#121212]" />
                      )}
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="font-semibold truncate text-lg">{chat.user}</p>
                      <p className="text-sm text-gray-400 truncate">
                        {chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].text : "No messages yet"}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 select-none">
                      {chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].time : ""}
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Specific Chat Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-900 bg-[#181818]">
                <button
                  onClick={() => setSelectedChatId(null)}
                  aria-label="Back to chat list"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaArrowLeft size={24} />
                </button>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img src={selectedChat.avatar} alt={selectedChat.user} className="w-10 h-10 rounded-full object-cover" />
                    {selectedChat.status === "online" && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-[#181818]" />
                    )}
                  </div>
                  <h2 className="text-xl font-semibold font-sans tracking-wide">{selectedChat.user}</h2>
                </div>
                <button onClick={onClose} aria-label="Close chat panel" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaTimes size={26} />
                </button>
              </div>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-[#121212]">
                {selectedChat.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-end space-x-3 max-w-full ${
                      msg.user === "You" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.user !== "You" && (
                      <img
                        src={selectedChat.avatar}
                        alt={selectedChat.user}
                        className="w-8 h-8 rounded-full object-cover shadow-md"
                      />
                    )}
                    <div
                      className={`relative max-w-[70%] px-5 py-3 rounded-2xl shadow-lg text-sm break-words whitespace-pre-wrap
                      ${msg.user === "You"
                        ? "bg-gradient-to-tr from-purple-600 to-blue-500 text-white rounded-br-none"
                        : "bg-[#2c2c2c] text-gray-300 rounded-bl-none"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <span className="absolute bottom-1 right-3 text-xs text-gray-400 select-none">
                        {msg.time}
                      </span>
                    </div>
                    {msg.user === "You" && (
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="You"
                        className="w-8 h-8 rounded-full object-cover shadow-md"
                      />
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              {/* Input Area */}
              <div className="p-4 border-t border-gray-900 flex items-center gap-3 bg-[#181818]">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onEnterPress}
                  placeholder="Message..."
                  className="flex-1 resize-none bg-[#222] rounded-3xl text-white p-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 max-h-32"
                  rows={1}
                />
                <button
                  onClick={handleSend}
                  aria-label="Send message"
                  disabled={!input.trim()}
                  className={`p-3 rounded-full transition-colors duration-200 flex items-center justify-center
                    ${input.trim() ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-900 cursor-not-allowed"}`}
                >
                  <FaPaperPlane size={18} />
                </button>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MessagingPanel;
