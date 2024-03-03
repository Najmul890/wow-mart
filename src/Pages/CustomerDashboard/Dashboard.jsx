import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import MenuIcon from "../../Common/Icons/MenuIcon";
import MobileSidebar from "./components/MobileSidebar/Mobilesidebar";
import ArrowRight from "../../Common/Icons/RightArrow";
import PageBottomProduct from "../../Common/PageBottom/PageBottomProduct";
import PageBottom from "../../Common/PageBottom/PageBottom";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <MobileSidebar />
      <div className="section-container flex gap-10 py-10">
        <Sidebar />
        <div className=" w-full 2md:w-[calc(100%-280px)] ">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl leading-none text-primary font-semibold ">
              My Orders
            </h2>

            <label htmlFor="my-drawer">
              <a className="d-block 2md:hidden text-primary hover:text-secondary cursor-pointer ">
                <MenuIcon />
              </a>
            </label>
          </div>
          <div className="mt-10 text-primary">
            <div className="flex flex-col gap-4 ">
              <div className=" px-5  hidden 2md:flex items-center justify-between ">
                <div className="text-xl basis-[20%] font-semibold">Order #</div>
                <div className="text-xl basis-[20%] font-semibold">Status</div>
                <div className="text-xl basis-[30%] font-semibold">
                  Purchased Date
                </div>
                <div className="text-xl basis-[20%] font-semibold">Total</div>
                <div className="basis-[10%]"></div>
              </div>
              <div className="shadow-lg px-3 2md:px-5 py-5  rounded-[40px] bg-tertiary hidden 2sm:flex justify-between items-center ">
                <div className="text-lg basis-[25%] 2md:basis-[20%] font-semibold">
                  #d0ba538b
                </div>
                <div className=" basis-[30%] 2md:basis-[20%]  text-base font-medium  rounded-full ">
                  <div className="bg-secondary text-tertiary px-4 pt-1 pb-1.5 rounded-full inline ">
                    Pending
                  </div>
                </div>
                <div className="text-base basis-[25%] 2md:basis-[30%] font-medium">
                  Oct 10, 2023
                </div>
                <div className="text-base basis-[15%] 2md:basis-[20%] font-medium">
                  $350.00
                </div>
                <div className="basis-[5%] flex justify-end 2md:basis-[10%]">
                  <ArrowRight />{" "}
                </div>
              </div>

              {/* for mobile device */}
              <div className="shadow-lg px-3 2md:px-5 py-5  rounded-lg bg-tertiary flex 2sm:hidden flex-col gap-5  ">
                <div className="flex justify-between items-center">
                  <div className="text-lg  font-semibold">#d0ba538b</div>
                  <div className="   text-base font-medium  rounded-full ">
                    <div className="bg-secondary text-tertiary px-4 pt-1 pb-1.5 rounded-full inline ">
                      Pending
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-base font-medium">Oct 10, 2023</div>
                  <div className="text-base font-medium">$350.00</div>
                  <div className=" flex justify-end ">
                    <ArrowRight />{" "}
                  </div>
                </div>
              </div>
              <div className="shadow-lg px-3 2md:px-5 py-5  rounded-[40px] bg-tertiary hidden 2sm:flex justify-between items-center ">
                <div className="text-lg basis-[25%] 2md:basis-[20%] font-semibold">
                  #d0ba538b
                </div>
                <div className=" basis-[30%] 2md:basis-[20%]  text-base font-medium  rounded-full ">
                  <div className="bg-primary text-tertiary px-4 pt-1 pb-1.5 rounded-full inline ">
                    Processing
                  </div>
                </div>
                <div className="text-base basis-[25%] 2md:basis-[30%] font-medium">
                  Oct 10, 2023
                </div>
                <div className="text-base basis-[15%] 2md:basis-[20%] font-medium">
                  $350.00
                </div>
                <div className="basis-[5%] flex justify-end 2md:basis-[10%]">
                  <ArrowRight />{" "}
                </div>
              </div>

              {/* for mobile device */}
              <div className="shadow-lg px-3 2md:px-5 py-5  rounded-lg bg-tertiary flex 2sm:hidden flex-col gap-5  ">
                <div className="flex justify-between items-center">
                  <div className="text-lg  font-semibold">#d0ba538b</div>
                  <div className="   text-base font-medium  rounded-full ">
                    <div className="bg-primary text-tertiary px-4 pt-1 pb-1.5 rounded-full inline ">
                      Processing
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-base font-medium">Oct 10, 2023</div>
                  <div className="text-base font-medium">$350.00</div>
                  <div className=" flex justify-end ">
                    <ArrowRight />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <PageBottom />
      </div>
    </>
  );
};

export default Dashboard;
