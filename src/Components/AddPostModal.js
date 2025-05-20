import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from '../Components/ui/Button';

const AddPostModal = ({ isOpen, onClose, onPost }) => {
  const [media, setMedia] = useState(null);
  const [caption, setCaption] = useState('');

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(file);
    }
  };

  // Handle post submission
  const handlePost = () => {
    if (media) {
      const newPost = {
        id: Date.now(), // Unique ID based on timestamp
        image: URL.createObjectURL(media), // Temporary URL for local preview
        caption,
        likes: 0,
        comments: [],
      };
      onPost(newPost);
      setMedia(null); // Reset media
      setCaption(''); // Reset caption
      onClose(); // Close modal
    } else {
      alert('Please select a media file.');
    }
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-gray-800 rounded-lg p-6 max-w-lg w-full relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-300 text-xl"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-bold text-white mb-4">Create New Post</h2>

        {/* Media Upload Area */}
        <div
          className="mb-4 p-4 bg-gray-700 rounded-lg text-center cursor-pointer hover:bg-gray-600 transition-colors"
          onClick={() => document.getElementById('fileInput').click()}
        >
          <p className="text-white">
            {media ? 'Change Media' : 'Click to select photo or video'}
          </p>
          <input
            id="fileInput"
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Media Preview */}
        {media && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            {media.type.startsWith('image/') ? (
              <img
                src={URL.createObjectURL(media)}
                alt="Preview"
                className="max-h-64 w-full object-contain rounded-lg"
              />
            ) : media.type.startsWith('video/') ? (
              <video
                src={URL.createObjectURL(media)}
                controls
                className="max-h-64 w-full rounded-lg"
              />
            ) : null}
          </motion.div>
        )}

        {/* Caption Input */}
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-2 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
          rows="3"
        />

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2">
          <Button
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
          >
            Cancel
          </Button>
          <Button
            onClick={handlePost}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Post
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AddPostModal;