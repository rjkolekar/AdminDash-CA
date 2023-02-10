import React from "react";
import { SlPeople } from "react-icons/Sl";
const Home = () => {
  return (
    <div className="ml-[200px] bg-#010026 rounded-md p-4">
      <div>
        <h1 className="text-xl text-teal-600 mb-2">Dashboard</h1>
      </div>
      <div className="flex mx-auto m-6">
        <span>Welcome To Dashboard</span>
        <div className="ml-[600px]">
          <button className="mr-4 rounded-md bg-slate-500 text-white py-1 px-2 ">Add Client</button>
          <button className="mr-4 rounded-md bg-slate-500 text-white py-1 px-2">Add Employee</button>
          <button className="mr-4 rounded-md bg-slate-500 text-white py-1 px-2">Add Task</button>
        </div>
      </div>
      <div className="text-teal-900   grid col-span-3 mt-6 m-6">
        <ul className="flex  text-xl">
          <li className="rounded-md bg-gray-300 p-6 ml-[100px] "><p><SlPeople />Total Clients</p><span>55</span> </li>
          <li className="rounded-md bg-gray-300 p-6 ml-[100px] "><p><SlPeople />Total Employees</p><span>55</span> </li>
          <li className="rounded-md bg-gray-300 p-6 ml-[100px] "><p>Total Services</p><span>55</span> </li>

        </ul>

      </div>
      <div className="m-6 h-16">
        <h1>Tast Approval List</h1>
        
      </div>
    </div>
  );
};

export default Home;
