import React from "react";
import { FcDepartment } from "react-icons/Fc";
import { GoThreeBars } from "react-icons/Go";

// import {  RxDashboard } from "react-icons/Rx";
import DashboardIcon from "@mui/icons-material/Dashboard";

import { TbReportSearch } from "react-icons/Tb";
import { FiSettings } from "react-icons/Fi";
import { AiOutlineUsergroupAdd, AiOutlineLogout } from "react-icons/Ai";
import { SiC } from "react-icons/Si";
import { BiTask } from "react-icons/Bi";

import { Link } from "react-router-dom";
import { useState } from "react";
const Sidebar = () => {
  // const auth = localStorage.getItem("user");
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div
        className={`text-white  font-serif fixed   bg-#010026 duration-300  ${
          toggle ? "w-[200px]" : "w-12 "
        } h-screen  `}
      >
        <div className="text-sm mt-4 font-extrabold text-teal-500 flex items-center justify-between p-0 ">
          <h1 className={` ${!toggle ? "hidden" : "text-3xl"}`}>ERP-CA</h1>
          <GoThreeBars
            className="text-4xl  p-2"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div>
          <ul className={`pt-8 `}>
            <div className="items-center justify-between">
              <>
                {" "}
                <li className="flex  rounded-md p-2 cursor-pointer hover:bg-teal-500  text-sm items-center gap-x-4  ">
                  <DashboardIcon className="text-4xl "/>
                  <Link
                    to="/"
                    className={` ${!toggle && "hidden"} 
                 `}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="flex  rounded-md p-2 cursor-pointer hover:bg-teal-500  text-sm items-center gap-x-4 ">
                  <SiC className="text-xl" />
                  <Link to="/clients" className={`pl-2 ${!toggle && "hidden"} 
                 `}>
                    Clients
                  </Link>
                </li>
                <li className="flex  rounded-md p-2 cursor-pointer hover:bg-teal-500  text-sm items-center gap-x-4 ">
                  <BiTask className="text-xl"/>
                  <Link to="/employees" className={`pl-2 ${!toggle && "hidden"} 
                 `}>
                    Employees
                  </Link>
                </li>
                <li className="flex  rounded-md p-2 cursor-pointer hover:bg-teal-500  text-sm items-center gap-x-4 ">
                  <FcDepartment className="text-xl" />
                  <Link to="/departments" className={`pl-2 ${!toggle && "hidden"} 
                 `}>
                    Task Management
                  </Link>
                </li>
                <li className="flex  rounded-md p-2 cursor-pointer hover:bg-teal-500  text-sm items-center gap-x-4 ">
                  <TbReportSearch className="text-xl"/>
                  <Link to="/report" className={`pl-2 ${!toggle && "hidden"} 
                 `}>
                    View Reports
                  </Link>
                </li>
                <li className="flex  rounded-md p-2 cursor-pointer hover:bg-teal-500  text-sm items-center gap-x-4 ">
                  <AiOutlineUsergroupAdd className="text-xl"/>
                  <Link to="/add" className={`pl-2 ${!toggle && "hidden"} 
                 `}>
                    Add Partners
                  </Link>
                </li>
                <li className="flex  rounded-md p-2 cursor-pointer hover:bg-teal-500  text-sm items-center gap-x-4  mt-[240px]">
                  <FiSettings className="text-xl"/>
                  <Link to="/settings" className={`pl-2 ${!toggle && "hidden"} 
                 `}>
                    Settings
                  </Link>
                </li>
                <li className="flex  rounded-md p-2 cursor-pointer hover:bg-teal-500  text-sm items-center gap-x-4  text-red-700">
                  <AiOutlineLogout className="text-xl"/>
                  <Link to="/logout" className={`pl-2 ${!toggle && "hidden"} 
                 `}>
                    Logout
                  </Link>
                </li>{" "}
              </>
              <>
                <li>
                  <Link to="/login" className={`pl-2 ${!toggle && "hidden"} 
                 `}></Link>
                </li>
                <li>
                  <Link to="/register" className={`pl-2 ${!toggle && "hidden"} 
                 `}></Link>
                </li>
              </>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
