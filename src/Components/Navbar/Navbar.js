import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import { ReactComponent as HomeIcon } from "./navbar-icons/home.svg";
import { ReactComponent as SearchIcon } from "./navbar-icons/search.svg";
import { ReactComponent as BookmarkIcon } from "./navbar-icons/bookmark-white.svg";
import { ReactComponent as ProfileIcon } from "./navbar-icons/user.svg";

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState("Home");

  const navItems = [
    { label: "Home", icon: <HomeIcon /> },
    { label: "Search", icon: <SearchIcon /> },
    { label: "Bookmark", icon: <BookmarkIcon /> },
    { label: "Profile", icon: <ProfileIcon /> },
  ];

  return (
    <div className="navbar">
      {navItems.map((navItem) => {
        return (
          <button
            className={`navbar__item ${
              activeIcon === navItem.label ? "navbar__item--active" : ""
            }`}
            onClick={() => {
              setActiveIcon(navItem.label);
            }}
          >
            <span>{navItem.label}</span>
            {navItem.icon}
          </button>
        );
      })}
    </div>
  );
};

export default Navbar;
