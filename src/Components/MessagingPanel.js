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
          className="fixed top-0 right-0 h-full w-96 bg-gray-700 text-white shadow-2xl z-50 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-labelledby="messaging-panel-title"
        >
          {selectedChatId === null ? (
            <>
              {/* Chat List Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <h2 className="text-2xl font-semibold">Messages</h2>
                <button onClick={onClose} aria-label="Close chat panel" className="text-gray-400 hover:text-white">
                  <FaTimes size={26} />
                </button>
              </div>
              {/* Chat List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {chats.map(chat => (
                  <div
                    key={chat.id}
                    className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded-lg"
                    onClick={() => setSelectedChatId(chat.id)}
                  >
                    <div className="relative">
                      <img src={chat.avatar} alt={chat.user} className="w-12 h-12 rounded-full" />
                      {chat.status === "online" && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-gray-900" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{chat.user}</p>
                      <p className="text-sm text-gray-400">
                        {chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].text : "No messages yet"}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].time : ""}
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Specific Chat Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <button onClick={() => setSelectedChatId(null)} aria-label="Back to chat list" className="text-gray-400 hover:text-white">
                  <FaArrowLeft size={24} />
                </button>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img src={selectedChat.avatar} alt={selectedChat.user} className="w-10 h-10 rounded-full" />
                    {selectedChat.status === "online" && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-gray-900" />
                    )}
                  </div>
                  <h2 className="text-xl font-semibold">{selectedChat.user}</h2>
                </div>
                <button onClick={onClose} aria-label="Close chat panel" className="text-gray-400 hover:text-white">
                  <FaTimes size={26} />
                </button>
              </div>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5">
                {selectedChat.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex space-x-5 ${
                      msg.user === "You" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.user !== "You" && (
                      <img
                        src={selectedChat.avatar}
                        alt={selectedChat.user}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <div
                      className={`max-w-[70%] rounded-3xl p-4 shadow-lg ${
                        msg.user === "You"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-gray-700 text-white rounded-bl-none"
                      }`}
                    >
                      <p className="text-base whitespace-pre-wrap">{msg.text}</p>
                      <span className="text-xs text-gray-400 mt-1 block text-right">
                        {msg.time}
                      </span>
                    </div>
                    {msg.user === "You" && (
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="You"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              {/* Input Area */}
              <div className="p-6 border-t border-gray-700 flex items-center gap-4">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onEnterPress}
                  placeholder="Type a message..."
                  className="flex-1 resize-none bg-gray-700 rounded-3xl text-white p-4 placeholder-gray-400 focus:outline-none max-h-36"
                  rows={1}
                />
                <Button
                  onClick={handleSend}
                  className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 py-3 flex items-center gap-3 text-lg"
                  aria-label="Send message"
                >
                  <FaPaperPlane />
                  Send
                </Button>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MessagingPanel;
