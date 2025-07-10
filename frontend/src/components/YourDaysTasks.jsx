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
    <div className="flex items-center gap-4 mb-8 mt-2">
      <h2
        className=""
        style={{
          fontFamily: 'Wix Madefor Text',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '35px',
          lineHeight: '100%',
          letterSpacing: '0',
        }}
      >
        Your Days Tasks
      </h2>
      <span
        className="text-lg font-semibold font-manrope underline underline-offset-4 decoration-2 decoration-black flex items-end justify-center items-center"
        style={{ width: '75px', height: '32px', opacity: 1 }}
      >
        <span className="text-black text-lg">16 Tasks</span>
      </span>
      <button
        className="flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 ml-4"
        style={{ width: '61px', height: '61px', opacity: 1 }}
      >
        <span style={{ display: 'inline-block' }}>
          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32.5002" cy="32.5" r="31.25" stroke="#D3DAE2" strokeWidth="1.5"/>
            <path d="M41.7196 41.3737L39.0372 38.7008C40.4914 36.9043 41.2008 34.6183 41.0191 32.3142C40.8374 30.01 39.7785 27.8635 38.0607 26.3171C36.343 24.7708 34.0973 23.9425 31.7868 24.0031C29.4764 24.0637 27.2772 25.0086 25.6429 26.6429C24.0086 28.2772 23.0637 30.4764 23.0031 32.7868C22.9425 35.0973 23.7708 37.343 25.3171 39.0607C26.8635 40.7785 29.01 41.8374 31.3142 42.0191C33.6183 42.2008 35.9043 41.4914 37.7008 40.0372L40.3737 42.7196C40.4618 42.8085 40.5666 42.879 40.6821 42.9271C40.7976 42.9752 40.9215 43 41.0467 43C41.1718 43 41.2957 42.9752 41.4112 42.9271C41.5267 42.879 41.6315 42.8085 41.7196 42.7196C41.8085 42.6315 41.879 42.5267 41.9271 42.4112C41.9752 42.2957 42 42.1718 42 42.0467C42 41.9215 41.9752 41.7976 41.9271 41.6821C41.879 41.5666 41.8085 41.4618 41.7196 41.3737ZM24.9333 33.0421C24.9333 31.6361 25.3502 30.2617 26.1313 29.0927C26.9125 27.9236 28.0227 27.0124 29.3217 26.4744C30.6206 25.9363 32.05 25.7956 33.429 26.0699C34.808 26.3442 36.0746 27.0212 37.0688 28.0154C38.063 29.0096 38.7401 30.2763 39.0144 31.6552C39.2887 33.0342 39.1479 34.4636 38.6098 35.7626C38.0718 37.0615 37.1606 38.1718 35.9916 38.9529C34.8225 39.734 33.4481 40.151 32.0421 40.151C30.1567 40.151 28.3486 39.402 27.0154 38.0688C25.6822 36.7357 24.9333 34.9275 24.9333 33.0421Z" fill="#2E4C73"/>
          </svg>
        </span>
      </button>
      <button className="px-6 py-2 rounded-full bg-white border border-gray-200 text-gray-900 font-semibold shadow-sm">All</button>
      <button className="px-6 py-2 rounded-full border border-orange-400 text-orange-500 font-semibold flex items-center gap-2 bg-orange-50"><span role='img' aria-label='fire'>🔥</span>Hot</button>
      <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-500 font-semibold bg-white">Due Today</button>
      <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-500 font-semibold bg-white">Over due</button>
      <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-500 font-semibold bg-white">Completed</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {tasks.map((task, i) => (
        <div key={i} className={`rounded-3xl shadow p-6 flex flex-col gap-2 relative ${task.highlight ? "bg-orange-500 text-white" : "bg-white"}`}>
          <img src={task.avatar} alt={task.person} className="w-12 h-12 rounded-full absolute -top-7 left-6 border-4 border-white shadow" />
          <div className="mt-8">
            <h3 className={`text-lg font-semibold ${task.highlight ? "text-white" : "text-gray-900"}`}>{task.name}</h3>
            <div className={`text-sm mb-2 ${task.highlight ? "text-orange-100" : "text-gray-500"}`}>{task.person} <span className="font-normal">{task.title}</span></div>
            {task.date && (
              <div className="flex items-center gap-2 mb-2">
                <Calendar className={`w-4 h-4 ${task.highlight ? "text-white" : "text-gray-400"}`} />
                <span className={task.highlight ? "text-white" : "text-gray-700"}>{task.date} at {task.time}</span>
              </div>
            )}
            {task.amount && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400">Amount:</span>
                <span className="font-semibold text-gray-700">{task.amount}</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between mt-4">
            <button className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${task.highlight ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-700"}`}>
              <Circle className="w-3 h-3" /> {task.status}
            </button>
            <div className="flex gap-2">
              <button className={`p-2 rounded-full ${task.highlight ? "bg-orange-600" : "bg-gray-100"}`}><ArrowRight className={`w-4 h-4 ${task.highlight ? "text-white" : "text-gray-500"}`} /></button>
              <button className={`p-2 rounded-full ${task.highlight ? "bg-orange-600" : "bg-gray-100"}`}><Bell className={`w-4 h-4 ${task.highlight ? "text-white" : "text-gray-500"}`} /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default YourDaysTasks; 