import React, { memo } from "react";

const Wallet = memo(() => {
  return (
    <>
      <section id="features" class="features">
        <div class="container">
          <header class="section-header">
            <h2>Features</h2>
            <p>Connect Your Wallet</p>
          </header>

          <div class="row">
            <div class="col-lg-6">
              <img src="assets/img/features.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div class="row align-self-center gy-4">
                <div class="col-md-6">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-wallet"></i>
                    <h3>MetaMask</h3>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-wallet"></i>
                    <h3>Coinbase Wallet</h3>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-wallet"></i>
                    <h3>WalletConnect</h3>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-wallet"></i>
                    <h3>Phantom</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Wallet;
