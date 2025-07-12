import React from "react";
import { Search, Filter, Calendar, Circle, ArrowRight, Bell, ArrowDown, ArrowUpRight, FileText, Video, MessageCircle } from "lucide-react";

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
  <section className="font-madefor">
    <div className="mb-4 sm:mb-8 mt-2 grid grid-cols-3 grid-rows-2 gap-2 sm:flex sm:flex-row sm:flex-nowrap sm:items-center sm:gap-4 sm:overflow-x-auto">
      <h2
        className="col-span-2 row-span-1 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-madefor mr-2 whitespace-nowrap sm:col-auto sm:row-auto"
        style={{
          fontFamily: 'Wix Madefor Text',
          fontWeight: 500,
          fontStyle: 'normal',
          lineHeight: '100%',
          letterSpacing: '0',
        }}
      >
        Your Days Tasks
      </h2>
      <span
        className="col-span-1 row-span-1 text-xs xs:text-sm sm:text-base md:text-lg font-semibold font-manrope underline underline-offset-4 decoration-2 decoration-black flex items-end justify-center items-center w-auto h-auto whitespace-nowrap sm:col-auto sm:row-auto"
        style={{ opacity: 1 }}
      >
        <span className="text-black">16 Tasks</span>
      </span>
      <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 col-span-1 row-span-1 sm:col-auto sm:row-auto"><Search className="w-5 h-5" /></button>
      <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 col-span-1 row-span-1 sm:col-auto sm:row-auto">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.05128 19.2308C2.05128 19.6556 2.39568 20 2.82051 20C3.24534 20 3.58974 19.6556 3.58974 19.2308L2.05128 19.2308ZM9.23077 19.2308C9.23077 19.6556 9.57518 20 10 20C10.4248 20 10.7692 19.6556 10.7692 19.2308L9.23077 19.2308ZM10.7692 10C10.7692 9.57518 10.4248 9.23077 10 9.23077C9.57518 9.23077 9.23077 9.57518 9.23077 10L10.7692 10ZM10.7692 0.769229C10.7692 0.344409 10.4248 -2.36303e-06 10 -2.34446e-06C9.57518 -2.32589e-06 9.23077 0.34441 9.23077 0.769229L10.7692 0.769229ZM3.58974 0.76923C3.58974 0.34441 3.24534 -2.04921e-06 2.82051 -2.03064e-06C2.39568 -2.01207e-06 2.05128 0.34441 2.05128 0.76923L3.58974 0.76923ZM16.4103 10C16.4103 10.4248 16.7547 10.7692 17.1795 10.7692C17.6043 10.7692 17.9487 10.4248 17.9487 10L16.4103 10ZM17.9487 0.769229C17.9487 0.344409 17.6043 -2.67686e-06 17.1795 -2.65829e-06C16.7547 -2.63972e-06 16.4103 0.344409 16.4103 0.769229L17.9487 0.769229ZM16.4103 19.2308C16.4103 19.6556 16.7547 20 17.1795 20C17.6043 20 17.9487 19.6556 17.9487 19.2308L16.4103 19.2308ZM3.58974 19.2308L3.58974 12.0513L2.05128 12.0513L2.05128 19.2308L3.58974 19.2308ZM10.7692 19.2308L10.7692 10L9.23077 10L9.23077 19.2308L10.7692 19.2308ZM10.7692 2.82051L10.7692 0.769229L9.23077 0.769229L9.23077 2.82051L10.7692 2.82051ZM3.58974 7.94872L3.58974 0.76923L2.05128 0.76923L2.05128 7.94872L3.58974 7.94872ZM17.9487 10L17.9487 0.769229L16.4103 0.769229L16.4103 10L17.9487 10ZM17.9487 19.2308L17.9487 17.1795L16.4103 17.1795L16.4103 19.2308L17.9487 19.2308ZM17.1795 13.8462C17.8876 13.8462 18.4615 14.4201 18.4615 15.1282L20 15.1282C20 13.5705 18.7372 12.3077 17.1795 12.3077L17.1795 13.8462ZM18.4615 15.1282C18.4615 15.8363 17.8876 16.4103 17.1795 16.4103L17.1795 17.9487C18.7372 17.9487 20 16.6859 20 15.1282L18.4615 15.1282ZM17.1795 16.4103C16.4714 16.4103 15.8974 15.8363 15.8974 15.1282L14.359 15.1282C14.359 16.6859 15.6217 17.9487 17.1795 17.9487L17.1795 16.4103ZM15.8974 15.1282C15.8974 14.4201 16.4714 13.8462 17.1795 13.8462L17.1795 12.3077C15.6217 12.3077 14.359 13.5705 14.359 15.1282L15.8974 15.1282ZM10 3.58974C10.7081 3.58974 11.2821 4.16369 11.2821 4.87179L12.8205 4.87179C12.8205 3.31405 11.5577 2.05128 10 2.05128L10 3.58974ZM11.2821 4.87179C11.2821 5.5799 10.7081 6.15385 10 6.15385L10 7.69231C11.5577 7.69231 12.8205 6.42954 12.8205 4.87179L11.2821 4.87179ZM10 6.15385C9.2919 6.15385 8.71795 5.5799 8.71795 4.87179L7.17949 4.87179C7.17949 6.42954 8.44226 7.69231 10 7.69231L10 6.15385ZM8.71795 4.87179C8.71795 4.16369 9.2919 3.58974 10 3.58974L10 2.05128C8.44226 2.05128 7.17949 3.31405 7.17949 4.87179L8.71795 4.87179ZM2.82051 8.71795C3.52857 8.71795 4.10256 9.2919 4.10256 10L5.64103 10C5.64103 8.44226 4.37824 7.17949 2.82051 7.17949L2.82051 8.71795ZM4.10256 10C4.10256 10.7081 3.52857 11.2821 2.82051 11.2821L2.82051 12.8205C4.37824 12.8205 5.64103 11.5577 5.64103 10L4.10256 10ZM2.82051 11.2821C2.11245 11.2821 1.53846 10.7081 1.53846 10L-4.37114e-07 10C-3.69023e-07 11.5577 1.26279 12.8205 2.82051 12.8205L2.82051 11.2821ZM1.53846 10C1.53846 9.2919 2.11245 8.71795 2.82051 8.71795L2.82051 7.17949C1.26279 7.17949 -5.05205e-07 8.44226 -4.37114e-07 10L1.53846 10Z" fill="#2E4C73"/>
        </svg>
      </button>
      <button className="flex-shrink-0 px-3 py-1.5 min-w-[80px] sm:px-4 sm:py-2 sm:min-w-[100px] md:px-6 md:py-3 md:min-w-[110px] rounded-full bg-white border border-gray-200 text-[#2E4C73] font-semibold shadow-sm text-xs sm:text-sm md:text-base col-span-1 row-span-1 sm:col-auto sm:row-auto">All</button>
      <button className="flex-shrink-0 px-3 py-1.5 min-w-[80px] sm:px-4 sm:py-2 sm:min-w-[100px] md:px-6 md:py-3 md:min-w-[110px] rounded-full border  text-orange-500 font-semibold flex items-center gap-1 sm:gap-2 bg-orange-50 text-xs sm:text-sm md:text-base col-span-1 row-span-1 sm:col-auto sm:row-auto"><span role='img' aria-label='fire' className="text-lg sm:text-xl md:text-2xl">🔥</span>Hot</button>
      <button className="flex-shrink-0 px-3 py-1.5 min-w-[80px] sm:px-4 sm:py-2 sm:min-w-[100px] md:px-6 md:py-3 md:min-w-[110px] rounded-full border border-gray-200 text-gray-500 font-semibold bg-white text-xs sm:text-sm md:text-base col-span-1 row-span-1 sm:col-auto sm:row-auto">Due Today</button>
      <button className="flex-shrink-0 px-3 py-1.5 min-w-[80px] sm:px-4 sm:py-2 sm:min-w-[100px] md:px-6 md:py-3 md:min-w-[110px] rounded-full border border-gray-200 text-gray-500 font-semibold bg-white text-xs sm:text-sm md:text-base col-span-1 row-span-1 sm:col-auto sm:row-auto">Over due</button>
      <button className="flex-shrink-0 px-3 py-1.5 min-w-[80px] sm:px-4 sm:py-2 sm:min-w-[100px] md:px-6 md:py-3 md:min-w-[110px] rounded-full border border-gray-200 text-gray-500 font-semibold bg-white text-xs sm:text-sm md:text-base col-span-1 row-span-1 sm:col-auto sm:row-auto">Completed</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
      {tasks.map((task, i) => {
        const isHighlight = i === 0 || task.highlight;
        return (
          <div
            key={i}
            className={`w-[472px] max-w-full rounded-3xl shadow p-0 flex flex-col relative overflow-hidden ${isHighlight ? "text-white" : "bg-gray-100 text-gray-900"}`}
            style={{ minHeight: 260 }}
          >
            {/* SVG background for highlight */}
            {isHighlight ? (
              <svg width="462" height="354" viewBox="0 0 462 354" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full z-0 pointer-events-none" preserveAspectRatio="none">
                <path d="M0 44C0 19.6995 19.6995 0 44 0H277C300.126 0 320.864 12 320.864 40.5094C320.864 54 331.528 71.7995 355 74H418C442.301 74 462 93.6995 462 118V310C462 334.301 442.301 354 418 354H44C19.6995 354 0 334.301 0 310V44Z" fill="#160ACB"/>
              </svg>
            ) : (
              <svg width="462" height="354" viewBox="0 0 462 354" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full z-0 pointer-events-none" preserveAspectRatio="none">
                <path d="M0 44C0 19.6995 19.6995 0 44 0H277C300.126 0 320.864 12 320.864 40.5094C320.864 54 331.528 71.7995 355 74H418C442.301 74 462 93.6995 462 118V310C462 334.301 442.301 354 418 354H44C19.6995 354 0 334.301 0 310V44Z" fill="white"/>
              </svg>
            )}
            {/* Top Row: Avatar, Name/Title, Bell, Arrow */}
            <div className="flex items-start justify-between px-2 pt-2 relative z-10">
              <div className="flex items-center gap-3">
                <img src={task.avatar} alt={task.person} className="w-12 h-14 rounded-full border-4 border-white shadow object-cover" />
                <div className="flex flex-col">
                  <span className={`text-lg font-semibold leading-tight ${isHighlight ? "text-white" : "text-gray-900"}`}
                    style={{
                      fontFamily: 'Wix Madefor Text',
                      fontWeight: 500,
                      fontStyle: 'Medium',
                      fontSize: '26px',
                      lineHeight: '100%',
                      letterSpacing: 0,
                    }}
                  >{task.person}</span>
                  <span className={`text-sm ${isHighlight ? "text-orange-100" : "text-[#7B8FA1]"}`}>{task.title}</span>
                </div>
              </div>
              <div className="flex">
                <button className={`w-11 h-11 flex items-center justify-center rounded-full border ${isHighlight ? "border-[#D3DAE2] bg-white text-[#2E4C73]" : "border-gray-200 bg-white text-gray-500"} shadow-sm`}><Bell className="w-5 h-5" /></button>
                <button className={`w-11 h-11 flex items-center justify-center rounded-full border ${isHighlight ? "border-[#D3DAE2] bg-white text-[#2E4C73]" : "border-gray-200 bg-white text-gray-500"} shadow-sm`}><ArrowUpRight className="w-5 h-5" /></button>
              </div>
            </div>
            {/* Main Content: Icon, Task Name, Date/Amount */}
            <div className="flex items-center gap-4 px-6 pt-6 pb-2 relative z-10">
              <div className={`w-14 h-14 flex items-center justify-center rounded-full border ${isHighlight ? "border-orange-200 bg-orange-100/30" : "border-gray-200 bg-white"}`}>
                {task.name === "Google Meet Call" ? (
                  <img src="/src/assets/gmeet.png" alt="Google Meet" className="w-7 h-7" />
                ) : (
                  <FileText className={`w-7 h-7 ${isHighlight ? "text-white" : "text-gray-400"}`} />
                )}
              </div>
              <div className="flex flex-col">
                <h3 className={`text-2xl font-bold mb-1 ${isHighlight ? "text-white" : "text-gray-900"}`}>{task.name}</h3>
                {task.date && task.time && (
                  <div className="flex items-center gap-2 text-base font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className={`w-5 h-5 ${isHighlight ? "text-white" : "text-[#FF8300]"}`} />
                      <span>{task.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Circle className={`w-2 h-2 ${isHighlight ? "text-white" : "text-[#FF8300]"}`} fill={isHighlight ? "white" : "#FF8300"} />
                      <span>{task.time}</span>
                    </span>
                  </div>
                )}
                {task.amount && (
                  <div className="flex items-center gap-2">
                    <span className={`text-base ${isHighlight ? "text-orange-100" : "text-[#B0B7C3]"}`}>Amount</span>
                    <span className={`text-lg font-semibold ${isHighlight ? "text-white" : "text-gray-900"}`}>{task.amount}</span>
                  </div>
                )}
              </div>
            </div>
            {/* Status Row: Avatar, Status, Dropdown, Action Buttons */}
            <div className="flex items-center justify-between px-6 pb-6 pt-2 relative z-10">
              <div className={`flex items-center gap-3 rounded-full border px-4 py-2 ${isHighlight ? "bg-orange-100/30" : "bg-white border-gray-200"}`}>
                <img src={task.avatar} alt={task.person} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <span className={`text-base font-medium ${isHighlight ? "text-white" : "text-gray-900"}`}>{task.status}</span>
                <ArrowDown className={`w-4 h-4 ${isHighlight ? "text-white" : "text-gray-400"}`} />
              </div>
              <div className="flex gap-2">
                <button className={`w-14 h-14 flex items-center justify-center rounded-full ${isHighlight ? "bg-white/20 border border-white text-white" : "bg-gray-100 border border-gray-200 text-gray-500"}`}>
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 1.93023C5.84937 1.93023 1.93023 5.72391 1.93023 10.3368C1.93023 12.5576 2.83313 14.5796 4.31706 16.0865C4.76922 16.5456 5.15877 17.2615 5.005 18.0764L5.00477 18.0776C4.90571 18.5977 4.73715 19.0993 4.50511 19.5682C5.35738 19.5481 6.20118 19.3277 6.95781 18.9253L6.9724 18.9176C7.1765 18.809 7.35092 18.7162 7.49307 18.6487C7.63056 18.5834 7.80217 18.5094 7.988 18.481C8.16891 18.4534 8.34474 18.4698 8.491 18.4899C8.63717 18.5099 8.81604 18.5435 9.02057 18.5819L9.03735 18.585C9.60181 18.6911 10.1747 18.7442 10.749 18.7434C15.6497 18.7434 19.5697 14.9498 19.5697 10.3368C19.5697 5.72391 15.6505 1.93023 10.75 1.93023ZM0.5 10.3368C0.5 4.87495 5.11986 0.5 10.75 0.5C16.38 0.5 21 4.87495 21 10.3368C21 15.7987 16.38 20.1736 10.75 20.1736C10.7497 20.1736 10.7503 20.1736 10.75 20.1736C10.0865 20.1745 9.42494 20.1131 8.77342 19.9908C8.54726 19.9482 8.40357 19.9215 8.29659 19.9069C8.25034 19.9005 8.22164 19.8981 8.20591 19.8971C8.21544 19.8935 8.21973 19.8922 8.21964 19.892C8.21964 19.8919 8.21382 19.8933 8.20391 19.8948C8.19561 19.8961 8.19065 19.8964 8.19065 19.8965C8.19065 19.8966 8.19523 19.8965 8.20591 19.8971C8.18979 19.9033 8.15833 19.9161 8.10667 19.9407C7.99748 19.9926 7.85202 20.0697 7.62935 20.1881C6.26422 20.9141 4.67155 21.1716 3.13541 20.8858C2.88735 20.8397 2.68196 20.6662 2.59493 20.4295C2.50792 20.1926 2.55213 19.9275 2.7113 19.7317C3.15735 19.1831 3.46403 18.5221 3.59967 17.8107C3.63637 17.6151 3.55332 17.3493 3.29801 17.0901C1.56764 15.3329 0.5 12.9567 0.5 10.3368Z" fill="#6E829E"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.98242 10.75C5.98242 10.2234 6.40932 9.79651 6.93591 9.79651H6.94446C7.47106 9.79651 7.89795 10.2234 7.89795 10.75C7.89795 11.2766 7.47106 11.7035 6.94446 11.7035H6.93591C6.40932 11.7035 5.98242 11.2766 5.98242 10.75ZM9.7921 10.75C9.7921 10.2234 10.219 9.79651 10.7456 9.79651H10.7542C11.2807 9.79651 11.7077 10.2234 11.7077 10.75C11.7077 11.2766 11.2807 11.7035 10.7542 11.7035H10.7456C10.219 11.7035 9.7921 11.2766 9.7921 10.75ZM13.6018 10.75C13.6018 10.2234 14.0286 9.79651 14.5552 9.79651H14.5638C15.0904 9.79651 15.5173 10.2234 15.5173 10.75C15.5173 11.2766 15.0904 11.7035 14.5638 11.7035H14.5552C14.0286 11.7035 13.6018 11.2766 13.6018 10.75Z" fill="#6E829E"/>
                  </svg>
                </button>
                {isHighlight && (
                  <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[#CB122D] border border-white text-white"><Video className="w-7 h-7" /></button>
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