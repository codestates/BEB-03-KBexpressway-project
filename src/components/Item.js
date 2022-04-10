import { Link } from 'react-router-dom';

function Item({ nft }) {
    console.log(nft);

    return <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
                <img src={nft.data.image} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                    <h4>{nft.data.name}</h4>
                    <p>{nft.data.price}</p>
                    <div class="portfolio-links">
                        <a href={nft.data.image} data-gallery="portfolioGallery" class="portfokio-lightbox" title="App 1"><i class="bi bi-plus"></i></a>
                        <Link to={`/itemdetail/${nft.tokenId}`}>
                            <a title="More Details" href=""><i class="bi bi-link"></i></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>;
}

export default Item;
