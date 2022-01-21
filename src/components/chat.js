import React, { useEffect, useState, useReducer } from "react";
import Moralis from "./moralis";
import Gun from "gun";
import Auth from "./auth";
import User from "gun/sea";
require("gun/sea");

// initialize gun locally
const gun = Gun({
  peers: [
    "http://localhost:3030/gun",
    "https://gun-manhattan.herokuapp.com/gun",
  ],
});

const Chat = (props) => {
  const walletAddress = props.wallet;
  const [message, setMessage] = useState("");
  let user = gun.user();
  const saveMessage = () => {
    if (user.is) {
      alert("sent");
      setMessage("");
    } else {
      alert("Not logged in");
      setMessage("");
      return;
    }
  };
  return (
    <div style={{ padding: 30 }}>
      <input
        id="message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="Message"
        name="message"
        value={message}
      />
      <button type="button" onClick={saveMessage}>
        Send Message
      </button>
    </div>
  );
};

export default Chat;
