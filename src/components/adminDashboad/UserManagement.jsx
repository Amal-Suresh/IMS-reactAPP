import { getUserData } from '@/Api/Apis';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaUserCircle } from 'react-icons/fa'; // Import a profile icon from react-icons

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      let result = await getUserData();
      if (result.status === 200) {
        setUsers(result.data.data);
        setLoading(false);
      } else {
        toast.error('Error while fetching user data');
      }
    } catch (error) {
      console.log('Error fetching users', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <div
          key={user.email}
          className="border rounded-md shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center space-x-4">
            {/* Profile image or default icon */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
              {user.profileImage ? (
                <img
                  src={user.profileImage}
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaUserCircle className="text-gray-500 w-full h-full" />
              )}
            </div>

            <div>
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-500">{user.role || 'User'}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserManagement;
