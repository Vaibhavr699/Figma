import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Plus, User, Users, CheckCircle, Bell, ArrowRight, Search, Filter, ChevronDown, Calendar, Circle, ArrowLeft, MessageCircle } from "lucide-react";
import logo from '../components/../assets/logo.png';
import WorkspaceHeader from '../components/WorkspaceHeader';
import ProfileCard from '../components/ProfileCard';
import YourDaysTasks from '../components/YourDaysTasks';

const sidebarIcons = [
  <User key="user" />, <Users key="users" />, <CheckCircle key="check" />
];

const leads = [
  {
    name: "Jan Doe",
    title: "Marketing Director at Microsoft",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    source: ["Linkedin", "Facebook"],
    interest: "Hot Client",
    interestLevel: 4,
  },
  {
    name: "Darlene Robertson",
    title: "Financial Manager at Ford",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    source: ["Linkedin", "Facebook"],
    interest: "High interest",
    interestLevel: 3,
  },
  {
    name: "Janah Jude",
    title: "Web Developer at Binary By",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    source: ["Typeform"],
    interest: "Medium interest",
    interestLevel: 2,
  },
  {
    name: "Wade Warren",
    title: "Operators Manager at Zenith",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    source: ["Typeform"],
    interest: "Medium interest",
    interestLevel: 2,
  },
];

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

const interestColors = ["bg-gray-300", "bg-green-300", "bg-yellow-300", "bg-orange-400", "bg-red-500"];

const Dashboard = () => {
  return (
    <div className=" w-full bg-gradient-to-b from-gray-100 to-white">
      <Navbar />
      <div className="flex px-2 items-start gap-x-8 mt-10">
        {/* Vertical Menu */}
        <nav className="hidden md:flex flex-col items-center gap-4 pt-1 px-2 mt-56 py-2">
          <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[#052659] text-white shadow-lg">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5121 8.95408H11.8958C11.4572 8.95408 11.0935 8.59036 11.0935 8.15175C11.0935 7.71315 11.4572 7.34943 11.8958 7.34943H17.5121C17.9507 7.34943 18.3144 7.71315 18.3144 8.15175C18.3144 8.59036 17.9614 8.95408 17.5121 8.95408Z" fill="white"/>
              <path d="M6.27874 9.76711C6.07548 9.76711 5.87222 9.69222 5.71176 9.53176L4.90943 8.7294C4.5992 8.41917 4.5992 7.90568 4.90943 7.59545C5.21967 7.28521 5.73315 7.28521 6.04339 7.59545L6.27874 7.8308L8.11874 5.99079C8.42897 5.68056 8.94246 5.68056 9.2527 5.99079C9.56296 6.30103 9.56296 6.81451 9.2527 7.12475L6.84571 9.53176C6.69595 9.68153 6.49269 9.76711 6.27874 9.76711Z" fill="white"/>
              <path d="M17.5121 16.4425H11.8958C11.4572 16.4425 11.0935 16.0787 11.0935 15.6401C11.0935 15.2015 11.4572 14.8378 11.8958 14.8378H17.5121C17.9507 14.8378 18.3144 15.2015 18.3144 15.6401C18.3144 16.0787 17.9614 16.4425 17.5121 16.4425Z" fill="white"/>
              <path d="M6.27874 17.2555C6.07548 17.2555 5.87222 17.1806 5.71176 17.0201L4.90943 16.2178C4.5992 15.9075 4.5992 15.3941 4.90943 15.0838C5.21967 14.7736 5.73315 14.7736 6.04339 15.0838L6.27874 15.3192L8.11874 13.4792C8.42897 13.1689 8.94246 13.1689 9.2527 13.4792C9.56296 13.7894 9.56296 14.3029 9.2527 14.6131L6.84571 17.0201C6.69595 17.1699 6.49269 17.2555 6.27874 17.2555Z" fill="white"/>
              <path d="M14.7093 23H8.29071C2.48186 23 0 20.5182 0 14.7093V8.29071C0 2.48186 2.48186 0 8.29071 0H14.7093C20.5182 0 23 2.48186 23 8.29071V14.7093C23 20.5182 20.5182 23 14.7093 23ZM8.29071 1.60465C3.35907 1.60465 1.60465 3.35907 1.60465 8.29071V14.7093C1.60465 19.641 3.35907 21.3954 8.29071 21.3954H14.7093C19.641 21.3954 21.3954 19.641 21.3954 14.7093V8.29071C21.3954 3.35907 19.641 1.60465 14.7093 1.60465H8.29071Z" fill="white"/>
            </svg>
          </button>
          <button className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-[#7B8FA1] shadow-lg border border-gray-100">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.13672 9.375H2.70703C1.21435 9.375 0 8.21848 0 6.79688V2.57812C0 1.15652 1.21435 0 2.70703 0H7.13672C8.6294 0 9.84375 1.15652 9.84375 2.57812V6.79688C9.84375 8.21848 8.6294 9.375 7.13672 9.375ZM2.70703 1.25C1.93807 1.25 1.3125 1.84578 1.3125 2.57812V6.79688C1.3125 7.52922 1.93807 8.125 2.70703 8.125H7.13672C7.90568 8.125 8.53125 7.52922 8.53125 6.79688V2.57812C8.53125 1.84578 7.90568 1.25 7.13672 1.25H2.70703Z" fill="#6E829E"/>
              <path d="M18.293 9.375H13.8633C12.3706 9.375 11.1562 8.21848 11.1562 6.79688V2.57812C11.1562 1.15652 12.3706 0 13.8633 0H18.293C19.7857 0 21 1.15652 21 2.57812V6.79688C21 8.21848 19.7857 9.375 18.293 9.375ZM13.8633 1.25C13.0943 1.25 12.4688 1.84578 12.4688 2.57812V6.79688C12.4688 7.52922 13.0943 8.125 13.8633 8.125H18.293C19.0619 8.125 19.6875 7.52922 19.6875 6.79688V2.57812C19.6875 1.84578 19.0619 1.25 18.293 1.25H13.8633Z" fill="#6E829E"/>
              <path d="M7.13672 20H2.70703C1.21435 20 0 18.8435 0 17.4219V13.2031C0 11.7815 1.21435 10.625 2.70703 10.625H7.13672C8.6294 10.625 9.84375 11.7815 9.84375 13.2031V17.4219C9.84375 18.8435 8.6294 20 7.13672 20ZM2.70703 11.875C1.93807 11.875 1.3125 12.4708 1.3125 13.2031V17.4219C1.3125 18.1542 1.93807 18.75 2.70703 18.75H7.13672C7.90568 18.75 8.53125 18.1542 8.53125 17.4219V13.2031C8.53125 12.4708 7.90568 11.875 7.13672 11.875H2.70703Z" fill="#6E829E"/>
            </svg>
          </button>
          {/* Third Icon Button */}
          <button className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-[#7B8FA1] shadow-lg border border-gray-100">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 1.93023C5.84937 1.93023 1.93023 5.72391 1.93023 10.3368C1.93023 12.5576 2.83313 14.5796 4.31706 16.0865C4.76922 16.5456 5.15877 17.2615 5.005 18.0764L5.00477 18.0776C4.90571 18.5977 4.73715 19.0993 4.50511 19.5682C5.35738 19.5481 6.20118 19.3277 6.95781 18.9253L6.9724 18.9176C7.1765 18.809 7.35092 18.7162 7.49307 18.6487C7.63056 18.5834 7.80217 18.5094 7.988 18.481C8.16891 18.4534 8.34474 18.4698 8.491 18.4899C8.63717 18.5099 8.81604 18.5435 9.02057 18.5819L9.03735 18.585C9.60181 18.6911 10.1747 18.7442 10.749 18.7434C15.6497 18.7434 19.5697 14.9498 19.5697 10.3368C19.5697 5.72391 15.6505 1.93023 10.75 1.93023ZM0.5 10.3368C0.5 4.87495 5.11986 0.5 10.75 0.5C16.38 0.5 21 4.87495 21 10.3368C21 15.7987 16.38 20.1736 10.75 20.1736C10.7497 20.1736 10.7503 20.1736 10.75 20.1736C10.0865 20.1745 9.42494 20.1131 8.77342 19.9908C8.54726 19.9482 8.40357 19.9215 8.29659 19.9069C8.25034 19.9005 8.22164 19.8981 8.20591 19.8971C8.21544 19.8935 8.21973 19.8922 8.21964 19.892C8.21964 19.8919 8.21382 19.8933 8.20391 19.8948C8.19561 19.8961 8.19065 19.8964 8.19065 19.8965C8.19065 19.8966 8.19523 19.8965 8.20591 19.8971C8.18979 19.9033 8.15833 19.9161 8.10667 19.9407C7.99748 19.9926 7.85202 20.0697 7.62935 20.1881C6.26422 20.9141 4.67155 21.1716 3.13541 20.8858C2.88735 20.8397 2.68196 20.6662 2.59493 20.4295C2.50792 20.1926 2.55213 19.9275 2.7113 19.7317C3.15735 19.1831 3.46403 18.5221 3.59967 17.8107C3.63637 17.6151 3.55332 17.3493 3.29801 17.0901C1.56764 15.3329 0.5 12.9567 0.5 10.3368Z" fill="#6E829E"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.98242 10.75C5.98242 10.2234 6.40932 9.79651 6.93591 9.79651H6.94446C7.47106 9.79651 7.89795 10.2234 7.89795 10.75C7.89795 11.2766 7.47106 11.7035 6.94446 11.7035H6.93591C6.40932 11.7035 5.98242 11.2766 5.98242 10.75ZM9.7921 10.75C9.7921 10.2234 10.219 9.79651 10.7456 9.79651H10.7542C11.2807 9.79651 11.7077 10.2234 11.7077 10.75C11.7077 11.2766 11.2807 11.7035 10.7542 11.7035H10.7456C10.219 11.7035 9.7921 11.2766 9.7921 10.75ZM13.6018 10.75C13.6018 10.2234 14.0286 9.79651 14.5552 9.79651H14.5638C15.0904 9.79651 15.5173 10.2234 15.5173 10.75C15.5173 11.2766 15.0904 11.7035 14.5638 11.7035H14.5552C14.0286 11.7035 13.6018 11.2766 13.6018 10.75Z" fill="#6E829E"/>
            </svg>
          </button>
          <button className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-[#7B8FA1] shadow-lg border border-gray-100">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.70413 16.0551H11.2867M14.461 16.0551H16.0436M4.95642 16.0551H6.53898M9.70413 11.3051H11.2867M14.461 11.3051H16.0436M4.95642 11.3051H6.53898M1 7.33332H20M15.2523 4.95832V0.999999M5.74772 4.95832V0.999999M4.17429 20H16.8257C18.5788 20 20 18.5781 20 16.8241V5.75918C20 4.00522 18.5788 2.58332 16.8257 2.58332H4.17429C2.42118 2.58332 1 4.00522 1 5.75918V16.8241C1 18.5781 2.42118 20 4.17429 20Z" stroke="#ADB9C8" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </button>
        </nav>
        <main className="flex-1 px-1 sm:px-2 md:px-6 xl:px-12">
          {/* WORKSPACE Section */}
          <WorkspaceHeader />
          {/* New Leads Section */}
          <section className="mb-2 sm:mb-8 md:mb-4">
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-2 mb-2 sm:mb-4 mt-1">
              <h2 className="sm:text-xl md:text-3xl font-bold font-manrope mr-2 sm:mr-4">New Leads</h2>
              <span className="text-base sm:text-lg font-semibold font-manrope underline underline-offset-4 decoration-2 decoration-black flex items-end"><span className="text-black">7 Leads</span></span>
              {/* Pills and icons */}
              <div className="w-full md:w-auto flex flex-col md:flex-row gap-2 md:gap-2 ml-0 sm:ml-2 md:ml-2 py-2 md:py-0">
                {/* First row: Search, Filter, All, Hot Client */}
                <div className="flex flex-row flex-wrap gap-1 sm:gap-2 md:gap-3">
                  <button className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 min-w-[40px] sm:min-w-[48px] md:min-w-[56px] flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100"><Search className="w-4 h-4 sm:w-5 sm:h-5" /></button>
                  <button className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 min-w-[40px] sm:min-w-[48px] md:min-w-[56px] flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100"><Filter className="w-4 h-4 sm:w-5 sm:h-5" /></button>
                  <button className="flex-shrink-0 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] rounded-full bg-white border border-gray-200 text-[#2E4C73] font-semibold shadow-sm text-xs sm:text-sm md:text-base">All</button>
                  <button className="flex-shrink-0 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 min-w-[110px] sm:min-w-[130px] md:min-w-[150px] rounded-full border border-gray-200 text-[#2E4C73] font-semibold flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base"><span role='img' aria-label='fire'>🔥</span>Hot Client</button>
                </div>
                {/* Second row: Great, Medium, Low, Non interest */}
                <div className="flex flex-row flex-wrap gap-1 sm:gap-2 md:gap-3 md:ml-0">
                  <button className="flex-shrink-0 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 min-w-[110px] sm:min-w-[130px] md:min-w-[150px] rounded-full border border-gray-200 text-[#2E4C73] font-semibold bg-white text-xs sm:text-sm md:text-base">Great interest</button>
                  <button className="flex-shrink-0 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 min-w-[110px] sm:min-w-[130px] md:min-w-[150px] rounded-full border border-gray-200 text-[#2E4C73] font-semibold bg-white text-xs sm:text-sm md:text-base hidden md:block">Medium interest</button>
                  <button className="flex-shrink-0 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 min-w-[110px] sm:min-w-[130px] md:min-w-[150px] rounded-full border border-gray-200 text-[#2E4C73] font-semibold bg-white text-xs sm:text-sm md:text-base hidden lg:block">Low interest</button>
                  <button className="flex-shrink-0 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 min-w-[110px] sm:min-w-[130px] md:min-w-[150px] rounded-full border border-gray-200 text-[#2E4C73] font-semibold bg-white text-xs sm:text-sm md:text-base hidden lg:block">Non interest</button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 md:gap-6 mt-4 sm:mt-8 place-items-center">
              {leads.map((lead, i) => (
                <ProfileCard
                  key={i}
                  name={lead.name}
                  title={lead.title}
                  avatar={lead.avatar}
                  sources={lead.source}
                  hotLevel={lead.interestLevel}
                />
              ))}
            </div>
          </section>
          {/* Your Day's Tasks Section */}
          <YourDaysTasks />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;