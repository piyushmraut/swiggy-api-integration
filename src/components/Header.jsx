import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

function Header() {
  const [btnName, setBtnName] = useState("LogIn");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  const handleChange = () => {
    if (btnName === "LogIn") {
      setBtnName("LogOut");
    } else {
      setBtnName("LogIn");
    }
  };
  return (
    // Logo
    // NavItems
    <div className="flex justify-between items-center bg-gradient-to-tr from-red-200 to-pink-250 border border-red-600 mx-4 my-4">
      <div>
        <img src={LOGO_URL} alt="" className="w-30 h-24 p-2" />
      </div>
      <div className="">
        <ul className="flex items-center flex-wrap">
          <li className="px-4 text-xl">
            Online Status:{onlineStatus === true ? "✅" : "🔴"}
          </li>
          <li className="px-4 text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="px-4 mr-4 text-xl border bg-green-200 border-green-700"
            onClick={handleChange}
          >
            {btnName}
          </button>

          <li className="m-2 text-xl">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
