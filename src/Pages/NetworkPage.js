import React from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import Sidebar from '../Components/TaskBar';
import Button from '../Components/ui/Button';

const NetworkPage = () => {
  const networkMembers = [
    {
      name: "Milo",
      petType: "Pet Lion",
      class: "Basic",
      level: "Level 01",
      rating: 3,
      experience: 75,
      img: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      name: "Hipo",
      petType: "Pet Hippo",
      class: "Basic",
      level: "Level 01",
      rating: 4,
      experience: 78,
      img: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      name: "Jumbo",
      petType: "Pet Elephant",
      class: "Basic",
      level: "Level 01",
      rating: 5,
      experience: 90,
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Rocky",
      petType: "Pet Tiger",
      class: "Basic",
      level: "Level 01",
      rating: 5,
      experience: 95,
      img: "https://randomuser.me/api/portraits/women/18.jpg"
    },
    {
      name: "Sasha",
      petType: "Pet Cheetah",
      class: "Advanced",
      level: "Level 02",
      rating: 4,
      experience: 88,
      img: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      name: "Leo",
      petType: "Pet Leopard",
      class: "Basic",
      level: "Level 01",
      rating: 3,
      experience: 70,
      img: "https://randomuser.me/api/portraits/men/54.jpg"
    },
  ];

  const suggestedUsers = [
    { name: "Faraz Tariq", sport: "Cricketer", img: "https://randomuser.me/api/portraits/men/75.jpg" },
    { name: "Tina Tzoo", sport: "Badminton", img: "https://randomuser.me/api/portraits/women/62.jpg" },
    { name: "MK8HD", sport: "Rugby", img: "https://randomuser.me/api/portraits/men/36.jpg" },
    { name: "Mr. Jam", sport: "Football", img: "https://randomuser.me/api/portraits/men/83.jpg" },
    { name: "GhostFeed", sport: "Athlete", img: "https://randomuser.me/api/portraits/women/25.jpg" },
  ];

  return (
    <div className="flex min-h-screen bg-[#0f0f0f] text-white">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 lg:ml-56">
        {/* Search & Filters */}
        <div className="bg-[#1a1a1a] rounded-3xl p-4 flex justify-between items-center mb-8 shadow-md">
          <div className="relative flex-1 max-w-lg">
            <FaSearch className="absolute left-4 top-3 text-gray-500" />
            <input
              type="search"
              placeholder="Search..."
              className="bg-[#222] border-none pl-12 py-3 w-full text-white rounded-full placeholder:text-gray-400 focus:outline-none"
            />
          </div>
          <Button variant="ghost" size="icon" className="bg-[#222] rounded-full px-6 py-2 text-white">
            Filters
          </Button>
        </div>

        {/* My Network */}
        <h2 className="text-3xl font-bold mb-6">My Network</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {networkMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[#FF1E56] mb-4">
                <img src={member.img} alt="profile" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl text-center font-semibold">{member.name}</h3>
              <p className="text-sm text-center text-gray-400">{member.petType}</p>
              <p className="text-sm text-center text-gray-500">{member.class}</p>
              <p className="text-sm text-center text-gray-500 mb-2">{member.level}</p>

              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, idx) => (
                  <FaStar
                    key={idx}
                    className={`${
                      idx < member.rating ? "text-yellow-400" : "text-gray-600"
                    } text-sm`}
                  />
                ))}
              </div>

              {/* Progress */}
              <div className="text-xs text-gray-400 mb-1">Experience</div>
              <div className="w-full h-2 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-[#FF1E56] rounded-full"
                  style={{ width: `${member.experience}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Suggested For You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {suggestedUsers.map((user, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-4 rounded-xl shadow-md flex items-center justify-between hover:shadow-lg transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-700">
                    <img src={user.img} alt={user.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{user.name}</p>
                    <p className="text-sm text-gray-400">{user.sport}</p>
                  </div>
                </div>
                <button className="bg-[#FF1E56] hover:bg-[#ff3c6d] text-black px-4 py-1 rounded-full text-sm font-semibold">
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
