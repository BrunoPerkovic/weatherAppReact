import React from "react";
import "./BackButton.scss";
import { useNavigate, Link } from "react-router-dom"
import { ReactComponent as ReactLogo } from './507257.svg';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="backButton">
      {" "}
      <Link to="/" className="goBack">
        <ReactLogo />
      </Link>
    </div>
  );
};

export default BackButton;
