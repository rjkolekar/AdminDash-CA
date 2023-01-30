import React from "react";
import {  FcDepartment } from "react-icons/Fc";
// import {  RxDashboard } from "react-icons/Rx";
import DashboardIcon from '@mui/icons-material/Dashboard';

import { TbReportSearch } from "react-icons/Tb";
import { FiSettings } from "react-icons/Fi";
import { AiOutlineUsergroupAdd, AiOutlineLogout } from "react-icons/Ai";
import { SiC } from "react-icons/Si";
import { BiTask } from "react-icons/Bi";

import { Link } from "react-router-dom";
const Sidebar = () => {
  const auth = localStorage.getItem("user");

  return (
    <>
      <div className="h-screen w-[200px] fixed  text-black font-serif border pl-6 border-x-teal-500 shadow-xl">
        <div className="text-3xl mt-4 font-extrabold text-teal-500">
          <h1>ERP-CA</h1>
        </div>
        <div>
          
            <ul className="pt-8">
              <div className="items-center justify-between">
              <>  <li className="flex items-center mb-4">
                  <DashboardIcon />
                  <Link to="/" className="pl-4 hover:text-teal-500 ">
                    Dashboard
                  </Link>
                </li>
                <li className="flex items-center mb-4">
                  <SiC />
                  <Link to="/clients" className="pl-4 hover:text-teal-500 ">
                    Clients
                  </Link>
                </li>
                <li className="flex items-center mb-4">
                  <BiTask />
                  <Link to="/employees" className="pl-4 hover:text-teal-500 ">
                    Employees
                  </Link>
                </li>
                <li className="flex items-center mb-4">
                  <FcDepartment />
                  <Link to="/departments" className="pl-4 hover:text-teal-500 ">
                    Task Management
                  </Link>
                </li>
                <li className="flex items-center mb-4">
                  <TbReportSearch />
                  <Link to="/report" className="pl-4 hover:text-teal-500 ">
                    View Reports
                  </Link>
                </li>
                <li className="flex items-center mb-4">
                  <AiOutlineUsergroupAdd />
                  <Link to="/add" className="pl-4 hover:text-teal-500 ">
                    Add Partners
                  </Link>
                </li>
                <li className="flex items-center mb-4 mt-[240px]">
                  <FiSettings />
                  <Link to="/settings" className="pl-4 hover:text-teal-500">
                    Settings
                  </Link>
                </li>
                <li className="flex items-center mb-4 text-red-700">
                  <AiOutlineLogout />
                  <Link to="/logout" className="pl-4   hover:font-thin">
                    Logout
                  </Link>
                </li> </><>
                <li><Link to="/login" className="pl-4 hover:text-teal-500 ">
                
              </Link></li>
              <li><Link to="/registration" className="pl-4 hover:text-teal-500 ">
                
              </Link></li></>
              </div>
            </ul>
         
        </div>
      </div>
    </>
  );
};

export default Sidebar;
