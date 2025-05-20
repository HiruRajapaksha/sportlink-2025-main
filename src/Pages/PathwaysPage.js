import React, { useState } from "react";
import { FaSearch, FaCheck, FaBell } from "react-icons/fa";
import Sidebar from "../Components/TaskBar";
import { Button } from "../Components/ui/Button";

const PathwaysPage = () => {
  const [applied, setApplied] = useState(false);
  const [reminded, setReminded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    type: "Vacancy",
    title: "",
    description: "",
    sport: "",
    region: "",
    status: "Active",
  });

  const suggestedUsers = [
    {
      name: "Sarah Jensen",
      sport: "Track & Field",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Jamal Peterson",
      sport: "Basketball",
      photo: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      name: "Emily Zhang",
      sport: "Tennis",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Diego Morales",
      sport: "Football",
      photo: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Ravi Kannan",
      sport: "Cricket",
      photo: "https://randomuser.me/api/portraits/men/90.jpg",
    },
  ];

  const otherPathways = [
    {
      title: "Cricket Performance Analyst",
      organization: "Lankan Premier Academy",
      location: "Kandy",
      tags: ["Cricket", "Data", "Analysis"],
      description:
        "Use match data to enhance player performance and help shape winning strategies.",
    },
    {
      title: "Strength & Conditioning Coach",
      organization: "ProFit Athletics",
      location: "Colombo",
      tags: ["Fitness", "Training", "Athlete Support"],
      description:
        "Develop training plans to enhance athletes’ strength, speed, and resilience.",
    },
    {
      title: "Football Youth Coach",
      organization: "NextGen FC",
      location: "Galle",
      tags: ["Football", "Youth", "Coaching"],
      description:
        "Lead training sessions for under-15 teams and nurture future football talent.",
    },
    {
      title: "Badminton Development Officer",
      organization: "SmashZone Academy",
      location: "Negombo",
      tags: ["Badminton", "Development", "Grassroots"],
      description:
        "Promote badminton in rural communities and assist with regional tournaments.",
    },
    {
      title: "Sports Psychologist Intern",
      organization: "MindFit Labs",
      location: "Virtual / Colombo",
      tags: ["Psychology", "Mental Health", "Internship"],
      description:
        "Support athletes through mental performance strategies and resilience training.",
    },
    {
      title: "Volleyball Technical Advisor",
      organization: "SpikElite",
      location: "Matara",
      tags: ["Volleyball", "Strategy", "Technical"],
      description:
        "Assist coaching teams with technical expertise and video analysis of matches.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      <Sidebar />

      <div className="flex-1 p-8 pl-20 sm:pl-24 lg:pl-60">
        {/* Top Bar */}
        <div className="bg-black rounded-3xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 shadow-lg border border-gray-700">
          <div className="relative w-full sm:max-w-md">
            <input
              type="search"
              placeholder="Search pathways or opportunities..."
              className="bg-[#1e1e1e] pl-12 pr-4 py-3 w-full text-white rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
            />
            <FaSearch className="absolute left-4 top-3.5 text-gray-400 text-lg" />
          </div>

          <Button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-red-700 transition-all duration-300 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add
          </Button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 w-full max-w-lg border border-gray-700 shadow-xl">
              <h2 className="text-xl font-bold mb-4 text-white">Add Opportunity</h2>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-gray-300">Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md bg-gray-700 text-white"
                  >
                    <option value="Vacancy">Vacancy</option>
                    <option value="Up to Work">Up to Work</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-gray-300">Title</label>
                  <input
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md bg-gray-700 text-white"
                    placeholder="Enter title"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-300">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md bg-gray-700 text-white"
                    placeholder="Enter description"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-300">Sport Type</label>
                  <input
                    name="sport"
                    value={formData.sport}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md bg-gray-700 text-white"
                    placeholder="e.g., Basketball"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-300">Region</label>
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md bg-gray-700 text-white"
                  >
                    <option value="">Select Region</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Galle">Galle</option>
                    <option value="Negombo">Negombo</option>
                    <option value="Matara">Matara</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-gray-300">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md bg-gray-700 text-white"
                  >
                    <option value="Active">Active</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-4">
                <Button onClick={() => setShowModal(false)} className="bg-gray-600 hover:bg-gray-700 text-white rounded-full px-6 py-2">
                  Cancel
                </Button>
                <Button onClick={() => setShowModal(false)} className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-2">
                  Done
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Highlighted Pathway */}
        <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-6 mb-8 shadow-xl border border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-6">
            <div>
              <h1 className="text-3xl font-extrabold text-white mb-1">Basketball Coach Position</h1>
              <p className="text-sm text-gray-400 mb-4">SportElite Academy • Colombo</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">Health Coach</span>
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">Basketball</span>
              </div>
            </div>
            <div className="text-sm space-y-2">
              <div className="flex justify-between gap-12">
                <span className="text-gray-300">Required Skill Level:</span>
                <span className="text-white font-semibold">14</span>
              </div>
              <div className="flex justify-between gap-12">
                <span className="text-gray-300">Status:</span>
                <span className="text-green-500 font-semibold">Active</span>
              </div>
              <div className="flex justify-between gap-12">
                <span className="text-gray-300">Type:</span>
                <span className="text-white">Job</span>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Experience Level</h3>
            <div className="h-4 w-full bg-gray-600 rounded-full overflow-hidden">
              <div className="h-full bg-red-600 transition-all duration-500" style={{ width: "80%" }} />
            </div>
            <div className="text-right text-sm text-gray-400 mt-1">80% match</div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => setApplied(!applied)} className={`flex items-center gap-2 ${applied ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"} text-white rounded-full px-6 py-2`}>
              {applied && <FaCheck className="text-white" />}
              {applied ? "Applied" : "Apply Now"}
            </Button>
            <Button onClick={() => setReminded(!reminded)} className={`flex items-center gap-2 ${reminded ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover:bg-gray-700"} text-white rounded-full px-6 py-2`}>
              {reminded && <FaBell className="text-white" />}
              {reminded ? "Reminder Set" : "Remind Me"}
            </Button>
          </div>
        </div>

        {/* Other Pathways */}
        <div className="bg-black rounded-3xl p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Other Pathways</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPathways.map((item, i) => (
              <div key={i} className="bg-[#1f1f1f] border border-gray-700 p-5 rounded-2xl shadow-md hover:shadow-pink-500/30 transition">
                <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400 mb-2">
                  {item.organization} • {item.location}
                </p>
                <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested For You */}
        <div className="bg-gradient-to-br from-[#111] to-[#1c1c1c] rounded-3xl p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-6">Suggested For You</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestedUsers.map((user, index) => (
              <div key={index} className="flex items-center bg-[#1f1f1f] border border-gray-700 p-4 rounded-2xl gap-4 hover:shadow-lg transition">
                <img src={user.photo} alt={user.name} className="w-14 h-14 rounded-full object-cover border-2 border-pink-600" />
                <div className="flex-1">
                  <p className="text-white font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-400">{user.sport}</p>
                </div>
                <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-4 py-1.5 text-sm">
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
