import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ title }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  let breadcrumbs = [];
  let currentPath = "";
  const generateBreadcrumb = (segment, index) => {
    currentPath += `/${segment}`;
    const path = currentPath;
    const isLast = index === pathSegments.length - 1;
    const breadcrumb = (
      <div className="crumb" key={segment}>
        {isLast ? (
          <span>{segment}</span>
        ) : (
          <Link to={path}>{segment || "Home"}</Link>
        )}
      </div>
    );
    breadcrumbs.push(breadcrumb);
  };

  pathSegments.forEach(generateBreadcrumb);

  return (
    <div className="breadcrumbs flex flex-col gap-1 mb-5">
      <p className="font-poppins text-[20px] font-medium">{title}</p>
      <div className="">{breadcrumbs}</div>
    </div>
  );
};

export default Breadcrumb;
