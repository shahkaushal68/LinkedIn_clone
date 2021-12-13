import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase";
import "../styles/_login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const dispatch = useDispatch();

  const signUp = (e) => {
    e.preventDefault();
    //alert("signup");

    if (!name || !email || !password) {
      alert("Please Fill in the required fileds");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("user", user);
        user
          .updateProfile({
            displayName: name,
            photoURL: photoUrl,
          })
          .then(() => {
            console.log("Update successful");
            dispatch(
              login({
                email: user.email,
                password: user.password,
                name: name,
                photourl: photoUrl,
              })
            );
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        //var errorCode = error.code;
        //var errorMessage = error.message;
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        //console.log("user LogedIn...");
        dispatch(
          login({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            password: user.password,
            photourl: user.photoURL,
          })
        );
      })
      .catch((error) => {});
  };

  return (
    <div className="login-container">
      <h2>
        Linked
        <span>
          <i className="fab fa-linkedin"></i>
        </span>
      </h2>
      <div className="text">
        <h1>Sign in</h1>
        <p>Stay updated on your professional world</p>
      </div>
      <div className="your-input">
        <div className="input">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <label htmlFor="name">Username</label>
        </div>
        <div className="input">
          <input
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            type="text"
          />
          <label htmlFor="photo">Photo Url</label>
        </div>
        <div className="input">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </div>
      </div>

      <button onClick={signIn}>Sign in</button>
      <p className="join-link">
        New to linkedin?
        <span onClick={signUp} className="join-now">
          Join now
        </span>
      </p>
    </div>
  );
};

export default Login;
