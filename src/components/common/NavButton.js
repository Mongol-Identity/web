import React from "react";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../constant/constant";

const NavButton = ({ title, type = "primary", to, ...props }) => {
  return (
    <NavLink
      to={to}
      {...props}
      className={"mi-nav-button " + "mi-nav-button-" + type}
      style={({ isActive }) =>
        isActive
          ? { color: COLORS.white, backgroundColor: COLORS.primary }
          : undefined
      }
    >
      {title}
    </NavLink>
  );
};

export default NavButton;
