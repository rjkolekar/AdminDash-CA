import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import { Link } from "react-router-dom";
const App = () => (
  <>
    <div className="text-center items-center justify-between  border border-teal-500 w-[440px] ml-[440px] p-[40px] mt-14 rounded-md">
      <div>
        <p className="text-2xl ">Admin Login </p>

        <Input
          className="w-56 mt-10"
          placeholder="Enter Username"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
        <br />
        <br />
        <Input.Password placeholder="Password" className="w-56" />
        <div className="text-sm mt-6">
          <p>Forgot Password</p>

          <span></span>
          <button className="bg-teal-500 text-mono rounded-lg mt-6 px-2 py-1 place-items-center text-white ">
            Login
          </button>
          <p className="mt-6">
            Not Registered:
            <Link to="/registration">
              <span>Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </>
);
export default App;
