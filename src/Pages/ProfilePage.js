import React, { useState } from 'react';
import { FaSearch, FaBell, FaCommentDots, FaStar, FaTimes, FaPlus } from 'react-icons/fa';
import Sidebar from '../Components/TaskBar';
import Button from '../Components/ui/Button';
import Input from '../Components/ui/Input';
import { AnimatePresence, motion } from 'framer-motion';
import MessagingPanel from '../Components/MessagingPanel';
import AddPostModal from '../Components/AddPostModal'; // Import AddPostModal

// ExperienceForm component (unchanged)
const ExperienceForm = ({ initialValues, onSave, onCancel }) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formValues);
  };

  return (
    <div className="mb-4 p-4 bg-gray-800 rounded-lg">
      <Input
        name="title"
        value={formValues.title}
        onChange={handleChange}
        placeholder="Title"
        className="mb-2 bg-gray-700 text-white"
      />
      <Input
        name="company"
        value={formValues.company}
        onChange={handleChange}
        placeholder="Company/Institution"
        className="mb-2 bg-gray-700 text-white"
      />
      <Input
        name="time"
        value={formValues.time}
        onChange={handleChange}
        placeholder="Time Period"
        className="mb-2 bg-gray-700 text-white"
      />
      <textarea
        name="description"
        value={formValues.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 bg-gray-700 text-white rounded mb-2"
        rows="3"
      />
      <div className="flex space-x-2">
        <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">Save</Button>
        <Button onClick={onCancel} className="bg-gray-600 hover:bg-gray-700">Cancel</Button>
      </div>
    </div>
  );
};

// ExperienceEntry component (unchanged)
const ExperienceEntry = ({ experience, isEditing, onEdit, onSave, onCancel, onDelete }) => {
  if (isEditing) {
    return (
      <ExperienceForm
        initialValues={experience}
        onSave={onSave}
        onCancel={onCancel}
      />
    );
  } else {
    return (
      <div className="mb-4 p-4 bg-gray-800 rounded-lg">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-white">{experience.title}</h3>
            <p className="text-gray-300">{experience.company}</p>
          </div>
          <p className="text-gray-400">{experience.time}</p>
        </div>
        <p className="mb-2 text-white">{experience.description}</p>
        <div className="flex space-x-2">
          <Button onClick={onEdit} className="bg-blue-600 hover:bg-blue-700">Edit</Button>
          <Button onClick={onDelete} className="bg-red-600 hover:bg-red-700">Delete</Button>
        </div>
      </div>
    );
  }
};

// ExperienceSection component (unchanged)
const ExperienceSection = ({ experiences, addExperience, updateExperience, deleteExperience }) => {
  const [editingId, setEditingId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="bg-black p-6 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-white">Experience</h2>
        <Button onClick={() => setIsAdding(true)} className="bg-red-600 hover:bg-red-700">
          Add New
        </Button>
      </div>
      {experiences.map((exp) => (
        <ExperienceEntry
          key={exp.id}
          experience={exp}
          isEditing={editingId === exp.id}
          onEdit={() => setEditingId(exp.id)}
          onSave={(updatedExp) => {
            updateExperience(exp.id, updatedExp);
            setEditingId(null);
          }}
          onCancel={() => setEditingId(null)}
          onDelete={() => deleteExperience(exp.id)}
        />
      ))}
      {isAdding && (
        <ExperienceForm
          initialValues={{ title: '', company: '', time: '', description: '' }}
          onSave={(newExp) => {
            addExperience(newExp);
            setIsAdding(false);
          }}
          onCancel={() => setIsAdding(false)}
        />
      )}
    </div>
  );
};

// AboutSection component (unchanged)
const AboutSection = ({ bio, setBio }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempBio, setTempBio] = useState(bio);

  const handleSave = () => {
    setBio(tempBio);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempBio(bio);
    setIsEditing(false);
  };

  return (
    <div className="bg-black p-6 rounded-xl">
      <h2 className="text-2xl text-white mb-4">About</h2>
      {isEditing ? (
        <div>
          <textarea
            value={tempBio}
            onChange={(e) => setTempBio(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded mb-2"
            rows="4"
            placeholder="Tell us about yourself..."
          />
          <div className="flex space-x-2">
            <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">Save</Button>
            <Button onClick={handleCancel} className="bg-gray-600 hover:bg-gray-700">Cancel</Button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-white mb-4">{bio || 'No bio yet'}</p>
          <Button onClick={() => setIsEditing(true)} className="bg-blue-600 hover:bg-blue-700">Edit</Button>
        </div>
      )}
    </div>
  );
};

// AchievementForm component (unchanged)
const AchievementForm = ({ initialValues, onSave, onCancel }) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formValues);
  };

  return (
    <div className="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
      <div className="flex items-center space-x-2 mb-4">
        <FaStar className="text-yellow-400 text-2xl" />
        <h3 className="text-xl font-bold text-white">
          {initialValues.id ? 'Edit Achievement' : 'Add Achievement'}
        </h3>
      </div>
      <Input
        name="title"
        value={formValues.title}
        onChange={handleChange}
        placeholder="Title"
        className="mb-2 bg-gray-700 text-white"
      />
      <Input
        name="date"
        value={formValues.date}
        onChange={handleChange}
        placeholder="Date"
        className="mb-2 bg-gray-700 text-white"
      />
      <textarea
        name="description"
        value={formValues.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 bg-gray-700 text-white rounded mb-2"
        rows="3"
      />
      <div className="flex space-x-2">
        <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">Save</Button>
        <Button onClick={onCancel} className="bg-gray-600 hover:bg-gray-700">Cancel</Button>
      </div>
    </div>
  );
};

// AchievementEntry component (unchanged)
const AchievementEntry = ({ achievement, isEditing, onEdit, onSave, onCancel, onDelete }) => {
  if (isEditing) {
    return (
      <AchievementForm
        initialValues={achievement}
        onSave={onSave}
        onCancel={onCancel}
      />
    );
  } else {
    return (
      <div className="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-red-600 transition-colors flex items-start space-x-4">
        <FaStar className="text-yellow-400 text-2xl" />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
            <p className="text-gray-400">{achievement.date}</p>
          </div>
          <p className="mb-2 text-white">{achievement.description}</p>
          <div className="flex space-x-2">
            <Button onClick={onEdit} className="bg-blue-600 hover:bg-blue-700">Edit</Button>
            <Button onClick={onDelete} className="bg-red-600 hover:bg-red-700">Delete</Button>
          </div>
        </div>
      </div>
    );
  }
};

// AchievementSection component (unchanged)
const AchievementSection = ({ achievements, addAchievement, updateAchievement, deleteAchievement }) => {
  const [editingId, setEditingId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="bg-black p-6 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-white">Achievements</h2>
        <Button onClick={() => setIsAdding(true)} className="bg-red-600 hover:bg-red-700">
          Add New
        </Button>
      </div>
      {achievements.map((ach) => (
        <AchievementEntry
          key={ach.id}
          achievement={ach}
          isEditing={editingId === ach.id}
          onEdit={() => setEditingId(ach.id)}
          onSave={(updatedAch) => {
            updateAchievement(ach.id, updatedAch);
            setEditingId(null);
          }}
          onCancel={() => setEditingId(null)}
          onDelete={() => deleteAchievement(ach.id)}
        />
      ))}
      {isAdding && (
        <AchievementForm
          initialValues={{ title: '', description: '', date: '' }}
          onSave={(newAch) => {
            addAchievement(newAch);
            setIsAdding(false);
          }}
          onCancel={() => setIsAdding(false)}
        />
      )}
    </div>
  );
};

// PostModal component (unchanged)
const PostModal = ({ post, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-4 max-w-2xl w-full relative"
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
          className="w-full h-96 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <div className="flex items-center mb-2">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-8 h-8 rounded-full mr-2"
            />
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
};

// Updated ProfilePage component
const ProfilePage = () => {
  const [isMessagingOpen, setIsMessagingOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('posts');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isAddPostOpen, setIsAddPostOpen] = useState(false); // State for AddPostModal visibility
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Corp',
      time: '2018 - Present',
      description: 'Developed web applications using React and Node.js',
    },
    {
      id: 2,
      title: 'Intern',
      company: 'StartUp Inc',
      time: '2017 - 2018',
      description: 'Assisted in developing mobile apps',
    },
  ]);
  const [bio, setBio] = useState('This is my bio. I am a software engineer passionate about web development.');
  const [achievements, setAchievements] = useState([
    { id: 1, title: 'Best Coder Award', description: 'Won the annual coding competition at TechFest 2023', date: 'March 2023' },
    { id: 2, title: 'Certified React Developer', description: 'Completed the React certification course', date: 'January 2022' },
  ]);

  const [posts, setPosts] = useState([ // Updated to mutable state
    {
      id: 1,
      image: 'https://via.placeholder.com/300',
      caption: 'Exploring new horizons!',
      likes: 15,
      comments: [
        { id: 1, username: 'user1', text: 'Awesome!' },
        { id: 2, username: 'user2', text: 'Love this!' },
      ],
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300',
      caption: 'Chasing dreams.',
      likes: 8,
      comments: [],
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300',
      caption: 'Good vibes only.',
      likes: 12,
      comments: [{ id: 1, username: 'user3', text: 'Great shot!' }],
    },
    { id: 4, image: 'https://via.placeholder.com/300', caption: 'Living life.', likes: 5, comments: [] },
    { id: 5, image: 'https://via.placeholder.com/300', caption: 'Nature lover.', likes: 20, comments: [] },
    { id: 6, image: 'https://via.placeholder.com/300', caption: 'City lights.', likes: 7, comments: [] },
    { id: 7, image: 'https://via.placeholder.com/300', caption: 'Peaceful day.', likes: 9, comments: [] },
    { id: 8, image: 'https://via.placeholder.com/300', caption: 'Adventure time!', likes: 11, comments: [] },
    { id: 9, image: 'https://via.placeholder.com/300', caption: 'Serenity.', likes: 14, comments: [] },
  ]);

  // Function to handle adding a new post
  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const addExperience = (newExp) => {
    const id = experiences.length + 1;
    setExperiences([...experiences, { id, ...newExp }]);
  };

  const updateExperience = (id, updatedExp) => {
    setExperiences(experiences.map((exp) => (exp.id === id ? { ...exp, ...updatedExp } : exp)));
  };

  const deleteExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const addAchievement = (newAch) => {
    const id = achievements.length + 1;
    setAchievements([...achievements, { id, ...newAch }]);
  };

  const updateAchievement = (id, updatedAch) => {
    setAchievements(achievements.map((ach) => (ach.id === id ? { ...ach, ...updatedAch } : ach)));
  };

  const deleteAchievement = (id) => {
    setAchievements(achievements.filter((ach) => ach.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 bg-gray-900 p-8 lg:p-12 rounded-l-3xl ml-2 lg:ml-6 max-w-full overflow-auto">
        <div className="bg-black rounded-3xl p-4 flex justify-between items-center mb-4 max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 max-w-xl w-full">
            <FaSearch className="text-white text-2xl" />
            <Input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-white py-3 rounded-full w-full focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="bg-[#222] rounded-full h-12 w-12">
              <FaBell className="text-white text-xl" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-[#222] rounded-full h-12 w-12"
              onClick={() => setIsMessagingOpen(true)}
            >
              <FaCommentDots className="text-white text-xl" />
              <span className="sr-only">Messages</span>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMessagingOpen && (
            <MessagingPanel
              isOpen={isMessagingOpen}
              onClose={() => setIsMessagingOpen(false)}
            />
          )}
        </AnimatePresence>

        <div className="flex flex-col items-center justify-center min-h-[50vh] mb-4 max-w-4xl mx-auto">
          <div className="w-32 h-32 bg-cover rounded-full border-4 border-red-700 mb-2 overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">Kavindu Pethum</h1>
            <p className="text-lg text-gray-300">@kavindu07</p>
          </div>
          <div className="flex space-x-12">
            <div className="text-center">
              <h2 className="text-xl text-gray-300">Posts</h2>
              <p className="text-2xl text-red-600">{posts.length}</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl text-gray-300">Followers</h2>
              <p className="text-2xl text-red-600">2.5K</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl text-gray-300">Following</h2>
              <p className="text-2xl text-red-600">1.3K</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl text-gray-300">Supporters</h2>
              <p className="text-2xl text-red-600">653</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mb-6 space-x-4 max-w-4xl mx-auto">
          <Button
            className={`p-4 rounded-xl w-1/4 ${
              activeTab === 'posts' ? 'bg-red-600' : 'bg-gray-700'
            } hover:bg-red-800 transition`}
            onClick={() => setActiveTab('posts')}
          >
            Posts
          </Button>
          <Button
            className={`p-4 rounded-xl w-1/4 ${
              activeTab === 'experience' ? 'bg-red-600' : 'bg-gray-700'
            } hover:bg-red-800 transition`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </Button>
          <Button
            className={`p-4 rounded-xl w-1/4 ${
              activeTab === 'achievements' ? 'bg-red-600' : 'bg-gray-700'
            } hover:bg-red-800 transition`}
            onClick={() => setActiveTab('achievements')}
          >
            Achievements
          </Button>
          <Button
            className={`p-4 rounded-xl w-1/4 ${
              activeTab === 'about' ? 'bg-red-600' : 'bg-gray-700'
            } hover:bg-red-800 transition`}
            onClick={() => setActiveTab('about')}
          >
            About
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'posts' && (
            <motion.div
              key="posts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto relative"
            >
              <Button
                className="absolute top-4 right-[-6.5rem] bg-red-600 hover:bg-red-700 rounded-full p-3 shadow-lg transform hover:scale-105 transition-transform"
                onClick={() => setIsAddPostOpen(true)} // Open AddPostModal
              >
                <FaPlus className="text-white text-xl" />
              </Button>
              <div className="grid grid-cols-3 gap-2">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="aspect-square border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    <img
                      src={post.image}
                      alt="Post"
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <ExperienceSection
                experiences={experiences}
                addExperience={addExperience}
                updateExperience={updateExperience}
                deleteExperience={deleteExperience}
              />
            </motion.div>
          )}
          {activeTab === 'achievements' && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <AchievementSection
                achievements={achievements}
                addAchievement={addAchievement}
                updateAchievement={updateAchievement}
                deleteAchievement={deleteAchievement}
              />
            </motion.div>
          )}
          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <AboutSection bio={bio} setBio={setBio} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Render AddPostModal */}
        <AnimatePresence>
          {isAddPostOpen && (
            <AddPostModal
              isOpen={isAddPostOpen}
              onClose={() => setIsAddPostOpen(false)}
              onPost={handleAddPost}
            />
          )}
        </AnimatePresence>

        {/* Existing PostModal */}
        <AnimatePresence>
          {selectedPost && (
            <PostModal
              key={selectedPost.id}
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