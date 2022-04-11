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
    
    return <main id="main">

        
        <section class="breadcrumbs">
            <div class="container">

                <ol>
                    <li>
                        <Link to="/">
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link to={`/collection/${collection.collectionId}`}>
                            {collection.name}
                        </Link>
                    </li>
                </ol>
                <h2>{nft.data.name}</h2>

            </div>
        </section>

        
        <section id="portfolio-details" class="portfolio-details">
            <div class="container">

                <div class="row gy-4">

                    <div class="col-lg-8">
                        <div class="portfolio-details-slider swiper">
                            <div class="swiper-wrapper align-items-center">

                                <div class="swiper-slide">
                                    <img src={nft.data.image} alt="" />
                                </div>

                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="portfolio-info">
                            <h3>Information</h3>
                            <ul>
                                <li>
                                    <strong>Collection</strong>: 
                                    <Link to={`/collection/${collection.collectionId}`}>
                                        {collection.name}
                                    </Link>
                                </li>
                                <li><strong>Name</strong>: {nft.data.name}</li>
                                <li><strong>Price</strong>: {nft.data.price}</li>
                                <li>
                                    <button class="btn btn-primary">Buy now</button>
                                </li>
                            </ul>
                        </div>
                        <div class="portfolio-description">
                            <h2>Description</h2>
                            <p>
                                {nft.data.description}
                            </p>
                        </div>
                    </div>

                    <section id="contact" class="contact">
                        <div class="container">
                            <header class="section-header">
                            {/* <h2>Properties</h2> */}
                            <p>Properties</p>
                            </header>

                            <div class="row gy-4">
                            <div class="col-lg-6">

                                <div class="row gy-4">
                                    {nft.data.attributes.map((trait) => {
                                        return (
                                        <div class="col-md-6">
                                            <div class="info-box">
                                                <h3>{trait.trait_type}</h3>
                                                <h4>{trait.value}</h4>
                                            </div>
                                        </div>
                                        );
                                    })}
                                    {/* <div class="col-md-6">
                                        <div class="info-box">
                                            <i class="bi bi-telephone"></i>
                                            <h3>Call Us</h3>
                                            <p>+1 5589 55488 55</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="info-box">
                                        <i class="bi bi-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>info@example.com</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="info-box">
                                            <i class="bi bi-clock"></i>
                                            <h3>Open Hours</h3>
                                            <p>Monday - Friday</p>
                                        </div>
                                    </div> */}
                                </div>

                            </div>

                            {/* <div class="col-lg-6">
                                <form action="forms/contact.php" method="post" class="php-email-form">
                                <div class="row gy-4">
                                    <div class="col-md-6">
                                    <input type="text" name="name" class="form-control" placeholder="Your Name" required />
                                    </div>
                                    <div class="col-md-6 ">
                                    <input type="email" class="form-control" name="email" placeholder="Your Email" required/>
                                    </div>
                                    <div class="col-md-12">
                                    <input type="text" class="form-control" name="subject" placeholder="Subject" required/>
                                    </div>
                                    <div class="col-md-12">
                                    <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                                    </div>
                                    <div class="col-md-12 text-center">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                    <button type="submit">Send Message</button>
                                    </div>
                                </div>
                                </form>
                            </div> */}

                            </div>

                        </div>

                        </section>

                </div>

            </div>
        </section>

    </main>;
}

export default ItemDetail;
