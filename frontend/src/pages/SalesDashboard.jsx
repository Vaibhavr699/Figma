import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  HelpCircle,
  Settings,
  Bell,
  Mail,
  ExternalLink,
  X,
  User,
} from "lucide-react";
import BehaviorScoreDonut from "../components/BehaviorScoreDonut";
import ScoreDonut from "../components/BehaviorScoreDonut";
import PipelineProgressBar from "../components/PipelineProgressBar";

const SalesEngagement = () => {
  const [activeTab, setActiveTab] = useState("Cadences");
  const [selectedContact, setSelectedContact] = useState("Miguel Braswell");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const contacts = [
    {
      id: 1,
      name: "Miguel Braswell",
      role: "Administrative Assistant",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      overdue: 12,
      status: "active",
    },
    {
      id: 2,
      name: "Andrea Wilcott",
      role: "Chief Information Officer",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      overdue: 35,
      status: "warning",
    },
    {
      id: 3,
      name: "Adrian Newsom",
      role: "Head of Partnerships",
      avatar:
        "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      overdue: 14,
      status: "danger",
    },
    {
      id: 4,
      name: "Alisha Claude",
      role: "VP of Marketing",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      overdue: 31,
      status: "danger",
    },
    {
      id: 5,
      name: "Aaron McCleery",
      role: "SVP Marketing",
      avatar:
        "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      overdue: 40,
      status: "danger",
    },
  ];

  const ContactCard = ({ contact, isActive }) => (
    <div
      className="rounded-[24px] mb-4 cursor-pointer transition-all flex flex-col justify-between 
           w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] xl:w-[360px]"
      style={{
        width: 320,
        height: 174,
        opacity: 1,
        background: isActive ? "#1C0A6B" : "#FFFFFF",
        color: isActive ? "#FFFFFF" : "#1C0A6B",
        position: "relative",
        boxShadow: isActive ? "0px 4px 24px 0px #1C0A6B1A" : "none",
      }}
      onClick={() => setSelectedContact(contact.name)}
    >
      <div className="flex items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-4">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
            style={{ boxShadow: "0 2px 8px #0001" }}
          />
          <div>
            <h3
              style={{
                fontFamily: '"Wix Madefor Text", sans-serif',
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: "19px",
                lineHeight: "100%",
                letterSpacing: 0,
                color: isActive ? "#FFFFFF" : "#1C0A6B",
              }}
            >
              {contact.name}
            </h3>
            <p
              style={{
                fontFamily: '"Wix Madefor Text", sans-serif',
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: 0,
                color: isActive ? "#FFFFFF" : "#1C0A6B",
              }}
            >
              {contact.role}
            </p>
          </div>
        </div>
        <svg
          width="42"
          height="42"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.65"
            y="0.65"
            width="48.7"
            height="48.7"
            rx="24.35"
            stroke={isActive ? "#FFFFFF" : "#C6D1E5"}
            strokeWidth="1.3"
          />
          <path
            d="M29.4121 22.1841C29.4529 22.1508 29.5142 22.156 29.5498 22.1997C29.5826 22.2403 29.5775 22.3012 29.5352 22.3364L25.999 25.2104C25.6409 25.4946 25.2153 25.6353 24.792 25.6353C24.4227 25.6352 24.0536 25.5289 23.7295 25.314L23.5938 25.2153L20.0234 22.3364C19.982 22.3029 19.975 22.2408 20.0088 22.1987C20.0441 22.1576 20.1052 22.1526 20.1455 22.1841V22.1851L23.7158 25.063L23.7197 25.0649C24.351 25.565 25.2401 25.5644 25.873 25.062L25.877 25.0581L29.4121 22.1851V22.1841Z"
            fill={isActive ? "#FFFFFF" : "#1C0A6B"}
            stroke={isActive ? "#FFFFFF" : "#1C0A6B"}
          />
          <path
            d="M20.8594 17.4995H28.6816C31.0222 17.4995 32.8359 19.4024 32.8359 22.0347V27.5063C32.8359 28.7733 32.4166 29.9033 31.6719 30.73L31.5186 30.8911C30.7683 31.6382 29.7977 32.0356 28.6943 32.0356H20.8447C19.7436 32.0356 18.7736 31.6393 18.0225 30.8911C17.1825 30.0532 16.7061 28.8576 16.7061 27.5063V22.0347L16.7109 21.7905C16.8194 19.2857 18.592 17.4997 20.8594 17.4995ZM20.8594 17.6948C18.5318 17.695 16.9014 19.584 16.9014 22.0347V27.5063C16.9014 28.7691 17.3363 29.93 18.1602 30.7515C18.8765 31.4669 19.8124 31.8403 20.8467 31.8403H28.8887L28.8926 31.8354C29.849 31.7908 30.7114 31.4211 31.3818 30.7515L31.3809 30.7505C32.2057 29.9289 32.6406 28.7687 32.6406 27.5063V22.0347C32.6406 19.5838 31.0094 17.6948 28.6816 17.6948H20.8594Z"
            fill={isActive ? "#FFFFFF" : "#1C0A6B"}
            stroke={isActive ? "#FFFFFF" : "#1C0A6B"}
          />
        </svg>
      </div>
      <div className="flex items-center justify-between px-6 pb-6 mt-auto">
        <div className="flex items-center gap-2">
          <span
            className="text-sm font-medium rounded-full px-4 py-2"
            style={{
              background: isActive ? "#6C7AE0" : "#E6E8F6",
              color: isActive ? "#ffffff" : "#000000",
            }}
          >
            12 Hours Overdue
          </span>

          <span
            className="text-sm font-bold rounded-full w-9 h-9 flex items-center justify-center"
            style={{
              background: isActive ? "#6CC6E0" : "#E84E34",
              color: isActive ? "#ffffff" : "#ffffff",
            }}
          >
            69
          </span>
        </div>
        <svg
          width="44"
          height="44"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="27"
            cy="27"
            r="25.65"
            stroke={isActive ? "#FFFFFF" : "#D5D1E8"}
            strokeWidth="1.3"
          />
          <path
            d="M22.2412 31.5014C21.9483 31.7943 21.9483 32.2692 22.2412 32.5621C22.534 32.855 23.0089 32.855 23.3018 32.5621L22.2412 31.5014ZM32.7842 22.769C32.7842 22.3548 32.4485 22.019 32.0342 22.019L25.2842 22.019C24.87 22.019 24.5342 22.3548 24.5342 22.769C24.5342 23.1832 24.87 23.519 25.2842 23.519L31.2842 23.519L31.2843 29.519C31.2843 29.9332 31.62 30.269 32.0343 30.269C32.4485 30.269 32.7843 29.9332 32.7843 29.519L32.7842 22.769ZM22.7715 32.0317L23.3018 32.5621L32.5646 23.2993L32.0342 22.769L31.5039 22.2386L22.2412 31.5014L22.7715 32.0317Z"
            fill={isActive ? "#FFFFFF" : "#1C0A6B"}
          />
        </svg>
      </div>
    </div>
  );

  const CircularProgress = ({ percentage, score, label, color = "blue" }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const colorClasses = {
      blue: "stroke-blue-500",
      pink: "stroke-pink-500",
    };

    return (
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className={colorClasses[color]}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">{score}</span>
          <span className="text-sm text-gray-600">{label}</span>
        </div>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen w-full bg-gray-50"
      style={{ fontFamily: '"Wix Madefor Text", sans-serif' }}
    >
      {/* Header */}
      <header className="bg-white opacity-100 border-b border-gray-200 w-full px-2 sm:px-4 md:px-8 pt-2 flex flex-col gap-2">
        <div className="flex items-center justify-between w-full gap-2">
          {/* Logo */}
          <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[46px] lg:h-[46px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23 9.29787C15.4325 9.29787 9.29787 15.4325 9.29787 23C9.29787 30.5675 15.4325 36.7021 23 36.7021C30.5675 36.7021 36.7021 30.5675 36.7021 23C36.7021 18.8764 34.8473 15.5208 32.4617 13.2945C32.0976 12.9547 32.0003 12.4069 32.2584 11.981L36.1818 5.50556C36.4878 5.00055 37.1638 4.86791 37.6194 5.24346C42.7297 9.45543 46 15.8463 46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23C0 10.2975 10.2975 0 23 0C25.418 0 27.7563 0.37469 29.9555 1.07177C30.5194 1.2505 30.7747 1.89192 30.5149 2.42334L27.2993 9.001C27.0792 9.45114 26.5616 9.66072 26.0751 9.54082C25.0894 9.29787 24.3337 9.29787 23 9.29787Z"
                fill="url(#paint0_linear_450_2716)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_450_2716"
                  x1="6.3617"
                  y1="7.34043"
                  x2="39.3936"
                  y2="38.9043"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1C0A6B" />
                  <stop offset="1" stopColor="#3117A3" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          {/* Search Bar */}
          <div className="flex-1 flex items-center justify-center min-w-0">
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1C0A6B] w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-10 sm:h-12 pl-10 pr-3 border-[#D3DAE2] border rounded-full focus:ring-2 focus:ring-[#1C0A6B] focus:border-transparent text-[#1C0A6B] placeholder:text-[#1C0A6B]/60 text-sm sm:text-base font-medium bg-white shadow-none"
              />
            </div>
          </div>
          {/* Right Side Icons */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-1 lg:gap-1">
            <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border border-[#D3DAE2] text-[#22008C] bg-white hover:bg-[#F4F6F8] transition">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5v14M5 12h14"
                  stroke="#22008C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border border-[#D3DAE2] text-[#22008C] bg-white hover:bg-[#F4F6F8] transition">
              <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </button>
            <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border border-[#D3DAE2] text-[#22008C] bg-white hover:bg-[#F4F6F8] transition">
              <Settings className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </button>
            <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border border-[#D3DAE2] text-[#22008C] bg-white hover:bg-[#F4F6F8] transition">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </button>
            <img
              src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
              alt="Profile"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full object-cover border border-[#D3DAE2]"
            />
          </div>
        </div>
        {/* Grouped Section: Sales Engagement, Work Queue, User Pill */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 bg-[#FFFFFF] rounded-t-2xl px-2 sm:px-3 md:px-4 mt-2 w-full">
          {/* Menu Icon */}
          <span className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-13 lg:h-13 flex items-center justify-center rounded-full flex-shrink-0">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-10 lg:h-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="11" stroke="#D5D1E8" />
              <circle cx="8.5" cy="8.5" r="1.5" fill="#22008C" />
              <circle cx="8.5" cy="15.5" r="1.5" fill="#22008C" />
              <circle cx="15.5" cy="8.5" r="1.5" fill="#22008C" />
              <circle cx="15.5" cy="15.5" r="1.5" fill="#22008C" />
            </svg>
          </span>

          {/* Title */}
          <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-bold text-[#22008C] flex-shrink-0">
            <span className="hidden sm:inline">Sales Engagement</span>
            <span className="sm:hidden">Sales</span>
          </span>

          {/* Work Queue Link */}
          <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-bold text-[#22008C] flex-shrink-0 hidden md:inline">
            Work Queue
          </span>

          {/* Styled User Pill (no dropdown) */}
          <div className="flex items-center ml-8">
            {/* Replace <User /> with your custom SVG */}
            <svg
              width="352"
              height="70"
              viewBox="0 0 352 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 30C24 13.4315 37.4315 0 54 0H305C321.569 0 335 13.4315 335 30V56H24V30Z"
                fill="#F6F5FB"
              />
              <path
                d="M24 51C24 70 0.5 70 0.5 69.5V70H351.5C337.9 70 335 59.5 335 51H24Z"
                fill="#F6F5FB"
              />
              <path
                d="M70.5 32C72.9821 32 75 29.9821 75 27.5C75 25.0179 72.9821 23 70.5 23C68.0179 23 66 25.0179 66 27.5C66 29.9821 68.0179 32 70.5 32ZM70.5 24.4211C72.1958 24.4211 73.5789 25.8042 73.5789 27.5C73.5789 29.1958 72.1958 30.5789 70.5 30.5789C68.8042 30.5789 67.4211 29.1958 67.4211 27.5C67.4211 25.8042 68.8042 24.4211 70.5 24.4211Z"
                fill="#1C0A6B"
              />
              <path
                d="M72.7429 33H67.2571C64.3589 33 62 35.4282 62 38.4118C62 39.8424 63.1246 41 64.5143 41H75.4857C76.8754 41 78 39.8424 78 38.4118C78 35.4282 75.6411 33 72.7429 33ZM75.4857 39.5882H64.5143C63.8834 39.5882 63.3714 39.0612 63.3714 38.4118C63.3714 36.2094 65.1177 34.4118 67.2571 34.4118H72.7429C74.8823 34.4118 76.6286 36.2094 76.6286 38.4118C76.6286 39.0612 76.1166 39.5882 75.4857 39.5882Z"
                fill="#1C0A6B"
              />
              <path
                d="M93.838 37.776H92.488L87.718 27.102L88.582 27.084V39H86.782V26.13H89.014L93.604 36.57H92.74L97.366 26.13H99.58V39H97.762V27.084L98.644 27.102L93.838 37.776ZM104.57 39H102.77V30.054H104.57V39ZM104.84 26.886C104.84 27.21 104.726 27.486 104.498 27.714C104.27 27.93 103.994 28.038 103.67 28.038C103.334 28.038 103.052 27.93 102.824 27.714C102.596 27.486 102.482 27.21 102.482 26.886C102.482 26.55 102.596 26.274 102.824 26.058C103.052 25.83 103.334 25.716 103.67 25.716C103.994 25.716 104.27 25.83 104.498 26.058C104.726 26.274 104.84 26.55 104.84 26.886ZM115.96 38.082C115.96 39.006 115.762 39.816 115.366 40.512C114.97 41.22 114.418 41.772 113.71 42.168C113.014 42.576 112.216 42.78 111.316 42.78C110.536 42.78 109.81 42.636 109.138 42.348C108.478 42.072 107.92 41.676 107.464 41.16L108.526 39.936C109.234 40.812 110.14 41.25 111.244 41.25C111.832 41.25 112.342 41.118 112.774 40.854C113.218 40.602 113.56 40.242 113.8 39.774C114.04 39.306 114.16 38.76 114.16 38.136V34.698C114.16 34.014 114.046 33.42 113.818 32.916C113.602 32.412 113.29 32.016 112.882 31.728C112.474 31.44 112.006 31.296 111.478 31.296C110.95 31.296 110.482 31.434 110.074 31.71C109.666 31.986 109.348 32.358 109.12 32.826C108.892 33.294 108.778 33.834 108.778 34.446C108.778 35.058 108.892 35.598 109.12 36.066C109.36 36.522 109.684 36.882 110.092 37.146C110.512 37.41 110.992 37.542 111.532 37.542C112.012 37.542 112.45 37.434 112.846 37.218C113.254 36.99 113.584 36.684 113.836 36.3C114.1 35.904 114.256 35.466 114.304 34.986L114.682 35.328C114.742 36.024 114.628 36.66 114.34 37.236C114.064 37.8 113.65 38.25 113.098 38.586C112.558 38.91 111.91 39.072 111.154 39.072C110.35 39.072 109.624 38.88 108.976 38.496C108.328 38.1 107.818 37.554 107.446 36.858C107.074 36.15 106.888 35.346 106.888 34.446C106.888 33.558 107.08 32.76 107.464 32.052C107.848 31.344 108.358 30.786 108.994 30.378C109.63 29.97 110.344 29.766 111.136 29.766C112.096 29.766 112.876 30.042 113.476 30.594C114.088 31.146 114.46 31.878 114.592 32.79H114.178V30.054H115.96V38.082ZM126.613 39H124.831V37.272L124.813 36.768V30.054H126.613V39ZM124.957 35.184L125.317 35.544C125.353 36.276 125.227 36.924 124.939 37.488C124.663 38.052 124.267 38.496 123.751 38.82C123.235 39.132 122.629 39.288 121.933 39.288C120.949 39.288 120.157 38.97 119.557 38.334C118.969 37.698 118.675 36.78 118.675 35.58V30.054H120.475V35.4C120.475 36.168 120.643 36.756 120.979 37.164C121.327 37.56 121.801 37.758 122.401 37.758C122.845 37.758 123.247 37.65 123.607 37.434C123.967 37.206 124.267 36.9 124.507 36.516C124.759 36.132 124.909 35.688 124.957 35.184ZM136.312 36.372L137.374 37.506C136.906 38.106 136.348 38.556 135.7 38.856C135.064 39.144 134.368 39.288 133.612 39.288C132.676 39.288 131.854 39.084 131.146 38.676C130.45 38.268 129.904 37.704 129.508 36.984C129.112 36.264 128.914 35.448 128.914 34.536C128.914 33.624 129.106 32.808 129.49 32.088C129.886 31.368 130.414 30.804 131.074 30.396C131.746 29.976 132.502 29.766 133.342 29.766C134.158 29.766 134.878 29.97 135.502 30.378C136.126 30.774 136.612 31.326 136.96 32.034C137.32 32.742 137.5 33.552 137.5 34.464V34.572H135.718V34.392C135.718 33.432 135.502 32.67 135.07 32.106C134.65 31.542 134.068 31.26 133.324 31.26C132.82 31.26 132.376 31.392 131.992 31.656C131.608 31.92 131.308 32.298 131.092 32.79C130.876 33.282 130.768 33.852 130.768 34.5C130.768 35.16 130.882 35.736 131.11 36.228C131.35 36.708 131.686 37.092 132.118 37.38C132.562 37.656 133.09 37.794 133.702 37.794C134.242 37.794 134.728 37.674 135.16 37.434C135.592 37.194 135.976 36.84 136.312 36.372ZM137.5 35.112H130.192V33.816H137.23L137.5 34.464V35.112ZM141.642 39H139.842V26.04H141.642V39ZM148.886 39V26.13H153.818C154.598 26.13 155.276 26.274 155.852 26.562C156.44 26.838 156.896 27.228 157.22 27.732C157.556 28.236 157.724 28.83 157.724 29.514C157.724 30.15 157.556 30.708 157.22 31.188C156.896 31.668 156.44 32.046 155.852 32.322C155.276 32.586 154.598 32.718 153.818 32.718H150.902V31.836H154.07C154.922 31.836 155.66 31.98 156.284 32.268C156.908 32.544 157.388 32.946 157.724 33.474C158.072 34.002 158.246 34.626 158.246 35.346C158.246 36.066 158.072 36.702 157.724 37.254C157.376 37.806 156.89 38.238 156.266 38.55C155.642 38.85 154.91 39 154.07 39H148.886ZM150.74 37.416H154.088C154.796 37.416 155.354 37.224 155.762 36.84C156.17 36.456 156.374 35.934 156.374 35.274C156.374 34.626 156.17 34.116 155.762 33.744C155.354 33.36 154.796 33.168 154.088 33.168H150.56V31.602H153.746C154.406 31.602 154.922 31.428 155.294 31.08C155.666 30.732 155.852 30.252 155.852 29.64C155.852 29.052 155.66 28.584 155.276 28.236C154.904 27.888 154.394 27.714 153.746 27.714H150.74V37.416ZM165.836 29.91V31.602H165.458C164.918 31.602 164.426 31.734 163.982 31.998C163.538 32.25 163.184 32.646 162.92 33.186C162.668 33.714 162.542 34.398 162.542 35.238V39H160.742V30.054H162.524V32.934H162.272C162.38 32.166 162.608 31.566 162.956 31.134C163.304 30.69 163.706 30.378 164.162 30.198C164.618 30.006 165.068 29.91 165.512 29.91H165.836ZM174.816 39H173.178V37.236L173.124 36.822V33.474C173.124 32.778 172.914 32.232 172.494 31.836C172.074 31.428 171.498 31.224 170.766 31.224C169.806 31.224 168.966 31.62 168.246 32.412L167.202 31.296C168.246 30.276 169.482 29.766 170.91 29.766C171.702 29.766 172.386 29.916 172.962 30.216C173.55 30.516 174.006 30.942 174.33 31.494C174.654 32.034 174.816 32.676 174.816 33.42V39ZM170.154 39.288C169.518 39.288 168.954 39.168 168.462 38.928C167.982 38.676 167.604 38.334 167.328 37.902C167.052 37.47 166.914 36.978 166.914 36.426C166.914 35.502 167.268 34.782 167.976 34.266C168.696 33.738 169.662 33.474 170.874 33.474H173.286V34.752H171.036C170.316 34.752 169.752 34.896 169.344 35.184C168.948 35.46 168.75 35.85 168.75 36.354C168.75 36.81 168.906 37.182 169.218 37.47C169.542 37.746 169.974 37.884 170.514 37.884C171.03 37.884 171.492 37.77 171.9 37.542C172.308 37.314 172.638 37.002 172.89 36.606C173.142 36.21 173.286 35.754 173.322 35.238L173.88 35.544C173.88 36.276 173.718 36.924 173.394 37.488C173.082 38.052 172.644 38.496 172.08 38.82C171.528 39.132 170.886 39.288 170.154 39.288ZM176.558 37.65L177.566 36.48C177.95 36.9 178.388 37.236 178.88 37.488C179.384 37.74 179.948 37.866 180.572 37.866C181.16 37.866 181.634 37.74 181.994 37.488C182.366 37.224 182.552 36.888 182.552 36.48C182.552 36.132 182.396 35.856 182.084 35.652C181.772 35.436 181.226 35.274 180.446 35.166C179.186 34.974 178.286 34.674 177.746 34.266C177.218 33.846 176.954 33.276 176.954 32.556C176.954 31.992 177.104 31.506 177.404 31.098C177.704 30.678 178.118 30.354 178.646 30.126C179.186 29.886 179.804 29.766 180.5 29.766C181.268 29.766 181.964 29.91 182.588 30.198C183.212 30.474 183.758 30.876 184.226 31.404L183.182 32.574C182.846 32.142 182.456 31.806 182.012 31.566C181.568 31.314 181.07 31.188 180.518 31.188C179.99 31.188 179.558 31.308 179.222 31.548C178.886 31.776 178.718 32.076 178.718 32.448C178.718 32.652 178.778 32.826 178.898 32.97C179.018 33.114 179.222 33.234 179.51 33.33C179.798 33.414 180.2 33.498 180.716 33.582C182.036 33.786 182.966 34.11 183.506 34.554C184.058 34.986 184.334 35.61 184.334 36.426C184.334 36.99 184.172 37.488 183.848 37.92C183.536 38.352 183.092 38.688 182.516 38.928C181.952 39.168 181.298 39.288 180.554 39.288C179.702 39.288 178.94 39.144 178.268 38.856C177.608 38.568 177.038 38.166 176.558 37.65ZM195.697 39H193.825L191.647 31.638H192.115L189.973 39H188.083L185.455 30.054H187.255L189.343 38.046H188.803L191.107 30.054H192.727L195.013 38.046H194.491L196.597 30.054H198.361L195.697 39ZM207.169 36.372L208.231 37.506C207.763 38.106 207.205 38.556 206.557 38.856C205.921 39.144 205.225 39.288 204.469 39.288C203.533 39.288 202.711 39.084 202.003 38.676C201.307 38.268 200.761 37.704 200.365 36.984C199.969 36.264 199.771 35.448 199.771 34.536C199.771 33.624 199.963 32.808 200.347 32.088C200.743 31.368 201.271 30.804 201.931 30.396C202.603 29.976 203.359 29.766 204.199 29.766C205.015 29.766 205.735 29.97 206.359 30.378C206.983 30.774 207.469 31.326 207.817 32.034C208.177 32.742 208.357 33.552 208.357 34.464V34.572H206.575V34.392C206.575 33.432 206.359 32.67 205.927 32.106C205.507 31.542 204.925 31.26 204.181 31.26C203.677 31.26 203.233 31.392 202.849 31.656C202.465 31.92 202.165 32.298 201.949 32.79C201.733 33.282 201.625 33.852 201.625 34.5C201.625 35.16 201.739 35.736 201.967 36.228C202.207 36.708 202.543 37.092 202.975 37.38C203.419 37.656 203.947 37.794 204.559 37.794C205.099 37.794 205.585 37.674 206.017 37.434C206.449 37.194 206.833 36.84 207.169 36.372ZM208.357 35.112H201.049V33.816H208.087L208.357 34.464V35.112ZM212.499 39H210.699V26.04H212.499V39ZM217.14 39H215.34V26.04H217.14V39Z"
                fill="#1C0A6B"
              />
              <path
                d="M273.023 36C272.928 36.0006 272.835 35.9816 272.748 35.9443C272.66 35.907 272.581 35.8521 272.514 35.7826L268.211 31.2849C268.076 31.1438 268 30.9523 268 30.7527C268 30.5531 268.076 30.3616 268.211 30.2205C268.346 30.0793 268.529 30 268.72 30C268.911 30 269.094 30.0793 269.229 30.2205L273.023 34.1934L276.816 30.228C276.954 30.1051 277.13 30.041 277.311 30.0483C277.491 30.0555 277.662 30.1338 277.79 30.2673C277.918 30.4008 277.992 30.5797 277.999 30.7684C278.006 30.957 277.945 31.1415 277.828 31.2849L273.525 35.7826C273.391 35.9211 273.211 35.9992 273.023 36Z"
                fill="#1C0A6B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M301.209 28.2181C301.343 28.0842 301.524 28.0089 301.714 28.0089C301.903 28.0089 302.084 28.0842 302.218 28.2181L305.996 31.9988L309.773 28.2181C309.839 28.1498 309.918 28.0954 310.005 28.058C310.092 28.0206 310.185 28.0009 310.28 28C310.375 27.9992 310.469 28.0173 310.557 28.0532C310.644 28.0891 310.724 28.1421 310.791 28.2092C310.858 28.2763 310.911 28.356 310.947 28.4438C310.983 28.5316 311.001 28.6257 311 28.7205C310.999 28.8153 310.979 28.9091 310.942 28.9962C310.905 29.0834 310.85 29.1622 310.782 29.2281L307.005 33.0088L310.782 36.7895C310.912 36.9242 310.984 37.1046 310.982 37.2919C310.981 37.4792 310.906 37.6583 310.773 37.7908C310.641 37.9232 310.462 37.9983 310.275 38C310.088 38.0016 309.908 37.9296 309.773 37.7995L305.996 34.0188L302.218 37.7995C302.083 37.9296 301.903 38.0016 301.716 38C301.529 37.9983 301.35 37.9232 301.218 37.7908C301.085 37.6583 301.01 37.4792 301.009 37.2919C301.007 37.1046 301.079 36.9242 301.209 36.7895L304.986 33.0088L301.209 29.2281C301.075 29.0941 301 28.9125 301 28.7231C301 28.5337 301.075 28.352 301.209 28.2181Z"
                fill="#1C0A6B"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* Work Queue and Pipeline Progress Bar Row */}
      <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 px-4 sm:px-6 bg-[#F2F0FA]">
        {/* Work Queue Header and Tabs/Dropdown */}
        <div
          className="flex flex-col w-full lg:w-[350px] lg:flex-shrink-0"
          style={{ top: 60 }}
        >
          {/* Header row with icons */}
          <div className="flex items-center justify-between mb-6 mt-6">
            <h2 className="font-bold text-[#1C0A6B] text-lg">Work Queue</h2>
            <div className="flex items-center gap-1">
              <button className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#D3DAE2] text-[#22008C] bg-white hover:bg-[#F4F6F8] transition">
                <Search className="w-6 h-6" />
              </button>
              <button className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#D3DAE2] text-[#22008C] bg-white hover:bg-[#F4F6F8] transition">
                <Mail className="w-6 h-6" />
              </button>
            </div>
          </div>
          {/* Tabs and Dropdown */}
          <div className="flex flex-col gap-1 h-[8rem] opacity-100">
            <div className="flex flex-row gap-1 justify-between w-4 h-12">
              {["Cadences", "My Feed", "My List"].map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`h-[48px] min-w-[110px] px-2 rounded-full font-semibold text-base border-2 transition-colors focus:outline-none ${
                    activeTab === tab
                      ? "bg-[#1C0A6B] text-white border-[#FFFFFF] shadow-sm"
                      : "bg-transparent text-[#1C0A6B] border-[#FFFFFF]"
                  }`}
                  style={{ marginRight: idx < 2 ? "8px" : 0 }}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div>
              <button className="flex items-center justify-between w-full sm:w-[350px] h-[54px] rounded-full bg-transparent border-2 border-[#FFFFFF] text-[#1C0A6B] font-semibold text-lg px-6 focus:outline-none">
                <span>Event Cadence (10)</span>
                <svg
                  className="ml-2 w-5 h-5 text-[#1C0A6B]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Pipeline Progress Bar */}
        <div
          className="w-full lg:flex-1 lg:min-w-0 px-4"
          style={{ minWidth: 0, maxWidth: "calc(100vw - 480px)" }}
        >
          <PipelineProgressBar currentStep={1} />
        </div>
      </div>

      {/* Main Content: Sidebar below, then Lead Information & Campaign History */}
      <div className="flex flex-col lg:flex-row px-2 sm:px-4 md:px-6 bg-[#F2F0FA] gap-4 lg:gap-0">
        {/* Sidebar (Contact List) */}
        <div className="bg-[#F2F0FA] w-full lg:w-[240px] xl:w-[300px] 2xl:w-[350px] flex-shrink-0 mt-[-8px]">
          {/* Contact List */}
          <div className="p-2 sm:p-4">
            {contacts.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                isActive={contact.name === selectedContact}
              />
            ))}
          </div>
        </div>
        {/* Lead Information & Campaign History */}
        <div className="flex-1 pl-0 lg:pl-2">
          <div>
            <div className="flex flex-col lg:flex-row gap-4 mb-2">
              {/* Lead Information */}
              <div
                className="bg-white rounded-[32px] border border-[#ECEAF6] flex flex-col p-4 w-full lg:w-2/5"
                style={{ height: 408, top: 438, left: 449 }}
              >
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-4">
                    <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center">
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="26.6099"
                          cy="26.6099"
                          r="26.6099"
                          fill="#1C0A6B"
                        />
                        <path
                          d="M26.3242 16.8242C21.085 16.8242 16.8242 21.085 16.8242 26.3242C16.8242 31.5634 21.085 35.8242 26.3242 35.8242C31.5634 35.8242 35.8242 31.5634 35.8242 26.3242C35.8242 21.085 31.5634 16.8242 26.3242 16.8242ZM26.3242 18.0909C30.8789 18.0909 34.5625 21.7696 34.5625 26.3242C34.5625 30.8789 30.8789 34.5625 26.3242 34.5625C21.7696 34.5625 18.0909 30.8789 18.0909 26.3242C18.0909 21.7696 21.7696 18.0909 26.3242 18.0909ZM26.3156 21.2613C26.1482 21.2642 25.9889 21.3333 25.8723 21.4533C25.7557 21.5734 25.6914 21.7347 25.6934 21.902V22.4352C24.6707 22.627 23.7958 23.2855 23.7958 24.4267C23.7958 25.2184 24.1527 25.8587 24.632 26.2314C25.1113 26.6042 25.6525 26.7695 26.1275 26.9279C26.6025 27.0862 27.0126 27.2376 27.2458 27.4189C27.479 27.6003 27.5909 27.7529 27.5909 28.2279C27.5909 29.2835 25.0625 29.2835 25.0625 28.2279C25.0644 28.1436 25.0494 28.0597 25.0184 27.9812C24.9874 27.9027 24.941 27.8313 24.8821 27.7709C24.8231 27.7106 24.7526 27.6627 24.6748 27.63C24.5971 27.5972 24.5135 27.5804 24.4292 27.5804C24.3448 27.5804 24.2613 27.5972 24.1835 27.63C24.1057 27.6627 24.0353 27.7106 23.9763 27.7709C23.9173 27.8313 23.8709 27.9027 23.8399 27.9812C23.809 28.0597 23.794 28.1436 23.7958 28.2279C23.7958 29.3682 24.6715 30.028 25.6934 30.2207V30.7514C25.6915 30.8357 25.7065 30.9196 25.7375 30.9981C25.7685 31.0766 25.8148 31.148 25.8738 31.2084C25.9328 31.2687 26.0033 31.3166 26.081 31.3493C26.1588 31.3821 26.2423 31.3989 26.3267 31.3989C26.4111 31.3989 26.4946 31.3821 26.5724 31.3493C26.6501 31.3166 26.7206 31.2687 26.7796 31.2084C26.8386 31.148 26.8849 31.0766 26.9159 30.9981C26.9469 30.9196 26.9619 30.8357 26.96 30.7514V30.2207C27.982 30.0281 28.8588 29.3684 28.8588 28.2279C28.8588 27.4363 28.5007 26.796 28.0214 26.4232C27.542 26.0504 27.0008 25.8839 26.5258 25.7255C26.0508 25.5672 25.6408 25.417 25.4076 25.2357C25.1744 25.0543 25.0625 24.9017 25.0625 24.4267C25.0625 23.3711 27.5909 23.3711 27.5909 24.4267C27.5909 24.5948 27.6577 24.7561 27.7766 24.875C27.8955 24.9939 28.0567 25.0606 28.2248 25.0606C28.393 25.0606 28.5542 24.9939 28.6731 24.875C28.792 24.7561 28.8588 24.5948 28.8588 24.4267C28.8588 23.2872 27.9817 22.6294 26.96 22.4364V21.902C26.961 21.8173 26.945 21.7332 26.9129 21.6548C26.8808 21.5763 26.8334 21.5051 26.7733 21.4454C26.7132 21.3856 26.6417 21.3386 26.5631 21.3069C26.4845 21.2753 26.4003 21.2598 26.3156 21.2613Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h3
                      style={{
                        fontFamily: '"Wix Madefor Text", sans-serif',
                        fontWeight: 500,
                        fontStyle: "normal",
                        fontSize: "21px",
                        lineHeight: "100%",
                        letterSpacing: 0,
                        color: "#1C0A6B",
                      }}
                    >
                      Lead Information
                    </h3>
                  </div>
                  <div className="flex gap-1">
                    <button className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#CCD7E4] text-[#1C0A6B] bg-white hover:bg-[#F4F6F8]">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.38963 6.38953V0H8.21154V6.38953H14.6011V8.21145H8.21154V14.601H6.38963V8.21145H9.15527e-05V6.38953H6.38963Z"
                          fill="#1C0A6B"
                        />
                      </svg>
                    </button>
                    <button className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#CCD7E4] text-[#1C0A6B] bg-white hover:bg-[#F4F6F8]">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.66564 12.2884C1.49815 12.2884 1.33099 12.2246 1.20309 12.0967C0.947604 11.8412 0.947604 11.4271 1.20309 11.1716L11.4269 0.947956C11.6821 0.692478 12.0966 0.692478 12.352 0.947956C12.6075 1.20343 12.6075 1.61756 12.352 1.87304L2.12819 12.0967C2.00061 12.2243 1.83312 12.2884 1.66564 12.2884Z"
                          fill="#1C0A6B"
                        />
                        <path
                          d="M0.654897 17C0.609427 17 0.563303 16.9951 0.517179 16.9853C0.163887 16.9094 -0.0611722 16.5617 0.01472 16.2084L1.02553 11.497C1.10142 11.1437 1.45078 10.9193 1.80244 10.9945C2.15573 11.0704 2.38079 11.4181 2.3049 11.7714L1.29409 16.4829C1.22834 16.79 0.95683 17 0.654897 17Z"
                          fill="#1C0A6B"
                        />
                        <path
                          d="M5.36608 15.989C5.19859 15.989 5.03143 15.9252 4.90353 15.7973C4.64804 15.5418 4.64804 15.1277 4.90353 14.8722L15.1274 4.64888C15.3825 4.39341 15.797 4.39341 16.0525 4.64888C16.308 4.90436 16.308 5.31849 16.0525 5.57397L5.82895 15.7973C5.70105 15.9252 5.53356 15.989 5.36608 15.989Z"
                          fill="#1C0A6B"
                        />
                        <path
                          d="M0.653818 16.9997C0.351885 16.9997 0.0807015 16.7897 0.014623 16.4825C-0.060942 16.1292 0.16379 15.7815 0.517081 15.7056L5.22861 14.6948C5.58223 14.6199 5.92996 14.8443 6.00553 15.1973C6.08109 15.5506 5.85636 15.8983 5.50307 15.9742L0.791536 16.985C0.745412 16.9951 0.699288 16.9997 0.653818 16.9997Z"
                          fill="#1C0A6B"
                        />
                        <path
                          d="M13.7392 7.61598C13.5717 7.61598 13.4042 7.55219 13.2766 7.42429L9.57589 3.72363C9.32041 3.46815 9.32041 3.05402 9.57589 2.79854C9.83104 2.54306 10.2458 2.54306 10.501 2.79854L14.2017 6.49921C14.4572 6.75468 14.4572 7.16881 14.2017 7.42429C14.0741 7.55219 13.9066 7.61598 13.7392 7.61598Z"
                          fill="#1C0A6B"
                        />
                        <path
                          d="M15.5897 5.76575C15.4222 5.76575 15.2547 5.70196 15.1268 5.57406C14.8713 5.31858 14.8713 4.90445 15.1268 4.64865C15.4909 4.28457 15.6914 3.7916 15.6914 3.26102C15.6914 2.73044 15.4909 2.23747 15.1268 1.87339C14.7624 1.50899 14.2694 1.30846 13.7388 1.30846C13.2082 1.30846 12.7153 1.50899 12.3512 1.87339C12.096 2.12887 11.6819 2.1292 11.4257 1.87339C11.1703 1.61792 11.1703 1.20379 11.4257 0.947982C12.0368 0.336602 12.8582 0 13.7388 0C14.6191 0 15.4408 0.336602 16.0519 0.947982C16.6633 1.55903 16.9999 2.38042 16.9999 3.26102C16.9999 4.14162 16.6633 4.963 16.0519 5.57406C15.9246 5.70163 15.7572 5.76575 15.5897 5.76575Z"
                          fill="#1C0A6B"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-6 mt-2">
                  {/* Job Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#F6F4FB]">
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.66797 3.87448V2.21161C5.66797 1.54979 6.20946 1.0083 6.87128 1.0083H13.1286C13.7904 1.0083 14.3319 1.54979 14.3319 2.21161V3.87448"
                          stroke="#1C0A6B"
                          strokeWidth="1.2"
                          strokeMiterlimit="22.9256"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.253 9.25195V15.6285C18.253 16.2446 17.7488 16.7488 17.1327 16.7488H2.86716C2.25109 16.7488 1.74683 16.2447 1.74683 15.6285V9.2893"
                          stroke="#1C0A6B"
                          strokeWidth="1.2"
                          strokeMiterlimit="22.9256"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.50622 11.1381C4.5556 10.9122 1 9.78248 1 7.74897V5.09763C1 4.48059 1.50325 3.97729 2.12033 3.97729H17.8797C18.4967 3.97729 19 4.48062 19 5.09763V7.74897C19 9.79522 15.3995 10.9263 11.4191 11.1422"
                          stroke="#1C0A6B"
                          strokeWidth="1.2"
                          strokeMiterlimit="22.9256"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.61816 10.0269H11.3816V11.3152C11.3816 12.0238 10.8019 12.6036 10.0933 12.6036H9.90655C9.19794 12.6036 8.61816 12.0238 8.61816 11.3152V10.0269Z"
                          stroke="#1C0A6B"
                          strokeWidth="1.2"
                          strokeMiterlimit="22.9256"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[15px] text-[#8B8B99] font-medium leading-tight">
                        Job Title
                      </p>
                      <p
                        style={{
                          fontFamily: '"Wix Madefor Text", sans-serif',
                          fontWeight: 500,
                          fontStyle: "normal",
                          fontSize: "21px",
                          lineHeight: "100%",
                          letterSpacing: 0,
                          color: "#1C0A6B",
                        }}
                      >
                        Administrative Assistant
                      </p>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#F6F4FB]">
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="54" height="54" rx="27" fill="#F7F5FD" />
                        <path
                          d="M35.421 31.9564C35.3892 31.93 31.7916 29.3704 30.8202 29.527C30.3516 29.6098 30.084 29.9296 29.547 30.5692C29.4606 30.6724 29.2524 30.919 29.0916 31.0948C28.7522 30.9842 28.4211 30.8495 28.101 30.6916C26.4483 29.887 25.113 28.5517 24.3084 26.899C24.1505 26.5789 24.0158 26.2478 23.9052 25.9084C24.0816 25.747 24.3288 25.5388 24.4344 25.45C25.071 24.916 25.3902 24.6478 25.473 24.1786C25.6428 23.2072 23.07 19.6108 23.0436 19.5784C22.9264 19.4122 22.7738 19.2742 22.5968 19.1741C22.4198 19.0741 22.2228 19.0146 22.02 19C20.9772 19 18 22.8616 18 23.5126C18 23.5504 18.0546 27.3928 22.7928 32.2126C27.6072 36.9454 31.4496 37 31.4874 37C32.1378 37 36 34.0228 36 32.98C35.9852 32.7772 35.9256 32.5802 35.8255 32.4032C35.7254 32.2262 35.5872 32.0736 35.421 31.9564ZM31.4208 35.7964C30.9 35.752 27.672 35.3266 23.64 31.366C19.6602 27.3142 19.2456 24.0808 19.2042 23.5798C19.9907 22.3454 20.9405 21.223 22.0278 20.2432C22.0518 20.2672 22.0836 20.3032 22.1244 20.35C22.9583 21.4883 23.6766 22.707 24.2688 23.9878C24.0762 24.1815 23.8727 24.364 23.6592 24.5344C23.3281 24.7867 23.0241 25.0726 22.752 25.3876C22.706 25.4522 22.6732 25.5253 22.6556 25.6026C22.638 25.68 22.6359 25.76 22.6494 25.8382C22.7764 26.3882 22.9709 26.9205 23.2284 27.4228C24.1511 29.3176 25.6823 30.8485 27.5772 31.771C28.0794 32.0289 28.6117 32.2236 29.1618 32.3506C29.24 32.3644 29.3201 32.3625 29.3975 32.3449C29.4749 32.3272 29.5479 32.2943 29.6124 32.248C29.9285 31.9748 30.2154 31.6696 30.4686 31.3372C30.657 31.1128 30.9084 30.8134 31.0038 30.7288C32.2879 31.3204 33.5092 32.0396 34.6494 32.8756C34.6992 32.9176 34.7346 32.95 34.758 32.971C33.7781 34.0587 32.6555 35.0087 31.4208 35.7952V35.7964Z"
                          fill="#1C0A6B"
                        />
                        <path
                          d="M31.2006 27.3999H32.4006C32.3992 26.1273 31.893 24.9072 30.9931 24.0073C30.0933 23.1075 28.8732 22.6013 27.6006 22.5999V23.7999C28.5551 23.8008 29.4702 24.1804 30.1451 24.8553C30.82 25.5302 31.1996 26.4454 31.2006 27.3999Z"
                          fill="#1C0A6B"
                        />
                        <path
                          d="M34.2006 27.3999H35.4006C35.3982 25.3319 34.5757 23.3493 33.1134 21.8871C31.6511 20.4248 29.6685 19.6022 27.6006 19.5999V20.7999C29.3504 20.8019 31.0279 21.4979 32.2652 22.7352C33.5025 23.9725 34.1985 25.6501 34.2006 27.3999Z"
                          fill="#1C0A6B"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[15px] text-[#8B8B99] font-medium leading-tight">
                        Phone
                      </p>
                      <p
                        style={{
                          fontFamily: '"Wix Madefor Text", sans-serif',
                          fontWeight: 500,
                          fontStyle: "normal",
                          fontSize: "21px",
                          lineHeight: "100%",
                          letterSpacing: 0,
                          color: "#1C0A6B",
                        }}
                      >
                        +11 705 555-1207
                      </p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#F6F4FB]">
                      <svg
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.77341 10.2254C9.19776 10.2254 8.62383 10.0352 8.14369 9.65486L4.28451 6.54342C4.00658 6.3197 3.96355 5.9127 4.18641 5.63563C4.41099 5.35942 4.81713 5.31554 5.0942 5.5384L8.94995 8.6464C9.43439 9.03017 10.1167 9.03017 10.6046 8.64296L14.4216 5.54012C14.6987 5.31382 15.1049 5.35684 15.3303 5.63391C15.5549 5.91012 15.5127 6.31626 15.2365 6.5417L11.4126 9.6497C10.929 10.0335 10.3508 10.2254 9.77341 10.2254Z"
                          fill="#1C0A6B"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.974 15.8487C13.9757 15.847 13.9826 15.8487 13.9878 15.8487C14.9696 15.8487 15.8404 15.4977 16.5081 14.8308C17.2834 14.059 17.7093 12.9498 17.7093 11.7082V5.79849C17.7093 3.39521 16.1381 1.65105 13.974 1.65105H5.52598C3.36191 1.65105 1.7907 3.39521 1.7907 5.79849V11.7082C1.7907 12.9498 2.21749 14.059 2.99191 14.8308C3.65963 15.4977 4.53128 15.8487 5.51221 15.8487H13.974ZM5.50963 17.1394C4.18193 17.1394 2.99621 16.6576 2.08067 15.7455C1.06102 14.7284 0.5 13.2949 0.5 11.7082V5.79849C0.5 2.69824 2.66063 0.360352 5.52598 0.360352H13.974C16.8394 0.360352 19 2.69824 19 5.79849V11.7082C19 13.2949 18.439 14.7284 17.4193 15.7455C16.5047 16.6567 15.3181 17.1394 13.9878 17.1394H5.50963Z"
                          fill="#1C0A6B"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[15px] text-[#8B8B99] font-medium leading-tight">
                        Email
                      </p>
                      <p
                        style={{
                          fontFamily: '"Wix Madefor Text", sans-serif',
                          fontWeight: 500,
                          fontStyle: "normal",
                          fontSize: "21px",
                          lineHeight: "100%",
                          letterSpacing: 0,
                          color: "#1C0A6B",
                        }}
                      >
                        mbraswell@ominex.com
                      </p>
                    </div>
                  </div>
                  {/* Source */}
                  <div className="flex items-center gap-4">
                    <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#F6F4FB]">
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="54" height="54" rx="27" fill="#F7F5FD" />
                        <mask
                          id="mask0_450_2507"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="17"
                          y="17"
                          width="20"
                          height="20"
                        >
                          <path d="M17 17H37V37H17V17Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_450_2507)">
                          <path
                            d="M27.6288 24.7865C27.9503 24.9696 28.2518 25.1996 28.5261 25.4739C30.1742 27.1219 30.2193 29.7489 28.1459 31.8222L25.3379 34.6303C23.2645 36.7037 20.6376 36.6585 18.9895 35.0105C17.3415 33.3624 17.2963 30.7355 19.3697 28.6621L21.4141 26.6094"
                            stroke="#1C0A6B"
                            strokeWidth="1.4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M26.3713 29.2134C26.0497 29.0303 25.7483 28.8003 25.4739 28.526C23.8258 26.8779 23.7807 24.251 25.8541 22.1776L28.6621 19.3696C30.7355 17.2962 33.3624 17.3413 35.0105 18.9894C36.6585 20.6375 36.7037 23.2644 34.6303 25.3377L32.586 27.3905"
                            stroke="#1C0A6B"
                            strokeWidth="1.4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </div>

                    <div>
                      <p className="text-[15px] text-[#8B8B99] font-medium leading-tight">
                        Source
                      </p>
                      <div className="flex gap-3 mt-1">
                        <button className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#B6D6F6] bg-white">
                          <svg
                            width="54"
                            height="54"
                            viewBox="0 0 54 54"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.65"
                              y="0.65"
                              width="52.7"
                              height="52.7"
                              rx="26.35"
                              stroke="#D5D1E8"
                              stroke-width="1.3"
                            />
                            <path
                              d="M37.349 29.3181C38.9404 22.1789 32.6762 15.6826 25.3285 16.9176C21.3161 14.4476 16 17.239 16 22.0098C16 23.0756 16.2709 24.1244 16.8296 25.038C15.3397 32.211 21.6716 38.5889 29.0193 37.2693C34.2338 40.01 39.9562 34.5287 37.349 29.3181ZM30.3568 33.6321C28.4268 34.4272 25.2439 34.4272 23.3477 33.4122C20.605 31.9572 20.131 28.6583 22.5012 28.6583C24.2958 28.6583 23.7032 30.7392 25.5317 31.5681C26.3613 31.9572 28.1389 31.9742 29.1548 31.2975C30.1706 30.6208 30.0521 29.538 29.5103 29.0305C28.0543 27.6771 23.8387 28.2016 21.9256 25.85C20.9944 24.615 21.0113 22.9064 21.9594 21.7052C23.7371 19.3875 28.9855 19.2522 31.2372 20.9778C33.3196 22.6019 32.744 24.7166 31.0679 24.7166C29.0532 24.7166 30.1028 22.0774 26.8522 22.0774C24.482 22.0774 23.5509 23.7523 25.2269 24.5812C27.4617 25.7316 33.2011 25.3425 33.2011 29.7411C33.218 31.5681 32.1006 32.9385 30.3568 33.6321Z"
                              fill="url(#paint0_linear_450_2520)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_450_2520"
                                x1="17.7675"
                                y1="17.7716"
                                x2="36.1895"
                                y2="36.2072"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#29B6F6" />
                                <stop offset="1" stop-color="#0277BD" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </button>
                        <button className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#B6D6F6] bg-white">
                          <svg
                            width="54"
                            height="54"
                            viewBox="0 0 54 54"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.65"
                              y="0.65"
                              width="52.7"
                              height="52.7"
                              rx="26.35"
                              stroke="#D5D1E8"
                              stroke-width="1.3"
                            />
                            <path
                              d="M27 39C33.6274 39 39 33.6274 39 27C39 20.3726 33.6274 15 27 15C20.3726 15 15 20.3726 15 27C15 33.6274 20.3726 39 27 39Z"
                              fill="url(#paint0_linear_450_2523)"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20.4318 26.8735C23.93 25.3493 26.2628 24.3445 27.4299 23.8591C30.7624 22.473 31.4549 22.2322 31.9062 22.2242C32.0055 22.2225 32.2275 22.2471 32.3712 22.3638C32.5845 22.5368 32.5857 22.9125 32.562 23.1611C32.3814 25.0586 31.6 29.6633 31.2025 31.7885C31.0343 32.6877 30.703 32.9893 30.3824 33.0188C29.6856 33.0829 29.1564 32.5582 28.4814 32.1158C27.4253 31.4235 26.8286 30.9925 25.8034 30.3169C24.6187 29.5362 25.3867 29.1071 26.0619 28.4058C26.2386 28.2223 29.309 25.4295 29.3684 25.1762C29.3759 25.1445 29.3828 25.0263 29.3126 24.964C29.2424 24.9017 29.1389 24.9229 29.0641 24.9399C28.9582 24.964 27.271 26.0792 24.0025 28.2855C23.5236 28.6143 23.0898 28.7746 22.7011 28.7662C22.2727 28.7569 21.4485 28.5239 20.8358 28.3248C20.0843 28.0805 19.487 27.9513 19.539 27.5365C19.5661 27.3203 19.8637 27.0993 20.4318 26.8735Z"
                              fill="white"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_450_2523"
                                x1="27"
                                y1="15"
                                x2="27"
                                y2="38.8125"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#2AABEE" />
                                <stop offset="1" stop-color="#229ED9" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </button>
                        <button className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#B6D6F6] bg-white">
                          <svg
                            width="54"
                            height="54"
                            viewBox="0 0 54 54"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.65"
                              y="0.65"
                              width="52.7"
                              height="52.7"
                              rx="26.35"
                              stroke="#D5D1E8"
                              stroke-width="1.3"
                            />
                            <path
                              d="M26.902 38.804C33.4753 38.804 38.804 33.4753 38.804 26.902C38.804 20.3287 33.4753 15 26.902 15C20.3287 15 15 20.3287 15 26.902C15 33.4753 20.3287 38.804 26.902 38.804Z"
                              fill="#007AB9"
                            />
                            <path
                              d="M34.0134 27.8598V32.7668H31.1685V28.1887C31.1685 27.0392 30.7577 26.2542 29.7277 26.2542C28.9416 26.2542 28.4746 26.7827 28.2684 27.2944C28.1935 27.4773 28.1742 27.7313 28.1742 27.9878V32.7665H25.3291C25.3291 32.7665 25.3673 25.0128 25.3291 24.2102H28.1744V25.4227C28.1687 25.4322 28.1606 25.4416 28.1555 25.4507H28.1744V25.4227C28.5525 24.8409 29.2267 24.0093 30.7384 24.0093C32.6101 24.0093 34.0134 25.2322 34.0134 27.8598ZM22.3528 20.0857C21.3796 20.0857 20.7429 20.7245 20.7429 21.5638C20.7429 22.3853 21.3612 23.0426 22.3155 23.0426H22.3339C23.3262 23.0426 23.9432 22.3853 23.9432 21.5638C23.9243 20.7245 23.3262 20.0857 22.3528 20.0857ZM20.912 32.7668H23.7561V24.2102H20.912V32.7668Z"
                              fill="#F1F2F2"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Campaign History */}
              <div
                className="w-full lg:w-3/5"
                style={{ height: 440, top: 438, left: 866 }}
              >
                <div className="bg-[#f9f9fa] rounded-[40px] p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="26.6099"
                          cy="26.6099"
                          r="26.6099"
                          fill="#1C0A6B"
                        />
                        <path
                          d="M26.3242 16.8242C21.085 16.8242 16.8242 21.085 16.8242 26.3242C16.8242 31.5634 21.085 35.8242 26.3242 35.8242C31.5634 35.8242 35.8242 31.5634 35.8242 26.3242C35.8242 21.085 31.5634 16.8242 26.3242 16.8242ZM26.3242 18.0909C30.8789 18.0909 34.5625 21.7696 34.5625 26.3242C34.5625 30.8789 30.8789 34.5625 26.3242 34.5625C21.7696 34.5625 18.0909 30.8789 18.0909 26.3242C18.0909 21.7696 21.7696 18.0909 26.3242 18.0909ZM26.3156 21.2613C26.1482 21.2642 25.9889 21.3333 25.8723 21.4533C25.7557 21.5734 25.6914 21.7347 25.6934 21.902V22.4352C24.6707 22.627 23.7958 23.2855 23.7958 24.4267C23.7958 25.2184 24.1527 25.8587 24.632 26.2314C25.1113 26.6042 25.6525 26.7695 26.1275 26.9279C26.6025 27.0862 27.0126 27.2376 27.2458 27.4189C27.479 27.6003 27.5909 27.7529 27.5909 28.2279C27.5909 29.2835 25.0625 29.2835 25.0625 28.2279C25.0644 28.1436 25.0494 28.0597 25.0184 27.9812C24.9874 27.9027 24.941 27.8313 24.8821 27.7709C24.8231 27.7106 24.7526 27.6627 24.6748 27.63C24.5971 27.5972 24.5135 27.5804 24.4292 27.5804C24.3448 27.5804 24.2613 27.5972 24.1835 27.63C24.1057 27.6627 24.0353 27.7106 23.9763 27.7709C23.9173 27.8313 23.8709 27.9027 23.8399 27.9812C23.809 28.0597 23.794 28.1436 23.7958 28.2279C23.7958 29.3682 24.6715 30.028 25.6934 30.2207V30.7514C25.6915 30.8357 25.7065 30.9196 25.7375 30.9981C25.7685 31.0766 25.8148 31.148 25.8738 31.2084C25.9328 31.2687 26.0033 31.3166 26.081 31.3493C26.1588 31.3821 26.2423 31.3989 26.3267 31.3989C26.4111 31.3989 26.4946 31.3821 26.5724 31.3493C26.6501 31.3166 26.7206 31.2687 26.7796 31.2084C26.8386 31.148 26.8849 31.0766 26.9159 30.9981C26.9469 30.9196 26.9619 30.8357 26.96 30.7514V30.2207C27.982 30.0281 28.8588 29.3684 28.8588 28.2279C28.8588 27.4363 28.5007 26.796 28.0214 26.4232C27.542 26.0504 27.0008 25.8839 26.5258 25.7255C26.0508 25.5672 25.6408 25.417 25.4076 25.2357C25.1744 25.0543 25.0625 24.9017 25.0625 24.4267C25.0625 23.3711 27.5909 23.3711 27.5909 24.4267C27.5909 24.5948 27.6577 24.7561 27.7766 24.875C27.8955 24.9939 28.0567 25.0606 28.2248 25.0606C28.393 25.0606 28.5542 24.9939 28.6731 24.875C28.792 24.7561 28.8588 24.5948 28.8588 24.4267C28.8588 23.2872 27.9817 22.6294 26.96 22.4364V21.902C26.961 21.8173 26.945 21.7332 26.9129 21.6548C26.8808 21.5763 26.8334 21.5051 26.7733 21.4454C26.7132 21.3856 26.6417 21.3386 26.5631 21.3069C26.4845 21.2753 26.4003 21.2598 26.3156 21.2613Z"
                          fill="white"
                        />
                      </svg>

                      <h3
                        className="text-base md:text-lg lg:text-2xl font-medium text-[#1C0A6B]"
                        style={{
                          fontFamily: '"Wix Madefor Text", sans-serif',
                          lineHeight: "100%",
                          letterSpacing: 0,
                        }}
                      >
                        Campaign History
                      </h3>
                    </div>

                    <div className="flex gap-1">
                      <button className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#CCD7E4] text-[#1C0A6B] bg-white hover:bg-[#F4F6F8]">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.38963 6.38953V0H8.21154V6.38953H14.6011V8.21145H8.21154V14.601H6.38963V8.21145H9.15527e-05V6.38953H6.38963Z"
                            fill="#1C0A6B"
                          />
                        </svg>
                      </button>
                      <button className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#CCD7E4] text-[#1C0A6B] bg-white hover:bg-[#F4F6F8]">
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.66564 12.2884C1.49815 12.2884 1.33099 12.2246 1.20309 12.0967C0.947604 11.8412 0.947604 11.4271 1.20309 11.1716L11.4269 0.947956C11.6821 0.692478 12.0966 0.692478 12.352 0.947956C12.6075 1.20343 12.6075 1.61756 12.352 1.87304L2.12819 12.0967C2.00061 12.2243 1.83312 12.2884 1.66564 12.2884Z"
                            fill="#1C0A6B"
                          />
                          <path
                            d="M0.654897 17C0.609427 17 0.563303 16.9951 0.517179 16.9853C0.163887 16.9094 -0.0611722 16.5617 0.01472 16.2084L1.02553 11.497C1.10142 11.1437 1.45078 10.9193 1.80244 10.9945C2.15573 11.0704 2.38079 11.4181 2.3049 11.7714L1.29409 16.4829C1.22834 16.79 0.95683 17 0.654897 17Z"
                            fill="#1C0A6B"
                          />
                          <path
                            d="M5.36608 15.989C5.19859 15.989 5.03143 15.9252 4.90353 15.7973C4.64804 15.5418 4.64804 15.1277 4.90353 14.8722L15.1274 4.64888C15.3825 4.39341 15.797 4.39341 16.0525 4.64888C16.308 4.90436 16.308 5.31849 16.0525 5.57397L5.82895 15.7973C5.70105 15.9252 5.53356 15.989 5.36608 15.989Z"
                            fill="#1C0A6B"
                          />
                          <path
                            d="M0.653818 16.9997C0.351885 16.9997 0.0807015 16.7897 0.014623 16.4825C-0.060942 16.1292 0.16379 15.7815 0.517081 15.7056L5.22861 14.6948C5.58223 14.6199 5.92996 14.8443 6.00553 15.1973C6.08109 15.5506 5.85636 15.8983 5.50307 15.9742L0.791536 16.985C0.745412 16.9951 0.699288 16.9997 0.653818 16.9997Z"
                            fill="#1C0A6B"
                          />
                          <path
                            d="M13.7392 7.61598C13.5717 7.61598 13.4042 7.55219 13.2766 7.42429L9.57589 3.72363C9.32041 3.46815 9.32041 3.05402 9.57589 2.79854C9.83104 2.54306 10.2458 2.54306 10.501 2.79854L14.2017 6.49921C14.4572 6.75468 14.4572 7.16881 14.2017 7.42429C14.0741 7.55219 13.9066 7.61598 13.7392 7.61598Z"
                            fill="#1C0A6B"
                          />
                          <path
                            d="M15.5897 5.76575C15.4222 5.76575 15.2547 5.70196 15.1268 5.57406C14.8713 5.31858 14.8713 4.90445 15.1268 4.64865C15.4909 4.28457 15.6914 3.7916 15.6914 3.26102C15.6914 2.73044 15.4909 2.23747 15.1268 1.87339C14.7624 1.50899 14.2694 1.30846 13.7388 1.30846C13.2082 1.30846 12.7153 1.50899 12.3512 1.87339C12.096 2.12887 11.6819 2.1292 11.4257 1.87339C11.1703 1.61792 11.1703 1.20379 11.4257 0.947982C12.0368 0.336602 12.8582 0 13.7388 0C14.6191 0 15.4408 0.336602 16.0519 0.947982C16.6633 1.55903 16.9999 2.38042 16.9999 3.26102C16.9999 4.14162 16.6633 4.963 16.0519 5.57406C15.9246 5.70163 15.7572 5.76575 15.5897 5.76575Z"
                            fill="#1C0A6B"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                    {/* Google Adwords Card */}
                    <div
                      className="bg-[#F2F0FA] rounded-[40px] p-2 flex flex-col justify-between w-full"
                      style={{ height: 296, top: 536, left: 885, opacity: 1 }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div
                            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 md:px-1 rounded-[20px] flex items-center justify-center"
                            style={{ background: "#E6F4D7" }}
                          >
                            {/* Google Ads SVG (custom) */}
                            <svg
                              className="w-8 h-7 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-9 lg:h-9"
                              viewBox="0 0 33 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.402 0.816706C16.5155 -0.849988 12.8302 0.137119 11.1635 3.02444L0.818857 20.9424C-1.85098 25.5663 2.42717 31.1704 7.6028 29.7832C9.15891 29.3663 10.4593 28.3681 11.2647 26.9732L21.6094 9.05521C23.2724 6.17529 22.282 2.4797 19.402 0.816706Z"
                                fill="#FABC04"
                              />
                              <path
                                d="M32.0832 20.9425L21.7381 3.02453C20.9327 1.62959 19.6319 0.631381 18.0762 0.214502C12.8989 -1.17304 8.62407 4.43345 11.2923 9.0553L21.6374 26.9733C23.3036 29.859 26.9881 30.8481 29.8759 29.181C32.7554 27.518 33.7458 23.8224 32.0832 20.9425Z"
                                fill="#3C8BD9"
                              />
                              <path
                                d="M11.8668 22.3971C11.0043 19.1776 7.70048 17.2695 4.48056 18.1325C-0.696714 19.5196 -1.59584 26.5124 3.02601 29.181C7.63717 31.843 13.2617 27.6023 11.8668 22.3971Z"
                                fill="#34A852"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4
                              className="text-lg md:text-lg lg:text-xl font-normal text-[#1C0A6B] mb-2"
                              style={{
                                fontFamily: '"Wix Madefor Text", sans-serif',
                                lineHeight: "100%",
                                letterSpacing: 0,
                              }}
                            >
                              Google Adwords
                            </h4>
                            <p
                              className="text-xs sm:text-sm lg:text-base font-normal text-[#8B8B99]"
                              style={{
                                fontFamily: '"Wix Madefor Text", sans-serif',
                                lineHeight: "100%",
                                letterSpacing: 0,
                              }}
                            >
                              Status:{" "}
                              <span className="text-[#1C0A6B] text-sm">
                                Connected
                              </span>
                            </p>
                          </div>
                        </div>
                        <button className="w-10 h-10 lg:w-14 lg:h-12 flex items-center justify-center rounded-full border-2 border-[#CCD7E4]">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#1C0A6B]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center gap-8 mb-8">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center">
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#1C0A6B]"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M3 7h18M3 12h18M3 17h18" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-base lg:text-sm text-[#8B8B99]">
                              Type
                            </p>
                            <p
                              className="text-base md:text-sm lg:text-md font-normal text-[#1C0A6B]"
                              style={{
                                fontFamily: '"Wix Madefor Text", sans-serif',
                                lineHeight: "100%",
                                letterSpacing: 0,
                              }}
                            >
                              Web Marketing
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center">
                            <svg
                              className="w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#1C0A6B]"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <rect x="3" y="4" width="18" height="18" rx="4" />
                              <path d="M16 2v4M8 2v4M3 10h18" />
                            </svg>
                          </div>
                          <div className="">
                            <div>
                              <p className="text-base md:text-sm lg:text-md text-[#8B8B99]">
                                Start Date
                              </p>
                              <p
                                className="text-base md:text-sm lg:text-md font-normal text-[#1C0A6B]"
                                style={{
                                  fontFamily: '"Wix Madefor Text", sans-serif',
                                  lineHeight: "100%",
                                  letterSpacing: 0,
                                }}
                              >
                                18.02.2025
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="w-full bg-[#1C0A6B] text-white py-4 pb-2 rounded-[20px] text-lg sm:text-sm md:text-md lg:text-lg font-bold">
                        Send email
                      </button>
                    </div>
                    {/* X-twitter Card */}
                    <div
                      className="bg-[#F2F0FA] rounded-[40px] p-2 flex flex-col justify-between w-full"
                      style={{ height: 296, top: 536, left: 885, opacity: 1 }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div
                            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 md:px-1 rounded-[20px] flex items-center justify-center"
                            style={{ background: "#1C0A6B" }}
                          >
                            {/* Google Ads SVG (custom) */}
                            <svg
                              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
                              viewBox="0 0 37 38"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.02 16.0904L35.7941 0H32.5301L20.5701 13.9711L11.0176 0H0L14.4452 21.1267L0 38H3.2642L15.8943 23.2461L25.9824 38H37L22.0192 16.0904H22.02ZM17.5493 21.3129L16.0857 19.2091L4.44034 2.46938H9.45396L18.8519 15.9789L20.3155 18.0826L32.5316 35.6429H27.518L17.5493 21.3137V21.3129Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4
                              className="text-lg md:text-lg lg:text-xl font-normal text-[#1C0A6B] mb-2"
                              style={{
                                fontFamily: '"Wix Madefor Text", sans-serif',
                                lineHeight: "100%",
                                letterSpacing: 0,
                              }}
                            >
                              X-twitter Social Listening
                            </h4>
                            <p
                              className="text-xs sm:text-sm lg:text-base font-normal text-[#8B8B99]"
                              style={{
                                fontFamily: '"Wix Madefor Text", sans-serif',
                                lineHeight: "100%",
                                letterSpacing: 0,
                              }}
                            >
                              Status:{" "}
                              <span className="text-[#1C0A6B] text-sm">
                                Engaged
                              </span>
                            </p>
                          </div>
                        </div>
                        <button className="w-10 h-10 lg:w-14 lg:h-12 flex items-center justify-center rounded-full border-2 border-[#CCD7E4]">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#1C0A6B]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center gap-8 mb-8">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center">
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#1C0A6B]"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M3 7h18M3 12h18M3 17h18" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-base lg:text-sm text-[#8B8B99]">
                              Type
                            </p>
                            <p
                              className="text-base md:text-sm lg:text-md font-normal text-[#1C0A6B]"
                              style={{
                                fontFamily: '"Wix Madefor Text", sans-serif',
                                lineHeight: "100%",
                                letterSpacing: 0,
                              }}
                            >
                              Social Media
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center">
                            <svg
                              className="w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#1C0A6B]"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <rect x="3" y="4" width="18" height="18" rx="4" />
                              <path d="M16 2v4M8 2v4M3 10h18" />
                            </svg>
                          </div>
                          <div className="">
                            <div>
                              <p className="text-base md:text-sm lg:text-md text-[#8B8B99]">
                                Start Date
                              </p>
                              <p
                                className="text-base md:text-sm lg:text-md font-normal text-[#1C0A6B]"
                                style={{
                                  fontFamily: '"Wix Madefor Text", sans-serif',
                                  lineHeight: "100%",
                                  letterSpacing: 0,
                                }}
                              >
                                06.03.2025
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="w-full bg-[#1C0A6B] text-white py-4 pb-2 rounded-[20px] text-lg sm:text-sm md:text-md lg:text-lg font-bold">
                        Send email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Einstein Scoring */}
            <div
              className="bg-white rounded-[40px] p-4 border border-gray-200 w-full"
              style={{ height: "auto", marginTop: 8, position: "relative" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between flex-wrap md:mb-3">
                <div className="flex items-center space-x-3 mb-2 md:mb-0">
                  <div className="w-[54px] h-[54px] bg-blue-900 rounded-full flex items-center justify-center">
                    <svg
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="26.6099"
                        cy="26.6099"
                        r="26.6099"
                        fill="#1C0A6B"
                      />
                      <path
                        d="M26.3242 16.8242C21.085 16.8242 16.8242 21.085 16.8242 26.3242C16.8242 31.5634 21.085 35.8242 26.3242 35.8242C31.5634 35.8242 35.8242 31.5634 35.8242 26.3242C35.8242 21.085 31.5634 16.8242 26.3242 16.8242ZM26.3242 18.0909C30.8789 18.0909 34.5625 21.7696 34.5625 26.3242C34.5625 30.8789 30.8789 34.5625 26.3242 34.5625C21.7696 34.5625 18.0909 30.8789 18.0909 26.3242C18.0909 21.7696 21.7696 18.0909 26.3242 18.0909ZM26.3156 21.2613C26.1482 21.2642 25.9889 21.3333 25.8723 21.4533C25.7557 21.5734 25.6914 21.7347 25.6934 21.902V22.4352C24.6707 22.627 23.7958 23.2855 23.7958 24.4267C23.7958 25.2184 24.1527 25.8587 24.632 26.2314C25.1113 26.6042 25.6525 26.7695 26.1275 26.9279C26.6025 27.0862 27.0126 27.2376 27.2458 27.4189C27.479 27.6003 27.5909 27.7529 27.5909 28.2279C27.5909 29.2835 25.0625 29.2835 25.0625 28.2279C25.0644 28.1436 25.0494 28.0597 25.0184 27.9812C24.9874 27.9027 24.941 27.8313 24.8821 27.7709C24.8231 27.7106 24.7526 27.6627 24.6748 27.63C24.5971 27.5972 24.5135 27.5804 24.4292 27.5804C24.3448 27.5804 24.2613 27.5972 24.1835 27.63C24.1057 27.6627 24.0353 27.7106 23.9763 27.7709C23.9173 27.8313 23.8709 27.9027 23.8399 27.9812C23.809 28.0597 23.794 28.1436 23.7958 28.2279C23.7958 29.3682 24.6715 30.028 25.6934 30.2207V30.7514C25.6915 30.8357 25.7065 30.9196 25.7375 30.9981C25.7685 31.0766 25.8148 31.148 25.8738 31.2084C25.9328 31.2687 26.0033 31.3166 26.081 31.3493C26.1588 31.3821 26.2423 31.3989 26.3267 31.3989C26.4111 31.3989 26.4946 31.3821 26.5724 31.3493C26.6501 31.3166 26.7206 31.2687 26.7796 31.2084C26.8386 31.148 26.8849 31.0766 26.9159 30.9981C26.9469 30.9196 26.9619 30.8357 26.96 30.7514V30.2207C27.982 30.0281 28.8588 29.3684 28.8588 28.2279C28.8588 27.4363 28.5007 26.796 28.0214 26.4232C27.542 26.0504 27.0008 25.8839 26.5258 25.7255C26.0508 25.5672 25.6408 25.417 25.4076 25.2357C25.1744 25.0543 25.0625 24.9017 25.0625 24.4267C25.0625 23.3711 27.5909 23.3711 27.5909 24.4267C27.5909 24.5948 27.6577 24.7561 27.7766 24.875C27.8955 24.9939 28.0567 25.0606 28.2248 25.0606C28.393 25.0606 28.5542 24.9939 28.6731 24.875C28.792 24.7561 28.8588 24.5948 28.8588 24.4267C28.8588 23.2872 27.9817 22.6294 26.96 22.4364V21.902C26.961 21.8173 26.945 21.7332 26.9129 21.6548C26.8808 21.5763 26.8334 21.5051 26.7733 21.4454C26.7132 21.3856 26.6417 21.3386 26.5631 21.3069C26.4845 21.2753 26.4003 21.2598 26.3156 21.2613Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-[#1C0A6B] font-['Wix_Madefor_Text']">
                    Einstein Scoring
                  </h3>
                </div>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  {/* Your button SVG */}
                </button>
              </div>

              {/* Score Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* === Lead Score Card === */}
                <div className="bg-[#F2F0FA] rounded-[32px] w-full flex flex-col lg:flex-row items-center justify-between p-4 gap-4">
                  {/* Donut */}
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <ScoreDonut
                      value={92}
                      label="Lead Score"
                      gradient={["#B6D6F6", "#6CC6E0"]}
                      gradientId="leadScoreGradient"
                      tickColor="#B6D6F6"
                      circleRatio={0.75}
                      background="#F2F0FA"
                      width={240}
                      height={240}
                    />
                  </div>

                  {/* Top Positives */}
                  <div className="flex flex-col justify-center w-full max-w-xs">
                    <h4 className="text-[#1C0A6B] text-lg font-medium mb-6 font-['Wix_Madefor_Text']">
                      Top Positives
                    </h4>

                    <div className="flex flex-col gap-4 mb-6">
                      {[
                        { label: "Product Interest", value: "Service" },
                        { label: "Engagement Grade", value: "85" },
                        {
                          label: "Lead Source",
                          value: "Cold Call",
                          icon: "mail",
                        },
                      ].map((item, i) => (
                        <div className="flex items-center gap-4" key={i}>
                          <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                            {item.icon === "mail" ? (
                              <Mail className="w-6 h-6 text-[#1C0A6B]" />
                            ) : (
                              <User className="w-6 h-6 text-[#1C0A6B]" />
                            )}
                          </span>
                          <div>
                            <div className="text-sm text-gray-500 font-['Wix_Madefor_Text']">
                              {item.label}
                            </div>
                            <div className="text-lg font-medium text-[#1C0A6B] font-['Wix_Madefor_Text']">
                              {item.value}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="bg-[#22008C] text-white w-56 h-12 rounded-full font-medium text-lg mx-auto font-['Wix_Madefor_Text']">
                      Send email
                    </button>
                  </div>
                </div>

                {/* === Behavior Score Card === */}
                <div className="bg-[#F2F0FA] rounded-[32px] w-full flex flex-col lg:flex-row items-center justify-between p-4 gap-4">
                  {/* Donut */}
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <ScoreDonut
                      value={55}
                      label="Behavior Score"
                      gradient={["#CF3393", "#FF94D6"]}
                      gradientId="behaviorScoreGradient"
                      tickColor="#BCB3DF"
                      circleRatio={0.75}
                      background="#F6F4FB"
                      width={240}
                      height={240}
                    />
                  </div>

                  {/* Top Positives */}
                  <div className="flex flex-col justify-center w-full max-w-xs">
                    <h4 className="text-[#1C0A6B] text-lg font-medium mb-6 font-['Wix_Madefor_Text']">
                      Top Positives
                    </h4>

                    <div className="flex flex-col gap-4 mb-6">
                      {[
                        { label: "Company is", value: "Valid" },
                        { label: "Engagement Grade", value: "48" },
                        {
                          label: "Lead Source",
                          value: "Specified",
                          icon: "mail",
                        },
                      ].map((item, i) => (
                        <div className="flex items-center gap-4" key={i}>
                          <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                            {item.icon === "mail" ? (
                              <Mail className="w-6 h-6 text-[#1C0A6B]" />
                            ) : (
                              <User className="w-6 h-6 text-[#1C0A6B]" />
                            )}
                          </span>
                          <div>
                            <div className="text-sm text-gray-500 font-['Wix_Madefor_Text']">
                              {item.label}
                            </div>
                            <div className="text-lg font-medium text-[#1C0A6B] font-['Wix_Madefor_Text']">
                              {item.value}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="bg-[#22008C] text-white w-56 h-12 rounded-full font-medium text-lg mx-auto font-['Wix_Madefor_Text']">
                      Send email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesEngagement;
