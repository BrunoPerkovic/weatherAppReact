import React from "react";
import Settings from "../Components/Settings/Settings";
import NasSwiper from "../Components/Swiper/NasSwiper";
import NasNavbar from "../Components/Navbar/Navbar";
import ViewStats from "../Components/ViewStats/ViewStats"
import "./Overview.scss";

const Overview = () => {
  return (
    <div className="overview">
      <Settings />
      <NasSwiper />
      <ViewStats />
      <NasNavbar />
    </div>
  );
};

export default Overview;
