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
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[220px] sm:h-[270px] md:h-[280px] p-3 sm:p-5 bg-transparent shadow-md overflow-hidden rounded-3xl">
      {/* Card SVG background */}
      <svg width="343" height="283" viewBox="0 0 343 283" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <path d="M0 40C0 17.9086 17.9086 0 40 0H234C253.364 0 269.158 15.2888 269.967 34.4538L270 34.5C270 48.4089 279.661 71.0591 303.397 72H307C326.882 72 343 88.1177 343 108V243C343 265.091 325.091 283 303 283H40C17.9086 283 0 265.091 0 243V40Z" fill="white"/>
      </svg>

      {/* Top-right icon */}
      <div className="absolute top-3 right-1 z-10">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white shadow-sm">
          <ArrowUpRight size={20} className="text-[#2E4C73]" />
        </div>
      </div>

      {/* Avatar */}
      <div className="absolute left-4 sm:left-6 top-4 sm:top-6 z-10 md:top-14">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white shadow"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-end h-full pl-1 sm:pl-2 pt-16 sm:pt-20 pr-1 sm:pr-2 pb-1 sm:pb-2 z-10 relative">
        <h2
          className="text-black mb-1 text-lg sm:text-xl md:text-2xl lg:text-3xl"
          style={{
            fontFamily: 'Wix Madefor Text',
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: '26px',
            lineHeight: '100%',
            letterSpacing: 0,
          }}
        >
          {name}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#7B8FA1] mb-2 sm:mb-4">{title}</p>
        <div className="flex items-end justify-between w-full gap-2 sm:gap-4">
          {/* Source section */}
          <div>
            <p className="text-xs text-[#7B8FA1] mb-1">Source</p>
            <div className="flex gap-1 sm:gap-2">
              {sources.includes("LinkedIn") && (
                <button className="flex items-center gap-1 px-2 sm:px-3 py-1 text-xs sm:text-sm bg-[#F3F4F6] rounded-full text-[#7B8FA1] font-medium">
                  <FaLinkedin className="text-[#0077B5] w-4 h-4" />
                  LinkedIn
                </button>
              )}
              {sources.includes("Facebook") && (
                <button className="flex items-center gap-1 px-2 sm:px-3 py-1 text-xs sm:text-sm bg-[#F3F4F6] rounded-full text-[#7B8FA1] font-medium">Facebook</button>
              )}
              {sources.includes("Typeform") && (
                <button className="flex items-center gap-1 px-2 sm:px-3 py-1 text-xs sm:text-sm bg-[#F3F4F6] rounded-full text-[#7B8FA1] font-medium">Typeform</button>
              )}
            </div>
          </div>
          {/* Interest section */}
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center text-xs sm:text-sm text-[#FF7A00] font-semibold mb-1">
              {hotLevel === 4 && <><span className="mr-1">🔥</span>Hot Client</>}
              {hotLevel === 3 && <>High interest</>}
              {hotLevel === 2 && <>Medium interest</>}
            </div>
            <div className="flex gap-0.5 sm:gap-1">
              {[1,2,3,4,5].map((i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full border border-[#E0E0E0] ${
                    i === hotLevel ? 'bg-[#23243A]' : i < hotLevel ? 'bg-[#FFB800]' : 'bg-[#E0E0E0]'
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
