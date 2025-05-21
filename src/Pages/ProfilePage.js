import React, { useState } from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import Sidebar from "../Components/TaskBar";
import { AnimatePresence, motion } from "framer-motion";
import profilePhoto from "../assets/Profile.jpeg"; // ✅ Local profile photo

const PostModal = ({ post, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-xl p-4 max-w-2xl w-full relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-2 right-2 text-black text-xl"
        onClick={onClose}
      >
        <FaTimes />
      </button>

      <img
        src={post.image}
        alt="Post"
        className="w-full h-96 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <p className="text-black font-bold">Kavindu Pethum</p>
        </div>
        <p className="text-black">{post.caption}</p>
        <p className="text-gray-600">Likes: {post.likes}</p>
        <div className="mt-2">
          <h4 className="text-black font-bold">Comments:</h4>
          {post.comments.map((comment) => (
            <p key={comment.id} className="text-black">
              <strong>{comment.username}:</strong> {comment.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
      caption: "Pushing Limits",
      likes: 35,
      comments: [],
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      caption: "Strength Day",
      likes: 40,
      comments: [],
    },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <div className="flex-1 p-8 lg:p-12 lg:ml-56">
        {/* Profile Info */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-40 h-40 rounded-full border-4 border-red-600 overflow-hidden mb-4">
            <img
              src={profilePhoto} // ✅ Local profile image used here
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold">Kavindu Pethum</h1>
          <p className="text-sm text-gray-400">@kavindu07</p>
          <div className="flex space-x-8 mt-4">
            <div className="text-center">
              <p className="font-bold text-lg">{posts.length}</p>
              <p className="text-gray-400 text-sm">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">2.5K</p>
              <p className="text-gray-400 text-sm">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">1.3K</p>
              <p className="text-gray-400 text-sm">Following</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {["posts", "experience", "achievements", "about"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`uppercase tracking-wide px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-red-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "posts" && (
            <motion.div
              key="posts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-3 gap-2"
            >
              {posts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="aspect-square cursor-pointer border border-gray-700 hover:shadow-md transition"
                >
                  <img
                    src={post.image}
                    alt="Post"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-xl">
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <p className="text-gray-400">Tech Corp | 2018 - Present</p>
                  <p className="text-gray-300 mt-2">
                    Worked on full-stack applications using React and Node.js
                  </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl">
                  <h3 className="text-xl font-bold">Intern Developer</h3>
                  <p className="text-gray-400">StartUp Inc | 2017 - 2018</p>
                  <p className="text-gray-300 mt-2">
                    Assisted in building mobile applications for iOS/Android
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "achievements" && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-xl flex items-start space-x-4">
                  <FaStar className="text-yellow-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">Best Coder Award</h3>
                    <p className="text-gray-400">TechFest 2023</p>
                    <p className="text-gray-300 mt-2">
                      Won 1st place in a national coding competition
                    </p>
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl flex items-start space-x-4">
                  <FaStar className="text-yellow-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">
                      Certified React Developer
                    </h3>
                    <p className="text-gray-400">Issued Jan 2022</p>
                    <p className="text-gray-300 mt-2">
                      Completed React advanced certification with distinction
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-800 p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="text-gray-300 leading-relaxed">
                  I am a passionate software engineer with experience in
                  building responsive and high-performance web applications. My
                  focus is on creating clean code, scalable architectures, and
                  delightful user experiences.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Post Preview Modal */}
        <AnimatePresence>
          {selectedPost && (
            <PostModal
              post={selectedPost}
              onClose={() => setSelectedPost(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProfilePage;
