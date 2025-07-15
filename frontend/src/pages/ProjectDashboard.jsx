import React, { useState } from 'react';
import { Search, Bell, Phone, Mail, Calendar, MoreHorizontal, Users, MessageSquare, ChevronDown } from 'lucide-react';

const ProjectDashboard = () => {
  const [activeTab, setActiveTab] = useState('Task');
  const [selectedDepartment, setSelectedDepartment] = useState('Department');
  const [selectedRole, setSelectedRole] = useState('Role');

  const tabs = ['Overview', 'Details', 'Task', 'Milestones', 'Notes'];
  
  const projectColumns = [
    {
      title: 'New',
      count: 4,
      color: 'bg-white',
      projects: [
        {
          id: 1,
          title: 'Get project',
          description: 'Project Web Development and Digital Marketing',
          created: '11.05.2024',
          due: '15.05.2024',
          assignedTo: 'Tuhin Biswas',
          priority: 'High',
          team: [
            'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
            'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
          ],
          comments: 0,
          attachments: 3
        }
      ]
    },
    {
      title: 'InProgress',
      count: 4,
      color: 'bg-white',
      projects: [
        {
          id: 2,
          title: 'Get project',
          description: 'Project Web Development and Digital Marketing',
          created: '11.05.2024',
          due: '15.05.2024',
          assignedTo: 'Tuhin Biswas',
          priority: 'High',
          team: [
            'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
            'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
          ],
          comments: 0,
          attachments: 2
        },
        {
          id: 3,
          title: 'Get project',
          description: 'Project Web Development and Digital Marketing',
          created: '11.05.2024',
          due: '15.05.2024',
          assignedTo: 'Tuhin Biswas',
          priority: 'High',
          team: [
            'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
            'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
          ],
          comments: 0,
          attachments: 3
        }
      ]
    },
    {
      title: 'Awaiting feedback',
      count: 4,
      color: 'bg-white',
      projects: [
        {
          id: 4,
          title: 'Get project',
          description: 'Project Web Development and Digital Marketing',
          created: '11.05.2024',
          due: '15.05.2024',
          assignedTo: 'Tuhin Biswas',
          priority: 'High',
          team: [
            'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
            'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
          ],
          comments: 0,
          attachments: 3
        }
      ]
    },
    {
      title: 'Completed',
      count: 4,
      color: 'bg-white',
      projects: [
        {
          id: 5,
          title: 'Get project',
          description: 'Project Web Development and Digital Marketing',
          created: '11.05.2024',
          due: '15.05.2024',
          assignedTo: 'Tuhin Biswas',
          priority: 'High',
          team: [
            'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
            'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
          ],
          comments: 0,
          attachments: 1
        }
      ]
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg border border-[#E6E8EC] p-3 sm:p-4 md:p-5 mb-4 flex flex-col min-h-[180px] sm:min-h-[200px] transition-shadow hover:shadow-md">
      <div className="flex justify-between items-start mb-1 sm:mb-2">
        <h3 className="font-bold text-[#23262F] text-base sm:text-lg md:text-xl">{project.title}</h3>
        <button className="text-[#B1B5C3]">
          <MoreHorizontal className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
      <div className="text-xs sm:text-sm md:text-base text-[#B1B5C3] mb-1 sm:mb-2 leading-snug">
        Project: Web Development and Digital Marketing<br/>
        Created: {project.created}<br/>
        Due: {project.due}<br/>
        Assigned To: {project.assignedTo}
      </div>
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <span className="inline-block bg-[#FFF1E5] text-[#FF8300] font-bold text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-md">High</span>
        <div className="flex -space-x-2 sm:-space-x-3">
          {project.team.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`Team member ${index + 1}`}
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-[#FF8300] bg-white"
            />
          ))}
        </div>
      </div>
      <hr className="border-t border-[#E6E8EC] my-1 sm:my-2" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-1 sm:mt-2 gap-1 sm:gap-0">
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="flex items-center gap-1 text-[#B1B5C3]">
            <svg width="18" height="18" className="sm:w-5 sm:h-5" fill="none" viewBox="0 0 20 20"><rect x="1.5" y="3.5" width="17" height="13" rx="2.5" stroke="#B1B5C3" strokeWidth="1.2"/><path d="M6.5 8.5h7M6.5 11.5h4" stroke="#B1B5C3" strokeWidth="1.2" strokeLinecap="round"/></svg>
            <span className="text-xs sm:text-base">{project.comments}</span>
          </div>
          <div className="flex items-center gap-1 text-[#B1B5C3]">
            <svg width="18" height="18" className="sm:w-5 sm:h-5" fill="none" viewBox="0 0 20 20"><path d="M4.5 5.5h11v9a2 2 0 01-2 2h-7a2 2 0 01-2-2v-9z" stroke="#B1B5C3" strokeWidth="1.2"/><path d="M7.5 8.5h5M7.5 11.5h3" stroke="#B1B5C3" strokeWidth="1.2" strokeLinecap="round"/></svg>
            <span className="text-xs sm:text-base">{project.attachments}</span>
          </div>
        </div>
        <span className="text-xs sm:text-sm md:text-base px-0 sm:px-2 text-[#B1B5C3] mt-1 sm:mt-0">Client: John Company</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F5EDE3]">
      {/* Header */}
      <header className="bg-[#F5EDE3] border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-row items-start justify-between gap-x-2 w-full min-w-0 flex-nowrap overflow-x-auto scrollbar-hide">
          {/* Logo left */}
          <div className="flex items-center gap-2 justify-start shrink-0 self-start max-w-[60px] xs:max-w-[70px] sm:max-w-[95px] h-auto">
            <span className="flex items-center justify-center w-full h-auto">
              {/* Provided SVG logo */}
              <svg className="w-full h-auto" viewBox="0 0 95 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_788_508)">
                  <path d="M14.2408 6.04965C10.0428 6.04965 6.62529 9.62717 6.62529 14.0221C6.62529 18.4195 10.0403 21.9946 14.2408 21.9946C18.4412 21.9946 21.8562 18.4171 21.8562 14.0221C21.8562 9.62471 18.4412 6.04965 14.2408 6.04965ZM14.2408 28.0441C6.50957 28.0441 0.21875 21.7533 0.21875 14.0221C0.21875 6.29094 6.50957 0.00012207 14.2408 0.00012207C21.9719 0.00012207 28.2628 6.29094 28.2628 14.0221C28.2628 21.7533 21.9744 28.0441 14.2408 28.0441ZM14.5904 31.9023C18.5594 31.7915 22.0532 32.9783 24.8896 35.928C26.3004 37.3954 27.3813 39.0451 25.9089 41.0763C24.5917 42.8959 22.6638 43.3415 20.8763 42.1843C16.2917 39.2125 11.914 39.1091 7.33193 42.2139C5.56903 43.408 3.66577 43.0387 2.44454 40.9877C1.20115 38.8998 2.14908 37.1541 3.56236 35.7532C6.63268 32.7148 10.5278 31.9811 14.5904 31.9023Z" fill="#FF6823"/>
                  <path d="M35.5215 30.3855H36.6442L36.76 31.3088H36.8092C37.5355 30.6982 38.4268 30.186 39.3674 30.186C41.4282 30.186 42.5337 31.7864 42.5337 34.2781C42.5337 37.0013 40.9013 38.6017 39.0695 38.6017C38.3259 38.6017 37.5848 38.2545 36.8437 37.6784L36.8757 39.0794V41.7828H35.5239V30.3855H35.5215ZM41.1327 34.2781C41.1327 32.5128 40.5394 31.326 39.0202 31.326C38.3431 31.326 37.6685 31.7052 36.8757 32.4143V36.6197C37.602 37.2303 38.3111 37.4617 38.838 37.4617C40.1577 37.4617 41.1327 36.2577 41.1327 34.2781Z" fill="#FF6823"/>
                  <path d="M44.084 34.4112C44.084 31.789 45.8494 30.1886 47.6787 30.1886C49.7248 30.1886 50.8795 31.656 50.8795 33.9508C50.8795 34.2315 50.8623 34.5269 50.8303 34.7264H45.4185C45.517 36.4253 46.556 37.5135 48.0899 37.5135C48.8483 37.5135 49.4934 37.2648 50.0867 36.8857L50.5644 37.777C49.8725 38.2226 49.0132 38.6018 47.925 38.6018C45.7829 38.6018 44.084 37.0334 44.084 34.4112ZM49.6928 33.7513C49.6928 32.1362 48.9664 31.2596 47.7132 31.2596C46.5905 31.2596 45.5687 32.1657 45.4037 33.7513H49.6928Z" fill="#FF6823"/>
                  <path d="M52.8594 30.3856H53.9821L54.0978 31.8382H54.1471C54.6912 30.8312 55.516 30.1886 56.4246 30.1886C56.7717 30.1886 57.018 30.2378 57.2839 30.3536L57.0204 31.5403C56.757 31.4566 56.5748 31.4074 56.2448 31.4074C55.5678 31.4074 54.7602 31.9023 54.216 33.254V38.3999H52.8643V30.3856H52.8594Z" fill="#FF6823"/>
                  <path d="M58.1777 37.4938L58.8548 36.5878C59.5492 37.1491 60.2558 37.5455 61.2136 37.5455C62.2698 37.5455 62.7967 36.9842 62.7967 36.2923C62.7967 35.4675 61.839 35.1055 60.9649 34.7756C59.8274 34.362 58.5741 33.8178 58.5741 32.4661C58.5741 31.1784 59.5959 30.1886 61.3293 30.1886C62.3363 30.1886 63.2104 30.6022 63.821 31.0971L63.1784 31.954C62.6342 31.5403 62.0556 31.2449 61.3465 31.2449C60.3395 31.2449 59.8791 31.789 59.8791 32.3996C59.8791 33.158 60.7532 33.4387 61.6617 33.7858C62.8164 34.2142 64.1042 34.6919 64.1042 36.211C64.1042 37.5135 63.0651 38.6043 61.1668 38.6043C60.0244 38.6018 58.9361 38.1217 58.1777 37.4938Z" fill="#FF6823"/>
                  <path d="M65.3867 34.4112C65.3867 31.7225 67.1349 30.1886 69.0997 30.1886C71.062 30.1886 72.8126 31.7225 72.8126 34.4112C72.8126 37.0679 71.0645 38.6018 69.0997 38.6018C67.1349 38.6018 65.3867 37.0654 65.3867 34.4112ZM71.4067 34.4112C71.4067 32.5646 70.4834 31.3089 69.0972 31.3089C67.7282 31.3089 66.7877 32.5621 66.7877 34.4112C66.7877 36.2431 67.7282 37.4791 69.0972 37.4791C70.4834 37.4791 71.4067 36.2406 71.4067 34.4112Z" fill="#FF6823"/>
                  <path d="M74.9199 30.3856H76.0427L76.1584 31.5403H76.2076C76.966 30.782 77.7908 30.1886 78.8963 30.1886C80.5804 30.1886 81.3388 31.2769 81.3388 33.3229V38.4024H79.987V33.5027C79.987 32.0007 79.5242 31.3581 78.4704 31.3581C77.6455 31.3581 77.0842 31.7865 76.2766 32.5966V38.4024H74.9249V30.3856H74.9199Z" fill="#FF6823"/>
                  <path d="M83.4531 36.3243C83.4531 34.5762 84.955 33.7021 88.3701 33.3229C88.3701 32.3011 88.0401 31.3113 86.7204 31.3113C85.7971 31.3113 84.955 31.7398 84.3297 32.1682L83.8028 31.2276C84.5439 30.75 85.6666 30.1886 86.9543 30.1886C88.9167 30.1886 89.7415 31.4911 89.7415 33.4879V38.4048H88.6212L88.5055 37.447H88.4562C87.6979 38.0749 86.8066 38.6018 85.7996 38.6018C84.4577 38.6018 83.4531 37.7597 83.4531 36.3243ZM88.3676 36.44V34.2142C85.6937 34.5442 84.7704 35.204 84.7704 36.2258C84.7704 37.1344 85.3982 37.5135 86.1886 37.5135C86.9666 37.5111 87.592 37.1319 88.3676 36.44Z" fill="#FF6823"/>
                  <path d="M92.2598 36.7872V26.6578H93.6115V36.8857C93.6115 37.3141 93.7937 37.479 93.9907 37.479C94.0719 37.479 94.1384 37.479 94.2886 37.4446L94.4708 38.4664C94.2886 38.5476 94.0596 38.5993 93.6952 38.5993C92.6734 38.6018 92.2598 37.9567 92.2598 36.7872Z" fill="#FF6823"/>
                  <path d="M35.7031 7.33704H39.9627C44.5694 7.33704 47.5313 9.62931 47.5313 14.8122C47.5313 19.995 44.5669 22.4276 40.1473 22.4276H35.7031V7.33704ZM39.7534 19.6725C42.3214 19.6725 44.0351 18.4217 44.0351 14.8122C44.0351 11.2026 42.3214 10.0897 39.7534 10.0897H39.1058V19.6725H39.7534Z" fill="#FF6823"/>
                  <path d="M50.4004 7.33704H53.8031V22.4276H50.4004V7.33704Z" fill="#FF6823"/>
                  <path d="M57.8965 7.33704H67.3389V10.2079H61.2992V13.2388H66.4377V16.0851H61.2992V19.5567H67.5703V22.4276H57.8965V7.33704Z" fill="#FF6823"/>
                  <path d="M86.1848 7.33704H90.2818L95.0043 22.4276H91.3947L90.469 18.8403H85.8623L84.9365 22.4276H81.4648L86.1848 7.33704ZM86.5541 16.1787H89.7722L89.425 14.79C89.0089 13.2856 88.5928 11.503 88.1989 9.92969H88.1053C87.736 11.5276 87.342 13.2856 86.9259 14.79L86.5541 16.1787Z" fill="#FF6823"/>
                  <path d="M70.7715 7.33704H75.9568C79.2659 7.33704 81.9522 8.54103 81.9522 12.1973C81.9522 15.7379 79.2438 17.3112 76.0504 17.3112H74.1767V22.4252H70.7739V7.33704H70.7715ZM75.8386 14.6029C77.7123 14.6029 78.6159 13.7707 78.6159 12.1949C78.6159 10.6216 77.5966 10.043 75.745 10.043H74.1717V14.6029H75.8386Z" fill="#FF6823"/>
                </g>
                <defs>
                  <clipPath id="clip0_788_508">
                    <rect width="95" height="42.8908" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              
            </span>
          </div>

          {/* Search bar center */}
          <div className="flex-1 min-w-0 flex justify-center w-full sm:w-auto mt-1">
            <div className="flex items-center justify-center bg-white rounded-full px-2 sm:px-4 md:px-5 py-2 w-full max-w-full xs:max-w-[140px] sm:max-w-[180px] md:max-w-md lg:max-w-lg shadow-sm">
              {/* Provided search icon SVG */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M14.4623 14.4715C15.6893 13.2467 16.4484 11.5534 16.4484 9.6828C16.4484 5.94594 13.419 2.91663 9.68218 2.91663C5.94533 2.91663 2.91602 5.94594 2.91602 9.6828C2.91602 13.4196 5.94533 16.449 9.68218 16.449C11.5484 16.449 13.2382 15.6934 14.4623 14.4715ZM14.4623 14.4715L17.0827 17.0833" stroke="#272727" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <input type="text" placeholder="Search everything..." className="bg-transparent outline-none text-[#222] placeholder-[#8F9BBA] text-sm w-full" />
            </div>
          </div>

          {/* Right side: notification and avatar */}
          <div className="flex items-center space-x-2 sm:space-x-4 min-w-fit">
            {/* Notification bell with white circle background */}
            <span className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
              {/* Outer white circle SVG */}
              <svg className="absolute inset-0 w-8 h-8 sm:w-11 sm:h-11 md:w-10 md:h-10" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30.5" cy="30.5" r="30.5" fill="white"/>
              </svg>
              {/* Notification bell button, centered */}
              <button className="relative z-10 p-0 rounded-full shadow-none border-none focus:outline-none flex items-center justify-center w-6 h-6 md:w-8 md:h-8">
                <svg width="18" height="18" className="w-full h-full" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9163 18.9431H4.08342V20.8677H19.9163V18.9431ZM19.1531 9.48483L19.5956 13.3911L21.5081 13.1745L21.0655 9.26818L19.1531 9.48483ZM4.404 13.3911L4.8465 9.48483L2.93412 9.26818L2.49162 13.1745L4.404 13.3911ZM3.05301 16.5254C3.80317 15.6424 4.27282 14.5492 4.404 13.3911L2.49162 13.1745C2.4029 13.9577 2.08575 14.6913 1.58628 15.2791L3.05301 16.5254ZM19.5956 13.3911C19.7269 14.5492 20.1965 15.6424 20.9466 16.5254L22.4134 15.2791C21.9139 14.6913 21.5967 13.9577 21.5081 13.1745L19.5956 13.3911ZM4.08342 18.9431C2.94559 18.9431 2.22183 17.5036 3.05301 16.5254L1.58628 15.2791C-0.234427 17.4222 1.19411 20.8677 4.08342 20.8677V18.9431ZM19.9163 20.8677C22.8055 20.8677 24.2341 17.4222 22.4134 15.2791L20.9466 16.5254C21.7778 17.5036 21.0541 18.9431 19.9163 18.9431V20.8677ZM21.0655 9.26818C20.5328 4.56586 16.6547 0.980011 11.9998 0.980011V2.90463C15.6312 2.90463 18.7256 5.71069 19.1531 9.48483L21.0655 9.26818ZM4.8465 9.48483C5.27404 5.71069 8.36842 2.90463 11.9998 2.90463V0.980011C7.34498 0.980011 3.4668 4.56586 2.93412 9.26818L4.8465 9.48483Z" fill="#2E4C73"/>
                  <path d="M16.7501 22.8092C16.9367 22.3115 16.6844 21.757 16.1867 21.5704C15.689 21.3839 15.1345 21.6361 14.9479 22.1338L16.7501 22.8092ZM9.05166 22.1338C8.86515 21.6361 8.31052 21.3839 7.81285 21.5704C7.31518 21.757 7.06294 22.3115 7.24945 22.8092L9.05166 22.1338ZM14.9479 22.1338C14.5339 23.2387 13.3914 24.0754 11.9998 24.0754V26C14.1624 26 16.0435 24.6945 16.7501 22.8092L14.9479 22.1338ZM11.9998 24.0754C10.6082 24.0754 9.46571 23.2387 9.05166 22.1338L7.24945 22.8092C7.95598 24.6945 9.83716 26 11.9998 26V24.0754Z" fill="#2E4C73"/>
                  <circle cx="19.5" cy="4.5" r="4" fill="#CB122D" stroke="white"/>
                </svg>
              </button>
            </span>
            {/* User avatar with white circle background */}
            <span className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
              {/* Outer white circle SVG */}
              <svg className="absolute inset-0 w-8 h-8 sm:w-11 sm:h-11 md:w-10 md:h-10" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30.5" cy="30.5" r="30.5" fill="white"/>
              </svg>
              {/* User avatar, centered */}
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white shadow relative z-10" />
            </span>
          </div>
        </div>
      </header>
      {/* SVG border line below header */}
      <div className="w-full overflow-hidden">
        <svg width="100%" height="1" viewBox="0 0 1400 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="1400" y2="0.5" stroke="#002354" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="bg-transparent px-2 sm:px-6 py-2 sm:py-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-y-2 lg:gap-y-0 lg:gap-x-4 w-full">
          {/* Navigation Pills */}
          <div className="flex w-full md:w-auto gap-x-2 overflow-x-auto flex-nowrap min-w-0 scrollbar-hide pb-2">
            {['Dashboard', 'Time Tracker', 'Projects', 'Calendar', 'Benefits', 'Teams'].map((item) => (
              <button
                key={item}
                className={`px-4 py-2 text-sm lg:px-7 lg:py-3 lg:text-base rounded-full font-medium transition-colors focus:outline-none shadow-sm whitespace-nowrap ${
                  item === 'Projects'
                    ? 'bg-[#001B44] text-white'
                    : 'bg-white text-black hover:bg-[#d6c1a7]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          {/* Filters and Apply */}
          <div className="flex flex-row gap-x-2 gap-y-0 lg:gap-x-4 items-center w-full lg:w-auto overflow-x-auto flex-nowrap min-w-0 scrollbar-hide mt-2 lg:mt-0">
            <button className="flex items-center px-4 py-2 text-sm lg:px-7 lg:py-3 lg:text-base rounded-lg bg-white text-black font-medium shadow-sm border-none whitespace-nowrap">
              Department
              <svg className="ml-2 w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <button className="flex items-center px-4 py-2 text-sm lg:px-7 lg:py-3 lg:text-base rounded-lg bg-white text-black font-medium shadow-sm border-none whitespace-nowrap">
              Role
              <svg className="ml-2 w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <button className="px-4 py-2 text-sm lg:px-8 lg:py-3 lg:text-base rounded-lg bg-[#FF6800] text-white font-semibold shadow-sm border-none whitespace-nowrap">
              Apply
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-2 sm:p-4 md:p-6">
        {/* Projects Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600">See through your projects and the progress</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
            <button className="p-2 text-gray-400 hover:text-gray-600 bg-white rounded-full">
              <Phone className="w-6 h-6 text-black" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 bg-gray-900 rounded-full">
              <Mail className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Breadcrumb and Search/Filters in one row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6 gap-2 md:gap-0">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span className="font-semibold text-[#6B3FA0]">App</span>
            <span className="text-[#FF6800]">&#8250;</span>
            <span className="text-[#6B7280]">Projects</span>
          </div>
          {/* Custom search bar and pill buttons */}
          <div className="flex items-center mt-2 md:mt-0">
            {/* Search bar */}
            <div className="flex items-center bg-[#FAF7F4] rounded-[12px] h-10 w-full max-w-xs px-3 sm:px-4 mr-2 sm:mr-3 border border-transparent focus-within:border-[#FF6800]">
              <svg className="w-5 h-5 text-[#2B3674] mr-2" fill="none" stroke="#2B3674" strokeWidth="1.4" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.3" stroke="#2B3674" strokeWidth="1.4"/><line x1="17" y1="17" x2="15" y2="15" stroke="#2B3674" strokeWidth="1.4" strokeLinecap="round"/></svg>
              <input type="text" placeholder="Search" className="bg-transparent outline-none text-[#2B3674] placeholder-[#8F9BBA] text-sm w-full" />
            </div>
            {/* Pill buttons */}
            <button className="w-10 h-10 px-2 flex items-center justify-center rounded-[8px] bg-white shadow ml-2">
              {/* Download/Document Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" stroke="#002354" strokeWidth="1.5"/><path d="M17 21v-8H7v8" stroke="#002354" strokeWidth="1.5"/><path d="M12 17v-4" stroke="#002354" strokeWidth="1.5"/></svg>
            </button>
            <button className="w-10 h-10 px-2 flex items-center justify-center rounded-[8px] bg-white shadow ml-2">
              {/* Grid Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="5.5" height="5.5" rx="1.4" stroke="#002354" strokeWidth="1.2"/><rect x="14.5" y="4" width="5.5" height="5.5" rx="1.4" stroke="#002354" strokeWidth="1.2"/><rect x="4" y="14.5" width="5.5" height="5.5" rx="1.4" stroke="#002354" strokeWidth="1.2"/><rect x="14.5" y="14.5" width="5.5" height="5.5" rx="1.4" stroke="#002354" strokeWidth="1.2"/></svg>
            </button>
            <button className="w-10 h-10 px-2 flex items-center justify-center rounded-[8px] bg-white shadow ml-2">
              {/* Filter/Funnel Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.5 4h-15a.5.5 0 00-.4.8l6.6 8.8V20a.5.5 0 00.8.4l2-1.5a.5.5 0 00.2-.4v-6.5l6.6-8.8a.5.5 0 00-.4-.8z" stroke="#002354" strokeWidth="1.5"/></svg>
            </button>
          </div>
        </div>

        {/* Tabs - Figma style, left-aligned below breadcrumb/search */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 mb-6 md:mb-10 overflow-x-auto flex-nowrap scrollbar-hide bg-[#F5EDE3]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`min-w-max px-4 py-2 text-sm sm:px-8 sm:py-3 sm:text-base md:px-10 md:py-3 md:text-base rounded-full font-medium transition-colors focus:outline-none shadow-sm
                ${activeTab === tab
                  ? 'bg-[#002354] text-white'
                  : 'bg-white text-black hover:bg-[#d6c1a7]'}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 xl:gap-6 border rounded-2xl">
          {projectColumns.map((column, index) => (
            <div
              key={index}
              className={`${column.color} rounded-lg p-2 sm:p-3 md:p-4 mt-2 flex-1 mx-auto w-full min-w-0 min-h-[220px]`}
            >
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-gray-900 text-base sm:text-lg md:text-xl">{column.title}</h2>
                  <span className={`border text-xs px-2 py-0.5 rounded-full font-medium ${
                    column.title === 'New' ? 'border-gray-400 text-gray-600' :
                    column.title === 'InProgress' ? 'border-blue-500 text-blue-500' :
                    column.title === 'Awaiting feedback' ? 'border-orange-500 text-orange-500' :
                    'border-teal-400 text-teal-400'
                  }`}>
                    {column.count}
                  </span>
                </div>
                <div className={`mt-2 w-full h-0.5 rounded-full ${
                  column.title === 'New' ? 'bg-gray-400' :
                  column.title === 'InProgress' ? 'bg-gray-400' :
                  column.title === 'Awaiting feedback' ? 'bg-orange-500' :
                  'bg-teal-400'
                }`}></div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {column.projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Figma-style comment input box */}
      
    </div>
  );
};

export default ProjectDashboard;