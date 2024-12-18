import { Link } from "react-router-dom"
import RegisterForm from "./RegisterForm"
const ManagerRegister = () => {
  return (
      <div className="max-w-lg border border-white mx-auto p-4 sm:p-8 rounded-lg shadow-lg mt-5">
        <p className="text-center text-lg font-bold">Manager Register</p>
       <RegisterForm role={"Manager"}/>
       <div className="mt-6 text-center">
        <p className="text-sm">
          Already Registered?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline font-medium"
          >
            Login now
          </Link>
        </p>
      </div>
      </div>
  )
}
export default ManagerRegister