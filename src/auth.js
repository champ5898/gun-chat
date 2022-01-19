import React, { useState } from "react";
import Moralis from "./moralis";
import Gun from "gun";
require("gun/sea");

// initialize gun locally
const gun = Gun({
  peers: [
    "http://localhost:3030/gun",
    "https://gun-manhattan.herokuapp.com/gun",
  ],
});

const Auth = () => {
  //Database
  let client = gun.user();

  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const signUp = () =>
    client.create(username, pass, alert("User signed up successfully!"));

  //console.log("signed up");

  const signIn = () =>
    client.auth(
      username,
      pass,
      alert("Sign in successful!"),
      ({ err }) => err && alert(err)
    );

  //Gun User
  client = gun.user().recall({ sessionStorage: true });

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">username</label>
          <input
            type="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            id="username"
            aria-describedby="emailHelp"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            id="pass"
            placeholder="Password"
          />
        </div>

        <button
          id="in"
          type="button"
          className="btn btn-primary"
          onClick={signIn}
        >
          Sign in
        </button>
        <button
          id="up"
          type="button"
          className="btn btn-primary"
          onClick={signUp}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Auth;
