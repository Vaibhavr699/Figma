import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  HelpCircle, 
  Settings, 
  Bell, 
  Mail, 
  ExternalLink,
  X,
  User,
} from 'lucide-react';
import BehaviorScoreDonut from '../components/BehaviorScoreDonut';
import ScoreDonut from '../components/BehaviorScoreDonut';
import PipelineProgressBar from '../components/PipelineProgressBar';

const SalesEngagement = () => {
  const [activeTab, setActiveTab] = useState('Cadences');
  const [selectedContact, setSelectedContact] = useState('Miguel Braswell');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const contacts = [
    {
      id: 1,
      name: 'Miguel Braswell',
      role: 'Administrative Assistant',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
      overdue: 12,
      status: 'active'
    },
    {
      id: 2,
      name: 'Andrea Wilcott',
      role: 'Chief Information Officer',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
      overdue: 35,
      status: 'warning'
    },
    {
      id: 3,
      name: 'Adrian Newsom',
      role: 'Head of Partnerships',
      avatar: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
      overdue: 14,
      status: 'danger'
    },
    {
      id: 4,
      name: 'Alisha Claude',
      role: 'VP of Marketing',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
      overdue: 31,
      status: 'danger'
    },
    {
      id: 5,
      name: 'Aaron McCleery',
      role: 'SVP Marketing',
      avatar: 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
      overdue: 40,
      status: 'danger'
    }
  ];

  const ContactCard = ({ contact, isActive }) => (
    <div 
      className="rounded-[24px] mb-4 cursor-pointer transition-all flex flex-col justify-between"
      style={{ width: 412, height: 174, opacity: 1, background: isActive ? '#1C0A6B' : '#FFFFFF', color: isActive ? '#FFFFFF' : '#1C0A6B', position: 'relative', boxShadow: isActive ? '0px 4px 24px 0px #1C0A6B1A' : 'none' }}
      onClick={() => setSelectedContact(contact.name)}
    >
      <div className="flex items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-4">
        <img 
          src={contact.avatar} 
          alt={contact.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
            style={{ boxShadow: '0 2px 8px #0001' }}
          />
          <div>
            <h3
              style={{
                fontFamily: '"Wix Madefor Text", sans-serif',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '19px',
                lineHeight: '100%',
                letterSpacing: 0,
                color: isActive ? '#FFFFFF' : '#1C0A6B'
              }}
            >
            {contact.name}
          </h3>
            <p
              style={{
                fontFamily: '"Wix Madefor Text", sans-serif',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: 0,
                color: isActive ? '#FFFFFF' : '#1C0A6B'
              }}
            >
            {contact.role}
          </p>
          </div>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#FFFFFF] bg-transparent" style={{ color: isActive ? '#FFFFFF' : '#1C0A6B' }}>
          <Mail className="w-5 h-5" />
        </button>
      </div>
      <div className="flex items-center justify-between px-6 pb-6 mt-auto">
        <div className="flex items-center gap-2">
          <span className="bg-[#6C7AE0] text-white text-sm font-medium rounded-full px-4 py-2" style={{ background: isActive ? '#6C7AE0' : '#E6E8F6' }}>
            12 Hours Overdue
          </span>
          <span className="bg-[#6CC6E0] text-white text-sm font-bold rounded-full w-9 h-9 flex items-center justify-center" style={{ background: isActive ? '#6CC6E0' : '#E6E8F6' }}>
            69
          </span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#FFFFFF] bg-transparent" style={{ color: isActive ? '#FFFFFF' : '#1C0A6B' }}>
          <ExternalLink className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  const CircularProgress = ({ percentage, score, label, color = "blue" }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const colorClasses = {
      blue: "stroke-blue-500",
      pink: "stroke-pink-500"
    };

    return (
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className={colorClasses[color]}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">{score}</span>
          <span className="text-sm text-gray-600">{label}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: '"Wix Madefor Text", sans-serif', width: '1920px', height: '1366px' }}>
      {/* Header */}
      <header className="bg-white opacity-100 border-b border-gray-200 relative" style={{ width: '1920px', height: '182px', margin: '0 auto', padding: 0 }}>
        {/* Logo */}
        <span className="absolute" style={{ width: 46, height: 46, top: 36, left: 53, borderRadius: 1, opacity: 1 }}>
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M23 9.29787C15.4325 9.29787 9.29787 15.4325 9.29787 23C9.29787 30.5675 15.4325 36.7021 23 36.7021C30.5675 36.7021 36.7021 30.5675 36.7021 23C36.7021 18.8764 34.8473 15.5208 32.4617 13.2945C32.0976 12.9547 32.0003 12.4069 32.2584 11.981L36.1818 5.50556C36.4878 5.00055 37.1638 4.86791 37.6194 5.24346C42.7297 9.45543 46 15.8463 46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23C0 10.2975 10.2975 0 23 0C25.418 0 27.7563 0.37469 29.9555 1.07177C30.5194 1.2505 30.7747 1.89192 30.5149 2.42334L27.2993 9.001C27.0792 9.45114 26.5616 9.66072 26.0751 9.54082C25.0894 9.29787 24.3337 9.29787 23 9.29787Z" fill="url(#paint0_linear_450_2716)"/>
                <defs>
              <linearGradient id="paint0_linear_450_2716" x1="6.3617" y1="7.34043" x2="39.3936" y2="38.9043" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1C0A6B"/>
                    <stop offset="1" stopColor="#3117A3"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          {/* Right Side Icons */}
        <div className="absolute flex items-center" style={{ width: 280, height: 54, top: 28, left: 1607, gap: 3, opacity: 1 }}>
          <button className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#D3DAE2] text-[#22008C] bg-white hover:bg-[#F4F6F8] transition">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5v14M5 12h14" stroke="#22008C" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            </button>
          <button className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#D3DAE2] text-[#22008C] bg-white hover:bg-[#F4F6F8] transition">
              <HelpCircle className="w-6 h-6" />
            </button>
          <button className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#D3DAE2] text-[#22008C] bg-white hover:bg-[#F4F6F8] transition">
              <Settings className="w-6 h-6" />
            </button>
          <button className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#D3DAE2] text-[#22008C] bg-white hover:bg-[#F4F6F8] transition">
              <Bell className="w-6 h-6" />
            </button>
            <img
              src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
              alt="Profile"
            className="w-[54px] h-[54px] rounded-full object-cover border border-[#D3DAE2]"
            />
        </div>
        {/* Grouped Section: Sales Engagement, Work Queue, User Pill */}
        <div className="absolute flex items-center gap-8 bg-[#F7F6FB] border border-[#ECEAF6]" style={{ width: 955.5, height: 70, top: 112, left: 70, opacity: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
          {/* Menu Icon */}
          <span className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#D5D1E8] ml-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" stroke="#D5D1E8"/>
              <circle cx="8.5" cy="8.5" r="1.5" fill="#22008C"/>
              <circle cx="8.5" cy="15.5" r="1.5" fill="#22008C"/>
              <circle cx="15.5" cy="8.5" r="1.5" fill="#22008C"/>
              <circle cx="15.5" cy="15.5" r="1.5" fill="#22008C"/>
            </svg>
          </span>
          {/* Title */}
          <span className="text-[24px] font-bold text-[#22008C]">Sales Engagement</span>
          {/* Work Queue Link */}
          <span className="text-[18px] font-bold text-[#22008C] ml-8">Work Queue</span>
          {/* User Pill with Dropdown */}
          {(() => {
            const [dropdownOpen, setDropdownOpen] = useState(false);
            const pillRef = useRef(null);
            useEffect(() => {
              function handleClickOutside(event) {
                if (pillRef.current && !pillRef.current.contains(event.target)) {
                  setDropdownOpen(false);
                }
              }
              if (dropdownOpen) {
                document.addEventListener('mousedown', handleClickOutside);
              } else {
                document.removeEventListener('mousedown', handleClickOutside);
              }
              return () => document.removeEventListener('mousedown', handleClickOutside);
            }, [dropdownOpen]);
            return (
              <div className="relative ml-8" ref={pillRef}>
                <div
                  className="flex items-center rounded-full px-8 py-3 border border-[#E6E8F6] shadow-sm cursor-pointer select-none"
                  onClick={() => setDropdownOpen((open) => !open)}
                >
                  <User className="w-5 h-5 text-[#22008C] mr-2" />
                  <span className="text-base font-semibold text-[#22008C]">Miguel Braswell</span>
                  <span className={`mx-2 transition-transform ${dropdownOpen ? 'rotate-180 inline-block' : 'inline-block'}`} style={{ width: 24, height: 24 }}>
                    
                  </span>
                  <X className="w-4 h-4 text-[#B0B3C7] cursor-pointer" />
                </div>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-[#E6E8F6] rounded-lg shadow-lg z-50">
                    <button className="block w-full text-left px-4 py-2 text-[#1C0A6B] hover:bg-[#F7F6FB]">Profile</button>
                    <button className="block w-full text-left px-4 py-2 text-[#1C0A6B] hover:bg-[#F7F6FB]">Settings</button>
                    <button className="block w-full text-left px-4 py-2 text-[#1C0A6B] hover:bg-[#F7F6FB]">Logout</button>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
        {/* Center: Search Bar */}
        <div className="absolute flex items-center" style={{ width: 434, height: 54, top: 28, left: 748, opacity: 1 }}>
          <div className="relative w-full h-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1C0A6B] w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full pl-12 pr-4  border-[#D3DAE2] border-[1px] rounded-full focus:ring-2 focus:ring-[#1C0A6B] focus:border-transparent text-[#1C0A6B] placeholder:text-[#1C0A6B]/60 text-base font-medium bg-white shadow-none"
              style={{ height: 54, borderWidth: 1 }}
            />
          </div>
        </div>
      </header>

      {/* Work Queue and Pipeline Progress Bar Row */}
      <div className="flex items-start gap-8 px-6 pt-8 bg-[#F2F0FA]">
        {/* Work Queue Header and Tabs/Dropdown */}
        <div className="flex flex-col" style={{ width: 418 }}>
          {/* Header row with icons */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-[#1C0A6B] text-lg">Work Queue</h2>
            <div className="flex items-center gap-1">
              <button className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#D3DAE2] text-[#22008C] bg-white hover:bg-[#F4F6F8] transition">
                <Search className="w-6 h-6" />
              </button>
              <button className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#D3DAE2] text-[#22008C] bg-white hover:bg-[#F4F6F8] transition">
                <Mail className="w-6 h-6" />
              </button>
            </div>
          </div>
          {/* Tabs and Dropdown */}
          <div className="flex flex-col gap-4" style={{ width: 414, height: 126, opacity: 1 }}>
            <div className="flex gap-2">
              {['Cadences', 'My Feed', 'My List'].map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`h-[56px] w-[134px] rounded-full font-semibold text-lg border-2 transition-colors focus:outline-none ${
                    activeTab === tab
                      ? 'bg-[#1C0A6B] text-white border-[#FFFFFF] shadow-sm'
                      : 'bg-transparent text-[#1C0A6B] border-[#FFFFFF]'
                  }`}
                  style={{marginRight: idx < 2 ? '6px' : 0}}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div>
              <button className="flex items-center justify-between w-[414px] h-[56px] rounded-full bg-transparent border-2 border-[#FFFFFF] text-[#1C0A6B] font-semibold text-lg px-6 focus:outline-none">
                <span>Event Cadence (10)</span>
                <svg className="ml-2 w-5 h-5 text-[#1C0A6B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
              </button>
            </div>
          </div>
        </div>
        {/* Pipeline Progress Bar */}
        <div className="flex-1" style={{ minWidth: 0 }}>
          <PipelineProgressBar currentStep={1} />
            </div>
          </div>

      {/* Main Content: Sidebar below, then Lead Information & Campaign History */}
      <div className="flex px-6 bg-[#F2F0FA]">
        {/* Sidebar (Contact List) */}
        <div className="bg-[#F2F0FA]" style={{ width: 487 }}>
          {/* Contact List */}
          <div className="p-4">
            {contacts.map((contact) => (
              <ContactCard 
                key={contact.id} 
                contact={contact} 
                isActive={contact.name === selectedContact}
              />
            ))}
          </div>
        </div>
        {/* Lead Information & Campaign History */}
        <div className="flex-1 pl-2">
                  <div>
            <div className="flex flex-row gap-1 mb-2">
              {/* Lead Information */}
              <div className="bg-white rounded-[32px] border border-[#ECEAF6] flex flex-col p-4" style={{ width: 410, height: 408, top:438, left:449 }}>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-4">
                    <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center">
                      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26.6099" cy="26.6099" r="26.6099" fill="#1C0A6B"/>
                        <path d="M26.3242 16.8242C21.085 16.8242 16.8242 21.085 16.8242 26.3242C16.8242 31.5634 21.085 35.8242 26.3242 35.8242C31.5634 35.8242 35.8242 31.5634 35.8242 26.3242C35.8242 21.085 31.5634 16.8242 26.3242 16.8242ZM26.3242 18.0909C30.8789 18.0909 34.5625 21.7696 34.5625 26.3242C34.5625 30.8789 30.8789 34.5625 26.3242 34.5625C21.7696 34.5625 18.0909 30.8789 18.0909 26.3242C18.0909 21.7696 21.7696 18.0909 26.3242 18.0909ZM26.3156 21.2613C26.1482 21.2642 25.9889 21.3333 25.8723 21.4533C25.7557 21.5734 25.6914 21.7347 25.6934 21.902V22.4352C24.6707 22.627 23.7958 23.2855 23.7958 24.4267C23.7958 25.2184 24.1527 25.8587 24.632 26.2314C25.1113 26.6042 25.6525 26.7695 26.1275 26.9279C26.6025 27.0862 27.0126 27.2376 27.2458 27.4189C27.479 27.6003 27.5909 27.7529 27.5909 28.2279C27.5909 29.2835 25.0625 29.2835 25.0625 28.2279C25.0644 28.1436 25.0494 28.0597 25.0184 27.9812C24.9874 27.9027 24.941 27.8313 24.8821 27.7709C24.8231 27.7106 24.7526 27.6627 24.6748 27.63C24.5971 27.5972 24.5135 27.5804 24.4292 27.5804C24.3448 27.5804 24.2613 27.5972 24.1835 27.63C24.1057 27.6627 24.0353 27.7106 23.9763 27.7709C23.9173 27.8313 23.8709 27.9027 23.8399 27.9812C23.809 28.0597 23.794 28.1436 23.7958 28.2279C23.7958 29.3682 24.6715 30.028 25.6934 30.2207V30.7514C25.6915 30.8357 25.7065 30.9196 25.7375 30.9981C25.7685 31.0766 25.8148 31.148 25.8738 31.2084C25.9328 31.2687 26.0033 31.3166 26.081 31.3493C26.1588 31.3821 26.2423 31.3989 26.3267 31.3989C26.4111 31.3989 26.4946 31.3821 26.5724 31.3493C26.6501 31.3166 26.7206 31.2687 26.7796 31.2084C26.8386 31.148 26.8849 31.0766 26.9159 30.9981C26.9469 30.9196 26.9619 30.8357 26.96 30.7514V30.2207C27.982 30.0281 28.8588 29.3684 28.8588 28.2279C28.8588 27.4363 28.5007 26.796 28.0214 26.4232C27.542 26.0504 27.0008 25.8839 26.5258 25.7255C26.0508 25.5672 25.6408 25.417 25.4076 25.2357C25.1744 25.0543 25.0625 24.9017 25.0625 24.4267C25.0625 23.3711 27.5909 23.3711 27.5909 24.4267C27.5909 24.5948 27.6577 24.7561 27.7766 24.875C27.8955 24.9939 28.0567 25.0606 28.2248 25.0606C28.393 25.0606 28.5542 24.9939 28.6731 24.875C28.792 24.7561 28.8588 24.5948 28.8588 24.4267C28.8588 23.2872 27.9817 22.6294 26.96 22.4364V21.902C26.961 21.8173 26.945 21.7332 26.9129 21.6548C26.8808 21.5763 26.8334 21.5051 26.7733 21.4454C26.7132 21.3856 26.6417 21.3386 26.5631 21.3069C26.4845 21.2753 26.4003 21.2598 26.3156 21.2613Z" fill="white"/>
                      </svg>
                    </div>
                    <h3
                      style={{
                        fontFamily: '"Wix Madefor Text", sans-serif',
                        fontWeight: 500,
                        fontStyle: 'normal',
                        fontSize: '21px',
                        lineHeight: '100%',
                        letterSpacing: 0,
                        color: '#1C0A6B'
                      }}
                    >
                      Lead Information
                    </h3>
                  </div>
                  <div className="flex gap-1">
                    <button className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#CCD7E4] text-[#1C0A6B] bg-white hover:bg-[#F4F6F8]">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.38963 6.38953V0H8.21154V6.38953H14.6011V8.21145H8.21154V14.601H6.38963V8.21145H9.15527e-05V6.38953H6.38963Z" fill="#1C0A6B"/></svg>
                    </button>
                    <button className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#CCD7E4] text-[#1C0A6B] bg-white hover:bg-[#F4F6F8]">
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66564 12.2884C1.49815 12.2884 1.33099 12.2246 1.20309 12.0967C0.947604 11.8412 0.947604 11.4271 1.20309 11.1716L11.4269 0.947956C11.6821 0.692478 12.0966 0.692478 12.352 0.947956C12.6075 1.20343 12.6075 1.61756 12.352 1.87304L2.12819 12.0967C2.00061 12.2243 1.83312 12.2884 1.66564 12.2884Z" fill="#1C0A6B"/><path d="M0.654897 17C0.609427 17 0.563303 16.9951 0.517179 16.9853C0.163887 16.9094 -0.0611722 16.5617 0.01472 16.2084L1.02553 11.497C1.10142 11.1437 1.45078 10.9193 1.80244 10.9945C2.15573 11.0704 2.38079 11.4181 2.3049 11.7714L1.29409 16.4829C1.22834 16.79 0.95683 17 0.654897 17Z" fill="#1C0A6B"/><path d="M5.36608 15.989C5.19859 15.989 5.03143 15.9252 4.90353 15.7973C4.64804 15.5418 4.64804 15.1277 4.90353 14.8722L15.1274 4.64888C15.3825 4.39341 15.797 4.39341 16.0525 4.64888C16.308 4.90436 16.308 5.31849 16.0525 5.57397L5.82895 15.7973C5.70105 15.9252 5.53356 15.989 5.36608 15.989Z" fill="#1C0A6B"/><path d="M0.653818 16.9997C0.351885 16.9997 0.0807015 16.7897 0.014623 16.4825C-0.060942 16.1292 0.16379 15.7815 0.517081 15.7056L5.22861 14.6948C5.58223 14.6199 5.92996 14.8443 6.00553 15.1973C6.08109 15.5506 5.85636 15.8983 5.50307 15.9742L0.791536 16.985C0.745412 16.9951 0.699288 16.9997 0.653818 16.9997Z" fill="#1C0A6B"/><path d="M13.7392 7.61598C13.5717 7.61598 13.4042 7.55219 13.2766 7.42429L9.57589 3.72363C9.32041 3.46815 9.32041 3.05402 9.57589 2.79854C9.83104 2.54306 10.2458 2.54306 10.501 2.79854L14.2017 6.49921C14.4572 6.75468 14.4572 7.16881 14.2017 7.42429C14.0741 7.55219 13.9066 7.61598 13.7392 7.61598Z" fill="#1C0A6B"/><path d="M15.5897 5.76575C15.4222 5.76575 15.2547 5.70196 15.1268 5.57406C14.8713 5.31858 14.8713 4.90445 15.1268 4.64865C15.4909 4.28457 15.6914 3.7916 15.6914 3.26102C15.6914 2.73044 15.4909 2.23747 15.1268 1.87339C14.7624 1.50899 14.2694 1.30846 13.7388 1.30846C13.2082 1.30846 12.7153 1.50899 12.3512 1.87339C12.096 2.12887 11.6819 2.1292 11.4257 1.87339C11.1703 1.61792 11.1703 1.20379 11.4257 0.947982C12.0368 0.336602 12.8582 0 13.7388 0C14.6191 0 15.4408 0.336602 16.0519 0.947982C16.6633 1.55903 16.9999 2.38042 16.9999 3.26102C16.9999 4.14162 16.6633 4.963 16.0519 5.57406C15.9246 5.70163 15.7572 5.76575 15.5897 5.76575Z" fill="#1C0A6B"/></svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-6 mt-2">
                  {/* Job Title */}
                <div className="flex items-center gap-4">
                    <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#F6F4FB]">
                      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.66797 3.87448V2.21161C5.66797 1.54979 6.20946 1.0083 6.87128 1.0083H13.1286C13.7904 1.0083 14.3319 1.54979 14.3319 2.21161V3.87448" stroke="#1C0A6B" strokeWidth="1.2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.253 9.25195V15.6285C18.253 16.2446 17.7488 16.7488 17.1327 16.7488H2.86716C2.25109 16.7488 1.74683 16.2447 1.74683 15.6285V9.2893" stroke="#1C0A6B" strokeWidth="1.2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.50622 11.1381C4.5556 10.9122 1 9.78248 1 7.74897V5.09763C1 4.48059 1.50325 3.97729 2.12033 3.97729H17.8797C18.4967 3.97729 19 4.48062 19 5.09763V7.74897C19 9.79522 15.3995 10.9263 11.4191 11.1422" stroke="#1C0A6B" strokeWidth="1.2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.61816 10.0269H11.3816V11.3152C11.3816 12.0238 10.8019 12.6036 10.0933 12.6036H9.90655C9.19794 12.6036 8.61816 12.0238 8.61816 11.3152V10.0269Z" stroke="#1C0A6B" strokeWidth="1.2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </div>
                  <div>
                      <p className="text-[15px] text-[#8B8B99] font-medium leading-tight">Job Title</p>
                      <p
                        style={{
                          fontFamily: '"Wix Madefor Text", sans-serif',
                          fontWeight: 500,
                          fontStyle: 'normal',
                          fontSize: '21px',
                          lineHeight: '100%',
                          letterSpacing: 0,
                          color: '#1C0A6B'
                        }}
                      >
                        Administrative Assistant
                      </p>
                    </div>
                  </div>
                  {/* Phone */}
                <div className="flex items-center gap-4">
                    <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#F6F4FB]">
                      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="54" height="54" rx="27" fill="#F7F5FD"/>
                        <path d="M35.421 31.9564C35.3892 31.93 31.7916 29.3704 30.8202 29.527C30.3516 29.6098 30.084 29.9296 29.547 30.5692C29.4606 30.6724 29.2524 30.919 29.0916 31.0948C28.7522 30.9842 28.4211 30.8495 28.101 30.6916C26.4483 29.887 25.113 28.5517 24.3084 26.899C24.1505 26.5789 24.0158 26.2478 23.9052 25.9084C24.0816 25.747 24.3288 25.5388 24.4344 25.45C25.071 24.916 25.3902 24.6478 25.473 24.1786C25.6428 23.2072 23.07 19.6108 23.0436 19.5784C22.9264 19.4122 22.7738 19.2742 22.5968 19.1741C22.4198 19.0741 22.2228 19.0146 22.02 19C20.9772 19 18 22.8616 18 23.5126C18 23.5504 18.0546 27.3928 22.7928 32.2126C27.6072 36.9454 31.4496 37 31.4874 37C32.1378 37 36 34.0228 36 32.98C35.9852 32.7772 35.9256 32.5802 35.8255 32.4032C35.7254 32.2262 35.5872 32.0736 35.421 31.9564ZM31.4208 35.7964C30.9 35.752 27.672 35.3266 23.64 31.366C19.6602 27.3142 19.2456 24.0808 19.2042 23.5798C19.9907 22.3454 20.9405 21.223 22.0278 20.2432C22.0518 20.2672 22.0836 20.3032 22.1244 20.35C22.9583 21.4883 23.6766 22.707 24.2688 23.9878C24.0762 24.1815 23.8727 24.364 23.6592 24.5344C23.3281 24.7867 23.0241 25.0726 22.752 25.3876C22.706 25.4522 22.6732 25.5253 22.6556 25.6026C22.638 25.68 22.6359 25.76 22.6494 25.8382C22.7764 26.3882 22.9709 26.9205 23.2284 27.4228C24.1511 29.3176 25.6823 30.8485 27.5772 31.771C28.0794 32.0289 28.6117 32.2236 29.1618 32.3506C29.24 32.3644 29.3201 32.3625 29.3975 32.3449C29.4749 32.3272 29.5479 32.2943 29.6124 32.248C29.9285 31.9748 30.2154 31.6696 30.4686 31.3372C30.657 31.1128 30.9084 30.8134 31.0038 30.7288C32.2879 31.3204 33.5092 32.0396 34.6494 32.8756C34.6992 32.9176 34.7346 32.95 34.758 32.971C33.7781 34.0587 32.6555 35.0087 31.4208 35.7952V35.7964Z" fill="#1C0A6B"/>
                        <path d="M31.2006 27.3999H32.4006C32.3992 26.1273 31.893 24.9072 30.9931 24.0073C30.0933 23.1075 28.8732 22.6013 27.6006 22.5999V23.7999C28.5551 23.8008 29.4702 24.1804 30.1451 24.8553C30.82 25.5302 31.1996 26.4454 31.2006 27.3999Z" fill="#1C0A6B"/>
                        <path d="M34.2006 27.3999H35.4006C35.3982 25.3319 34.5757 23.3493 33.1134 21.8871C31.6511 20.4248 29.6685 19.6022 27.6006 19.5999V20.7999C29.3504 20.8019 31.0279 21.4979 32.2652 22.7352C33.5025 23.9725 34.1985 25.6501 34.2006 27.3999Z" fill="#1C0A6B"/>
                      </svg>
                  </div>
                  <div>
                      <p className="text-[15px] text-[#8B8B99] font-medium leading-tight">Phone</p>
                      <p
                        style={{
                          fontFamily: '"Wix Madefor Text", sans-serif',
                          fontWeight: 500,
                          fontStyle: 'normal',
                          fontSize: '21px',
                          lineHeight: '100%',
                          letterSpacing: 0,
                          color: '#1C0A6B'
                        }}
                      >
                        +11 705 555-1207
                      </p>
                    </div>
                  </div>
                  {/* Email */}
                <div className="flex items-center gap-4">
                    <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#F6F4FB]">
                      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.77341 10.2254C9.19776 10.2254 8.62383 10.0352 8.14369 9.65486L4.28451 6.54342C4.00658 6.3197 3.96355 5.9127 4.18641 5.63563C4.41099 5.35942 4.81713 5.31554 5.0942 5.5384L8.94995 8.6464C9.43439 9.03017 10.1167 9.03017 10.6046 8.64296L14.4216 5.54012C14.6987 5.31382 15.1049 5.35684 15.3303 5.63391C15.5549 5.91012 15.5127 6.31626 15.2365 6.5417L11.4126 9.6497C10.929 10.0335 10.3508 10.2254 9.77341 10.2254Z" fill="#1C0A6B"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.974 15.8487C13.9757 15.847 13.9826 15.8487 13.9878 15.8487C14.9696 15.8487 15.8404 15.4977 16.5081 14.8308C17.2834 14.059 17.7093 12.9498 17.7093 11.7082V5.79849C17.7093 3.39521 16.1381 1.65105 13.974 1.65105H5.52598C3.36191 1.65105 1.7907 3.39521 1.7907 5.79849V11.7082C1.7907 12.9498 2.21749 14.059 2.99191 14.8308C3.65963 15.4977 4.53128 15.8487 5.51221 15.8487H13.974ZM5.50963 17.1394C4.18193 17.1394 2.99621 16.6576 2.08067 15.7455C1.06102 14.7284 0.5 13.2949 0.5 11.7082V5.79849C0.5 2.69824 2.66063 0.360352 5.52598 0.360352H13.974C16.8394 0.360352 19 2.69824 19 5.79849V11.7082C19 13.2949 18.439 14.7284 17.4193 15.7455C16.5047 16.6567 15.3181 17.1394 13.9878 17.1394H5.50963Z" fill="#1C0A6B"/>
                      </svg>
                  </div>
                  <div>
                      <p className="text-[15px] text-[#8B8B99] font-medium leading-tight">Email</p>
                      <p
                        style={{
                          fontFamily: '"Wix Madefor Text", sans-serif',
                          fontWeight: 500,
                          fontStyle: 'normal',
                          fontSize: '21px',
                          lineHeight: '100%',
                          letterSpacing: 0,
                          color: '#1C0A6B'
                        }}
                      >
                        mbraswell@ominex.com
                      </p>
                    </div>
                  </div>
                  {/* Source */}
                <div className="flex items-center gap-4">
                    <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#F6F4FB]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="9" fill="#1C0A6B" fillOpacity="0.08"/><rect x="3" y="3" width="18" height="18" rx="9" stroke="#1C0A6B" strokeWidth="1.5"/><path d="M8.5 12L12 15.5L15.5 12" stroke="#1C0A6B" strokeWidth="1.5"/><rect x="8.5" y="12" width="7" height="4" rx="2" stroke="#1C0A6B" strokeWidth="1.5"/></svg>
                  </div>
                  <div>
                      <p className="text-[15px] text-[#8B8B99] font-medium leading-tight">Source</p>
                      <div className="flex gap-3 mt-1">
                        <button className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#B6D6F6] bg-white">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#00AFF0"/><path d="M16.5 15.5c-.3.2-.7.3-1.1.3-.5 0-.9-.1-1.2-.3-.3-.2-.5-.5-.5-.8 0-.2.1-.4.3-.5.2-.1.5-.2.8-.2.2 0 .4 0 .6.1.2.1.3.2.3.4 0 .1-.1.2-.2.2-.1 0-.2-.1-.3-.1-.1 0-.2 0-.3.1-.1.1-.1.2-.1.3 0 .2.2.4.5.5.3.1.7.1 1.1-.1.3-.2.5-.5.5-.8 0-.2-.1-.4-.3-.5-.2-.1-.5-.2-.8-.2-.2 0-.4 0-.6.1-.2.1-.3.2-.3.4 0 .1.1.2.2.2.1 0 .2-.1.3-.1.1 0 .2 0 .3.1.1.1.1.2.1.3 0 .2-.2.4-.5.5.3.1.7.1 1.1-.1.3-.2.5-.5.5-.8 0-.2-.1-.4-.3-.5-.2-.1-.5-.2-.8-.2-.2 0-.4 0-.6.1-.2.1-.3.2-.3.4 0 .1.1.2.2.2.1 0 .2-.1.3-.1.1 0 .2 0 .3.1.1.1.1.2.1.3 0 .2-.2.4-.5.5.3.1.7.1 1.1-.1.3-.2.5-.5.5-.8 0-.2-.1-.4-.3-.5-.2-.1-.5-.2-.8-.2-.2 0-.4 0-.6.1-.2.1-.3.2-.3.4 0 .1.1.2.2.2.1 0 .2-.1.3-.1.1 0 .2 0 .3.1.1.1.1.2.1.3 0 .2-.2.4-.5.5.3.1.7.1 1.1-.1.3-.2.5-.5.5-.8 0-.2-.1-.4-.3-.5-.2-.1-.5-.2-.8-.2-.2 0-.4 0-.6.1-.2.1-.3.2-.3.4 0 .1.1.2.2.2.1 0 .2-.1.3-.1.1 0 .2 0 .3.1.1.1.1.2.1.3 0 .2-.2.4-.5.5.3.1.7.1 1.1-.1.3-.2.5-.5.5-.8 0-.2-.1-.4-.3-.5-.2-.1-.5-.2-.8-.2-.2 0-.4 0-.6.1-.2.1-.3.2-.3.4 0 .1.1.2.2.2.1 0 .2-.1.3-.1.1 0 .2 0 .3.1.1.1.1.2.1.3 0 .2-.2.4-.5.5.3.1.7.1 1.1-.1.3-.2.5-.5.5-.8 0-.2-.1-.4-.3-.5-.2-.1-.5-.2-.8-.2-.2 0-.4 0-.6.1-.2.1-.3.2-.3.4 0 .1.1.2.2.2.1 0 .2-.1.3-.1.1 0 .2 0 .3.1.1.1.1.2.1.3 0 .2-.2.4-.5.5.3.1.7.1 1.1-.1.3-.2.5-.5.5-.8 0-.2-.1-.4-.3-.5-.2-.1-.5-.2-.8-.2-.2 0-.4 0-.6.1-.2.1-.3.2-.3.4 0 .1.1.2.2.2.1 0 .2-.1.3-.1.1 0 .2 0 .3.1.1.1.1.2.1.3 0 .2-.2.4-.5.5.3.1.7.1 1.1-.1.3-.2.5-.5.5-.8 0-.2-.1-.4-.3-.5-.2-.1-.5-.2-.8-.2-.2 0-.4 0-.6.1-.2.1-.3.2-.3.4 0 .1.1.2.2.2.1 0 .2-.1.3-.1.1 0 .2 0 .3.1.1.1.1.2.1.3 0 .2-.2.4-.5.5.3.1.7.1 1.1-.1.3-.2.5-.5.5-.8 0-.2-.1-.4-.3-.5-.2-.1-.5-.2-.8-.2-.2 0-.4 0-.6.1-.2.1-.3.2-.3.4 0 .1.1.2.2.2.1 0 .2-.1.3-.1.1 0 .2 0 .3.1.1.1.1.2.1.3 0 .2-.2.4-.5.5z" fill="#fff"/></svg>
                      </button>
                        <button className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#B6D6F6] bg-white">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#29A9EA"/><path d="M18.5 8.5l-7 2.5c-.3.1-.3.5 0 .6l1.7.5 1.2 3.7c.1.3.5.3.6 0l1.2-2.1 1.7 1.2c.2.1.5 0 .6-.2l1.2-4.2c.1-.3-.2-.5-.5-.4z" fill="#fff"/></svg>
                      </button>
                        <button className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#B6D6F6] bg-white">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#0077B5"/><path d="M9.5 10.5h1v4h-1v-4zm.5-1.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5-.5.2-.5.5.2.5.5.5zm2.5 1.2h1v.6c.1-.2.4-.6 1.1-.6.8 0 1.4.5 1.4 1.6v2.4h-1v-2.1c0-.5-.2-.8-.7-.8-.4 0-.7.3-.7.8v2.1h-1v-4z" fill="#fff"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Campaign History */}
              <div className="col-span-1" style={{ width: 1023, height: 440, top:438, left:866 }}>
                <div className="bg-[#f9f9fa] rounded-[40px] p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26.6099" cy="26.6099" r="26.6099" fill="#1C0A6B"/>
                        <path d="M26.3242 16.8242C21.085 16.8242 16.8242 21.085 16.8242 26.3242C16.8242 31.5634 21.085 35.8242 26.3242 35.8242C31.5634 35.8242 35.8242 31.5634 35.8242 26.3242C35.8242 21.085 31.5634 16.8242 26.3242 16.8242ZM26.3242 18.0909C30.8789 18.0909 34.5625 21.7696 34.5625 26.3242C34.5625 30.8789 30.8789 34.5625 26.3242 34.5625C21.7696 34.5625 18.0909 30.8789 18.0909 26.3242C18.0909 21.7696 21.7696 18.0909 26.3242 18.0909ZM26.3156 21.2613C26.1482 21.2642 25.9889 21.3333 25.8723 21.4533C25.7557 21.5734 25.6914 21.7347 25.6934 21.902V22.4352C24.6707 22.627 23.7958 23.2855 23.7958 24.4267C23.7958 25.2184 24.1527 25.8587 24.632 26.2314C25.1113 26.6042 25.6525 26.7695 26.1275 26.9279C26.6025 27.0862 27.0126 27.2376 27.2458 27.4189C27.479 27.6003 27.5909 27.7529 27.5909 28.2279C27.5909 29.2835 25.0625 29.2835 25.0625 28.2279C25.0644 28.1436 25.0494 28.0597 25.0184 27.9812C24.9874 27.9027 24.941 27.8313 24.8821 27.7709C24.8231 27.7106 24.7526 27.6627 24.6748 27.63C24.5971 27.5972 24.5135 27.5804 24.4292 27.5804C24.3448 27.5804 24.2613 27.5972 24.1835 27.63C24.1057 27.6627 24.0353 27.7106 23.9763 27.7709C23.9173 27.8313 23.8709 27.9027 23.8399 27.9812C23.809 28.0597 23.794 28.1436 23.7958 28.2279C23.7958 29.3682 24.6715 30.028 25.6934 30.2207V30.7514C25.6915 30.8357 25.7065 30.9196 25.7375 30.9981C25.7685 31.0766 25.8148 31.148 25.8738 31.2084C25.9328 31.2687 26.0033 31.3166 26.081 31.3493C26.1588 31.3821 26.2423 31.3989 26.3267 31.3989C26.4111 31.3989 26.4946 31.3821 26.5724 31.3493C26.6501 31.3166 26.7206 31.2687 26.7796 31.2084C26.8386 31.148 26.8849 31.0766 26.9159 30.9981C26.9469 30.9196 26.9619 30.8357 26.96 30.7514V30.2207C27.982 30.0281 28.8588 29.3684 28.8588 28.2279C28.8588 27.4363 28.5007 26.796 28.0214 26.4232C27.542 26.0504 27.0008 25.8839 26.5258 25.7255C26.0508 25.5672 25.6408 25.417 25.4076 25.2357C25.1744 25.0543 25.0625 24.9017 25.0625 24.4267C25.0625 23.3711 27.5909 23.3711 27.5909 24.4267C27.5909 24.5948 27.6577 24.7561 27.7766 24.875C27.8955 24.9939 28.0567 25.0606 28.2248 25.0606C28.393 25.0606 28.5542 24.9939 28.6731 24.875C28.792 24.7561 28.8588 24.5948 28.8588 24.4267C28.8588 23.2872 27.9817 22.6294 26.96 22.4364V21.902C26.961 21.8173 26.945 21.7332 26.9129 21.6548C26.8808 21.5763 26.8334 21.5051 26.7733 21.4454C26.7132 21.3856 26.6417 21.3386 26.5631 21.3069C26.4845 21.2753 26.4003 21.2598 26.3156 21.2613Z" fill="white"/>
                      </svg>
                      <h3
                        style={{
                          fontFamily: '"Wix Madefor Text", sans-serif',
                          fontWeight: 500,
                          fontStyle: 'normal',
                          fontSize: '21px',
                          lineHeight: '100%',
                          letterSpacing: 0,
                          color: '#1C0A6B'
                        }}
                      >
                        Campaign History
                      </h3>
                    </div>
                    <div className="flex gap-1">
                    <button className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#CCD7E4] text-[#1C0A6B] bg-white hover:bg-[#F4F6F8]">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.38963 6.38953V0H8.21154V6.38953H14.6011V8.21145H8.21154V14.601H6.38963V8.21145H9.15527e-05V6.38953H6.38963Z" fill="#1C0A6B"/></svg>
                    </button>
                    <button className="w-[54px] h-[54px] flex items-center justify-center rounded-full border border-[#CCD7E4] text-[#1C0A6B] bg-white hover:bg-[#F4F6F8]">
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66564 12.2884C1.49815 12.2884 1.33099 12.2246 1.20309 12.0967C0.947604 11.8412 0.947604 11.4271 1.20309 11.1716L11.4269 0.947956C11.6821 0.692478 12.0966 0.692478 12.352 0.947956C12.6075 1.20343 12.6075 1.61756 12.352 1.87304L2.12819 12.0967C2.00061 12.2243 1.83312 12.2884 1.66564 12.2884Z" fill="#1C0A6B"/><path d="M0.654897 17C0.609427 17 0.563303 16.9951 0.517179 16.9853C0.163887 16.9094 -0.0611722 16.5617 0.01472 16.2084L1.02553 11.497C1.10142 11.1437 1.45078 10.9193 1.80244 10.9945C2.15573 11.0704 2.38079 11.4181 2.3049 11.7714L1.29409 16.4829C1.22834 16.79 0.95683 17 0.654897 17Z" fill="#1C0A6B"/><path d="M5.36608 15.989C5.19859 15.989 5.03143 15.9252 4.90353 15.7973C4.64804 15.5418 4.64804 15.1277 4.90353 14.8722L15.1274 4.64888C15.3825 4.39341 15.797 4.39341 16.0525 4.64888C16.308 4.90436 16.308 5.31849 16.0525 5.57397L5.82895 15.7973C5.70105 15.9252 5.53356 15.989 5.36608 15.989Z" fill="#1C0A6B"/><path d="M0.653818 16.9997C0.351885 16.9997 0.0807015 16.7897 0.014623 16.4825C-0.060942 16.1292 0.16379 15.7815 0.517081 15.7056L5.22861 14.6948C5.58223 14.6199 5.92996 14.8443 6.00553 15.1973C6.08109 15.5506 5.85636 15.8983 5.50307 15.9742L0.791536 16.985C0.745412 16.9951 0.699288 16.9997 0.653818 16.9997Z" fill="#1C0A6B"/><path d="M13.7392 7.61598C13.5717 7.61598 13.4042 7.55219 13.2766 7.42429L9.57589 3.72363C9.32041 3.46815 9.32041 3.05402 9.57589 2.79854C9.83104 2.54306 10.2458 2.54306 10.501 2.79854L14.2017 6.49921C14.4572 6.75468 14.4572 7.16881 14.2017 7.42429C14.0741 7.55219 13.9066 7.61598 13.7392 7.61598Z" fill="#1C0A6B"/><path d="M15.5897 5.76575C15.4222 5.76575 15.2547 5.70196 15.1268 5.57406C14.8713 5.31858 14.8713 4.90445 15.1268 4.64865C15.4909 4.28457 15.6914 3.7916 15.6914 3.26102C15.6914 2.73044 15.4909 2.23747 15.1268 1.87339C14.7624 1.50899 14.2694 1.30846 13.7388 1.30846C13.2082 1.30846 12.7153 1.50899 12.3512 1.87339C12.096 2.12887 11.6819 2.1292 11.4257 1.87339C11.1703 1.61792 11.1703 1.20379 11.4257 0.947982C12.0368 0.336602 12.8582 0 13.7388 0C14.6191 0 15.4408 0.336602 16.0519 0.947982C16.6633 1.55903 16.9999 2.38042 16.9999 3.26102C16.9999 4.14162 16.6633 4.963 16.0519 5.57406C15.9246 5.70163 15.7572 5.76575 15.5897 5.76575Z" fill="#1C0A6B"/></svg>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  {/* Google Adwords Card */}
                    <div className="bg-[#F2F0FA] rounded-[40px] p-8 flex flex-col justify-between" style={{ width: 485, height: 296, top: 536, left: 885, opacity: 1 }}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-[20px] flex items-center justify-center" style={{background: '#E6F4D7'}}>
                            {/* Google Ads SVG (custom) */}
                            <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19.402 0.816706C16.5155 -0.849988 12.8302 0.137119 11.1635 3.02444L0.818857 20.9424C-1.85098 25.5663 2.42717 31.1704 7.6028 29.7832C9.15891 29.3663 10.4593 28.3681 11.2647 26.9732L21.6094 9.05521C23.2724 6.17529 22.282 2.4797 19.402 0.816706Z" fill="#FABC04"/>
                              <path d="M32.0832 20.9425L21.7381 3.02453C20.9327 1.62959 19.6319 0.631381 18.0762 0.214502C12.8989 -1.17304 8.62407 4.43345 11.2923 9.0553L21.6374 26.9733C23.3036 29.859 26.9881 30.8481 29.8759 29.181C32.7554 27.518 33.7458 23.8224 32.0832 20.9425Z" fill="#3C8BD9"/>
                              <path d="M11.8668 22.3971C11.0043 19.1776 7.70048 17.2695 4.48056 18.1325C-0.696714 19.5196 -1.59584 26.5124 3.02601 29.181C7.63717 31.843 13.2617 27.6023 11.8668 22.3971Z" fill="#34A852"/>
                          </svg>
                        </div>
                        <div>
                            <h4
                              style={{
                                fontFamily: '"Wix Madefor Text", sans-serif',
                                fontWeight: 400,
                                fontStyle: 'normal',
                                fontSize: '26px',
                                lineHeight: '100%',
                                letterSpacing: 0,
                                color: '#1C0A6B',
                                marginBottom:8,
                              }}
                            >
                              Google Adwords
                            </h4>
                            <p style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '16px', lineHeight: '100%', letterSpacing: 0, color: '#8B8B99' }}>
                              Status: <span style={{ color: '#1C0A6B' }}>Connected</span>
                            </p>
                        </div>
                      </div>
                      <button className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#CCD7E4]">
                        <svg className="w-6 h-6 text-[#1C0A6B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-8 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#1C0A6B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
                        </div>
                        <div>
                          <p className="text-base text-[#8B8B99]">Type</p>
                            <p style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '18px', lineHeight: '100%', letterSpacing: 0, color: '#1C0A6B' }}>
                              Web Marketing
                            </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#1C0A6B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="4"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                        </div>
                        <div>
                          <p className="text-base text-[#8B8B99]">Start Date</p>
                            <p style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '18px', lineHeight: '100%', letterSpacing: 0, color: '#1C0A6B' }}>
                              18.02.2025
                            </p>
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-[#1C0A6B] text-white py-4 rounded-[20px] text-xl font-bold">Send email</button>
                  </div>
                  {/* X-twitter Card */}
                    <div className="bg-[#F6F4FB] rounded-[40px] p-8 flex flex-col justify-between" style={{ width: 485, height: 296, top: 536, left: 885, opacity: 1 }}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-[20px] flex items-center justify-center" style={{background: '#1C0A6B'}}>
                            {/* X logo SVG (custom) */}
                            <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22.02 16.0904L35.7941 0H32.5301L20.5701 13.9711L11.0176 0H0L14.4452 21.1267L0 38H3.2642L15.8943 23.2461L25.9824 38H37L22.0192 16.0904H22.02ZM17.5493 21.3129L16.0857 19.2091L4.44034 2.46938H9.45396L18.8519 15.9789L20.3155 18.0826L32.5316 35.6429H27.518L17.5493 21.3137V21.3129Z" fill="white"/>
                          </svg>
                        </div>
                        <div>
                            <h4
                              style={{
                                fontFamily: '"Wix Madefor Text", sans-serif',
                                fontWeight: 400,
                                fontStyle: 'normal',
                                fontSize: '26px',
                                lineHeight: '100%',
                                letterSpacing: 0,
                                color: '#1C0A6B',
                                marginBottom:8,
                              }}
                            >
                              X-twitter Social Listening
                            </h4>
                            <p style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '16px', lineHeight: '100%', letterSpacing: 0, color: '#8B8B99' }}>
                              Status: <span style={{ color: '#1C0A6B' }}>Engaged</span>
                            </p>
                        </div>
                      </div>
                      <button className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#CCD7E4]">
                        <svg className="w-6 h-6 text-[#1C0A6B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-8 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#1C0A6B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
                        </div>
                        <div>
                          <p className="text-base text-[#8B8B99]">Type</p>
                            <p style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '18px', lineHeight: '100%', letterSpacing: 0, color: '#1C0A6B' }}>
                              Social Media
                            </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#1C0A6B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="4"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                        </div>
                        <div>
                          <p className="text-base text-[#8B8B99]">Start Date</p>
                            <p style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '18px', lineHeight: '100%', letterSpacing: 0, color: '#1C0A6B' }}>
                              06.03.2025
                            </p>
                          </div>
                        </div>
                      </div>
                      <button className="w-full bg-[#1C0A6B] text-white py-4 rounded-[20px] text-xl font-bold">Send email</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Einstein Scoring */}
            <div className="bg-white rounded-[40px] p-4 border border-gray-200 " style={{ width: 1441, height: 485, opacity: 1, marginTop: 2, position: 'relative' }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-[54px] h-[54px] bg-blue-900 rounded-full flex items-center justify-center">
                  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26.6099" cy="26.6099" r="26.6099" fill="#1C0A6B"/>
                        <path d="M26.3242 16.8242C21.085 16.8242 16.8242 21.085 16.8242 26.3242C16.8242 31.5634 21.085 35.8242 26.3242 35.8242C31.5634 35.8242 35.8242 31.5634 35.8242 26.3242C35.8242 21.085 31.5634 16.8242 26.3242 16.8242ZM26.3242 18.0909C30.8789 18.0909 34.5625 21.7696 34.5625 26.3242C34.5625 30.8789 30.8789 34.5625 26.3242 34.5625C21.7696 34.5625 18.0909 30.8789 18.0909 26.3242C18.0909 21.7696 21.7696 18.0909 26.3242 18.0909ZM26.3156 21.2613C26.1482 21.2642 25.9889 21.3333 25.8723 21.4533C25.7557 21.5734 25.6914 21.7347 25.6934 21.902V22.4352C24.6707 22.627 23.7958 23.2855 23.7958 24.4267C23.7958 25.2184 24.1527 25.8587 24.632 26.2314C25.1113 26.6042 25.6525 26.7695 26.1275 26.9279C26.6025 27.0862 27.0126 27.2376 27.2458 27.4189C27.479 27.6003 27.5909 27.7529 27.5909 28.2279C27.5909 29.2835 25.0625 29.2835 25.0625 28.2279C25.0644 28.1436 25.0494 28.0597 25.0184 27.9812C24.9874 27.9027 24.941 27.8313 24.8821 27.7709C24.8231 27.7106 24.7526 27.6627 24.6748 27.63C24.5971 27.5972 24.5135 27.5804 24.4292 27.5804C24.3448 27.5804 24.2613 27.5972 24.1835 27.63C24.1057 27.6627 24.0353 27.7106 23.9763 27.7709C23.9173 27.8313 23.8709 27.9027 23.8399 27.9812C23.809 28.0597 23.794 28.1436 23.7958 28.2279C23.7958 29.3682 24.6715 30.028 25.6934 30.2207V30.7514C25.6915 30.8357 25.7065 30.9196 25.7375 30.9981C25.7685 31.0766 25.8148 31.148 25.8738 31.2084C25.9328 31.2687 26.0033 31.3166 26.081 31.3493C26.1588 31.3821 26.2423 31.3989 26.3267 31.3989C26.4111 31.3989 26.4946 31.3821 26.5724 31.3493C26.6501 31.3166 26.7206 31.2687 26.7796 31.2084C26.8386 31.148 26.8849 31.0766 26.9159 30.9981C26.9469 30.9196 26.9619 30.8357 26.96 30.7514V30.2207C27.982 30.0281 28.8588 29.3684 28.8588 28.2279C28.8588 27.4363 28.5007 26.796 28.0214 26.4232C27.542 26.0504 27.0008 25.8839 26.5258 25.7255C26.0508 25.5672 25.6408 25.417 25.4076 25.2357C25.1744 25.0543 25.0625 24.9017 25.0625 24.4267C25.0625 23.3711 27.5909 23.3711 27.5909 24.4267C27.5909 24.5948 27.6577 24.7561 27.7766 24.875C27.8955 24.9939 28.0567 25.0606 28.2248 25.0606C28.393 25.0606 28.5542 24.9939 28.6731 24.875C28.792 24.7561 28.8588 24.5948 28.8588 24.4267C28.8588 23.2872 27.9817 22.6294 26.96 22.4364V21.902C26.961 21.8173 26.945 21.7332 26.9129 21.6548C26.8808 21.5763 26.8334 21.5051 26.7733 21.4454C26.7132 21.3856 26.6417 21.3386 26.5631 21.3069C26.4845 21.2753 26.4003 21.2598 26.3156 21.2613Z" fill="white"/>
                      </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: '"Wix Madefor Text", sans-serif',
                      fontWeight: 500,
                      fontStyle: 'normal',
                      fontSize: '21px',
                      lineHeight: '100%',
                      letterSpacing: 0,
                      color: '#1C0A6B'
                    }}
                  >
                    Einstein Scoring
                  </h3>
                </div>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.65" y="0.65" width="52.7" height="52.7" rx="26.35" stroke="#D5D1E8" strokeWidth="1.3"/>
                    <path d="M22.4697 31.4697C22.1768 31.7626 22.1768 32.2374 22.4697 32.5303C22.7626 32.8232 23.2374 32.8232 23.5303 32.5303L22.4697 31.4697ZM33.0128 22.7372C33.0128 22.323 32.677 21.9872 32.2628 21.9872L25.5128 21.9872C25.0986 21.9872 24.7628 22.323 24.7628 22.7372C24.7628 23.1514 25.0986 23.4872 25.5128 23.4872L31.5128 23.4872L31.5128 29.4872C31.5128 29.9014 31.8486 30.2372 32.2628 30.2372C32.677 30.2372 33.0128 29.9014 33.0128 29.4872L33.0128 22.7372ZM23 32L23.5303 32.5303L32.7931 23.2676L32.2628 22.7372L31.7324 22.2069L22.4697 31.4697L23 32Z" fill="#1C0A6B"/>
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {/* Left Score */}
                <div className="flex items-center justify-between" style={{ width: 688, height: 377, background: '#F2F0FA', borderRadius: 32, opacity: 1, padding: 0 }}>
                  {/* Donut Chart */}
                  <div className="flex-1 flex flex-col items-center justify-center" style={{ minWidth: 0 }}>
                    <ScoreDonut
                      value={92}
                      label="Lead Score"
                      gradient={["#B6D6F6", "#6CC6E0"]}
                      gradientId="leadScoreGradient"
                      tickColor="#B6D6F6"
                      circleRatio={0.75}
                      background="#F2F0FA"
                      width={280}
                      height={280}
                    />
                  </div>
                  {/* Top Positives */}
                  <div className="flex flex-col justify-center" style={{ width: 300, height: '100%', paddingRight: 32 }}>
                    <div style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 500, fontSize: 20, color: '#1C0A6B', marginBottom: 24 }}>Top Positives</div>
                    <div className="flex flex-col gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                          <User className="w-6 h-6 text-[#1C0A6B]" />
                        </span>
                        <div>
                          <div style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 400, fontSize: 14, color: '#8B8B99' }}>Product Interest</div>
                          <div style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 500, fontSize: 18, color: '#1C0A6B' }}>Service</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                          <User className="w-6 h-6 text-[#1C0A6B]" />
                        </span>
                        <div>
                          <div style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 400, fontSize: 14, color: '#8B8B99' }}>Engagement Grade</div>
                          <div style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 500, fontSize: 18, color: '#1C0A6B' }}>85</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                          <Mail className="w-6 h-6 text-[#1C0A6B]" />
                        </span>
                        <div>
                          <div style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 400, fontSize: 14, color: '#8B8B99' }}>Lead Source</div>
                          <div style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 500, fontSize: 18, color: '#1C0A6B' }}>Cold Call</div>
                        </div>
                      </div>
                    </div>
                    <button style={{ width: 220, height: 48, background: '#22008C', color: 'white', borderRadius: 32, fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 500, fontSize: 20, marginTop: 16, alignSelf: 'center' }}>
                      Send email
                    </button>
                  </div>
                </div>

                {/* Right Score */}
                <div className="flex items-center justify-between" style={{ width: 688, height: 377, background: '#F2F0FA', borderRadius: 32, opacity: 1, padding: 0 }}>
                  {/* Donut Chart */}
                  <div className="flex-1 flex flex-col items-center justify-center relative" style={{ minWidth: 0, width: 302, height: 299 }}>
                    <ScoreDonut
                      value={55}
                      label="Behavior Score"
                      gradient={["#CF3393", "#FF94D6"]}
                      gradientId="behaviorScoreGradient"
                      tickColor="#BCB3DF"
                      circleRatio={0.75}
                      background="#F6F4FB"
                      width={280}
                      height={280}
                    />
                  </div>
                  {/* Top Positives */}
                  <div className="flex flex-col justify-center" style={{ width: 300, height: '100%', paddingRight: 32 }}>
                    <div style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 500, fontSize: 20, color: '#1C0A6B', marginBottom: 24 }}>Top Positives</div>
                    <div className="flex flex-col gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                          <User className="w-6 h-6 text-[#1C0A6B]" />
                        </span>
                        <div>
                          <div style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 400, fontSize: 14, color: '#8B8B99' }}>Company is</div>
                          <div style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 500, fontSize: 18, color: '#1C0A6B' }}>Valid</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                          <User className="w-6 h-6 text-[#1C0A6B]" />
                        </span>
                        <div>
                          <div style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 400, fontSize: 14, color: '#8B8B99' }}>Engagement Grade</div>
                          <div style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 500, fontSize: 18, color: '#1C0A6B' }}>48</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                          <Mail className="w-6 h-6 text-[#1C0A6B]" />
                        </span>
                        <div>
                          <div style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 400, fontSize: 14, color: '#8B8B99' }}>Lead Source</div>
                          <div style={{ fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 500, fontSize: 18, color: '#1C0A6B' }}>Specified</div>
                        </div>
                      </div>
                    </div>
                    <button style={{ width: 220, height: 48, background: '#22008C', color: 'white', borderRadius: 32, fontFamily: '"Wix Madefor Text", sans-serif', fontWeight: 500, fontSize: 20, marginTop: 16, alignSelf: 'center' }}>
                      Send email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesEngagement;