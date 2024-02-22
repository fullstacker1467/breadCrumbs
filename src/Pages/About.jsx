import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center bg-red-300 text-white text-5xl">
      <Link to={"/about/detail"}>Detail</Link>
    </div>
  );
};
