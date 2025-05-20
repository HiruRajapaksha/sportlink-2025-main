import React from 'react';
import Button from './ui/Button';  // Importing the Button component
import Input from './ui/Input';    // Importing the Input component
import Sidebar from './TaskBar';   // Correct path to TaskBar

const SettingsPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 lg:ml-56">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        <div className="space-y-8 bg-gray-800 rounded-3xl p-6">
          {/* Account Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
            <div className="grid grid-cols-2 gap-6">
              <Input type="text" placeholder="Username" className="bg-gray-700 border-none rounded-xl py-3 px-4" />
              <Input type="email" placeholder="Email" className="bg-gray-700 border-none rounded-xl py-3 px-4" />
              <Input type="password" placeholder="New Password" className="bg-gray-700 border-none rounded-xl py-3 px-4" />
              <Input type="password" placeholder="Confirm Password" className="bg-gray-700 border-none rounded-xl py-3 px-4" />
            </div>
          </div>

          {/* Notifications */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
            <div className="flex items-center justify-between bg-gray-700 p-4 rounded-xl">
              <span>Email Notifications</span>
              <input type="checkbox" className="h-6 w-6 text-red-600 rounded focus:ring-red-500" />
            </div>
            <div className="flex items-center justify-between bg-gray-700 p-4 rounded-xl mt-4">
              <span>Push Notifications</span>
              <input type="checkbox" className="h-6 w-6 text-red-600 rounded focus:ring-red-500" />
            </div>
          </div>

          {/* Privacy Settings */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
            <div className="flex items-center justify-between bg-gray-700 p-4 rounded-xl">
              <span>Make profile public</span>
              <input type="checkbox" className="h-6 w-6 text-red-600 rounded focus:ring-red-500" />
            </div>
            <div className="flex items-center justify-between bg-gray-700 p-4 rounded-xl mt-4">
              <span>Allow friend requests</span>
              <input type="checkbox" className="h-6 w-6 text-red-600 rounded focus:ring-red-500" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end">
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-3">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
