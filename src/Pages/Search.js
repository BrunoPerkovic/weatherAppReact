import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Settings from "../Components/Settings/Settings";

const Search = () => {
  return (
    <div className="search">
      <Settings />
      <div className="searchContainer">
        <div>U ovaj div ide search bar za pritrazit gradove</div>
        <div>Tu ce se pokazat taj grad s podacima</div>
      </div>
      <Navbar />
    </div>
  );
};

export default Search;
