import { Link } from "react-router-dom";

function Item() {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
      <div className="portfolio-wrap">
        <img
          src="assets/img/portfolio/portfolio-1.jpg"
          className="img-fluid"
          alt=""
        />
        <div className="portfolio-info">
          <h4>App 1</h4>
          <p>App</p>
          <div className="portfolio-links">
            <a
              href="assets/img/portfolio/portfolio-1.jpg"
              data-gallery="portfolioGallery"
              className="portfokio-lightbox"
              title="App 1"
            >
              <i className="bi bi-plus"></i>
            </a>
            <Link to="/itemdetail">
              <a title="More Details">
                <i className="bi bi-link"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
