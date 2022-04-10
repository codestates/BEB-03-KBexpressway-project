import Item from "./Item.js";

function ItemListContainer({ collectionId }) {
  return (
    <div className="container">
      &nbsp;
      <header className="section-header">
        <h2>Portfolio</h2>
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
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default ItemListContainer;
