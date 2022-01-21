import React, { useEffect, useState, useReducer } from "react";
import { ethers, Signer } from "ethers";
import { useMoralis } from "react-moralis";
//const Web3 = require("web3");

const Wallet = (props) => {
  const walletAddress = props.wallet;
  const client = props.user;
  const pass = props.password;
  const { authenticate, isAuthenticated, user } = useMoralis();
  const { logout, isAuthenticating } = useMoralis();

  const reset = () => {
    if (!isAuthenticated) {
      alert("First connect your wallet");
      return;
    } else {
      authenticate({ signingMessage: "You want to reset your account" }).then(
        function () {
          client.delete(walletAddress, pass, alert("account deleted!!"));
        }
      );
    }
  };
  return (
    <div>
      <button type="button" onClick={reset}>
        Delete account
      </button>
    </div>
  );
};

export default Wallet;
