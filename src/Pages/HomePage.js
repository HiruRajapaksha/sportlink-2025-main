import React, { useState, useRef } from "react";
import {
  FiSearch,
  FiBell,
  FiMessageCircle,
  FiCamera,
  FiVideo,
  FiX,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Components/ui/Button";
import Input from "../Components/ui/Input";
import Sidebar from "../Components/TaskBar";
import MessagingPanel from "../Components/MessagingPanel";
import NotificationPanel from "../Components/NotificationPanel";

const suggestedUsers = [
  {
    name: "Faraz Tariq",
    sport: "Cricketer",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Tina Tzoo",
    sport: "Badminton",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "MK8HD",
    sport: "Rugby",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const HomePage = () => {
  const [isMessagingOpen, setIsMessagingOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [photoPreview, setPhotoPreview] = useState(null);
  const [mockPosts, setMockPosts] = useState([
    {
      id: 1,
      user: {
        name: "Pethum ",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        time: "2 hours ago",
      },
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      caption: "Crushed today’s beach sprint session. 🏃‍♂️🔥",
      likes: 128,
      comments: ["Amazing!", "Well done!"],
      liked: false,
      showComments: false,
    },
    {
      id: 2,
      user: {
        name: "User2",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        time: "1 day ago",
      },
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
      caption: "Hit a personal best in the 10K run today! 🏅",
      likes: 256,
      comments: ["That's awesome!", "Great job!"],
      liked: true,
      showComments: false,
    },
  ]);

  const fileInputRef = useRef(null);

  const openCreateModal = () => setIsCreateOpen(true);
  const closeCreateModal = () => {
    setPostContent("");
    setPhotoPreview(null);
    setIsCreateOpen(false);
  };

  const handlePost = () => {
    alert(`Posted: ${postContent}`);
    closeCreateModal();
  };

  const handlePhotoClick = () => fileInputRef.current?.click();

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-16 sm:w-20 lg:w-48 bg-black z-50">
        <Sidebar />
      </div>

      {/* Main */}
      <main className="ml-16 sm:ml-20 lg:ml-56 flex-1 p-6 sm:p-8 min-h-screen">
        {/* Top Bar */}
        <div className="bg-black rounded-3xl p-3 flex justify-between items-center mb-6">
          <div className="relative flex-grow max-w-xl">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#121212] border border-gray-700 focus:border-pink-600 focus:ring-pink-600 focus:outline-none pl-12 pr-4 py-3 text-white rounded-full transition duration-200 placeholder-gray-500"
            />
          </div>
          <div className="flex space-x-4 ml-6">
            <Button onClick={() => setIsNotificationOpen(true)}>
              <FiBell className="text-xl" />
            </Button>
            <Button onClick={() => setIsMessagingOpen((prev) => !prev)}>
              <FiMessageCircle className="text-xl" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1">
            {/* Share Box */}
            <div className="bg-[#121212] p-6 rounded-3xl mb-6 shadow-lg shadow-pink-700/50 border border-gray-800">
              <h2 className="text-3xl font-semibold mb-6">
                Share Your Achievements
              </h2>
              <div className="flex items-center mb-6 space-x-6">
                <div
                  className="w-20 h-20 rounded-full border-2 border-pink-600 flex items-center justify-center bg-gray-800 overflow-hidden cursor-pointer"
                  onClick={handlePhotoClick}
                >
                  {photoPreview ? (
                    <img src={photoPreview} alt="Uploaded" className="object-cover w-full h-full rounded-full" />
                  ) : (
                    <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="Default" className="object-cover w-full h-full rounded-full" />
                  )}
                </div>
                <Input
                  type="text"
                  placeholder="What's on your mind?"
                  className="bg-gray-800 text-white p-4 rounded-2xl w-full text-lg placeholder-pink-400"
                  readOnly
                  onClick={openCreateModal}
                />
              </div>
              <div className="flex justify-end">
                <Button className="bg-pink-600 px-6 py-3 rounded-full text-lg font-semibold" onClick={openCreateModal}>
                  Create
                </Button>
              </div>
            </div>

            {/* Feed */}
            <div className="space-y-6">
              {mockPosts.map((post) => (
                <div key={post.id} className="bg-[#121212] p-5 rounded-3xl shadow-md border border-gray-800">
                  <div className="flex items-center mb-4">
                    <img src={post.user.avatar} alt={post.user.name} className="w-10 h-10 rounded-full mr-3 border-2 border-pink-600" />
                    <div>
                      <p className="font-semibold">{post.user.name}</p>
                      <p className="text-sm text-gray-400">{post.user.time}</p>
                    </div>
                  </div>
                  <img src={post.image} alt="Sport" className="w-full h-64 object-cover rounded-xl mb-4" />
                  <p className="mb-4">{post.caption}</p>
                  <div className="flex items-center space-x-6 mb-2">
                    <button
                      onClick={() =>
                        setMockPosts((prevPosts) =>
                          prevPosts.map((p) =>
                            p.id === post.id
                              ? {
                                  ...p,
                                  liked: !p.liked,
                                  likes: p.liked ? p.likes - 1 : p.likes + 1,
                                }
                              : p
                          )
                        )
                      }
                      className={`text-sm font-medium flex items-center space-x-1 ${
                        post.liked ? "text-pink-500" : "text-white"
                      }`}
                    >
                      <span>❤️</span>
                      <span>{post.likes}</span>
                    </button>
                    <button
                      onClick={() =>
                        setMockPosts((prevPosts) =>
                          prevPosts.map((p) =>
                            p.id === post.id ? { ...p, showComments: !p.showComments } : p
                          )
                        )
                      }
                      className="text-white text-sm font-medium"
                    >
                      💬 {post.comments.length}
                    </button>
                  </div>

                  {post.showComments && (
                    <div className="mt-4 space-y-3">
                      {post.comments.map((comment, idx) => (
                        <p key={idx} className="text-gray-300 text-sm">
                          <span className="font-semibold">User:</span> {comment}
                        </p>
                      ))}
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        className="w-full mt-2 bg-gray-800 p-2 rounded-lg text-white focus:ring-2 focus:ring-pink-600"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && e.target.value.trim()) {
                            const newComment = e.target.value.trim();
                            setMockPosts((prevPosts) =>
                              prevPosts.map((p) =>
                                p.id === post.id
                                  ? {
                                      ...p,
                                      comments: [...p.comments, newComment],
                                    }
                                  : p
                              )
                            );
                            e.target.value = "";
                          }
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:w-64">
            <div className="bg-[#121212] p-6 rounded-3xl shadow-lg border border-gray-800">
              <h2 className="text-2xl mb-6 font-semibold">Suggested For You</h2>
              <div className="space-y-5">
                {suggestedUsers.map((user, i) => (
                  <div key={i} className="flex items-center justify-between bg-[#181818] p-3 rounded-lg hover:bg-gray-800">
                    <div className="flex items-center space-x-4">
                      <img src={user.photo} alt={user.name} className="w-12 h-12 rounded-full object-cover border-2 border-pink-600" />
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-gray-400">{user.sport}</p>
                      </div>
                    </div>
                    <Button className="bg-pink-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-pink-700">
                      Follow
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Panels */}
        <AnimatePresence>
          {isNotificationOpen && (
            <NotificationPanel isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isMessagingOpen && (
            <MessagingPanel isOpen={isMessagingOpen} onClose={() => setIsMessagingOpen(false)} />
          )}
        </AnimatePresence>

        {/* Create Modal */}
        <AnimatePresence>
          {isCreateOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-6"
            >
              <div className="bg-[#121212] rounded-3xl p-8 max-w-xl w-full relative">
                <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={closeCreateModal}>
                  <FiX size={24} />
                </button>
                <h3 className="text-3xl font-bold mb-6">Create Post</h3>
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="What's on your mind?"
                  className="w-full p-4 mb-6 text-white bg-[#181818] rounded-xl min-h-[120px] focus:ring-2 focus:ring-pink-600"
                />
                <div className="flex items-center mb-6 space-x-4">
                  <button onClick={handlePhotoClick} className="flex items-center space-x-2 bg-pink-600 px-4 py-2 rounded-lg">
                    <FiCamera size={20} />
                    <span>Add Photo</span>
                  </button>
                  <button onClick={() => alert("Video upload coming soon!")} className="flex items-center space-x-2 bg-pink-600 px-4 py-2 rounded-lg">
                    <FiVideo size={20} />
                    <span>Add Video</span>
                  </button>
                </div>
                {photoPreview && (
                  <div className="mb-6">
                    <img src={photoPreview} alt="Preview" className="rounded-xl max-h-64 w-full object-cover" />
                  </div>
                )}
                <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
                <div className="flex justify-end">
                  <Button
                    disabled={!postContent.trim()}
                    onClick={handlePost}
                    className="bg-pink-600 px-8 py-3 rounded-full font-semibold text-lg disabled:opacity-50"
                  >
                    Post
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default HomePage;
