import React, { useEffect, useState, useReducer } from "react";
import Moralis from "./components/moralis";
import Gun from "gun";
import Auth from "./components/auth";
import Chat from "./components/chat";
import { ethers } from "ethers";
import { getAddress } from "ethers/lib/utils";

export default function App() {
  const [walletAddress, setWalletAddress] = useState("");

  if (window.ethereum && window.ethereum.isMetaMask) {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((result) => {
        setWalletAddress(result[0]);
      })
      .catch((error) => {
        alert(error);
      });
  } else {
    alert("Need to install MetaMask");
  }
  return (
    <div style={{ padding: 30 }}>
      <div>
        <Moralis />
      </div>
      <div>
        <Auth wallet={walletAddress} />
      </div>
    </div>
  );
}
