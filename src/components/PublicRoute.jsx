import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ children }) => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  // If the user is authenticated, redirect based on their role
  if (isAuthenticated) {
    if (role === 'Admin') {
      return <Navigate to="/admin" />; // Redirect to admin dashboard
    }
    if (role === 'User') {
      return <Navigate to="/user" />; // Redirect to user dashboard
    }
    if (role === 'Manager') {
      return <Navigate to="/manager" />; // Redirect to manager dashboard
    }
  }

  return children; // If not authenticated, render the public route (login, register)
};

export default PublicRoute;
