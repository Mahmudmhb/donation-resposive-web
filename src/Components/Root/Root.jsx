import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";

const Root = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
