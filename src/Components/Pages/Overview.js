import React from "react";
import Settings from "../Settings/Settings";
import NasSwiper from "../Swiper/NasSwiper";
import NasNavbar from "../Navbar/Navbar";
import "./Overview.scss";

const Overview = () => {
  return (
    <div className="overview">
      <Settings />
      <NasSwiper />
      <NasNavbar />
    </div>
  );
};

export default Overview;
