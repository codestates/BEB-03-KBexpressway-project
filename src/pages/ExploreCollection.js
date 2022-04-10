import React from "react";
import CollectionItem from "../components/CollectionItem";
import { Link } from "react-router-dom";
import collection_data from "../data/collection_data.json";

const ExploreCollection = () => {
  // const url = `/collection/${children.collectionId}`;
  return (
    <section id="recent-blog-posts" className="recent-blog-posts">
      <div className="container">
        <header className="section-header">
          <p>Explore Collection</p>
        </header>
        <div className="row">
          {collection_data.map((el) => (
            <Link to={`/collection/${el.collectionId}`}>
              <CollectionItem />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * 
 * import { Link } from 'react-router-dom';

function Item({ children }) {

    const url = /itemdetail/${children.tokenId};
    const handleClick = () => {

        console.log("click");
    }

    return <div class="col-lg-4 col-md-6 portfolio-item filter-app">
        {console.log(children)}
            <div class="portfolio-wrap">
                <img src={children.data.image} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                    <h4>{children.data.name}</h4>
                    <p>{children.data.price}</p>
                    <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfokio-lightbox" title="App 1"><i class="bi bi-plus"></i></a>
                        <Link to={url} >
                            <a title="More Details" onClick={handleClick}><i class="bi bi-link"></i></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>;
}

export default Item;
 * 
 */

export default ExploreCollection;
