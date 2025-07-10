import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";

const ProfileCard = ({
  name = "Jan Doe",
  title = "Marketing Director at Microsoft",
  avatar = "https://randomuser.me/api/portraits/women/44.jpg",
  sources = ["LinkedIn", "Facebook"],
  hotLevel = 3 // from 1 to 5
}) => {
  const hotColors = ["bg-red-400", "bg-orange-400", "bg-yellow-400", "bg-lime-400", "bg-black"];

  return (
    <div className="relative w-[343px] h-[283px] p-4 pt-6 bg-white rounded-[2rem] shadow-md">
      {/* Custom top-right curved cutout */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-white rounded-bl-[3rem] z-0"></div>

      {/* Top-right floating icon */}
      <div className="absolute top-3 right-3 z-10">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-[#B8C5D0] shadow-sm">
          <ArrowUpRight size={24} className="text-[#23457B]" />
        </div>
      </div>

      {/* Avatar + Name */}
      <div className="flex items-center gap-3 mb-2 z-10">
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

      {/* Source Buttons */}
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

      {/* Hot Client */}
      <div className="mt-4">
        <div className="flex items-center text-xs text-gray-500 mb-1">
          <span className="mr-1">🔥</span> Hot Client
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
