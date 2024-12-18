const Sidebar = ({ sections, activeSection, setActiveSection }) => {
  return (
    <div className="w-full sm:w-64  text-white  p-6">
      {/* <h2 className="text-2xl font-bold mb-8">Dashboard</h2> */}
      <ul className="space-y-4">
        {sections.map((section) => (
          <li
            key={section.key}
            onClick={() => setActiveSection(section.key)}
            className={`cursor-pointer py-2 px-4 rounded-lg transition-colors text-center sm:text-start transition-all ${
              activeSection === section.key
                ? 'bg-yellow-400 font-bold text-black'
                : 'hover:bg-gray-700'
            }`}
          >
            {section.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
