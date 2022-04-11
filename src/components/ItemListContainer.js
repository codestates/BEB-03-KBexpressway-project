import Item from "./Item.js";
import nftData from "../data/nftData.json";

function ItemListContainer({ collectionId }) {
    console.log(`ItemListContainer 📌️${collectionId}`);
    const nftList = nftData.filter((nft) => {
        return Number(nft.data.collectionId) === Number(collectionId);
    });
    

    return (
        <div className="container">
        
        <div className="row gy-4 portfolio-container">
            {nftList.map((nft) => {
                return <Item nft={nft}/>
            })}
        </div>
        </div>
    );
}

export default ItemListContainer;
