import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="h-[70px] bg-sky-900">
      <div className="container h-full items-center justify-center flex gap-5 text-white">
        <NavLink to="/">Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
    </nav>
  );
};
