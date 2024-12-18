const Testimonials = () => {
    const testimonials = [
        {
          name: "John Doe",
          role: "Employee",
          feedback: "IMS-Connect helped me share ideas and collaborate better!",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          name: "Jane Smith",
          role: "Manager",
          feedback: "Evaluating and implementing ideas has never been this easy.",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
          name: "Michael Johnson",
          role: "Admin",
          feedback: "Managing and tracking progress has become seamless and efficient.",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        {
          name: "Emily Davis",
          role: "Employee",
          feedback: "Voting on ideas has allowed us to prioritize what really matters.",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
        },
      ];
      
  
    return (
      <section className="py-12 ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  