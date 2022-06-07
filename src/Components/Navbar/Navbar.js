import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import { ReactComponent as HomeIcon } from "./navbar-icons/home.svg";
import { ReactComponent as SearchIcon } from "./navbar-icons/search.svg";
import { ReactComponent as BookmarkIcon } from "./navbar-icons/bookmark-white.svg";
import { ReactComponent as ProfileIcon } from "./navbar-icons/user.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState("Home");
  const navigate = useNavigate();

  const navItems = [
    {
      label: "Home",
      icon: <HomeIcon onClick={() => navigate("/")} />,
    },
    {
      label: "Search",
      icon: <SearchIcon onClick={() => navigate("/Search")} />,
    },
    {
      label: "Bookmark",
      icon: <BookmarkIcon onClick={() => navigate("/Bookmark")} />,
    },
    {
      label: "Profile",
      icon: <ProfileIcon onClick={() => navigate("/Profile")} />,
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
