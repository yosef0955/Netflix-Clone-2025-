import React from "react";
import "./Header.css";
import NetflixLogo from "../../assets/images/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <nav className="px-3 d-flex flex-nowrap align-items-center navbar">
          <div class="Netflix_logo_container ms-lg-5 ms-sm-0">
            <img src={NetflixLogo} className="navbar-brand" />
          </div>
          <ul className="Nav_links_wrapper d-flex gap-4 text-white mb-0 list-unstyled">
            <div class="d-flex gap-lg-5 gap-md-3 gap-sm-1">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
            </div>
            <div class="d-flex gap-4">
            <li className=" icons">
              <SearchIcon />
            </li>
            <li className="">
              <NotificationsNoneIcon />
            </li>
            <li className="">
              <AccountBoxIcon />
            </li>
            <li className="">
              <ArrowDropDownIcon />
            </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
