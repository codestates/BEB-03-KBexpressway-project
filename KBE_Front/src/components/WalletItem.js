import React, { memo, useEffect, useState } from "react";
import Web3 from "web3";
import axios from "axios";

const WalletItem = memo(({ children }) => {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState();

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web = new Web3(window.ethereum);
        setWeb3(web);
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    console.log(`📌️${account}`);
    setAccount(accounts[0]);
    axios({
      method: "post",
      url: "https://localhost:4001/login",
      data: {
        account: accounts[0],
      },
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  };

  return (
    <div className="col-md-6">
      <a
        onClick={() => {
          connectWallet();
        }}
      >
        <div className="feature-box d-flex align-items-center">
          <i className="bi bi-wallet"></i>
          <h3>{children}</h3>
        </div>
      </a>
    </div>
  );
});

export default WalletItem;
