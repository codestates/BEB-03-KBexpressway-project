import Item from "./Item.js";
import nftData from "../data/nftData.json";

function ItemListContainer({ collectionId }) {
    console.log(`ItemListContainer 📌️${collectionId}`);
    const nftList = nftData.filter((nft) => {
        // console.log(nft);
        return nft.data.collectionId === collectionId;
    });
    console.log(nftList);

    return (
        <div className="container">
        &nbsp;
        <header className="section-header">
            <h2>Collection</h2>
            <p>Check our latest work</p>
        </header>
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
            </ul>
            </div>
        </div>
        <div className="row gy-4 portfolio-container">
            {nftList.map((nft) => {
                return <Item nft={nft}/>
            })}
        </div>
        </div>
    );
}

export default ItemListContainer;
