/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import LocationIcon from "../../Common/Icons/LocationIcon";
import MailIcon from "../../Common/Icons/MailIcon";
import TelephoneIcon from "../../Common/Icons/TelephoneIcon";
import FacebookIcon from "../../Common/Icons/FacebookIcon";
import TwitterIcon from "../../Common/Icons/TwitterIcon";
import InstagramIcon from "../../Common/Icons/InstagramIcon";
import LinkedInIcon from "../../Common/Icons/LinkeInIcon";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && phone !== "" && message !== "") {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
         name,email,phone,message
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
  };

  return (
    <div className="section-container min-h-[67vh] flex items-center justify-center py-10 mb-[60px] 2md:mb-0">
      <div className="shadow-none sm:shadow-lg rounded-lg flex flex-col sm:flex-row gap-10 sm:gap-0  w-[100%] 2md:w-[70%]  ">
        <div className="bg-tertiary shadow-lg sm:shadow-none rounded-tl-lg rounded-tr-lg sm:rounded-tr-none rounded-br-lg sm:rounded-br-none rounded-bl-lg text-primary basis-[50%] p-5">
          <h3 className="text-3xl text-primary font-semibold">
            Let's get in touch
          </h3>
          <p className="text-base font-medium mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio eaque
            doloribus accusantium suscipit, assumenda facilis doloremque culpa
            praesentium maxime!
          </p>
          <div className="mt-10">
            <div className="flex items-center gap-3 mb-3">
              <div>
                <LocationIcon size={"text-lg"} />
              </div>
              <div className="text-base font-medium">
                92, New Street Road, New York{" "}
              </div>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div>
                <MailIcon />
              </div>
              <div className="text-base font-medium">example@gmail.com</div>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div>
                <TelephoneIcon />
              </div>
              <div className="text-base font-medium">+98888888</div>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="text-xl font-semibold">Connect with us:</h4>
            <div className="mt-3 mb-3 sm:mb-0 flex items-center gap-3 ">
              <div className="rounded bg-primary flex justify-center items-center w-[40px] h-[40px] ">
                <FacebookIcon />
              </div>
              <div className="rounded bg-primary flex justify-center items-center w-[40px] h-[40px] ">
                <TwitterIcon />
              </div>
              <div className="rounded bg-primary flex justify-center items-center w-[40px] h-[40px] ">
                <InstagramIcon />
              </div>
              
            </div>
          </div>
        </div>
        <div className="bg-primary shadow-lg sm:shadow-none rounded-tr-lg rounded-tl-lg sm:rounded-tl-none rounded-br-lg rounded-bl-lg sm:rounded-bl-none text-tertiary basis-[50%] p-5">
          <h3 className="text-3xl font-semibold">Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
              <label className="">Name</label> <br />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered focus:outline-none text-primary mt-3 w-full  "
              />
            </div>
            <div className="mt-3">
              <label className="">Email</label> <br />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered focus:outline-none text-primary mt-3 w-full  "
              />
            </div>
            <div className="mt-3">
              <label className="">Phone</label> <br />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                type="text"
                name="phone"
                placeholder="Phone"
                className="input input-bordered focus:outline-none text-primary mt-3 w-full  "
              />
            </div>
            <div className="mt-3">
              <label className="">Message</label> <br />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                id="message"
                name="message"
                className="w-full mt-3 px-3 py-2 border rounded-lg text-primary leading-tight focus:outline-none "
                rows="4"
                placeholder="Enter your message..."
              ></textarea>
            </div>
            <div className="mt-3 mb-3">
              <button
                type="submit"
                className="btn btn-md font-bold text-primary hover:text-secondary w-full btn-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
