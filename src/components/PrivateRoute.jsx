import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ requiredRole }) => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  if (role !== requiredRole) {
    return <Navigate to="/" />; // Redirect to home if the role doesn't match
  }

  return <Outlet />; // If authenticated and role matches, render the children routes
};

export default PrivateRoute;
