import Sidebar from "@/components/SideBar";
import CreateIdeas from "@/components/userDashboard/CreateIdeas";
import VoteForIdeas from "@/components/userDashboard/VoteForIdeas";
import { useState } from "react";
import { FaLightbulb, FaThumbsUp } from 'react-icons/fa'; 
const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('post-ideas');

  const sections = [
    { 
      key: 'post-ideas', 
      label: (
        <div className="flex gap-3 items-center  hover:scale-105 ">
          <FaLightbulb className="" />
          Post Ideas
        </div>
      ),
      component: <CreateIdeas/> 
    },
    { 
      key: 'vote-ideas', 
      label: (
        <div className="flex gap-3 items-center  hover:scale-105 ">
          <FaThumbsUp className="" />
          Vote for Ideas
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
  
    <div className="flex-1 sm:p-5">
      <h1 className="text-lg sm:text-3xl font-bold mb-2 sm:mb-6 pl-5">
        {activeSection.replace('-', ' ').toUpperCase()}
      </h1>
      <div className="p-6">
        {renderContent()}
      </div>
    </div>
  </div>
  
  );
};



export default UserDashboard