import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../../Common/context/DataProvider";

const Login = () => {
  const { user, setUser} = useContext(DataContext);
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({name:email, role:"user"})
  };


  if (user && user.name) {   
    navigate(from, { replace: true });
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex px-3 h-auto 2md:h-screen ">
      <div className="mx-auto my-10 2md:my-auto bg-tertiary shadow-lg rounded py-5 px-6 sm-px-10 w-full sm:w-2/3 lg:w-1/3  ">
        <h3 className="text-primary text-2xl text-center mb-3 font-semibold ">
          Login To Your Account
        </h3>

        <form onSubmit={handleLogin}>
          <div className="mt-3">
            <label className="text-primary">Email</label> <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              required
              placeholder="Enter Your Email"
              className="input input-bordered focus:outline-none text-primary mt-3 w-full"
            />
          </div>
          <div className="mt-3">
            <label className="text-primary">Password</label> <br />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Write a password"
              className="input input-bordered focus:outline-none text-primary mt-3 w-full"
            />
          </div>
          
          <div className="mt-5">
            <button
              
              className=" bg-primary text-tertiary text-lg px-4 py-2 rounded-[64px] w-full "
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-3 text-primary text-base text-center ">
          Don't Have an Account?
          <Link to="/sign-up" className=" underline ml-4 font-semibold ">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
