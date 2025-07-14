import React from "react";
import { Calendar, ArrowUpRight } from "lucide-react";
import logo from "../assets/logon.png";
import googlemeetlogo from "../assets/gmeet.png";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 bg-[#F4F6F8]">
      {/* Left: Logo */}
      <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center ml-1 xs:ml-2 sm:ml-4 md:ml-6">
        <span className="w-full h-full">
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
              fill="url(#paint0_linear_450_1646)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_450_1646"
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
      </div>

      {/* Center: Pills */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Blue pill */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex items-center bg-blue-800 rounded-full
             px-2 py-1
             min-w-[124px] min-h-[40px]
             sm:px-4 sm:py-3 sm:min-w-[300px] sm:min-h-[70px]
             md:px-6 md:min-w-[600px] md:min-h-[70px]
             lg:min-w-[1000px] lg:min-h-[70px]
             max-w-[95%] z-10"
          style={{ height: "48px", top: 0 }}
        >
          <span className="text-white text-xs sm:text-[10px] md:text-sm lg:text-lg font-semibold">
            Your Schedule
          </span>
          {/* Calendar Icon Section */}
          <div
            className="hidden sm:flex items-center rounded-full border border-[#2D3238] bg-transparent
                      px-3 py-1.5 gap-2
                      sm:px-4 sm:py-2 sm:gap-3
                      md:px-1 
                      lg:px-6 lg:py-3 lg:gap-5
                      w-fit"
          >
            {/* Icon Container */}
            <div
              className="flex items-center justify-center rounded-full bg-[#1C1D1F]
                         w-5 h-5
                         sm:w-4 sm:h-4
                         md:w-5 md:h-5"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V5M16 2V5M3 9H21M5 20H19C20.1 20 21 19.1 21 18V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V18C3 19.1 3.9 20 5 20Z"
                  stroke="#ADB9C8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 13H8.01M12 13H12.01M16 13H16.01M8 17H8.01M12 17H12.01M16 17H16.01"
                  stroke="#ADB9C8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Date Text */}
            <span className="text-white text-sm sm:text-base font-medium whitespace-nowrap">
              28 March
            </span>
          </div>
          {/* Right Arrow Button at end of black pill */}
          <button className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-gray-700 bg-transparent z-20">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>
        </div>
        {/* Blue pill */}
        <div
          className="hidden sm:flex absolute left-1/2 -translate-x-1/3 items-center bg-blue-400 rounded-full
             min-w-[180px] sm:min-w-[180px] sm:min-h-[70px] md:min-w-[500px] md:min-h-[70px] 
             lg:min-w-[600px] lg:min-h-[70px] max-w-[80%] h-[40px] sm:h-[48px] z-20 mx-auto"
          style={{ top: 0 }}
        >
          {/* Main Inner Pill (wider, but less than orange) */}
          <div
            className="hidden sm:flex items-center bg-blue-700 shadow py-1 sm:py-2 gap-2 sm:gap-4
             h-[28px] sm:h-[40px] md:h-[48px] rounded-full
             min-w-[160px] sm:min-w-[220px] md:min-w-[390px] max-w-[70%] z-30 ml-2 sm:ml-4"
          >
            {/* Avatars */}
            <div className="flex items-center -space-x-1 sm:-space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="avatar"
                className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/33.jpg"
                alt="avatar"
                className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-white"
              />
            </div>
            {/* 36mm */}
            <span className="text-white font-semibold text-[10px] sm:text-xs md:text-sm font-manrope">
              36mm
            </span>
            {/* Arrow */}
            <div className="w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center rounded-full border border-gray-400 text-white bg-blue-700">
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
            {/* Time */}
            <span className="text-white font-semibold text-[10px] sm:text-xs md:text-sm font-manrope">
              2:15 pm
            </span>
            {/* Google Meet Logo styled and right-aligned */}
            <div className="ml-auto flex items-center px-1 sm:px-2">
              <img
                src={googlemeetlogo}
                alt="Google Meet"
                className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-[#F1700C] shadow"
              />
            </div>
          </div>
          {/* Timeline Avatars and Calendar (right of white pill) */}
          <div className="hidden md:flex items-center gap-2 md:ml-8position-right">
            <span className="text-white font-semibold text-xs font-manrope">
              2:15 pm
            </span>
            <div className="flex ">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="avatar"
                className="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="avatar"
                className="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-white"
              />
            </div>
          </div>
        </div>
        {/* Spacer for stacking context */}
        <div className="h-[56px] sm:h-[64px] w-full"></div>
      </div>

      {/* Right: Notification and user */}
      <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 ml-1 xs:ml-2 sm:ml-4 md:ml-10 z-30 pb-1 xs:pb-2 sm:pb-3 md:pt-4">
        {/* Notification Button */}
        <button className="hidden sm:flex relative w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 p-0">
          <span>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 61 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30.5" cy="30.5" r="30.5" fill="white" />
              <path
                d="M38.9163 36.9431H23.0834V38.8677H38.9163V36.9431ZM38.1531 27.4848L38.5956 31.3911L40.5081 31.1745L40.0655 27.2682L38.1531 27.4848ZM23.404 31.3911L23.8465 27.4848L21.9341 27.2682L21.4916 31.1745L23.404 31.3911ZM22.053 34.5254C22.8032 33.6424 23.2728 32.5492 23.404 31.3911L21.4916 31.1745C21.4029 31.9577 21.0857 32.6913 20.5863 33.2791L22.053 34.5254ZM38.5956 31.3911C38.7269 32.5492 39.1965 33.6424 39.9466 34.5254L41.4134 33.2791C40.9139 32.6913 40.5967 31.9577 40.5081 31.1745L38.5956 31.3911ZM23.0834 36.9431C21.9456 36.9431 21.2218 35.5036 22.053 34.5254L20.5863 33.2791C18.7656 35.4222 20.1941 38.8677 23.0834 38.8677V36.9431ZM38.9163 38.8677C41.8055 38.8677 43.2341 35.4222 41.4134 33.2791L39.9466 34.5254C40.7778 35.5036 40.0541 36.9431 38.9163 36.9431V38.8677ZM40.0655 27.2682C39.5328 22.5659 35.6547 18.98 30.9998 18.98V20.9046C34.6312 20.9046 37.7256 23.7107 38.1531 27.4848L40.0655 27.2682ZM23.8465 27.4848C24.274 23.7107 27.3684 20.9046 30.9998 20.9046V18.98C26.345 18.98 22.4668 22.5659 21.9341 27.2682L23.8465 27.4848Z"
                fill="#2E4C73"
              />
              <path
                d="M35.7501 40.8092C35.9367 40.3115 35.6844 39.757 35.1867 39.5704C34.689 39.3839 34.1345 39.6361 33.9479 40.1338L35.7501 40.8092ZM28.0517 40.1338C27.8652 39.6361 27.3105 39.3839 26.8128 39.5704C26.3152 39.757 26.0629 40.3115 26.2495 40.8092L28.0517 40.1338ZM33.9479 40.1338C33.5339 41.2387 32.3914 42.0754 30.9998 42.0754V44C33.1624 44 35.0435 42.6945 35.7501 40.8092L33.9479 40.1338ZM30.9998 42.0754C29.6082 42.0754 28.4657 41.2387 28.0517 40.1338L26.2495 40.8092C26.956 42.6945 28.8372 44 30.9998 44V42.0754Z"
                fill="#2E4C73"
              />
              <circle cx="38.5" cy="22.5" r="4" fill="#CB122D" stroke="white" />
            </svg>
          </span>
        </button>

        {/* Avatar */}
        <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-yellow-200 flex items-center justify-center">
          <img
            src="https://randomuser.me/api/portraits/men/35.jpg"
            alt="user"
            className="w-5 h-5 xs:w-7 xs:h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Sales Engagement Sub-header */}
    </nav>
  );
};

export default Navbar;
