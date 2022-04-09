import { Link } from 'react-router-dom';

function Item() {
    return <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfokio-lightbox" title="App 1"><i class="bi bi-plus"></i></a>
                        <Link to="/itemdetail">
                            <a title="More Details"><i class="bi bi-link"></i></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>;
}

export default Item;
