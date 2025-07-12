import React from "react";
import { Plus, ArrowRight, ArrowLeft } from "lucide-react";
import logo from '../assets/logo.png';

const WorkspaceHeader = () => {
  return (
    <section className="flex flex-wrap w-full mb-4 sm:mb-6 md:mb-8 lg:mb-4 justify-center px-1 sm:px-2 md:px-6 xl:px-12 min-h-[60px]">
      {/* Leftmost: Arrow Button */}
      <button className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 mt-1 xs:mt-2 sm:mt-4 md:mt-6 lg:mt-8 flex items-center justify-center rounded-full border-2 border-gray-300 bg-transparent mr-0 p-0">
        <span>
          <svg width="24" height="24" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-14 md:h-14">
            <circle cx="30.5" cy="30.5" r="30.5" fill="white"/>
            <path d="M41 31.75C41.4142 31.75 41.75 31.4142 41.75 31C41.75 30.5858 41.4142 30.25 41 30.25V31.75ZM23.4403 30.4697C23.1474 30.7626 23.1474 31.2374 23.4403 31.5303L28.2133 36.3033C28.5061 36.5962 28.981 36.5962 29.2739 36.3033C29.5668 36.0104 29.5668 35.5355 29.2739 35.2426L25.0313 31L29.2739 26.7574C29.5668 26.4645 29.5668 25.9896 29.2739 25.6967C28.981 25.4038 28.5061 25.4038 28.2133 25.6967L23.4403 30.4697ZM41 31V30.25L23.9706 30.25V31V31.75L41 31.75V31Z" fill="#6E829E"/>
          </svg>
        </span>
      </button>
      {/* Main: Workspace Title and Button */}
      <div className="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 ml-1 sm:ml-2 md:ml-4 min-w-0 w-full md:w-auto">
        <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight flex items-center font-manrope truncate max-w-[100px] xs:max-w-[140px] sm:max-w-[200px] md:max-w-[350px] lg:max-w-[500px]">
          <span className="inline-block align-middle mx-1">
            <svg width="120" height="28" viewBox="0 0 371 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-6 xs:w-10 xs:h-7 sm:w-20 sm:h-8 md:w-40 md:h-18 lg:w-60 lg:h-12">
              <path d="M43.7324 57H37.1442L28.3409 23.5475H29.0224L20.2191 57H13.6877L2.4422 16.3913H8.68969L18.0041 52.7403H16.3003L25.8987 16.3913H31.5782L41.1766 52.7403H39.6432L48.9008 16.3913H54.9211L43.7324 57ZM119.85 57H114V16.3913H129.164C131.777 16.3913 134.068 16.8835 136.036 17.868C138.005 18.8525 139.539 20.2345 140.637 22.0141C141.735 23.7936 142.284 25.8572 142.284 28.2048C142.284 30.5902 141.735 32.6727 140.637 34.4522C139.539 36.194 138.005 37.576 136.036 38.5983C134.068 39.5828 131.777 40.075 129.164 40.075H119.282V35.0202H129.164C131.398 35.0202 133.159 34.4144 134.446 33.2027C135.734 31.9911 136.377 30.3251 136.377 28.2048C136.377 26.0844 135.734 24.4373 134.446 23.2636C133.159 22.0519 131.398 21.4461 129.164 21.4461H119.85V57ZM146.146 57H138.876L124.848 38.0871H131.606L146.146 57ZM159.618 57H153.768V16.3913H159.618V57ZM186.595 57H178.36L158.311 35.9289H159.106L176.94 16.3913H184.38L165.297 36.7241V35.1338L186.595 57ZM189.246 50.4117L193.278 46.4361C194.376 47.7992 195.588 48.954 196.913 49.9006C198.238 50.8472 199.658 51.5666 201.173 52.0588C202.725 52.5132 204.334 52.7403 206 52.7403C208.916 52.7403 211.225 52.0967 212.929 50.8093C214.671 49.5219 215.542 47.8181 215.542 45.6977C215.542 43.7667 214.766 42.29 213.213 41.2677C211.661 40.2075 209.067 39.3745 205.432 38.7687C200.321 37.9736 196.61 36.6862 194.3 34.9066C192.029 33.127 190.893 30.6659 190.893 27.5232C190.893 25.1378 191.517 23.0553 192.767 21.2757C194.016 19.4583 195.758 18.0384 197.992 17.0161C200.226 15.9938 202.763 15.4826 205.603 15.4826C208.821 15.4826 211.756 16.0884 214.406 17.3C217.056 18.4738 219.385 20.2345 221.392 22.582L217.53 26.5577C215.864 24.5509 214.065 23.0553 212.134 22.0709C210.203 21.0864 208.026 20.5942 205.603 20.5942C202.914 20.5942 200.775 21.1811 199.185 22.3548C197.632 23.5286 196.856 25.1378 196.856 27.1824C196.856 28.8484 197.576 30.1547 199.014 31.1013C200.491 32.01 202.952 32.7484 206.398 33.3163C211.699 34.1493 215.542 35.5314 217.927 37.4624C220.313 39.3556 221.505 42.025 221.505 45.4705C221.505 47.8938 220.843 50.052 219.518 51.9452C218.23 53.8384 216.413 55.3151 214.065 56.3753C211.718 57.3976 209.01 57.9087 205.944 57.9087C202.612 57.9087 199.526 57.284 196.686 56.0345C193.846 54.7471 191.366 52.8729 189.246 50.4117ZM236.103 57H230.253V16.3913H245.417C248.03 16.3913 250.321 16.8835 252.289 17.868C254.258 18.8525 255.792 20.2345 256.89 22.0141C257.988 23.7936 258.537 25.8572 258.537 28.2048C258.537 30.5902 257.988 32.6727 256.89 34.4522C255.792 36.194 254.258 37.576 252.289 38.5983C250.321 39.5828 248.03 40.075 245.417 40.075H235.535V35.0202H245.417C247.651 35.0202 249.412 34.4144 250.699 33.2027C251.986 31.9911 252.63 30.3251 252.63 28.2048C252.63 26.0844 251.986 24.4373 250.699 23.2636C249.412 22.0519 247.651 21.4461 245.417 21.4461H236.103V57ZM288.092 46.7768H266.34V41.722H288.092V46.7768ZM295.816 57H289.569L276.165 20.3102H278.21L264.806 57H258.843L274.121 16.3913H280.482L295.816 57ZM329.766 46.2657L333.742 50.2414C332.038 52.6268 329.804 54.501 327.04 55.8641C324.314 57.2272 321.455 57.9087 318.464 57.9087C315.624 57.9087 312.993 57.3786 310.569 56.3185C308.184 55.2583 306.102 53.7816 304.322 51.8884C302.542 49.9574 301.16 47.7045 300.176 45.1298C299.191 42.555 298.699 39.7531 298.699 36.7241C298.699 33.6571 299.191 30.8363 300.176 28.2615C301.198 25.6868 302.599 23.4529 304.379 21.5597C306.158 19.6287 308.26 18.133 310.683 17.0729C313.106 16.0127 315.738 15.4826 318.578 15.4826C321.72 15.4826 324.579 16.1452 327.154 17.4704C329.766 18.7957 331.962 20.6888 333.742 23.15L329.766 27.1256C328.441 25.0431 326.813 23.4529 324.882 22.3548C322.989 21.2568 320.868 20.7078 318.521 20.7078C315.87 20.7078 313.504 21.4082 311.421 22.8092C309.377 24.1723 307.768 26.0465 306.594 28.4319C305.42 30.8173 304.833 33.5814 304.833 36.7241C304.833 39.791 305.42 42.5361 306.594 44.9594C307.768 47.3448 309.377 49.238 311.421 50.6389C313.504 52.002 315.87 52.6836 318.521 52.6836C320.868 52.6836 323.008 52.1345 324.939 51.0365C326.87 49.9006 328.479 48.3103 329.766 46.2657ZM367.973 57H341.847V16.3913H367.973V21.4461H347.697V51.9452H367.973V57ZM366.95 38.8255H347.129V33.7707H366.95V38.8255Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M81 22.2979C73.4325 22.2979 67.2979 28.4325 67.2979 36C67.2979 43.5675 73.4325 49.7021 81 49.7021C88.5675 49.7021 94.7021 43.5675 94.7021 36C94.7021 31.8764 92.8473 28.5208 90.4617 26.2945C90.0976 25.9547 90.0003 25.4069 90.2584 24.981L94.1818 18.5056C94.4878 18.0006 95.1638 17.8679 95.6194 18.2435C100.73 22.4554 104 28.8463 104 36C104 48.7025 93.7025 59 81 59C68.2975 59 58 48.7025 58 36C58 23.2975 68.2975 13 81 13C83.418 13 85.7563 13.3747 87.9555 14.0718C88.5194 14.2505 88.7747 14.8919 88.5149 15.4233L85.2993 22.001C85.0792 22.4511 84.5616 22.6607 84.0751 22.5408C83.0894 22.2979 82.3337 22.2979 81 22.2979Z" fill="url(#paint0_linear_172_753)"/>
              <defs>
                <linearGradient id="paint0_linear_172_753" x1="64.3617" y1="20.3404" x2="97.3936" y2="51.9043" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#CB122D"/>
                  <stop offset="1" stop-color="#FF8300"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>
        <button className="flex items-center gap-4 bg-blue-800 text-white p-1 px-4 sm:px-8 md:px-12 py-0.5 sm:py-1 md:py-2 rounded-full text-xs xs:text-sm sm:text-base md:text-lg font-semibold ml-1 sm:ml-2 md:ml-4 lg:ml-6 shadow font-manrope whitespace-nowrap">
          <span className="w-12 h-12 rounded-full bg-[#3e3b3b] flex items-center justify-center">
            <span className="text-2xl text-gray-300 font-bold">+</span>
          </span>
          <span className="ml-2 text-white font-semibold text-lg">New Task</span>
        </button>
      </div>
      {/* Right: Stats (hidden on small screens) */}
      <div className="hidden md:flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-8 lg:gap-16 ml-auto px-1 sm:px-2 md:px-4 pb-2 sm:pb-4 md:pb-6 lg:pb-8 min-w-0">
        <div className="flex flex-col items-center justify-center relative min-w-[40px] sm:min-w-[60px] md:min-w-[90px] w-full md:w-auto">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-lime-200 text-lime-700 mb-2">↑3</span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold text-black leading-none truncate">34<span className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-400 font-semibold mt-2">Deals</span></span>
        </div>
        <div className="flex flex-col items-center justify-center relative min-w-[40px] sm:min-w-[60px] md:min-w-[90px] w-full md:w-auto">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-200 text-red-700 mb-2">↓2</span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold text-black leading-none truncate">20<span className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-400 font-semibold mt-2">Won</span></span>
        </div>
        <div className="flex flex-col items-center justify-center relative min-w-[40px] sm:min-w-[60px] md:min-w-[90px] w-full md:w-auto">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-200 text-red-700 mb-2">↓1</span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold text-black leading-none truncate">3<span className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-400 font-semibold text-sm mt-2">Lost</span></span>
        </div>
      </div>
      {/* Stats row for small screens, below workspace title */}
      <div className="flex w-full md:hidden justify-center items-center gap-2 mt-2 order-last">
        <div className="flex flex-col items-center justify-center min-w-[32px]">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-lime-200 text-lime-700 mb-1">↑3</span>
          <span className="text-xs font-semibold text-blue-700 leading-none">34<span className="text-[10px] text-gray-400 font-semibold ml-1">Deals</span></span>
        </div>
        <div className="flex flex-col items-center justify-center min-w-[32px]">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-200 text-red-700 mb-1">↓2</span>
          <span className="text-xs font-semibold text-blue-700 leading-none">20<span className="text-[10px] text-gray-400 font-semibold ml-1">Won</span></span>
        </div>
        <div className="flex flex-col items-center justify-center min-w-[32px]">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-200 text-red-700 mb-1">↓1</span>
          <span className="text-xs font-semibold text-blue-700 leading-none">3<span className="text-[10px] text-gray-400 font-semibold ml-1">Lost</span></span>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceHeader; 