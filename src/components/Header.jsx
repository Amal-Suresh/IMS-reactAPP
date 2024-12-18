import { logout } from '@/utils/slice/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
  };

  return (
    <header className=" text-white p-4 flex justify-between items-center">
      {/* Left Side: App Name */}
      <div className="text-lg sm:text-2xl font-bold">
        <Link to="/">IMS-Connect</Link>
      </div>

      {/* Right Side: Login/Logout Button */}
      <div>
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <span className="text-sm hidden sm:block">Hello, {name}!</span>
            <button
              onClick={handleLogout}
              className="bg-white px-4 py-2 rounded text-black hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-white px-4 py-2 rounded text-black hover:bg-gray-200"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
