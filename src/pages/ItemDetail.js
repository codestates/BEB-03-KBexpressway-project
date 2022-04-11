import nftData from "../data/nftData.json";
import collectionData from "../data/collectionData.json";
import { Link } from 'react-router-dom';

function ItemDetail({ match }) {
    const tokenId = match.params.tokenId;
    const nft = nftData.filter((nft) => {
        return nft.tokenId === tokenId;
    })[0];
    const collection = collectionData.filter((collection) => {
        return collection.collectionId === nft.data.collectionId;
    })[0];
    
    return (
    <main id="main">
        <section className="breadcrumbs">
            <div className="container">
                <ol>
                    <li>
                        <Link to="/">
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link to={`/collection/${collection.collectionId} `}>
                            {collection.name}
                        </Link>
                    </li>
                </ol>
                <h2>{nft.data.name}</h2>
            </div>
        </section>

        <section id="portfolio-details" className="portfolio-details">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-8">
                        <div className="post-img">
                            <img src={nft.data.image} className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row gy-4">
                            <div className="portfolio-info">
                                <h3>Information</h3>
                                <ul>
                                    <li>
                                        <strong>Collection</strong>:
                                        <Link to={`/collection/${collection.collectionId} `}>
                                            {collection.name}
                                        </Link>
                                    </li>
                                    <li>
                                        <strong>Name</strong>: {nft.data.name}</li>
                                    <li>
                                        <strong>Price</strong>: {nft.data.price}</li>
                                    <li>
                                        <button className="btn btn-primary">Buy now</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="portfolio-info">
                                <h3>Description</h3>
                                <p>
                                    {nft.data.description}
                                </p>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <div className="container contact">
                <header className="section-header">
                    <p>Properties</p>
                </header>

                <div className="row">
                    <div className="row gy-4">
                        {nft.data.attributes.map((trait) => { return (
                            <div className="col-md-6">
                                <div className="info-box">
                                    <h3>{trait.trait_type}</h3>
                                    <h4>{trait.value}</h4>
                                </div>
                            </div>
                        ); })}
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}

export default ItemDetail;
