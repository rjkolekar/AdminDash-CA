import React from "react";
import { RxAvatar } from "react-icons/Rx";
import { AiFillMessage } from "react-icons/Ai";
import { Avatar } from '@nextui-org/react';

const Navbar = () => {
  return (
    <>
      <div className=" ml-[200px]">
       
          <ul className="flex items-center justify-end">
            <li className="mr-4"><AiFillMessage /></li>
            <li>First Name</li>
            <li className="mr-4 ">
            <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          css={{ size: "$10" }} />
            </li>
          </ul>
       
      </div>
    </>
  );
};

export default Navbar;
