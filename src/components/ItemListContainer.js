import Item from "./Item.js";

function ItemListContainer({ collectionId }) {
  console.log(`ItemListContainer 📌️${collectionId}`);

  return (
    <div class="container">
      &nbsp;
      <header class="section-header">
        <h2>Portfolio</h2>
        <p>Check our latest work</p>
      </header>
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">
              All
            </li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>
      <div class="row gy-4 portfolio-container">
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
