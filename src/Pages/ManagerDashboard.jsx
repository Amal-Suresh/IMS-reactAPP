import IdeaList from "@/components/mangerDashboard/IdeaList";
import Sidebar from "@/components/SideBar";
import VoteForIdeas from "@/components/userDashboard/VoteForIdeas";
import { useState } from "react";
import { FaEye, FaVoteYea } from 'react-icons/fa';

const ManagerDashboard = () => {
  const [activeSection, setActiveSection] = useState('view-ideas');
  const sections = [
    { 
      key: 'view-ideas', 
      label: (
        <div className="flex items-center gap-3  hover:scale-105 transition-all ">
          <FaEye className="" />
          View Ideas
        </div>
      ),
      component: <IdeaList /> 
    },
    { 
      key: 'view-voting', 
      label: (
        <div className="flex items-center gap-3 hover:scale-105 transition-all ">
          <FaVoteYea className="" />
          View Voting
        </div>
      ),
      component: <VoteForIdeas /> 
    },
  ];
  const renderContent = () => {
    const currentPage = sections.find((section) => section.key === activeSection);
    return currentPage ? currentPage.component : <div>Select a section</div>;
  };

  return (
    <div className="flex flex-col sm:flex-row  min-h-screen">
    <Sidebar
      sections={sections}
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      className="lg:w-1/4 w-full" 
    />
  
    <div className="flex-1  sm:p-6 lg:p-10">
      <h1 className="text-xl sm:text-3xl font-bold mb-6 pl-7">
        {activeSection.replace('-', ' ').toUpperCase()}
      </h1>
      <div className="p-6 rounded-lg shadow-lg">
        {renderContent()}
      </div>
    </div>
  </div>
  
  );
}

export default ManagerDashboard