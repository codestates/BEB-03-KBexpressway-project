import React, { memo } from "react";
import WalletItem from "../components/WalletItem";

const Wallet = memo(() => {
  return (
    <>
      <section id="features" className="features">
        <div className="container">
          <header className="section-header">
            <h2>Features</h2>
            <p>Connect Your Wallet</p>
          </header>

          <div className="row">
            <div className="col-lg-6">
              <img src="assets/img/features.png" className="img-fluid" alt="" />
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div className="row align-self-center gy-4">
                <WalletItem>MetaMask</WalletItem>
                <WalletItem>Coinbase Wallet</WalletItem>
                <WalletItem>WalletConnect</WalletItem>
                <WalletItem>Phantom</WalletItem>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Wallet;
