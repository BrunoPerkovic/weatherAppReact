import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import { ReactComponent as HomeIcon } from "./navbar-icons/home.svg";
import { ReactComponent as SearchIcon } from "./navbar-icons/search.svg";
import { ReactComponent as BookmarkIcon } from "./navbar-icons/bookmark-white.svg";
import { ReactComponent as ProfileIcon } from "./navbar-icons/user.svg";

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState("navbar__item");

  const handleActiveIcon = () => {
    setActiveIcon("navbar__item--active");
  };

  return (
    <div className="navbar">
      <a className={activeIcon} onClick={handleActiveIcon} href="#">
        <span>Home</span>
        <HomeIcon className="navbar__icon " />
      </a>

      <a className={activeIcon} onClick={handleActiveIcon} href="#">
        <span>Search</span>
        <SearchIcon className="navbar__icon" />
      </a>

      <a className={activeIcon} onClick={handleActiveIcon} href="#">
        <span>Bookmark</span>
        <BookmarkIcon className="navbar__icon" />
      </a>

      <a className={activeIcon} onClick={handleActiveIcon} href="#">
        <span>Profile</span>
        <ProfileIcon className="navbar__icon" />
      </a>
    </div>
  );
};

export default Navbar;
