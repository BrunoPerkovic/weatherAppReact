import React from "react";
import "./BackButton.scss";
import { useNavigate, Link } from "react-router-dom"

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="backButton">
      {" "}
      <Link to="/" className="goBack">
        <img
          src="./507257.svg"
          alt="back arrow"
        />
      </Link>
    </div>
  );
};

export default BackButton;
