function Mypage() {
  return (
    <section id="portfolio" class="portfolio">
      <div class="container">
        <header class="section-header">
          <p>Mypage</p>
        </header>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">
                All
              </li>
              <li data-filter=".filter-app">Created</li>
              <li data-filter=".filter-card">Collected</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mypage;
