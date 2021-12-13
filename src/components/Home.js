import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import "../styles/_home.css";
import EditPost from "./EditPost";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import PostData from "./PostData";
import RightSidebar from "./RightSidebar";
import Login from "./Login";
import { selectUser } from "../features/userSlice";

const Home = () => {
  const [feeds, setFeeds] = useState([]);

  const user = useSelector(selectUser);

  const fethFeeds = () => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((querySnapShot) => {
        //console.log("query", querySnapShot.docs);
        setFeeds(
          querySnapShot.docs.map((doc) =>
            //console.log("doc", doc.data());
            ({
              id: doc.id,
              data: doc.data(),
            })
          )
        );
      });
  };

  useEffect(() => {
    fethFeeds();
  }, []);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="container" style={{ display: "grid" }}>
            <section id="ads">
              <div>
                <a>
                  <span id="ad-title">Your project needs CI/CD. -</span>
                  <span id="ad-subtitle">
                    Add the most popular GitHub integration and start building
                    for free.
                  </span>
                </a>
                <span id="ad">Ad </span>
              </div>
            </section>

            <LeftSidebar />

            <div id="main-wrapper">
              <main id="main-section">
                <EditPost />
                <div id="feed-sort">
                  <hr />
                  <button>
                    <span>Sort by:</span>
                    <strong>Top</strong>
                    <span
                      className="fas fa-sort-down"
                      aria-hidden="true"
                    ></span>
                  </button>
                </div>
                {feeds &&
                  feeds.map((item) => <PostData key={item.id} item={item} />)}
              </main>
            </div>

            <RightSidebar />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
