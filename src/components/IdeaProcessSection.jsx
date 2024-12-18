
const Card = ({ icon, title, description, bgColor }) => {
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:scale-105 transition transform duration-300">
        <div
          className={`flex justify-center items-center w-20 h-20 mx-auto ${bgColor} rounded-full`}
        >
          <img
            className="w-12 h-12 object-contain"
            src={icon}
            alt={`${title} Icon`}
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">{title}</h3>
        <p className="text-gray-200 mt-2">{description}</p>
      </div>
    );
  };
  

const IdeaProcessSection = () => {

  const roles = [
    {
      icon: "https://img.icons8.com/color/96/employee-card.png",
      title: "Employee Role",
      description:
        "Employees submit innovative ideas to improve processes, resolve issues, or introduce new features.",
      bgColor: "bg-blue-100",
    },
    {
      icon: "https://img.icons8.com/color/96/manager.png",
      title: "Manager Role",
      description:
        "Managers review ideas, assess feasibility, and approve or reject submissions based on organizational goals.",
      bgColor: "bg-green-100",
    },
    {
      icon: "https://img.icons8.com/color/96/admin-settings-male.png",
      title: "Admin Role",
      description:
        "Admins implement approved ideas, marking them as In Progress or Completed.",
      bgColor: "bg-red-100",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-300 md:text-4xl">
          How Ideas are Managed in IMS Connect
        </h2>
        <p className="text-gray-600 mt-4">
          Empower your team to share ideas, manage approvals, and implement
          innovative solutions with our streamlined process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {roles.map((role, index) => (
          <Card
            key={index}
            icon={role.icon}
            title={role.title}
            description={role.description}
            bgColor={role.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default IdeaProcessSection;
