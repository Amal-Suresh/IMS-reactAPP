import { Outlet } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCredentials } from "@/utils/slice/authSlice";

const AppLayout = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const name = localStorage.getItem('name');

    if (token && role && name) {
    
      dispatch(setCredentials({ token, role, name }));
    }
  }, [dispatch]);
  return (
    <div>
      <div className="grid-backgound"></div>
      <main className="min-h-screen max-w-7xl mx-auto">
        <Header/>
        <Outlet/>
      </main>
      <Footer/>
      <Toaster position="top-right" />
    </div>
  )
}

export default AppLayout