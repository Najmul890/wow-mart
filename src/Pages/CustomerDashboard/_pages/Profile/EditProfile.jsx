import React , {useState} from "react";
import MobileSidebar from "../../components/MobileSidebar/MobileSidebar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileIcon from "../../../../Common/Icons/ProfileIcon";
import { Link } from "react-router-dom";
import profile from "../../../../assets/ralph.png";
import CameraIcon from "../../../../Common/Icons/CameraIcon";
import PageBottom from "../../../../Common/PageBottom/PageBottom";
import MenuIcon from "../../../../Common/Icons/MenuIcon";

const EditProfile = () => {
  const [firstName, setFirstName] = useState("Andrew");
  const [lastName, setLastName] = useState("Taylor");
  const [email, setEmail] = useState("taylor@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [phone, setPhone] = useState("+77777777");
  const [image, setImage] = useState("");

  const handleEditProfile = (e) => {
    e.preventDefault();
    const updatedUser = {};

    updatedUser.firsName = firstName;
    updatedUser.lastName = lastName;
    updatedUser.email = email;
    updatedUser.password = password;
    updatedUser.phone = phone;
    updatedUser.image = image;

    console.log(updatedUser);
  };
  return (
    <>
      <MobileSidebar />
      <div className="section-container flex py-10">
        <Sidebar />
        <div className=" w-full pl-0 2md:pl-7 2md:w-[calc(100%-280px)] ">
         
          <div className="hidden 2md:flex items-center justify-between">
            <div className="flex items-center gap-2 xs:gap-4">
              <ProfileIcon />
              <div className="text-2xl xs:text-3xl text-primary font-semibold ">
                Edit Profile
              </div>
            </div>
            <div className="">
              <Link
                to="/customer-dashboard/profile"
                className=" btn rounded-[30px] btn-sm btn-primary bg-primary text-tertiary font-semibold capitalize border-primary hover:bg-primary "
              >
                Back to Profile
              </Link>
            </div>
          </div>
          <div className="flex 2md:hidden justify-between items-center">
            <div className="flex items-center gap-2 xs:gap-4">
              <ProfileIcon />
              <div className="text-2xl xs:text-3xl text-primary font-semibold ">
                Edit Profile
              </div>
            </div>
            <div>
              <label htmlFor="my-drawer">
                <a className="d-block 2md:hidden text-primary hover:text-secondary cursor-pointer ">
                  <MenuIcon />
                </a>
              </label>
            </div>
          </div>
          <div className="mt-5 block 2md:hidden">
            <Link
              to="/customer-dashboard/profile"
              className=" btn rounded-[30px] btn-sm btn-primary bg-primary text-tertiary font-semibold capitalize border-primary hover:bg-primary "
            >
              Back to Profile
            </Link>
          </div>
          <form
            onSubmit={handleEditProfile}
            className="p-5 mt-10 shadow-lg rounded-lg bg-white "
          >
            <div className="mb-4 profile-user">
              <img src={profile} id="profile-img" alt="" />
              <div className="file-upload">
                <input
                  id="profile-img-file-input"
                  type="file"
                  className="input-file"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <label htmlFor="profile-img-file-input" className="file-label ">
                  <div className="ml-[-20px] mt-[30px]">
                    <CameraIcon />
                  </div>
                </label>
                <span className="file-info text-tertiary hidden">
                  No file chosen
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 2md:gap-6 ">
              <div className="mt-3">
                <label className="text-primary">First Name</label> <br />
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input input-bordered focus:outline-none text-primary mt-3 w-full  "
                />
              </div>
              <div className="mt-3">
                <label className="text-primary">Last Name</label> <br />
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="input input-bordered focus:outline-none text-primary mt-3 w-full  "
                />
              </div>
              <div className="mt-3">
                <label className="text-primary">Email Address</label> <br />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered focus:outline-none text-primary mt-3 w-full "
                />
              </div>
              <div className="mt-3">
                <label className="text-primary">Phone Number</label> <br />
                <input
                  type="text"
                  required
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input input-bordered focus:outline-none text-primary mt-3 w-full "
                />
              </div>
              <div className="mt-3">
                <label className="text-primary">Password</label> <br />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered focus:outline-none text-primary mt-3 w-full "
                />
              </div>
            </div>
            <div className="mt-5 mb-3">
              <button
                type=""
                className="btn btn-primary text-tertiary rounded-[30px] btn-sm capitalize font-semibold bg-primary hover:bg-primary border-primary "
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="section-container">
        <PageBottom />
      </div>
    </>
  );
};

export default EditProfile;
