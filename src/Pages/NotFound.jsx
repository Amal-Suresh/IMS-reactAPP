import { Link } from 'react-router-dom'; 

const NotFound = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-lg text-gray-500">Oops! The page you're looking for does not exist.</p>
    
      <Link 
        to="/" 
        className="mt-4 inline-block text-blue-500 hover:text-blue-700 transition duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
