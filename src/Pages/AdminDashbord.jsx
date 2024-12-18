import UserManagement from "@/components/adminDashboad/UserManagement";
import IdeaList from "@/components/mangerDashboard/IdeaList";
import Sidebar from "@/components/SideBar";
import VoteForIdeas from "@/components/userDashboard/VoteForIdeas";
import { useState } from "react";
import { FaUsers, FaEye, FaVoteYea } from 'react-icons/fa';


const AdminDashbord = () => {
  const [activeSection, setActiveSection] = useState('user-management');


  const sections = [
    { 
      key: 'user-management', 
      label: (
        <div className="flex gap-3 items-center">
          <FaUsers className="" />
          User Management
        </div>
      ),
      component: <UserManagement /> 
    },
    { 
      key: 'view-ideas', 
      label: (
        <div className="flex gap-3 items-center">
          <FaEye className="" />
          View Ideas
        </div>
      ),
      component: <IdeaList /> 
    },
    { 
      key: 'view-voting', 
      label: (
        <div className="flex gap-3 items-center">
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
  
    <div className="flex-1 p-6 lg:p-10">
      <h1 className="text-xl sm:text-3xl font-bold mb-6">
        {activeSection.replace('-', ' ').toUpperCase()}
      </h1>
      <div className="rounded-lg shadow-lg">
        {renderContent()}
      </div>
    </div>
  </div>
  
  );
}

export default AdminDashbord