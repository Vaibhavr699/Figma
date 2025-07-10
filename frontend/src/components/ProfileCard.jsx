import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";

const ProfileCard = ({
  name = "Darlene Robertson",
  title = "Financial Manager at Ford",
  avatar = "https://randomuser.me/api/portraits/men/32.jpg",
  sources = ["LinkedIn", "Facebook"],
  hotLevel = 4, // from 1 to 5
}) => {
  const hotColors = [
    "bg-red-400",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-lime-400",
    "bg-black",
  ];

  return (
    <div className="relative w-[343px] h-[283px] p-5 bg-[#F2F0FA] rounded-[2rem] shadow-md overflow-hidden">
      {/* Wavy SVG corner */}
      <svg
        className="absolute top-0 right-0 w-24 h-24 z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 Q80,0 100,20 Q120,40 100,60 Q80,80 100,100 L0,100 Z"
          fill="white"
        />
      </svg>

      {/* Top-right icon */}
      <div className="absolute top-3 right-3 z-10">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-[#B8C5D0] shadow-sm">
          <ArrowUpRight size={24} className="text-[#23457B]" />
        </div>
      </div>

      {/* Avatar + Name */}
      <div className="flex items-center gap-3 mb-2 z-10 relative">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>

      {/* Source Section */}
      <div className="mt-4">
        <p className="text-xs text-gray-500 mb-1">Source</p>
        <div className="flex gap-2">
          {sources.includes("LinkedIn") && (
            <button className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200">
              <FaLinkedin className="text-blue-700" /> LinkedIn
            </button>
          )}
          {sources.includes("Facebook") && (
            <button className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200">
              <FaFacebookF className="text-blue-600" /> Facebook
            </button>
          )}
        </div>
      </div>

      {/* Hot Interest */}
      <div className="mt-4">
        <div className="flex items-center text-xs text-gray-500 mb-1">
          <span className="mr-1">🔥</span> High interest
        </div>
        <div className="flex gap-2">
          {hotColors.map((color, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${color} ${
                index === hotLevel - 1 ? "ring-2 ring-offset-2 ring-gray-300" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
