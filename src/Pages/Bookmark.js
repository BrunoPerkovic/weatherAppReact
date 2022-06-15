import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Settings from "../Components/Settings/Settings";
import "./Bookmark.scss";

const Bookmark = ({ locationArray, setLocationArray }) => {
  const handleRemoveLocationFromBookmark = (name) => {
    setLocationArray(
      locationArray.filter((location) => location.name !== name)
    );
  };

  return (
    <div>
      <Settings />

      <div className="bookmarkLocationContainer">
        List of your bookmarked locations
        {locationArray.map((location, i) => {
          return (
            <div key={i} className="bookmarkLocation">
              <div className="bookmarkLocation__name">{location.name}</div>
              <button
                className="bookmarkLocation__remove"
                onClick={() => {
                  handleRemoveLocationFromBookmark(location.name);
                }}
              >
                Remove from bookmark
              </button>
            </div>
          );
        })}
      </div>

      <Navbar />
    </div>
  );
};

export default Bookmark;
