import React, { useState , useEffect } from "react";
import "./Header.css";
import NetflixLogo from "../../assets/images/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  return (
    <div className={`header_outer_container ${scrolled ? "scrolled" : ""}`}>
      <div className="header_inner_container">
        <nav className="px-3 d-flex flex-nowrap navbar ">
          <div className="left_container d-flex gap-5">
            <li class="Netflix_logo_container ms-lg-2 ms-sm-0 list-unstyled">
              <img src={NetflixLogo} className="navbar-brand" />
            </li>
            <ul className="Nav_links_wrapper d-flex gap-4 text-white mb-0 list-unstyled">
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>
          </div>

          <div class="d-flex right_container">
            <ul class="d-flex list-unstyled gap-3 pt-3">
              <li className="icons nav-item">
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
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
