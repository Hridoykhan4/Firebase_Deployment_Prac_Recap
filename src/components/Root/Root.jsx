import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
