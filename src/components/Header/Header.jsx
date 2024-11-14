import React from "react";
import "./Header.css";
import {
  FaHome,
  FaUsers,
  FaSuitcase,
  FaCommentDots,
  FaBell,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      {/* Left Section */}
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5038/5038590.png"
          alt="DemoJob Logo"
          className="header__logo"
        />
        <h1 className="header__company-name">DemoJob</h1>
      </div>

      {/* Center Search Bar */}
      <div className="header__center">
        <input
          type="text"
          placeholder="Search for jobs, posts, or people..."
          className="header__search-input"
        />
      </div>

      {/* Right Navigation */}
      <div className="header__right">
        <button className="header__button">
          <FaHome />
          Home
        </button>
        <button className="header__button">
          <FaUsers />
          My Network
        </button>
        <button className="header__button">
          <FaSuitcase />
          Jobs
        </button>
        <button className="header__button">
          <FaCommentDots />
          Messaging
        </button>
        <button className="header__button">
          <FaBell />
          Notifications
        </button>
        <button className="header__button">
          <FaUserCircle />
          Me
        </button>
        <button className="header__button header__button--signout">
          <FaSignOutAlt />
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;
