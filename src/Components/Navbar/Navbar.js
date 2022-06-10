import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import { ReactComponent as HomeIcon } from "./navbar-icons/home.svg";
import { ReactComponent as SearchIcon } from "./navbar-icons/search.svg";
import { ReactComponent as BookmarkIcon } from "./navbar-icons/bookmark-white.svg";
import { ReactComponent as ProfileIcon } from "./navbar-icons/user.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState("Home");

  const navItems = [
    {
      label: "Home",
      icon: (
        <Link to={"/"}>
          <HomeIcon />,
        </Link>
      ),
    },
    {
      label: "Search",
      icon: (
        <Link to={"/Search"}>
          <SearchIcon />,
        </Link>
      ),
    },
    {
      label: "Bookmark",
      icon: (
        <Link to={"/Bookmark"}>
          <BookmarkIcon />,
        </Link>
      ),
    },
    {
      label: "Profile",
      icon: (
        <Link to={"/Profile"}>
          <ProfileIcon />,
        </Link>
      ),
    },
  ];

  return (
    <div className="navbar">
      {navItems.map((navItem, i) => {
        return (
          <button
            className={`navbar__item ${
              activeIcon === navItem.label ? "navbar__item--active" : ""
            }`}
            onClick={() => {
              setActiveIcon(navItem.label);
            }}
            key={i}
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
