import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Settings from "../Components/Settings/Settings";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <Settings />
      <div className="profileMenu">
        <div className="profleMenu__item">First Name</div>

        <div className="profleMenu__item">Last Name</div>

        <div className="profleMenu__item">Email</div>

        <div className="profleMenu__item">Payments</div>
      </div>
      <Navbar />
    </div>
  );
};

export default Profile;
