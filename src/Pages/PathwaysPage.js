import React from "react";
import { FaSearch } from "react-icons/fa"; // For Search icon
import Sidebar from "../Components/TaskBar"; // Sidebar Component (already developed previously)
import { Button } from '../Components/ui/Button'; // Correct path to Button

const PathwaysPage = () => {
  // Dummy data for suggested users
  const suggestedUsers = [
    { name: "Faraz Tariq", sport: "Cricketer" },
    { name: "Tina Tzoo", sport: "Badminton" },
    { name: "MK8HD", sport: "Rugby" },
    { name: "Mr. Jam", sport: "Football" },
    { name: "GhostFeed", sport: "Athlete" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Top Bar */}
        <div className="bg-black rounded-3xl p-3 flex justify-between items-center mb-6">
          <div className="relative flex-1 max-w-lg">
            <FaSearch className="absolute left-4 top-3 text-gray-500" />
            <input
              type="search"
              placeholder="Search"
              className="bg-[#222] border-none pl-12 py-3 w-full text-white rounded-full"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="bg-red-600 rounded-full h-22 w-22">
              <span>Filters</span>
            </Button>
            <Button
      className="bg-red-600 text-white hover:bg-red-700 rounded-full px-4 py-2 flex items-center"
      // onClick={() => setIsAddPostOpen(true)} // Uncomment and implement if you have a modal
    >
      {/* You can use an icon or text */}
      Add 
      {/* <FaPlus className="ml-2" /> */}
    </Button>
          </div>
        </div>

        {/* Pathway Details Section */}
        <div className="bg-black rounded-3xl p-6 mb-8">
          <div className="flex justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Basketball Coach Position</h1>
              <p className="text-sm text-gray-400">SportElite Academy</p>
            </div>
            <Button className="bg-red-600 text-white hover:bg-red-700 rounded-full px-4 py-2">
              Job
            </Button>
          </div>

          <div className="flex gap-8 mb-8">
            {/* Skills */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Skills</h3>
              <div className="flex gap-4">
                <div className="bg-red-600 p-4 rounded-full">
                  <span className="text-white">Health Coach</span>
                </div>
                <div className="bg-orange-500 p-4 rounded-full">
                  <span className="text-white">Basketball</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Skill</span>
                  <span className="text-sm text-white">14</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Location</span>
                  <span className="text-sm text-white">CMB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Status</span>
                  <span className="text-sm text-green-500">Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-2">Experience</h3>
            <div className="h-2 w-full bg-gray-600 rounded-full">
              <div className="h-full bg-red-600" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="flex gap-6">
            <Button className="bg-red-600 text-white hover:bg-red-700 rounded-full px-6 py-2">
              Apply Now
            </Button>
            <Button className="bg-gray-600 text-white hover:bg-gray-700 rounded-full px-6 py-2">
              Remind Me
            </Button>
          </div>
        </div>

        {/* Other Pathways Section */}
        <div className="bg-black rounded-3xl p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Other Pathways</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-4 rounded-xl">
              <h4 className="text-lg font-medium text-white">Cricket</h4>
              <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button className="bg-red-600 text-white hover:bg-red-700 rounded-full px-4 py-2 mt-4">
                Check
              </Button>
            </div>
            <div className="bg-gray-700 p-4 rounded-xl">
              <h4 className="text-lg font-medium text-white">Volleyball</h4>
              <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button className="bg-red-600 text-white hover:bg-red-700 rounded-full px-4 py-2 mt-4">
                Check
              </Button>
            </div>
            <div className="bg-gray-700 p-4 rounded-xl">
              <h4 className="text-lg font-medium text-white">Football</h4>
              <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button className="bg-red-600 text-white hover:bg-red-700 rounded-full px-4 py-2 mt-4">
                Check
              </Button>
            </div>
          </div>
        </div>

        {/* Suggested Users */}
        <div className="bg-black rounded-3xl p-6 mb-8">
          <h3 className="font-bold text-xl text-white mb-6">Suggested For You</h3>
          <div className="space-y-4">
            {suggestedUsers.map((user, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-700 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/42.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">{user.name}</p>
                    <p className="text-sm text-gray-400">{user.sport}</p>
                  </div>
                </div>
                <Button className="bg-red-600 text-white hover:bg-red-700 rounded-full px-4 py-2">
                  Follow
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathwaysPage;
