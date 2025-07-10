import React from 'react';
import { ArrowLeft, Plus } from 'lucide-react';
import logo from '../assets/logo.png';

export default function TopBarStats({
  onBack = () => {},
  onNewTask = () => {},
  stats = [
    { label: 'Deals', value: '↑3', color: 'bg-lime-200', text: 'text-lime-700', number: 34 },
    { label: 'won', value: '↓2', color: 'bg-red-200', text: 'text-red-700', number: 20 },
    { label: 'lost', value: '↓1', color: 'bg-red-200', text: 'text-red-700', number: 3 },
  ],
}) {
  return (
    <div className="flex items-center gap-12 w-full py-4 px-6 bg-black">
      {/* Back Arrow */}
      <button onClick={onBack} className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
        <ArrowLeft className="w-6 h-6 text-gray-400" />
      </button>
      {/* Logo */}
      <div className="w-12 h-12 rounded-full flex items-center justify-center">
        <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
      </div>
      {/* New Task */}
      <button onClick={onNewTask} className="flex items-center gap-2 bg-[#23262F] rounded-full px-6 py-2 text-gray-200 font-medium text-lg shadow">
        <span className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center">
          <Plus className="w-5 h-5 text-white" />
        </span>
        New Task
      </button>
      {/* Spacer */}
      <div className="flex-1" />
      {/* Stats */}
      <div className="flex items-end gap-16">
        {stats.map((stat, i) => (
          <div key={i} className="relative flex flex-col items-start min-w-[70px]">
            <div className="relative">
              <span className="text-4xl font-semibold text-black leading-none">{stat.number}</span>
              <span className={`absolute -top-2 -right-6 px-2 py-0.5 rounded-full text-xs font-semibold ${stat.color} ${stat.text} shadow`} style={{minWidth:'28px',textAlign:'center'}}>{stat.value}</span>
            </div>
            <span className="text-base text-slate-400 font-medium mt-1 capitalize">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 