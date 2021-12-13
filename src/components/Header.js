import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";
import Menu from "./Menu";

const Header = () => {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <header id="main-header">
      <div style={{ display: "flex" }}>
        <div>
          <img id="header-logo" src="images/linkedin.png" alt="LinkedIn" />
          <img
            id="header-picture-menu"
            src="images/picture.jpeg"
            alt="Profile"
          />
          <span id="header-picture-menu-bars">
            <span className="fas fa-bars" aria-hidden="true"></span>
          </span>

          <div>
            <input id="search" type="text" placeholder=" Search" />
            <span
              id="search-icon"
              className="fas fa-search"
              aria-hidden="true"
            ></span>
            <span
              id="search-button"
              className="fas fa-search"
              aria-hidden="true"
            ></span>
          </div>
          <span className="fas fa-comments" aria-hidden="true"></span>
        </div>
        <nav>
          <ul>
            <Menu menuIcon="fa-home" menuTitle="Home" />
            <Menu menuIcon="fa-user-friends" menuTitle="My Network" />
            <Menu menuIcon="fa-suitcase" menuTitle="Jobs" />
            <Menu menuIcon="fa-envelope" menuTitle="Messaging" />
            <Menu menuIcon="fa-bell" menuTitle="Notifications" />

            <li>
              <div id="right-border">
                <img src="images/picture.jpeg" alt="Profile" />

                <span className="nav-item-text">
                  Me
                  <span className="fas fa-caret-down" aria-hidden="true"></span>
                </span>
              </div>
            </li>
            <li>
              <div>
                <span className="fas fa-th" aria-hidden="true"></span>
                <span className="nav-item-text">
                  Work
                  <span className="fas fa-caret-down" aria-hidden="true"></span>
                </span>
              </div>
            </li>
            <li id="premium">
              <div>
                <span onClick={logoutUser}>Logout</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
