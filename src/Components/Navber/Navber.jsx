import { NavLink } from "react-router-dom";
import logo from "../../Resources/Logo.png";

const Navber = () => {
  const nav = (
    <>
      <NavLink className="/">
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink className="/donations">
        <li>
          <a>Donations</a>
        </li>
      </NavLink>
      <NavLink className="/statistics">
        <li>
          <a>StatisTics</a>
        </li>
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
