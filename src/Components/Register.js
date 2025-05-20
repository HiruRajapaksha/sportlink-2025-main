import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    gender: '',
    userType: '', // renamed here
  });

  const [activeTab, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, username, email, password, gender, userType } = formData;
    if (!name.trim()) {
      alert('Name is required');
      setActiveTab(1);
      return false;
    }
    if (!username.trim()) {
      alert('Username is required');
      setActiveTab(1);
      return false;
    }
    if (!email.trim()) {
      alert('Email is required');
      setActiveTab(2);
      return false;
    }
    if (!gender) {
      alert('Gender is required');
      setActiveTab(2);
      return false;
    }
    if (!password) {
      alert('Password is required');
      setActiveTab(3);
      return false;
    }
    if (!userType) {
      alert('User Type is required');
      setActiveTab(3);
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (activeTab === 1) {
      if (!formData.name.trim() || !formData.username.trim()) {
        alert('Please fill in all fields on Personal Info');
        return;
      }
    }
    if (activeTab === 2) {
      if (!formData.email.trim() || !formData.gender) {
        alert('Please fill in all fields on Contact Info');
        return;
      }
    }
    setActiveTab(prev => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) return;

    try {
      setLoading(true);
      // Make sure your backend URL matches here
      const response = await axios.post('http://localhost:8080/api/users/register', formData);
      alert('Registration successful!');
      setFormData({
        name: '',
        username: '',
        email: '',
        password: '',
        gender: '',
        userType: '',
      });
      setActiveTab(1);
    } catch (err) {
      console.error(err);

      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Failed to register. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-red-600 to-black">
      <div className="w-full sm:w-3/4 lg:w-1/3 bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Create Your Account</h1>

        {/* Tabs */}
        <div className="flex justify-between mb-6">
          {[1, 2, 3].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded-lg text-white ${activeTab === tab ? 'bg-red-600' : 'bg-gray-600'}`}
            >
              {tab === 1 && 'Personal Info'}
              {tab === 2 && 'Contact Info'}
              {tab === 3 && 'Account Info'}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tab 1 */}
          {activeTab === 1 && (
            <>
              <div>
                <label className="text-gray-600 block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="text-gray-600 block mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition duration-300"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </>
          )}

          {/* Tab 2 */}
          {activeTab === 2 && (
            <>
              <div>
                <label className="text-gray-600 block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="text-gray-600 block mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition duration-300"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">MALE</option>
                  <option value="female">FEMALE</option>
                </select>
              </div>
            </>
          )}

          {/* Tab 3 */}
          {activeTab === 3 && (
            <>
              <div>
                <label className="text-gray-600 block mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition duration-300"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div>
                <label className="text-gray-600 block mb-2">User Type</label>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition duration-300"
                  required
                >
                  <option value="" disabled>Select user type</option>
                  <option value="individual">Individual</option>
                  <option value="organization">Organization</option>
                </select>
              </div>
            </>
          )}

          {error && <p className="text-red-600 text-center">{error}</p>}

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            {activeTab < 3 && (
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 bg-red-600 text-white rounded-lg text-xl font-semibold hover:bg-red-700 focus:outline-none transition duration-200"
              >
                Next
              </button>
            )}

            {activeTab === 3 && (
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-red-600 text-white rounded-lg text-xl font-semibold hover:bg-red-700 focus:outline-none transition duration-200"
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
