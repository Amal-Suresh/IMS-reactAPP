import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout';
import UserLogin from './Pages/UserLogin';
import UserRegister from './Pages/UserRegister';
import UserHome from './Pages/UserHome';
import AdminDashbord from './Pages/AdminDashbord';
import ManagerRegister from './Pages/ManagerRegister';
import ManagerDashboard from './Pages/ManagerDashboard';
import { Provider } from 'react-redux';
import store from './utils/store';
import PrivateRoute from './components/PrivateRoute';
import UserDashboard from './Pages/UserDashboard';
import PublicRoute from './components/PublicRoute';
import NotFound from './Pages/NotFound';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        children: [
          {
            path: 'login', element:
              <PublicRoute>
                <UserLogin />
              </PublicRoute>
          },
          {
            path: 'register', element:
              <PublicRoute>
                <UserRegister />
              </PublicRoute>
          },
          {
            path: '', element:
              <PublicRoute>
                <UserHome />
              </PublicRoute>
          },
        ],
      },
      {
        path: '/user',
        element: <PrivateRoute requiredRole="User" />,
        children: [
          {
            path: '',
            element: <UserDashboard />
          }
        ]
      },
      {
        path: '/admin',
        element: <PrivateRoute requiredRole="Admin" />,
        children: [
          {
            path: '',
            element: <AdminDashbord /> 
          }
        ]
      },
      {
        path: '/manager/register',
        element:
          <PublicRoute>
            <ManagerRegister />
          </PublicRoute>
      },
      {
        path: '/manager',
        element: <PrivateRoute requiredRole="Manager" />,
        children: [
          {
            path: '',
            element: <ManagerDashboard />
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound/> // Render 404 page for undefined routes
  }
]);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
