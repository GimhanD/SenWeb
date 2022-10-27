import React from "react";
import logo from "../assets/logo.png";
import NavBarButton from "./NavBarButton";

function NavBar() {
  return (
    <div className="flex justify-between items-center my-6 mx-20">
      <img src={logo} className="w-1/4 h-1/4 " alt="logo" />
      <div className="flex ">
        <NavBarButton title={"About"} />
        <NavBarButton title={"Contact Us"} />
        <NavBarButton title={"Team"} />
      </div>
    </div>
  );
}

export default NavBar;
