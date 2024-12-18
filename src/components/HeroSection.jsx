const HeroSection = () => {
  return (
    <section className="text-white py-12 flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to <span className="text-yellow-400">IMS-Connect</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 opacity-0 animate-fadeIn delay-500">
          Submit, Collaborate, and Bring Your Innovative Ideas to Life.
        </p>
        <div className="space-x-4 flex justify-center">
          {/* Get Started Button */}
          <button className="bg-yellow-400 text-blue-800 font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-105 flex items-center text-sm md:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6l6 6-6 6"
              />
            </svg>
            Get Started
          </button>

          {/* Learn More Button */}
          <button className="bg-transparent border border-white py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300 transform hover:scale-105 flex items-center text-sm md:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18l6-6-6-6M6 12h12"
              />
            </svg>
            Learn More
          </button>
        </div>
        <div className="mt-12 text-gray-300">
          <h2 className="text-3xl font-semibold mb-4">Streamlined Process for Idea Realization</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mb-4 text-yellow-400 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h4m0 0H8"
                />
              </svg>
              <h3 className="text-xl font-semibold">Submit Ideas</h3>
            </div>
            {/* Card 2 */}
            <div className="p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mb-4 text-green-400 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9L4.5 4.5M9 9l5 5M9 9h7"
                />
              </svg>
              <h3 className="text-xl font-semibold">Review Ideas</h3>
            </div>
            {/* Card 3 */}
            <div className="p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mb-4 text-blue-400 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4h16v16H4z"
                />
              </svg>
              <h3 className="text-xl font-semibold">Implement Ideas</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
