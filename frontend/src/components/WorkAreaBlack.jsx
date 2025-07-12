import React from "react";
import { Plus, ArrowRight, ArrowLeft } from "lucide-react";
import logo from "../assets/logo.png";

const WorkspaceHeader = () => {
  return (
    <section className="flex flex-wrap w-full mb-4 sm:mb-6 md:mb-8 lg:mb-4 justify-center px-1 sm:px-2 md:px-6 xl:px-12 min-h-[60px]">
      {/* Leftmost: Arrow Button */}
      <button className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 mt-1 xs:mt-2 sm:mt-4 md:mt-6 lg:mt-8 flex items-center justify-center rounded-full border-2 border-gray-300 bg-transparent mr-0 p-0">
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 61 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-14 md:h-14"
          >
            <circle cx="30.5" cy="30.5" r="30.5" fill="white" />
            <path
              d="M41 31.75C41.4142 31.75 41.75 31.4142 41.75 31C41.75 30.5858 41.4142 30.25 41 30.25V31.75ZM23.4403 30.4697C23.1474 30.7626 23.1474 31.2374 23.4403 31.5303L28.2133 36.3033C28.5061 36.5962 28.981 36.5962 29.2739 36.3033C29.5668 36.0104 29.5668 35.5355 29.2739 35.2426L25.0313 31L29.2739 26.7574C29.5668 26.4645 29.5668 25.9896 29.2739 25.6967C28.981 25.4038 28.5061 25.4038 28.2133 25.6967L23.4403 30.4697ZM41 31V30.25L23.9706 30.25V31V31.75L41 31.75V31Z"
              fill="#6E829E"
            />
          </svg>
        </span>
      </button>
      {/* Main: Workspace Title and Button */}
      <div className="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 ml-1 sm:ml-2 md:ml-4 min-w-0 w-full md:w-auto">
        <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight flex items-center font-manrope truncate max-w-[100px] xs:max-w-[140px] sm:max-w-[200px] md:max-w-[350px] lg:max-w-[500px] text-white">
          <span className="inline-block align-middle mx-1 text-white">
            <svg
              viewBox="0 0 371 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-20 xs:h-7 xs:w-24 sm:h-8 sm:w-36 md:h-10 md:w-48 lg:h-12 lg:w-60 xl:h-14 xl:w-72"
            >
              <path
                d="M42.8237 57H37.4849L28.2841 21.7301H28.7385L19.5376 57H14.1988L2.61259 16.3913H7.49699L17.8337 54.501H16.1299L26.1259 16.3913H30.9535L40.9495 54.501H39.416L49.7527 16.3913H54.41L42.8237 57ZM118.608 57H114.065V16.3913H128.945C131.482 16.3913 133.697 16.8646 135.59 17.8112C137.483 18.7578 138.96 20.083 140.02 21.7869C141.08 23.4907 141.61 25.4975 141.61 27.8072C141.61 30.079 141.08 32.0668 140.02 33.7707C138.96 35.4746 137.483 36.8187 135.59 37.8032C133.697 38.7498 131.482 39.2231 128.945 39.2231H118.04V35.2474H128.945C131.444 35.2474 133.394 34.5848 134.795 33.2595C136.234 31.9343 136.953 30.1169 136.953 27.8072C136.953 25.4596 136.234 23.6422 134.795 22.3548C133.394 21.0296 131.444 20.367 128.945 20.367H118.608V57ZM145.359 57H139.566L125.083 38.0871H130.365L145.359 57ZM158.099 57H153.555V16.3913H158.099V57ZM184.736 57H177.977L156.792 35.9289H157.588L176.5 16.3913H182.521L162.358 36.6673V35.1906L184.736 57ZM229.555 45.7545H208.597V41.7788H229.555V45.7545ZM237.052 57H232.281L218.196 19.1743H220.07L205.985 57H201.384L216.776 16.3913H221.66L237.052 57ZM249.726 57H245.182V16.3913H260.062C262.599 16.3913 264.814 16.8646 266.707 17.8112C268.601 18.7578 270.077 20.083 271.137 21.7869C272.198 23.4907 272.728 25.4975 272.728 27.8072C272.728 30.079 272.198 32.0668 271.137 33.7707C270.077 35.4746 268.601 36.8187 266.707 37.8032C264.814 38.7498 262.599 39.2231 260.062 39.2231H249.158V35.2474H260.062C262.561 35.2474 264.511 34.5848 265.912 33.2595C267.351 31.9343 268.071 30.1169 268.071 27.8072C268.071 25.4596 267.351 23.6422 265.912 22.3548C264.511 21.0296 262.561 20.367 260.062 20.367H249.726V57ZM276.476 57H270.683L256.2 38.0871H261.482L276.476 57ZM310.117 57H284.673V16.3913H310.117V20.367H289.216V53.0243H310.117V57ZM309.095 38.2007H288.648V34.2251H309.095V38.2007ZM343.312 45.7545H322.354V41.7788H343.312V45.7545ZM350.809 57H346.038L331.953 19.1743H333.827L319.742 57H315.141L330.533 16.3913H335.417L350.809 57Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M81 22.2979C73.4325 22.2979 67.2979 28.4325 67.2979 36C67.2979 43.5675 73.4325 49.7021 81 49.7021C88.5675 49.7021 94.7021 43.5675 94.7021 36C94.7021 31.8764 92.8473 28.5208 90.4617 26.2945C90.0976 25.9547 90.0003 25.4069 90.2584 24.981L94.1818 18.5056C94.4878 18.0006 95.1638 17.8679 95.6194 18.2435C100.73 22.4554 104 28.8463 104 36C104 48.7025 93.7025 59 81 59C68.2975 59 58 48.7025 58 36C58 23.2975 68.2975 13 81 13C83.418 13 85.7563 13.3747 87.9555 14.0718C88.5194 14.2505 88.7747 14.8919 88.5149 15.4233L85.2993 22.001C85.0792 22.4511 84.5616 22.6607 84.0751 22.5408C83.0894 22.2979 82.3337 22.2979 81 22.2979Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="64.3617"
                  y1="20.3404"
                  x2="97.3936"
                  y2="51.9043"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#CB122D" />
                  <stop offset="1" stopColor="#FF8300" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>
        <button className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-white text-black py-1 px-2 sm:px-3 md:px-5 lg:px-6 rounded-full text-xs sm:text-sm md:text-md font-semibold ml-1 sm:ml-2 md:ml-4 lg:ml-6 shadow font-manrope whitespace-nowrap">
          {/* Icon */}
          <span className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-[#4e4a4a] flex items-center justify-center">
            <svg
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            >
              <rect x="9" width="2" height="19" fill="#898989" />
              <rect
                x="19.5"
                y="8.5"
                width="2"
                height="19"
                transform="rotate(90 19.5 8.5)"
                fill="#898989"
              />
            </svg>
          </span>

          {/* Text */}
          <span className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-black">
            New Task
          </span>
        </button>
      </div>
      {/* Right: Stats (hidden on small screens) */}
      <div className="hidden md:flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-8 lg:gap-16 ml-auto px-1 sm:px-2 md:px-4 pb-2 sm:pb-4 md:pb-6 lg:pb-8 min-w-0">
        <div className="flex flex-col items-center justify-center relative min-w-[40px] sm:min-w-[60px] md:min-w-[90px] w-full md:w-auto">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-lime-200 text-lime-700 mb-2">
            ↑3
          </span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold text-white leading-none truncate">
            34
            <span className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-400 font-semibold mt-2">
              Deals
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center relative min-w-[40px] sm:min-w-[60px] md:min-w-[90px] w-full md:w-auto">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-200 text-red-700 mb-2">
            ↓2
          </span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold text-white leading-none truncate">
            20
            <span className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-400 font-semibold mt-2">
              Won
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center relative min-w-[40px] sm:min-w-[60px] md:min-w-[90px] w-full md:w-auto">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-200 text-red-700 mb-2">
            ↓1
          </span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold text-white leading-none truncate">
            3
            <span className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-400 font-semibold mt-2">
              Lost
            </span>
          </span>
        </div>
      </div>
      {/* Stats row for small screens, below workspace title */}
      <div className="flex w-full md:hidden justify-center items-center gap-2 mt-2 order-last">
        <div className="flex flex-col items-center justify-center min-w-[32px]">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-lime-200 text-lime-700 mb-1">
            ↑3
          </span>
          <span className="text-xs font-semibold text-black leading-none">
            34
            <span className="text-[10px] text-gray-400 font-semibold ml-1">
              Deals
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center min-w-[32px]">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-200 text-red-700 mb-1">
            ↓2
          </span>
          <span className="text-xs font-semibold text-black leading-none">
            20
            <span className="text-[10px] text-gray-400 font-semibold ml-1">
              Won
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center min-w-[32px]">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-200 text-red-700 mb-1">
            ↓1
          </span>
          <span className="text-xs font-semibold text-black leading-none">
            3
            <span className="text-[10px] text-gray-400 font-semibold ml-1">
              Lost
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceHeader;
