import React, { useEffect, useState, useReducer } from "react";
import { useMoralis } from "react-moralis";

const Moralis = (props) => {
  const { authenticate, isAuthenticated, user } = useMoralis();
  const { logout, isAuthenticating } = useMoralis();
  const client = props.user;

  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate()}>Connect Wallet</button>
      </div>
    );
  } else {
    const walletAddress = user.get("ethAddress");
    const disconnect = () => {
      logout();
      // disabled = { isAuthenticating };
      client.leave("You are logged out");
    };

    return (
      <div>
        <h1>Welcome {walletAddress}</h1>
        <button onClick={disconnect}>Disconnect</button>
      </div>
    );
  }
};

export default Moralis;
