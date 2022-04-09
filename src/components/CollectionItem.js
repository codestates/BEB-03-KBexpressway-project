import React from "react";

const CollectionItem = () => {
  return (
    <div class="col-lg-4">
      <div class="post-box">
        <div class="post-img">
          <img src="assets/img/blog/blog-1.jpg" class="img-fluid" alt="" />
        </div>
        <span class="post-date">아티스트명</span>
        <h3 class="post-title">컬렉션 제목</h3>
        <a href="blog-single.html" class="readmore stretched-link mt-auto">
          <span>컬렉션 설명</span>
          <i class="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default CollectionItem;
