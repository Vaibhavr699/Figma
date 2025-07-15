import React from "react";
import {
  Search,
  Filter,
  Calendar,
  Circle,
  ArrowRight,
  Bell,
  ArrowDown,
  ArrowUpRight,
  FileText,
  Video,
  MessageCircle,
} from "lucide-react";

const tasks = [
  {
    name: "Google Meet Call",
    person: "Peter Thomas",
    title: "CEO at Modera Ink",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    date: "28.03.2023",
    time: "2 pm",
    status: "Call scheduled",
    highlight: true,
  },
  {
    name: "Send Proposal",
    person: "Peter Thomas",
    title: "CEO Metamorphosis",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    amount: "$20,000",
    status: "Call scheduled",
    highlight: false,
  },
  {
    name: "Google Meet Call",
    person: "John Wilson",
    title: "Brand Manager at Summit Marketing",
    avatar: "https://randomuser.me/api/portraits/men/37.jpg",
    date: "28.03.2023",
    time: "8 pm",
    status: "Call scheduled",
    highlight: false,
  },
  {
    name: "Send Proposal",
    person: "Peter Thomas",
    title: "CEO Metamorphosis",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    amount: "$20,000",
    status: "Call scheduled",
    highlight: false,
  },
];

const YourDaysTasks = () => (
  <section className="md:ml-14 xl:ml-6 ml-6 font-madefor mt-4">
    <div className="mb-4  mt-2 flex flex-wrap items-center gap-2">
      <h2
        className="col-span-2 text-white row-span-1 text-lg md:text-xl lg:text-2xl font-bold font-madefor mr-2 whitespace-nowrap sm:col-auto sm:row-auto"
        style={{
          fontFamily: "Wix Madefor Text",
          fontWeight: 500,
          fontStyle: "normal",
          lineHeight: "100%",
          letterSpacing: "0",
        }}
      >
        Your Days Tasks
      </h2>
      <span
        className="col-span-1 row-span-1 text-base md:text-base lg:text-base font-semibold font-manrope underline underline-offset-4 decoration-2 decoration-black flex items-end justify-center items-center w-auto h-auto whitespace-nowrap sm:col-auto sm:row-auto"
        style={{ opacity: 1 }}
      >
        <span className="text-white">16 Tasks</span>
      </span>
      <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-200 bg-[#100C25] text-gray-500 hover:bg-gray-100 col-span-1 row-span-1 sm:col-auto sm:row-auto">
        <Search className="w-5 h-5" />
      </button>
      <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-200 bg-[#100C25] text-gray-500 hover:bg-gray-100 col-span-1 row-span-1 sm:col-auto sm:row-auto">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.05128 19.2308C2.05128 19.6556 2.39568 20 2.82051 20C3.24534 20 3.58974 19.6556 3.58974 19.2308L2.05128 19.2308ZM9.23077 19.2308C9.23077 19.6556 9.57518 20 10 20C10.4248 20 10.7692 19.6556 10.7692 19.2308L9.23077 19.2308ZM10.7692 10C10.7692 9.57518 10.4248 9.23077 10 9.23077C9.57518 9.23077 9.23077 9.57518 9.23077 10L10.7692 10ZM10.7692 0.769229C10.7692 0.344409 10.4248 -2.36303e-06 10 -2.34446e-06C9.57518 -2.32589e-06 9.23077 0.34441 9.23077 0.769229L10.7692 0.769229ZM3.58974 0.76923C3.58974 0.34441 3.24534 -2.04921e-06 2.82051 -2.03064e-06C2.39568 -2.01207e-06 2.05128 0.34441 2.05128 0.76923L3.58974 0.76923ZM16.4103 10C16.4103 10.4248 16.7547 10.7692 17.1795 10.7692C17.6043 10.7692 17.9487 10.4248 17.9487 10L16.4103 10ZM17.9487 0.769229C17.9487 0.344409 17.6043 -2.67686e-06 17.1795 -2.65829e-06C16.7547 -2.63972e-06 16.4103 0.344409 16.4103 0.769229L17.9487 0.769229ZM16.4103 19.2308C16.4103 19.6556 16.7547 20 17.1795 20C17.6043 20 17.9487 19.6556 17.9487 19.2308L16.4103 19.2308ZM3.58974 19.2308L3.58974 12.0513L2.05128 12.0513L2.05128 19.2308L3.58974 19.2308ZM10.7692 19.2308L10.7692 10L9.23077 10L9.23077 19.2308L10.7692 19.2308ZM10.7692 2.82051L10.7692 0.769229L9.23077 0.769229L9.23077 2.82051L10.7692 2.82051ZM3.58974 7.94872L3.58974 0.76923L2.05128 0.76923L2.05128 7.94872L3.58974 7.94872ZM17.9487 10L17.9487 0.769229L16.4103 0.769229L16.4103 10L17.9487 10ZM17.9487 19.2308L17.9487 17.1795L16.4103 17.1795L16.4103 19.2308L17.9487 19.2308ZM17.1795 13.8462C17.8876 13.8462 18.4615 14.4201 18.4615 15.1282L20 15.1282C20 13.5705 18.7372 12.3077 17.1795 12.3077L17.1795 13.8462ZM18.4615 15.1282C18.4615 15.8363 17.8876 16.4103 17.1795 16.4103L17.1795 17.9487C18.7372 17.9487 20 16.6859 20 15.1282L18.4615 15.1282ZM17.1795 16.4103C16.4714 16.4103 15.8974 15.8363 15.8974 15.1282L14.359 15.1282C14.359 16.6859 15.6217 17.9487 17.1795 17.9487L17.1795 16.4103ZM15.8974 15.1282C15.8974 14.4201 16.4714 13.8462 17.1795 13.8462L17.1795 12.3077C15.6217 12.3077 14.359 13.5705 14.359 15.1282L15.8974 15.1282ZM10 3.58974C10.7081 3.58974 11.2821 4.16369 11.2821 4.87179L12.8205 4.87179C12.8205 3.31405 11.5577 2.05128 10 2.05128L10 3.58974ZM11.2821 4.87179C11.2821 5.5799 10.7081 6.15385 10 6.15385L10 7.69231C11.5577 7.69231 12.8205 6.42954 12.8205 4.87179L11.2821 4.87179ZM10 6.15385C9.2919 6.15385 8.71795 5.5799 8.71795 4.87179L7.17949 4.87179C7.17949 6.42954 8.44226 7.69231 10 7.69231L10 6.15385ZM8.71795 4.87179C8.71795 4.16369 9.2919 3.58974 10 3.58974L10 2.05128C8.44226 2.05128 7.17949 3.31405 7.17949 4.87179L8.71795 4.87179ZM2.82051 8.71795C3.52857 8.71795 4.10256 9.2919 4.10256 10L5.64103 10C5.64103 8.44226 4.37824 7.17949 2.82051 7.17949L2.82051 8.71795ZM4.10256 10C4.10256 10.7081 3.52857 11.2821 2.82051 11.2821L2.82051 12.8205C4.37824 12.8205 5.64103 11.5577 5.64103 10L4.10256 10ZM2.82051 11.2821C2.11245 11.2821 1.53846 10.7081 1.53846 10L-4.37114e-07 10C-3.69023e-07 11.5577 1.26279 12.8205 2.82051 12.8205L2.82051 11.2821ZM1.53846 10C1.53846 9.2919 2.11245 8.71795 2.82051 8.71795L2.82051 7.17949C1.26279 7.17949 -5.05205e-07 8.44226 -4.37114e-07 10L1.53846 10Z"
            fill="#2E4C73"
          />
        </svg>
      </button>
      <button className="flex-shrink-0 px-3 py-1.5 min-w-[80px] sm:px-4 sm:py-2 sm:min-w-[100px] md:px-6 md:py-3 md:min-w-[60px] rounded-full bg-white border border-gray-200 text-[#2E4C73] font-semibold shadow-sm text-xs sm:text-sm md:text-base col-span-1 row-span-1 sm:col-auto sm:row-auto">
        All
      </button>
      <button className="flex-shrink-0 px-2 py-1 min-w-[80px] sm:px-4 sm:py-2 sm:min-w-[100px] md:px-6 md:py-3 md:min-w-[110px] rounded-full border border-gray-200 text-orange-500 font-semibold flex items-center gap-1 sm:gap-2 bg-[#100C25] text-xs sm:text-sm md:text-base col-span-1 row-span-1 sm:col-auto sm:row-auto">
        <span role="img" aria-label="fire" className="text-lg md:text-xl">
          🔥
        </span>
        Hot
      </button>
      <button className="flex-shrink-0 px-3 py-1.5 min-w-[80px] sm:px-4 sm:py-2 sm:min-w-[100px] md:px-6 md:py-3 md:min-w-[110px] rounded-full border border-gray-200 text-gray-500 font-semibold bg-[#100C25]text-xs sm:text-sm md:text-base col-span-1 row-span-1 sm:col-auto sm:row-auto">
        Due Today
      </button>
      <button className="flex-shrink-0 px-3 py-1.5 min-w-[80px] sm:px-4 sm:py-2 sm:min-w-[100px] md:px-6 md:py-3 md:min-w-[110px] rounded-full border border-gray-200 text-gray-500 font-semibold bg-[#100C25] text-xs sm:text-sm md:text-base col-span-1 row-span-1 sm:col-auto sm:row-auto">
        Over due
      </button>
      <button className="flex-shrink-0 px-3 py-1.5 min-w-[80px] sm:px-4 sm:py-2 sm:min-w-[100px] md:px-6 md:py-3 md:min-w-[110px] rounded-full border border-gray-200 text-gray-500 font-semibold bg-[#100C25] text-xs sm:text-sm md:text-base col-span-1 row-span-1 sm:col-auto sm:row-auto">
        Completed
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mb-4 place-items-center mt-4">
      {tasks.map((task, i) => {
        const isHighlight = i === 0 || task.highlight;
        return (
          <div
            key={i}
            className={`w-[472px] max-w-full rounded-3xl p-0 flex flex-col relative overflow-hidden transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg ${
              isHighlight ? "text-white" : "bg-[#100C25] text-gray-900"
            }`}
            style={{ minHeight: 260 }}
          >
            {/* SVG background for highlight */}
            {isHighlight ? (
              <svg
                width="462"
                height="354"
                viewBox="0 0 462 354"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full z-0 pointer-events-none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 44C0 19.6995 19.6995 0 44 0H277C300.126 0 320.864 12 320.864 40.5094C320.864 54 331.528 71.7995 355 74H418C442.301 74 462 93.6995 462 118V310C462 334.301 442.301 354 418 354H44C19.6995 354 0 334.301 0 310V44Z"
                  fill="#FFFFFF"
                />
              </svg>
            ) : (
              <svg
                width="462"
                height="354"
                viewBox="0 0 462 354"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full z-0 pointer-events-none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 44C0 19.6995 19.6995 0 44 0H277C300.126 0 320.864 12 320.864 40.5094C320.864 54 331.528 71.7995 355 74H418C442.301 74 462 93.6995 462 118V310C462 334.301 442.301 354 418 354H44C19.6995 354 0 334.301 0 310V44Z"
                  fill="#29263B"
                />
              </svg>
            )}
            {/* Top Row: Avatar, Name/Title, Bell, Arrow */}
            <div className="flex items-start justify-between px-2 pt-2 relative z-10">
              <div className="flex items-center gap-3">
                <img
                  src={task.avatar}
                  alt={task.person}
                  className="w-14 h-14 rounded-full border-4 border-white shadow object-cover"
                />
                <div className="flex flex-col">
                  <span
                    className={`text-base md:text-lg font-semibold leading-tight ${isHighlight ? "text-[#1C0A6B]" : "text-white"}`}
                    style={{
                      fontFamily: "Wix Madefor Text",
                      fontWeight: 500,
                      fontStyle: "Medium",

                      lineHeight: "100%",
                      letterSpacing: 0,
                    }}
                  >
                    {task.person}
                  </span>
                  <span
                    className={`text-xs  ${isHighlight ? "text-black" : "text-white"}`}
                  >
                    {task.title}
                  </span>
                </div>
              </div>
              <div className="flex top-0 right-0 xl:gap-4">
                <button
                  className={`w-11 h-11 flex items-center justify-center rounded-full border ${isHighlight ? "border-[#D3DAE2] bg-gray-50 text-[#2E4C73]" : "border-gray-200 bg-white text-gray-500"} shadow-sm`}
                >
                  <Bell className="w-5 h-5" />
                </button>
                <button
                  className={`w-11 h-11 flex items-center justify-center rounded-full border transition-all duration-200 ${isHighlight ? "border-[#D3DAE2] bg-gray-50 text-[#2E4C73]" : "border-gray-200 bg-white text-gray-500"} shadow-sm hover:bg-[#F3F6FA] hover:shadow-lg hover:scale-105`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Main Content: Icon, Task Name, Date/Amount */}
            <div className="flex items-center gap-4 px-6 pt-6 pb-2 relative z-10">
              <div
                className={`w-10 h-10   lg:w-14 lg:h-14 flex items-center justify-center rounded-full border ${isHighlight ? "border-white bg-white" : "border-#29263B bg-#29263B"}`}
              >
                {task.name === "Google Meet Call" ? (
                  <img
                    src="/src/assets/gmeet.png"
                    alt="Google Meet"
                    className="h-5 w-5 lg:w-7 lg:h-7"
                  />
                ) : (
                  <span
                    className={`w-14 h-14 ${isHighlight ? "text-black" : "text-white"}`}
                  >
                    <svg
                      width="54"
                      height="54"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="32"
                        cy="32"
                        r="31.35"
                        stroke="#ADB9C8"
                        stroke-opacity="0.5"
                        stroke-width="1.3"
                      />
                      <path
                        d="M37.4864 20.3462H28.3981C27.9764 20.3467 27.5722 20.5201 27.274 20.8282C26.9759 21.1364 26.8081 21.5541 26.8076 21.9899V27.6255C26.8081 28.0613 26.9759 28.4791 27.274 28.7873C27.5722 29.0954 27.9764 29.2687 28.3981 29.2693H37.4864C37.9081 29.2687 38.3123 29.0954 38.6104 28.7873C38.9086 28.4791 39.0763 28.0613 39.0768 27.6255V21.9899C39.0763 21.5541 38.9086 21.1364 38.6104 20.8282C38.3123 20.5201 37.9081 20.3467 37.4864 20.3462ZM35.6687 26.9211H30.2157C30.035 26.9211 29.8616 26.8469 29.7338 26.7148C29.6059 26.5826 29.5341 26.4035 29.5341 26.2166C29.5341 26.0298 29.6059 25.8506 29.7338 25.7185C29.8616 25.5864 30.035 25.5122 30.2157 25.5122H35.6687C35.8495 25.5122 36.0229 25.5864 36.1507 25.7185C36.2785 25.8506 36.3504 26.0298 36.3504 26.2166C36.3504 26.4035 36.2785 26.5826 36.1507 26.7148C36.0229 26.8469 35.8495 26.9211 35.6687 26.9211ZM35.6687 24.1033H30.2157C30.035 24.1033 29.8616 24.0291 29.7338 23.8969C29.6059 23.7648 29.5341 23.5857 29.5341 23.3988C29.5341 23.212 29.6059 23.0328 29.7338 22.9007C29.8616 22.7686 30.035 22.6944 30.2157 22.6944H35.6687C35.8495 22.6944 36.0229 22.7686 36.1507 22.9007C36.2785 23.0328 36.3504 23.212 36.3504 23.3988C36.3504 23.5857 36.2785 23.7648 36.1507 23.8969C36.0229 24.0291 35.8495 24.1033 35.6687 24.1033Z"
                        fill="#ADB9C8"
                      />
                      <path
                        d="M46.2651 19.2307H45.2736C44.8136 19.2312 44.3726 19.4036 44.0474 19.7099C43.7221 20.0163 43.5391 20.4316 43.5386 20.8649V36.7399C43.5386 36.8914 43.5908 37.0388 43.6872 37.16L45.1744 39.0277C45.2437 39.1146 45.3335 39.1852 45.4368 39.2338C45.5401 39.2823 45.6539 39.3076 45.7693 39.3076C45.8848 39.3076 45.9986 39.2823 46.1019 39.2338C46.2052 39.1852 46.295 39.1146 46.3643 39.0277L47.8515 37.16C47.9479 37.0388 48.0001 36.8914 48.0001 36.7399V20.8649C47.9996 20.4316 47.8166 20.0163 47.4913 19.7099C47.1661 19.4036 46.7251 19.2312 46.2651 19.2307ZM45.2736 20.6314H46.2651C46.3308 20.6315 46.3938 20.6561 46.4402 20.6999C46.4867 20.7437 46.5128 20.803 46.5129 20.8649V22.966H45.0258V20.8649C45.0258 20.803 45.052 20.7437 45.0984 20.6999C45.1449 20.6561 45.2079 20.6315 45.2736 20.6314ZM45.7693 37.4402L45.0258 36.5064V24.3667H46.5129V36.5064L45.7693 37.4402Z"
                        fill="#ADB9C8"
                      />
                      <path
                        d="M21.0667 46H37.6007C38.1486 45.9994 38.674 45.781 39.0614 45.3926C39.4489 45.0043 39.6668 44.4778 39.6674 43.9286V42.3175H40.3563C40.9043 42.3169 41.4296 42.0984 41.8171 41.7101C42.2045 41.3218 42.4225 40.7952 42.4231 40.246V19.0714C42.4225 18.5222 42.2045 17.9957 41.8171 17.6074C41.4296 17.219 40.9043 17.0006 40.3563 17H24.741C24.193 17.0006 23.6677 17.219 23.2802 17.6074C22.8927 17.9957 22.6748 18.5222 22.6742 19.0714V19.7619H21.0667C20.5188 19.7625 19.9935 19.9809 19.606 20.3693C19.2185 20.7576 19.0006 21.2841 19 21.8333V43.9286C19.0006 44.4778 19.2185 45.0043 19.606 45.3926C19.9935 45.781 20.5188 45.9994 21.0667 46ZM24.052 19.0714C24.0522 18.8884 24.1249 18.7129 24.254 18.5834C24.3832 18.454 24.5583 18.3812 24.741 18.381H40.3563C40.539 18.3812 40.7141 18.454 40.8433 18.5834C40.9724 18.7129 41.045 18.8884 41.0452 19.0714V40.246C41.045 40.4291 40.9724 40.6046 40.8433 40.7341C40.7141 40.8635 40.539 40.9363 40.3563 40.9365H24.741C24.5583 40.9363 24.3832 40.8635 24.254 40.7341C24.1249 40.6046 24.0522 40.4291 24.052 40.246V19.0714ZM20.3778 21.8333C20.378 21.6503 20.4507 21.4748 20.5798 21.3453C20.709 21.2159 20.8841 21.1431 21.0667 21.1429H22.6742V40.246C22.6748 40.7952 22.8927 41.3218 23.2802 41.7101C23.6677 42.0984 24.193 42.3169 24.741 42.3175H38.2896V43.9286C38.2894 44.1116 38.2167 44.2871 38.0876 44.4166C37.9584 44.546 37.7833 44.6188 37.6007 44.619H21.0667C20.8841 44.6188 20.709 44.546 20.5798 44.4166C20.4507 44.2871 20.378 44.1116 20.3778 43.9286V21.8333Z"
                        fill="#ADB9C8"
                      />
                      <path
                        d="M28.6401 34.8461H37.2445C37.4347 34.8461 37.6171 34.7873 37.7515 34.6828C37.886 34.5782 37.9616 34.4363 37.9616 34.2884C37.9616 34.1405 37.886 33.9986 37.7515 33.8941C37.6171 33.7895 37.4347 33.7307 37.2445 33.7307H28.6401C28.45 33.7307 28.2676 33.7895 28.1331 33.8941C27.9986 33.9986 27.9231 34.1405 27.9231 34.2884C27.9231 34.4363 27.9986 34.5782 28.1331 34.6828C28.2676 34.7873 28.45 34.8461 28.6401 34.8461Z"
                        fill="#ADB9C8"
                      />
                      <path
                        d="M36.1574 35.9615H29.7275C29.5448 35.9615 29.3695 36.0791 29.2404 36.2882C29.1112 36.4974 29.0386 36.7811 29.0386 37.0769C29.0386 37.3728 29.1112 37.6565 29.2404 37.8656C29.3695 38.0748 29.5448 38.1923 29.7275 38.1923H36.1574C36.3401 38.1923 36.5153 38.0748 36.6445 37.8656C36.7737 37.6565 36.8463 37.3728 36.8463 37.0769C36.8463 36.7811 36.7737 36.4974 36.6445 36.2882C36.5153 36.0791 36.3401 35.9615 36.1574 35.9615Z"
                        fill="#ADB9C8"
                      />
                    </svg>
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <h3
                  className={`text-base lg:text-2xl font-bold mb-1 ${isHighlight ? "text-black" : "text-white"}`}
                >
                  {task.name}
                </h3>
                {task.date && task.time && (
                  <div className="flex items-center gap-2 text-base font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar
                        className={`w-5 h-5 ${isHighlight ? "text-black" : "text-[#FFFFFF]"}`}
                      />
                      <span className={`w-5 h-5 ${isHighlight ? "text-black" : "text-[#FFFFFF]"}`}>{task.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Circle
                        className={`w-2 h-2 ${isHighlight ? "" : "text-[#FF8300]"}`}
                        fill={isHighlight ? "white" : "#FF8300"}
                      />
                      <span className="text-white">{task.time}</span>
                    </span>
                  </div>
                )}
                {task.amount && (
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-base ${isHighlight ? "text-black" : "text-[#B0B7C3]"}`}
                    >
                      Amount
                    </span>
                    <span
                      className={`text-lg font-semibold ${isHighlight ? "text-black" : "text-white"}`}
                    >
                      {task.amount}
                    </span>
                  </div>
                )}
              </div>
            </div>
            {/* Status Label */}
            <div className="px-4 pt-2 relative z-10">
              <span
                className={`text-[12px] font-normal ${isHighlight ? "text-white" : "text-[#444343]"} transition-colors duration-200 hover:text-[#2E4C73] hover:underline cursor-pointer`}
              >
                Status
              </span>
            </div>
            {/* Status Row: Avatar, Status, Dropdown, Action Buttons */}
            <div className="flex items-center justify-between md:gap-1 px-4 py-2 relative z-10">
              <div
                className={`flex items-center gap-3 rounded-full border px-2 py-1 lg:px-4 lg:py-2 ${
                  isHighlight
                    ? "bg-orange-100/30 border-orange-200"
                    : "bg-white border-gray-200"
                }`}
              >
                <img
                  src={task.avatar}
                  alt={task.person}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <span
                  className={`text-sm font-medium ${isHighlight ? "text-white" : "text-gray-900"}`}
                >
                  {task.status}
                </span>
                <svg
                  width="13"
                  height="7"
                  viewBox="0 0 13 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-2 md:hidden lg:flex ${
                    isHighlight
                      ? "text-white fill-white"
                      : "text-gray-400 fill-gray-400"
                  }`}
                >
                  <path d="M6.12543 6.99999C6.01034 7.00065 5.89624 6.97859 5.78969 6.93507C5.68314 6.89155 5.58622 6.82742 5.5045 6.74637L0.257198 1.49906C0.092517 1.33438 0 1.11102 0 0.878129C0 0.645235 0.092517 0.421879 0.257198 0.257198C0.421879 0.092517 0.645235 0 0.878129 0C1.11102 0 1.33438 0.092517 1.49906 0.257198L6.12543 4.89232L10.7518 0.265944C10.9191 0.122669 11.1343 0.0478021 11.3544 0.0563037C11.5745 0.0648054 11.7833 0.15605 11.9391 0.311803C12.0948 0.467555 12.1861 0.676345 12.1946 0.896448C12.2031 1.11655 12.1282 1.33176 11.9849 1.49906L6.73762 6.74637C6.57473 6.90793 6.35486 6.99902 6.12543 6.99999Z" />
                </svg>
              </div>

              <div className="flex gap-2 items-center">
                {/* Message button on all cards, orange for first two, white for rest */}
                <button
                  className={`w-12 h-12 flex items-center justify-center rounded-full border ${
                    i === 0 || i === 1
                      ? "bg-orange-500 border-orange-300 text-orange-600"
                      : "bg-white border-gray text-orange-600"
                  }`}
                >
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 61 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="30.5"
                      cy="30.5"
                      r="29.85"
                      stroke="white"
                      strokeOpacity="0.24"
                      strokeWidth="1.3"
                    />
                    <mask
                      id="mask0_172_544"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="22"
                      y="22"
                      width="18"
                      height="18"
                    >
                      <path d="M22 22H40V40H22V22Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_172_544)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.9286 24.8929C23.5735 24.8929 23.2857 25.1807 23.2857 25.5357V36.4643C23.2857 36.8193 23.5735 37.1072 23.9286 37.1072H38.0714C38.4264 37.1072 38.7143 36.8193 38.7143 36.4643V25.5357C38.7143 25.1807 38.4264 24.8929 38.0714 24.8929H23.9286ZM22 25.5357C22 24.4706 22.8635 23.6072 23.9286 23.6072H38.0714C39.1365 23.6072 40 24.4706 40 25.5357V36.4643C40 37.5294 39.1365 38.3929 38.0714 38.3929H23.9286C22.8635 38.3929 22 37.5294 22 36.4643V25.5357Z"
                        fill={i === 0 || i === 1 ? "#FFD5BA" : "#FF8300"}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.1538 25.4398C22.3843 25.1697 22.79 25.1376 23.0601 25.3681L30.591 31.7937C30.7062 31.8887 30.8507 31.9406 31 31.9406C31.1493 31.9406 31.2939 31.8887 31.409 31.7937L38.9399 25.3681C39.2099 25.1376 39.6157 25.1697 39.8462 25.4398C40.0766 25.7099 40.0445 26.1157 39.7744 26.3461L32.2343 32.7797C31.8878 33.0683 31.451 33.2263 31 33.2263C30.549 33.2263 30.1123 33.0683 29.7657 32.7796L29.7599 32.7747L22.2256 26.3461C21.9555 26.1157 21.9234 25.7099 22.1538 25.4398Z"
                        fill={i === 0 || i === 1 ? "#FFD5BA" : "#FF8300"}
                      />
                    </g>
                  </svg>
                </button>

                {/* Video button on card 1 & 3 */}
                {(i === 0 || i === 2) && (
                  <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#CB122D] border border-white text-white">
                    <svg
                      width="61"
                      height="61"
                      viewBox="0 0 61 61"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="30.5" cy="30.5" r="30.5" fill="#CB122D" />
                      <path
                        d="M41.1311 25.0385C40.8711 24.911 40.5804 24.8609 40.2931 24.8939C40.0058 24.9269 39.7338 25.0416 39.5089 25.2248L36.8891 27.3348V26.8829C36.9491 26.3614 36.8912 25.833 36.7198 25.3372C36.5484 24.8414 36.2679 24.3911 35.8992 24.0199C35.5305 23.6486 35.0833 23.3662 34.5909 23.1936C34.0985 23.021 33.5738 22.9627 33.0559 23.0232H23.8562C23.3383 22.9627 22.8135 23.021 22.3211 23.1936C21.8288 23.3662 21.3815 23.6486 21.0128 24.0199C20.6442 24.3911 20.3636 24.8414 20.1922 25.3372C20.0208 25.833 19.963 26.3614 20.023 26.8829V35.1171C19.963 35.6386 20.0208 36.167 20.1922 36.6628C20.3636 37.1586 20.6442 37.6089 21.0128 37.9801C21.3815 38.3514 21.8288 38.6338 22.3211 38.8064C22.8135 38.979 23.3383 39.0373 23.8562 38.9768H33.0559C33.5738 39.0373 34.0985 38.979 34.5909 38.8064C35.0833 38.6338 35.5305 38.3514 35.8992 37.9801C36.2679 37.6089 36.5484 37.1586 36.7198 36.6628C36.8912 36.167 36.9491 35.6386 36.8891 35.1171V34.6652L39.5089 36.7752C39.7792 36.9951 40.1162 37.115 40.4636 37.1149C40.6947 37.1146 40.9228 37.0622 41.1311 36.9615C41.3922 36.8363 41.6126 36.6389 41.7665 36.3923C41.9203 36.1457 42.0013 35.8601 42 35.5689V26.4311C42.0013 26.1399 41.9203 25.8543 41.7665 25.6077C41.6126 25.3611 41.3922 25.1637 41.1311 25.0385ZM35.3558 35.1171C35.3558 36.7402 34.6678 37.4329 33.0559 37.4329H23.8562C22.2442 37.4329 21.5563 36.7402 21.5563 35.1171V26.8829C21.5563 25.2598 22.2442 24.5671 23.8562 24.5671H33.0559C34.6678 24.5671 35.3558 25.2598 35.3558 26.8829V35.1171ZM40.4667 35.57L36.8891 32.688V29.312L40.4667 26.43V35.57Z"
                        fill="#FFD3D9"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default YourDaysTasks;
