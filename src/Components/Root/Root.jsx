import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navber></Navber>

      <Outlet></Outlet>
    </div>
  );
};

export default Root;
