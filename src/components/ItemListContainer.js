import Item from "./Item.js";
import nftData from "../data/nftData.json";
import collectionData from "../data/collectionData.json";

function ItemListContainer({ collectionId }) {
    console.log(`ItemListContainer 📌️${collectionId}`);
    const nftList = nftData.filter((nft) => {
        return Number(nft.data.collectionId) === Number(collectionId);
    });
    const collection = collectionData.filter((el) => {
        return Number(el.collectionId) === Number(collectionId);
    })[0];

    return (
        <div className="container">
        &nbsp;
        <header className="section-header">
            <h2>Collection</h2>
            <p>{collection.name}</p>
        </header>
        <div className="row gy-4 portfolio-container">
            {nftList.map((nft) => {
                return <Item nft={nft}/>
            })}
        </div>
        </div>
    );
}

export default ItemListContainer;
