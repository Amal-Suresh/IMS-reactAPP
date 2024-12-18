const KeyFeatures = () => {
  const features = [
    {
      title: "Idea Submission",
      description: "Submit your innovative ideas effortlessly.",
      icon: "💡",
    },
    {
      title: "Idea Evaluation",
      description: "Managers evaluate ideas to unlock potential.",
      icon: "🧑‍💼",
    },
    {
      title: "Voting System",
      description: "Employees vote for the best ideas to prioritize them.",
      icon: "🗳️",
    },
    {
      title: "Implementation Tracking",
      description: "Admins bring the top ideas to life.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-12 mt-16 flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
              <p className="text-black">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
