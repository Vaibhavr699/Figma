import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function InterestCard({
  avatar = "https://randomuser.me/api/portraits/women/44.jpg",
  name = "Jan Doe",
  title = "Marketing Director at Microsoft",
  sources = ["LinkedIn", "Facebook"],
  interestLabel = "Hot Client",
  interestType = "hot", // hot, great, high, medium, low, none
  interestColors = ["#FFB300", "#FFDE59", "#A3FF6F", "#6FFFCF", "#000"],
}) {
  return (
    <div className="relative bg-white rounded-[2.5rem] shadow-lg p-6 pt-12 w-[340px] min-h-[340px]">
      {/* Avatar */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-8">
        <img
          src={avatar}
          alt="avatar"
          className="w-16 h-16 rounded-full border-4 border-white shadow"
        />
      </div>
      {/* Arrow icon */}
      <div className="absolute top-4 right-4">
        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm">
          <ArrowUpRight className="w-6 h-6 text-gray-400" />
        </div>
      </div>
      {/* Name and Title */}
      <div className="mt-2 text-center">
        <div className="text-2xl font-bold text-gray-900">{name}</div>
        <div className="text-base text-gray-400 mt-1">{title}</div>
      </div>
      {/* Source and Interest */}
      <div className="flex justify-between items-center mt-6">
        <div>
          <div className="text-sm text-gray-400 font-medium mb-1">Source</div>
          <div className="flex gap-2">
            {sources.map((src, i) => (
              <span key={i} className="rounded-full bg-gray-100 px-4 py-2 text-gray-500 font-medium text-sm">{src}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 text-sm text-gray-400 font-medium mb-1">
            {interestType === "hot" && <span role="img" aria-label="fire">🔥</span>}
            {interestLabel}
          </div>
          <div className="flex gap-2 mt-1">
            {interestColors.map((color, i) => (
              <span key={i} className={`w-5 h-5 rounded-full inline-block`} style={{ backgroundColor: color, border: color === '#000' ? '2px solid #fff' : undefined }}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 