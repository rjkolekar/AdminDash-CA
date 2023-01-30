import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "antd";
const Registration = () => {
  const navigate = useNavigate();
  const register = () => {
    navigate("/payment");
  };
  return (
    <div className="border border-teal-500 w-[440px] ml-[660px] p-[60px] rounded-md mt-6">
      <h1 className="text-2xl">Create your Account Now</h1>

      <div className="mt-6 w-56 ml-12 ">
        <Input type="text" placeholder=" Enter Full Name" />
        <br />
        <br />
        <Input type="text" placeholder=" Company Name" />
        <br />
        <br />

        <Input type="text" placeholder=" Email" />
        <br />
        <br />
        <Input type="text" placeholder=" PAN" />
        <br />
        <br />
        <Input type="text" placeholder=" Company Website Url" />
        <br />

        <button
          onClick={register}
          className="text-white bg-teal-500 rounded-lg px-2 py-1 mt-6 mb-6"
        >
          Submit And Payment
        </button>
        <p className="ml-12">
          Already Account?
          <Link to="/login">
            <span className="text-teal-500 font-serif">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
