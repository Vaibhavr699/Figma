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
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <Navbar />
      <div className="flex px-2 items-start gap-x-8 mt-12">
        {/* Vertical Menu */}
        <nav className="flex flex-col items-center gap-8 pt-1 px-2 mt-48">
          <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[#052659] text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </button>
          <button className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-[#7B8FA1] shadow-lg border border-gray-100">
            <MessageCircle className="w-8 h-8" />
          </button>
          <button className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-[#7B8FA1] shadow-lg border border-gray-100">
            <span>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.70413 16.0551H11.2867M14.461 16.0551H16.0436M4.95642 16.0551H6.53898M9.70413 11.3051H11.2867M14.461 11.3051H16.0436M4.95642 11.3051H6.53898M1 7.33332H20M15.2523 4.95832V0.999999M5.74772 4.95832V0.999999M4.17429 20H16.8257C18.5788 20 20 18.5781 20 16.8241V5.75918C20 4.00522 18.5788 2.58332 16.8257 2.58332H4.17429C2.42118 2.58332 1 4.00522 1 5.75918V16.8241C1 18.5781 2.42118 20 4.17429 20Z" stroke="#ADB9C8" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>
          <button className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-[#7B8FA1] shadow-lg border border-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
          </button>
        </nav>
        <main className="flex-1">
          {/* WORKSPACE Section */}
          <WorkspaceHeader />
          {/* New Leads Section */}
          <section className="mb-8">
            <div className="flex items-center gap-6 mb-4 mt-1">
              <h2 className="text-3xl font-bold font-manrope">New Leads</h2>
              <span className="text-lg font-semibold font-manrope underline underline-offset-4 decoration-2 decoration-black flex items-end"><span className="text-black">7 Leads</span></span>
              {/* Pills and icons */}
              <div className="flex items-center gap-3 ml-4">
                {/* Search Icon */}
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100"><Search className="w-5 h-5" /></button>
                {/* Filter Icon */}
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100"><Filter className="w-5 h-5" /></button>
                {/* Pills */}
                <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-[#2E4C73] font-semibold shadow-sm">All</button>
                <button className="px-5 py-2 rounded-full border border-gray-200 text-[#2E4C73] font-semibold flex items-center gap-2 "><span role='img' aria-label='fire'>🔥</span>Hot Client</button>
                <button className="px-5 py-2 rounded-full border border-gray-200 text-[#2E4C73] font-semibold bg-white">Great interest</button>
                <button className="px-5 py-2 rounded-full border border-gray-200 text-[#2E4C73] font-semibold bg-white">Medium interest</button>
                <button className="px-5 py-2 rounded-full border border-gray-200 text-[#2E4C73] font-semibold bg-white">Low interest</button>
                <button className="px-5 py-2 rounded-full border border-gray-200 text-[#2E4C73] font-semibold bg-white">Non interest</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
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