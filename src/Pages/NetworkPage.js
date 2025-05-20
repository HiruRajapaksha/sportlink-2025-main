import React from "react";
import { FaSearch } from "react-icons/fa";  // For the search icon
import Sidebar from '../Components/TaskBar'; // Import your Sidebar component
import Button from '../Components/ui/Button'; // Add this line at the top with your other imports

const NetworkPage = () => {
  // Dummy data for network members
  const networkMembers = [
    { name: "Milo", petType: "Pet Lion", class: "Basic", level: "Level 01", rating: 3, experience: 75 },
    { name: "Hipo", petType: "Pet Hippopotamus", class: "Basic", level: "Level 01", rating: 3, experience: 75 },
    { name: "Jumbo", petType: "Pet Elephant", class: "Basic", level: "Level 01", rating: 4, experience: 80 },
    { name: "Rocky", petType: "Pet Tiger", class: "Basic", level: "Level 01", rating: 5, experience: 90 },
    { name: "Milo", petType: "Pet Lion", class: "Basic", level: "Level 01", rating: 3, experience: 75 },
    { name: "Hipo", petType: "Pet Hippopotamus", class: "Basic", level: "Level 01", rating: 3, experience: 75 },
    { name: "Jumbo", petType: "Pet Elephant", class: "Basic", level: "Level 01", rating: 4, experience: 80 },
    { name: "Rocky", petType: "Pet Tiger", class: "Basic", level: "Level 01", rating: 5, experience: 90 },
  ];

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
      <div className="flex-1 p-6">
        {/* Top Bar */}
        <div className="bg-black rounded-3xl p-3 flex justify-between items-center mb-8">
          <div className="relative flex-1 max-w-lg">
            <FaSearch className="absolute left-4 top-3 text-gray-500" />
            <input
              type="search"
              placeholder="Search"
              className="bg-[#222] border-none pl-12 py-3 w-full text-white rounded-full"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="bg-[#222] rounded-full h-22 w-22">
                          <span>Filters</span>
                        </Button>
          </div>
        </div>

        {/* My Network Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">My Network</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {networkMembers.map((member, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-xl flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-red-600 rounded-full mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-gray-400">{member.petType}</p>
                <p className="text-sm text-gray-300">{member.class}</p>
                <p className="text-sm text-gray-300">{member.level}</p>

                {/* Rating */}
                <div className="flex space-x-1 mt-2">
                  {[...Array(5)].map((_, idx) => (
                    <span
                      key={idx}
                      className={`${
                        idx < member.rating ? "text-red-600" : "text-gray-500"
                      }`}
                    >
                      <FaSearch />
                    </span>
                  ))}
                </div>

                {/* Experience Bar */}
                <div className="w-full mt-2">
                  <p className="text-xs text-gray-400">Experience</p>
                  <div className="h-2 w-full bg-gray-600 rounded-full">
                    <div
                      className="h-full bg-red-600"
                      style={{ width: `${member.experience}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Users */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Suggested For You</h2>
          <div className="space-y-4">
            {suggestedUsers.map((user, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-black p-4 rounded-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">{user.name}</p>
                    <p className="text-sm text-gray-400">{user.sport}</p>
                  </div>
                </div>
                <button className="bg-red-600 text-white p-2 rounded-lg">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default NetworkPage;

