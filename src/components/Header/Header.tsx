import React, { FC } from "react";
import MainNav2 from "./MainNav2";

export interface HeaderProps {
  navType?: "MainNav2";
  className?: string;
}

const Header: FC<HeaderProps> = ({ navType = "MainNav1", className = "" }) => {
  const renderNav = () => {
    switch (navType) {
      case "MainNav2":
        return <MainNav2 />;
      default:
        return <MainNav2 />;
    }
  };

  return (
    <div
      className={`nc-Header sticky top-0 w-full left-0 right-0 z-40 nc-header-bg ${className}`}
    >
      {renderNav()}
    </div>
  );
};

export default Header;
