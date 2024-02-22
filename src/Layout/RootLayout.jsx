import React from "react";
import { Navbar } from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { BreadCrumbs } from "../Components/BreadCrumbs";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs />
      <Outlet />
    </>
  );
};
