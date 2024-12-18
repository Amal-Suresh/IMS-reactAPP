import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "@/Api/Apis";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/utils/slice/authSlice";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons for showing/hiding password

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      const loginUser = await login(data);
      if (loginUser && loginUser?.status === 200) {
        toast.success("Login successful!");

        let data = {
          token: loginUser.data.token,
          role: loginUser.data.role,
          name: loginUser.data.name,
        };

        localStorage.setItem("token", loginUser.data.token);
        localStorage.setItem("role", loginUser.data.role);
        localStorage.setItem("name", loginUser.data.name);
        dispatch(setCredentials(data));

        if (loginUser.data.role === "Admin") {
          navigate("/admin");
        } else if (loginUser.data.role === "Manager") {
          navigate("/manager");
        } else {
          navigate("/user");
        }
      }
    } catch (error) {
      toast.error("Invalid Credentials");
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-8 border rounded-lg shadow-lg">
        <p className="text-center text-2xl font-bold mb-6">Login</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="youremail@example.com" {...field} />
                  </FormControl>
                  <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={passwordVisible ? "text" : "password"} // Toggle between 'text' and 'password'
                        placeholder="********"
                        {...field}
                      />
                      {/* Eye icon to toggle password visibility */}
                      <div
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {passwordVisible ? <FaEyeSlash className="text-yellow-500" /> : <FaEye className="text-yellow-500"  />}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage>{form.formState.errors.password?.message}</FormMessage>
                </FormItem>
              )}
            />

            <div className="text-center">
              <Button className="w-full mt-3" variant="outline" type="submit">
                Login
              </Button>
            </div>
          </form>
        </Form>

        <div className="mt-6 text-center">
          <p className="text-sm">
            New user?{" "}
            <Link
              to="/register"
              className="text-blue-500 hover:underline font-medium"
            >
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
