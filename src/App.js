import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./components/Home";
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        var uid = user;
        console.log("uid", uid);
        dispatch(
          login({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            password: user.password,
            photourl: user.photoURL,
          })
        );
        // ...
      } else {
        dispatch(logout());
        auth.signOut();
      }
    });
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
