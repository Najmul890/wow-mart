/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [role, setRole] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [roleError, setRoleError] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Password does not match!");
      setRoleError("");
    } else {
      setPasswordError("");
      if (!role) {
        setRoleError("Please select an user role");
      } else {
        setRoleError("");
        
        const newUser = {};

        newUser.name = name;
        newUser.email = email;
        newUser.password = password;
        newUser.role = role;

        console.log(newUser);
      }
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex px-3 h-auto py-0 2md:py-10">
      <div className="mx-auto my-10 2md:my-auto bg-tertiary shadow-lg rounded py-5 px-3 xs:px-6 sm-px-10 w-full sm:w-2/3 lg:w-2/5  ">
        <h3 className="text-primary text-2xl text-center mb-3 font-semibold ">
          Create Your Account
        </h3>

        <form onSubmit={handleSignUp}>
          <div className="mt-3">
            <label className="text-primary">Name</label> <br />
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              className="input input-bordered focus:outline-none text-primary mt-3 w-full"
            />
          </div>
          <div className="mt-3">
            <label className="text-primary">Email</label> <br />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="input input-bordered focus:outline-none text-primary mt-3 w-full"
            />
          </div>
          <div className="mt-3">
            <label className="text-primary">Password</label> <br />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Write a password"
              className="input input-bordered focus:outline-none text-primary mt-3 w-full"
            />
          </div>
          <div className="mt-3">
            <label className="text-primary">Confirm Password</label> <br />
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="input input-bordered focus:outline-none text-primary mt-3 w-full"
            />
          </div>
          <div className="mt-1 mb-2">
            {passwordError && <p className="text-red-600">{passwordError}</p>}
          </div>
          <label className="text-primary">Register as</label>
          <div className="flex mt-2 gap-3">
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="radio-1"
                className="radio"
                onChange={() => setRole("user")}
                checked={role === "user"}
              />
              <label className="text-primary">User</label> <br />
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="radio-1"
                onChange={() => setRole("seller")}
                checked={role === "seller"}
                className="radio"
              />
              <label className="text-primary">Seller</label> <br />
            </div>
          </div>
          <div className="mt-1">
            {roleError && <p className="text-red-600">{roleError}</p>}
          </div>
          <div className="mt-5">
            <input
              type="submit"
              value="Sign Up"
              className=" bg-primary cursor-pointer text-white text-lg px-4 py-2 rounded-[64px] w-full "
            />
          </div>
        </form>
        <div className="mt-3 text-primary text-base text-start xs:text-center ">
          Already Have an Account?
          <Link to="/login" className=" underline ml-2 xs:ml-4 font-semibold ">
            Login Here!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
