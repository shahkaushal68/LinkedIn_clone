import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Avatar } from "@mui/material";

const LeftSidebar = () => {
  const user = useSelector(selectUser);
  //console.log("leftsideUser", user);
  return (
    <div id="left-aside-wrapper">
      <aside id="left-aside">
        <div id="profile-card">
          <div id="background"></div>
          <div id="profile-info">
            {user.photourl ? (
              <img src={user.photourl} alt="Profile picture" />
            ) : (
              <Avatar>{user.email[0]}</Avatar>
            )}
            <strong id="profile-name" className="letter-spacing">
              {user.name}
            </strong>
            <small>Front-End Developer</small>
          </div>
          <div id="profile-links">
            <a href="#">
              <span>Who's viewed your profile</span>
              <span className="profile-number">102</span>
            </a>
            <a href="#">
              <span>Connections</span>
              <span className="profile-number">452</span>
            </a>
          </div>
          <span>Grow your network</span>
          <a href="#">
            <span>Access exclusive tools &amp; insights</span>
            <span id="profile-premium">
              <span id="profile-square" className="font-16">
                ■
              </span>{" "}
              Try Premium Free for 1 Month
            </span>
          </a>
        </div>
        <div id="profile-groups">
          <section>
            <header>
              <span>Recent</span>
              <span
                className="fas fa-angle-up"
                aria-hidden="true"
                style={{ display: "none" }}
              ></span>
            </header>
            <ul className="group-list">
              <li>
                <span className="fas fa-users" aria-hidden="true"></span>
                <span>React Developers</span>
              </li>
              <li>
                <span className="fas fa-hashtag" aria-hidden="true"></span>
                <span>javascript</span>
              </li>
              <li>
                <span className="fas fa-hashtag" aria-hidden="true"></span>
                <span>webdevelopment</span>
              </li>
              <li>
                <span className="fas fa-users" aria-hidden="true"></span>
                <span>Javascript Brasil</span>
              </li>
              <li>
                <span className="fas fa-users" aria-hidden="true"></span>
                <span>Dog Lovers</span>
              </li>
            </ul>
          </section>
          <section>
            <header>
              <span className="group-title">Groups</span>
              <span className="fas fa-angle-up" aria-hidden="true"></span>
            </header>
            <ul>
              <li>
                <span className="fas fa-users" aria-hidden="true"></span>
                <span id="aaaa">React Developers</span>
              </li>
              <li>
                <span className="fas fa-users" aria-hidden="true"></span>
                <span>Javascript Brasil</span>
              </li>
              <li>
                <span className="fas fa-users" aria-hidden="true"></span>
                <span>Dog Lovers</span>
              </li>
            </ul>
            <div className="group-list">
              <a href="#">See all</a>
            </div>
          </section>
          <section>
            <header>
              <span className="group-title">Followed Hashtags</span>
              <span className="fas fa-angle-up" aria-hidden="true"></span>
            </header>
            <ul>
              <li>
                <span className="fas fa-hashtag" aria-hidden="true"></span>
                <span>javascript</span>
              </li>
              <li>
                <span className="fas fa-hashtag" aria-hidden="true"></span>
                <span>webdevelopment</span>
              </li>
            </ul>
            <a href="#">See all</a>
          </section>
          <a href="#">Discover more</a>
        </div>
      </aside>
    </div>
  );
};

export default LeftSidebar;
