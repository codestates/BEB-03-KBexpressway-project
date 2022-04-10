import ItemListContainer from "../components/ItemListContainer";

function Collection({ match }) {
  const collectionId = match?.params?.collectionId;

  // console.log(`📌️${collectionId}`);

  return (
    <section id="portfolio" class="portfolio">
      <ItemListContainer collectionId={collectionId} />
    </section>
  );
}

export default Collection;
