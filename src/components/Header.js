import React from "react";
import { Avatar } from "@mui/material";
import "./Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatar,time icon */}
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/* Search icon,input */}
        <SearchIcon />
        <input placeholder="Search Your Channels" />
      </div>
      <div className="header__right">
        <HelpOutlineOutlinedIcon />
        {/* help icon */}
      </div>
    </div>
  );
}

export default Header;
