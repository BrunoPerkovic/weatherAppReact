import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Settings from "../Components/Settings/Settings";

const Bookmark = ({ locationArray, setLocationArray }) => {
  const handleRemoveLocationFromBookmark = (name) => {
    setLocationArray(
      locationArray.filter((location) => location.name !== name)
    );
  };

  return (
    <div>
      <Settings />
      {locationArray.map((location, i) => {
        return (
          <div key={i}>
            <div>{location.name}</div>
            <button
              onClick={() => {
                handleRemoveLocationFromBookmark(location.name);
              }}
            >
              Remove from bookmark
            </button>
          </div>
        );
      })}

      <Navbar />
    </div>
  );
};

export default Bookmark;
