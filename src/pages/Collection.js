import React from "react";
import CollectionItem from "../components/CollectionItem";

const Collection = () => {
  return (
    <section id="recent-blog-posts" class="recent-blog-posts">
      <div class="container">
        <header class="section-header">
          <p>Explore Collection</p>
        </header>

        <div class="row">
          <CollectionItem />
        </div>
      </div>
    </section>
  );
};

export default Collection;
