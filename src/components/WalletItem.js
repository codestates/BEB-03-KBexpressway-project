import React, { memo, useEffect, useState } from "react";
import Web3 from "web3";

const WalletItem = memo(({ children }) => {
  const [web3, setWeb3] = useState();

  //   useEffect(() => {
  //     if (typeof window.ethereum !== "undefined") {
  //       try {
  //         const web = new Web3(window.ethereum);
  //         setWeb3(web);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     }
  //   }, []);
  return (
    <div className="col-md-6">
      <a href="#">
        <div className="feature-box d-flex align-items-center">
          <i className="bi bi-wallet"></i>
          <h3>{children}</h3>
        </div>
      </a>
    </div>
  );
});

export default WalletItem;
