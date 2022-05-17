import React from "react";
import "./Navbar.scss";
import { ReactComponent as HomeIcon } from "./navbar-icons/home.svg";
import { ReactComponent as SearchIcon } from "./navbar-icons/search.svg";
import { ReactComponent as BookmarkIcon } from "./navbar-icons/bookmark-white.svg";
import { ReactComponent as ProfileIcon } from "./navbar-icons/user.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <a className="navbar__item navbar__item--active">
        <span>Home</span>
        <HomeIcon className="navbar__icon " />
      </a>

      <a className="navbar__item">
        <span>Search</span>
        <SearchIcon className="navbar__icon" />
      </a>

      <a className="navbar__item">
        <span>Bookmark</span>
        <BookmarkIcon className="navbar__icon" />
      </a>

      <a className="navbar__item">
        <span>Profile</span>
        <ProfileIcon className="navbar__icon" />
      </a>
    </div>
  );
};

export default Navbar;
