import Item from "./Item.js";
// import nftData from "../data/nftData.json";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ItemListContainer({ collectionId, opt }) {
  const [nftList, setNftList] = useState([]);

  useEffect(() => {
    // 벡엔드에 요청 전송해서 모든 NFT 정보 받아서 nfts 상태 변경
    const url = "http://localhost:4000/items/nfts/0";
    async function getAllNfts() {
      await axios.get(url).then((res) => {
        console.log(res.data.data);
        setNftList(res.data.data);
      });
    }
    getAllNfts();

    if (opt === "createrAccount") {
      let nftData = nftList.filter((nft) => {
        return (
          nft.creater_account === "0x08A46De58d48920448D4e909020FE1560f0c411A"
        );
      });
      setNftList(nftData);
    } else {
      let nftData = nftList.filter((nft) => {
        return (
          nft.owner_Account === "0x08A46De58d48920448D4e909020FE1560f0c411A"
        );
      });
      setNftList(nftData);
    }
  }, []);

  return (
    <div className="container">
      <div className="row gy-4 portfolio-container">
        {console.log(nftList)}
        {nftList.map((nft) => {
          return <Item nft={nft} />;
        })}
      </div>
    </div>
  );
}

export default ItemListContainer;
