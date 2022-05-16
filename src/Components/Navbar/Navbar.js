import React from "react";
import "./Navbar.scss";
import { ReactComponent as HomeIcon } from "./navbar-icons/home.svg";
import { ReactComponent as SearchIcon } from "./navbar-icons/search.svg";
import { ReactComponent as BookmarkIcon } from "./navbar-icons/bookmark-white.svg";
import { ReactComponent as ProfileIcon } from "./navbar-icons/user.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <a className="navbar__item">
        <HomeIcon className="navbar__item--icon" />
      </a>

      <a className="navbar__item">
        <SearchIcon className="navbar__item--icon" />
      </a>

      <a className="navbar__item">
        <BookmarkIcon className="navbar__item--icon" />
      </a>

      <a className="navbar__item">
        <ProfileIcon className="navbar__item--icon" />
      </a>
    </div>
  );
};

export default Navbar;
