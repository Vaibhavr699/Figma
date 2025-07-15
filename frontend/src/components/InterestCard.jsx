import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";

const ProfileCard = ({
  name = "Darlene Robertson",
  title = "Financial Manager at Ford",
  avatar = "https://randomuser.me/api/portraits/men/32.jpg",
  index = 0, // passed from parent component
  hotLevel = 4, // from 1 to 5
}) => {
  // Determine source based on index
  const sources = index < 2 ? ["LinkedIn", "Facebook"] : ["Typeform"];

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[220px] sm:h-[270px] md:h-[280px] p-3 sm:p-5 bg-transparent overflow-hidden rounded-3xl transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:cursor-pointer">
      {/* Card SVG background */}
      <svg
        width="343"
        height="283"
        viewBox="0 0 343 283"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40C0 17.9086 17.9086 0 40 0H234C253.364 0 269.158 15.2888 269.967 34.4538L270 34.5C270 48.4089 279.661 71.0591 303.397 72H307C326.882 72 343 88.1177 343 108V243C343 265.091 325.091 283 303 283H40C17.9086 283 0 265.091 0 243V40Z"
          fill="white"
        />
      </svg>

      {/* Top-right icon */}
      <div className="absolute top-3 right-1 z-10">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gray-100 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-300 border border-gray-300">
          <ArrowUpRight size={28} className="text-[#2E4C73]" />
        </div>
      </div>

      {/* Avatar */}
      <div className="absolute left-4 sm:left-6 top-4 sm:top-6 z-10 md:top-10 lg:top-6">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 sm:w-13 sm:h-13 md:w-15 md:h-15 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-gray shadow"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-end h-full pl-2 pt-16 sm:pt-20 pr-1 sm:pr-2 pb-1 sm:pb-2 z-10 relative">
        <h2
          className="text-black mb-1 text-lg sm:text-xl md:text-2xl lg:text-2xl"
          style={{
            fontFamily: "Wix Madefor Text",
            fontWeight: 500,
            fontStyle: "normal",
            lineHeight: "100%",
            letterSpacing: 0,
          }}
        >
          {name}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#7B8FA1] mb-4 sm:mb-4 truncate">
          {title}
        </p>
        <div className="flex items-end justify-between w-full gap-2 sm:gap-4">
          {/* Source section */}
          <div>
            <p className="text-xs text-[#7B8FA1] mb-1">Source</p>
            <div className="flex gap-1 sm:gap-2">
              {sources.includes("LinkedIn") && (
                <button className="flex items-center gap-1 px-2 sm:px-3 py-1 text-xs sm:text-sm bg-[#F3F4F6] rounded-full text-[#7B8FA1] font-medium">
                  LinkedIn
                </button>
              )}
              {sources.includes("Facebook") && (
                <button className="flex items-center gap-1 px-2 sm:px-3 py-1 text-xs sm:text-sm bg-[#F3F4F6] rounded-full text-[#7B8FA1] font-medium">
                  Facebook
                </button>
              )}
              {sources.includes("Typeform") && (
                <button className="flex items-center gap-1 px-2 sm:px-3 py-1 text-xs sm:text-sm lg:text-sm bg-[#F3F4F6] rounded-full text-[#7B8FA1] font-medium">
                  Typeform
                </button>
              )}
            </div>
          </div>

          {/* Interest section */}
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center text-xs sm:text-sm text-[#FF7A00] font-semibold mb-1 lg:text-xs">
              {hotLevel === 4 && (
                <>
                  <span className="mr-1">🔥</span>Hot Client
                </>
              )}
              {hotLevel === 3 && <>High interest</>}
              {hotLevel === 2 && <>Medium interest</>}
            </div>

            <div className="flex gap-0.5 sm:gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`w-4 h-4 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 lg:w-2.5 lg:h-2.5 xl:w-3.5 xl:h-3.5 rounded-full border border-[#E0E0E0] ${
                    i === hotLevel
                      ? "bg-[#23243A]"
                      : i < hotLevel
                      ? "bg-[#FFB800]"
                      : "bg-[#E0E0E0]"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
