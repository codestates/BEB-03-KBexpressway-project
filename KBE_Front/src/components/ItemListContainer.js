import Item from "./Item.js";
import nftData from "../data/nftData.json";

function ItemListContainer({ collectionId, opt }) {
  let nftList;
  // 콜렉션 상관없이 전체 NFT 목록 출력할때
  if (Number(collectionId) === 1) {
    nftList = nftData;
  } else if (collectionId !== undefined) {
    nftList = nftData.filter((nft) => {
      return Number(nft.data.collectionId) === Number(collectionId);
    });
  } else if (opt === "createrAccount") {
    nftList = nftData.filter((nft) => {
      return (
        nft.createrAccount === "0x08A46De58d48920448D4e909020FE1560f0c411A"
      );
    });
  } else if (opt === "ownerAccount") {
    nftList = nftData.filter((nft) => {
      return nft.ownerAccount === "0x08A46De58d48920448D4e909020FE1560f0c411A";
    });
  }

  return (
    <div className="container">
      <div className="row gy-4 portfolio-container">
        {nftList.map((nft) => {
          return <Item nft={nft} />;
        })}
      </div>
    </div>
  );
}

export default ItemListContainer;
