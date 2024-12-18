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
import { register } from "@/Api/Apis";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // import useState
import { FaEye, FaEyeSlash } from "react-icons/fa"; // import React Icons for eye

const RegisterForm = ({ role }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false); // state for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // state for confirm password visibility

  const formSchema = z
    .object({
      name: z.string().min(1, { message: "Name is required." }),
      email: z.string().email({ message: "Invalid email address." }),
      password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters." }),
      confirmPassword: z
        .string()
        .min(6, { message: "Confirm Password must be at least 6 characters." }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match.",
      path: ["confirmPassword"],
    });

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    data.role = role;
    delete data.confirmPassword;
    try {
      const registerUser = await register(data);
      if (registerUser && registerUser?.status === 200) {
        toast.success("Registration successful!");
        navigate("/login");
      } else {
        toast.error("Something went wrong. Please try again.");
        console.log("Error status:", registerUser.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email Address" {...field} />
                </FormControl>
                <FormMessage />
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
                      type={showPassword ? "text" : "password"} // Toggle password visibility
                      placeholder="Password"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)} // Toggle the state
                      className="absolute items-center right-2 top-2 text-lg text-gray-500"
                    >
                      {showPassword ? <FaEyeSlash className="text-yellow-500" /> : <FaEye className="text-yellow-500" />} {/* Eye icon toggle */}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"} // Toggle confirm password visibility
                      placeholder="Confirm Password"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle the state
                      className="absolute items-center right-2 top-2 text-lg text-gray-500"
                    >
                      {showConfirmPassword ? <FaEyeSlash className="text-yellow-500" /> : <FaEye className="text-yellow-500" />} {/* Eye icon toggle */}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-center">
            <Button className="w-full mt-3" variant="outline" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default RegisterForm;
