function Mypage() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <header className="section-header">
          <p>Mypage</p>
        </header>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
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
