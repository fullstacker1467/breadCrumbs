import React from "react";
import { Link, useLocation } from "react-router-dom";

export const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <div>
      <ul className="flex gap-4">
        {pathnames.map((path, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={index}>
              <Link to={routeTo}>{path}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
