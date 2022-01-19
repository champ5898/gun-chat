import React from "react";
import { useMoralis } from "react-moralis";

const Moralis = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();
  const walletAddress = user.get("ethAddress");
  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate()}>Connect Wallet</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome {walletAddress}</h1>
    </div>
  );
};

export default Moralis;
