import React from "react";

const PostData = ({ item }) => {
  console.log("post data", item);
  const { name, description, message, timeStamp, photourl } = item.data;
  return (
    <article>
      <div id="post-author">
        <a href="#">
          <div>
            <img src={photourl} alt="" />
            <div>
              <div>
                <strong id="post-author-name" className="letter-spacing">
                  {name}
                </strong>
              </div>
              <span>{description}</span>
            </div>
          </div>
        </a>
        <div>
          <span className="fas fa-circle" aria-hidden="true"></span>
          <span className="fas fa-circle" aria-hidden="true"></span>
          <span className="fas fa-circle" aria-hidden="true"></span>
        </div>
      </div>
      <div id="post-data">
        <p>{message}</p>
      </div>
      <div id="post-interactions">
        <div id="interactions-amount">
          <span
            id="like-icon"
            className="fas fa-thumbs-up fa-flip-horizontal"
            aria-hidden="true"
          ></span>
          <span
            id="heart-icon"
            className="fas fa-heart"
            aria-hidden="true"
          ></span>
          <span id="amount-info">
            23 <span>&nbsp;·&nbsp;</span> 4 Comments
          </span>
        </div>
        <div id="interactions-btns">
          <button>
            <span
              className="far fa-thumbs-up fa-flip-horizontal"
              aria-hidden="true"
            ></span>
            <span>Like</span>
          </button>
          <button>
            <span
              className="far fa-comment-dots fa-flip-horizontal"
              aria-hidden="true"
            ></span>
            <span>Comment</span>
          </button>
          <button>
            <span className="far fa-share-square" aria-hidden="true"></span>
            <span>Share</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default PostData;
