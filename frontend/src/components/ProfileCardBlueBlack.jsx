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
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-1 place-items-center">
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[260px] sm:h-[270px] md:h-[280px] p-4 bg-transparent shadow-md overflow-hidden rounded-3xl">
        {/* SVG Background */}
        <svg
          width="343"
          height="283"
          viewBox="0 0 343 283"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        >
          <path
            d="M0 40C0 17.9086 17.9086 0 40 0H234C253.364 0 269.158 15.2888 269.967 34.4538L270 34.5C270 48.4089 279.661 71.0591 303.397 72H307C326.882 72 343 88.1177 343 108V243C343 265.091 325.091 283 303 283H40C17.9086 283 0 265.091 0 243V40Z"
            fill="#847CAB"
          />
        </svg>

        {/* Top-right icon */}
        <div className="absolute top-3 right-3 z-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white shadow-sm">
            <ArrowUpRight size={20} className="text-[#2E4C73]" />
          </div>
        </div>

        {/* Avatar */}
        <div className="absolute left-4 sm:left-6 sm:py-4 sm:px-4 top-4 sm:top-6 md:top-10 z-10">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white shadow"
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-end h-full pt-20 sm:pt-26 sm:py-4 sm:px-4 md:pt-28 pl-2 pr-2 z-10 relative">
          <h2
            className="text-white mb-1 text-lg sm:text-xl md:text-2xl truncate"
            style={{
              fontFamily: "Wix Madefor Text",
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "26px",
              lineHeight: "100%",
              letterSpacing: 0,
            }}
          >
            {name}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white mb-2 sm:mb-3 truncate">
            {title}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-end w-full">
            {/* Source section */}
            <div>
              <p className="text-xs text-white mb-1">Source</p>
              <div className="flex flex-wrap gap-1">
                {sources.includes("LinkedIn") && (
                  <button className="flex items-center gap-1 px-2 py-1 text-xs sm:text-sm bg-[#F3F4F6] rounded-full text-[#7B8FA1] font-medium">
                    <FaLinkedin className="text-[#0077B5] w-4 h-4" />
                    LinkedIn
                  </button>
                )}
                {sources.includes("Facebook") && (
                  <button className="flex items-center gap-1 px-2 py-1 text-xs sm:text-sm bg-[#F3F4F6] rounded-full text-[#7B8FA1] font-medium">
                    <FaFacebookF className="text-[#4267B2] w-4 h-4" />
                    Facebook
                  </button>
                )}
                {sources.includes("Typeform") && (
                  <button className="flex items-center gap-1 px-2 py-1 text-xs sm:text-sm bg-[#F3F4F6] rounded-full text-[#7B8FA1] font-medium">
                    Typeform
                  </button>
                )}
              </div>
            </div>

            {/* Interest section */}
            <div className="flex flex-col items-start sm:items-end gap-1">
              <div className="flex items-center text-xs sm:text-sm text-[#FF7A00] font-semibold mb-1">
                {hotLevel === 4 && (
                  <>
                    <span className="mr-1">🔥</span>Hot Client
                  </>
                )}
                {hotLevel === 3 && <>High interest</>}
                {hotLevel === 2 && <>Medium interest</>}
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded-full border border-[#E0E0E0] ${
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
    </div>
  );
};

export default ProfileCard;
