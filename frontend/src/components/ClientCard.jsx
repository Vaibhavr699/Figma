import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ClientCard({
  avatar,
  name,
  title,
  source = [],
  interest = '',
  interestLevel = 0,
}) {
  // Color for interest label
  const isHot = interest === 'Hot Client';
  const interestLabelColor = isHot ? 'text-orange-500' : 'text-gray-400';
  return (
    <div className="relative bg-white rounded-[2.5rem] shadow-lg pt-16 pb-8 px-8 w-[340px] min-h-[340px] flex flex-col justify-between items-center">
      {/* Avatar */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-10 z-20">
        <img
          src={avatar}
          alt="avatar"
          className="w-20 h-20 rounded-full border-4 border-white shadow object-cover"
        />
      </div>
      {/* Arrow icon */}
      <div className="absolute top-4 right-4 z-10">
        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm">
          <ArrowUpRight className="w-6 h-6 text-gray-400" />
        </div>
      </div>
      {/* Name and Title */}
      <div className="flex-1 flex flex-col justify-center items-center mt-2">
        <div className="text-3xl font-extrabold text-gray-900 font-manrope text-center mb-2">{name}</div>
        <div className="text-lg text-gray-400 font-manrope text-center mb-6">{title}</div>
      </div>
      {/* Bottom Row: Source (left) and Interest (right) */}
      <div className="flex w-full justify-between items-end mt-4">
        {/* Source */}
        <div className="flex flex-col items-start">
          <div className="text-sm text-gray-400 font-semibold mb-2">Source</div>
          <div className="flex gap-2">
            {source.map((src, i) => (
              <span key={i} className="rounded-full bg-gray-100 border border-gray-200 px-4 py-1 text-gray-600 font-medium text-base">{src}</span>
            ))}
          </div>
        </div>
        {/* Interest */}
        <div className="flex flex-col items-end">
          <div className={`flex items-center gap-1 text-base font-semibold mb-2 ${interestLabelColor}`}>{isHot && <span role="img" aria-label="fire">🔥</span>} {interest}</div>
          <div className="flex gap-2 mt-1">
            {[...Array(interestLevel)].map((_, k) => (
              <span key={k} className="w-4 h-4 rounded-full bg-orange-400 inline-block"></span>
            ))}
            {[...Array(4 - interestLevel)].map((_, k) => (
              <span key={k} className="w-4 h-4 rounded-full bg-gray-200 inline-block"></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 