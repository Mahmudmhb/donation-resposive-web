import { NavLink } from "react-router-dom";
import logo from "../../Resources/Logo.png";

const Navber = () => {
  const nav = (
    <>
      <li>
        <a>
          <NavLink className="/">Home </NavLink>
        </a>
      </li>

      <li>
        <a>
          <NavLink className="/donations">Donations</NavLink>
        </a>
      </li>

      <li>
        <a>
          <NavLink className="/statistics">Statistics </NavLink>
        </a>
      </li>
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
