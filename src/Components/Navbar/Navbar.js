import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import { ReactComponent as HomeIcon } from "./navbar-icons/home.svg";
import { ReactComponent as SearchIcon } from "./navbar-icons/search.svg";
import { ReactComponent as BookmarkIcon } from "./navbar-icons/bookmark-white.svg";
import { ReactComponent as ProfileIcon } from "./navbar-icons/user.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    {
      route: "",
      label: "Home",
      icon: <HomeIcon />,
    },
    {
      route: "Search",
      label: "Search",
      icon: <SearchIcon />,
    },
    {
      route: "Bookmark",
      label: "Bookmark",
      icon: <BookmarkIcon />,
    },
    {
      route: "Profile",
      label: "Profile",
      icon: <ProfileIcon />,
    },
  ];

  return (
    <div className="navbar">
      {navItems.map((navItem) => {
        return (
          <NavLink
            to={`/${navItem.route}`}
            className={({ isActive }) =>
              isActive ? "navbar__item navbar__item--active" : "navbar__item"
            }
            key={navItem.label}
          >
            {navItem.icon}
            <span>{navItem.label}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
