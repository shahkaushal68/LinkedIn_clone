import React, { useState } from "react";
import { Modal, Button } from "@mui/material";
import "../styles/_editPost.css";
import { db } from "../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const EditPost = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const user = useSelector(selectUser);
  //console.log("edit post", user);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitPost = (e) => {
    e.preventDefault();
    //console.log(input);
    db.collection("posts")
      .add({
        name: user?.name,
        description: "This is the author",
        message: input,
        photourl: user?.photourl,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp() || null,
      })
      .then(() => {
        console.log("Document successfully written!");
        setInput("");
        handleClose();
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <>
      <div id="share-box">
        <div id="button-box">
          <button id="btn-post" onClick={handleOpen}>
            <span className="fas fa-edit" aria-hidden="true"></span>
            <span id="btn-text">Start a post</span>
          </button>
          <button id="btn-picture">
            <span className="fas fa-camera" aria-hidden="true"></span>
          </button>
          <button id="btn-video">
            <span className="fas fa-video" aria-hidden="true"></span>
          </button>
          <button id="btn-document">
            <span className="fas fa-file" aria-hidden="true"></span>
          </button>
        </div>
        <div id="link-box" onClick={handleOpen}>
          <span>Write an article </span>
          on LinkedIn
        </div>
      </div>
      <Modal open={open}>
        <div className="edit-post-modal">
          <div className="post-modal-header">
            <h4 className="popup-title">Create Post</h4>
            <span className="popup-close-icon" onClick={handleClose}>
              <i class="fa fa-window-close" aria-hidden="true"></i>
            </span>
          </div>
          <div className="modal-body">
            <form onSubmit={submitPost}>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows="5"
                placeholder="What do you want to talk about!"
              />
              {input ? (
                <Button type="submit" variant="contained">
                  Post
                </Button>
              ) : (
                <Button type="submit" variant="contained" disabled>
                  Post
                </Button>
              )}
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditPost;
