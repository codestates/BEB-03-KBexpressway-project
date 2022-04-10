import ItemListContainer from "../components/ItemListContainer";

function Collection({ match }) {
  const collectionId = match?.params?.collectionId;

  console.log(`[📦️Collection.js] collectionId 📌️${collectionId}`);

  return (
    <section id="portfolio" className="portfolio">
      <ItemListContainer collectionId={collectionId} />
    </section>
  );
}

export default Collection;
