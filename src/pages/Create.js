import React, { memo } from "react";
import FileUploader from "../components/FileUploader";
import "./Create.css";

const Create = memo(() => {
  return (
    <section id="contact" class="contact">
      <div class="container">
        <header class="section-header">
          <p>Create New Item</p>
        </header>
        <div class="row php-email-form">
          <FileUploader />
          <form action="forms/contact.php" method="post" class="php-email-form">
            <div class="row gy-4">
              <div class="col-md-12">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  placeholder="이름"
                  required
                />
              </div>
              <div class="col-md-12">
                <textarea
                  class="form-control"
                  name="message"
                  rows="6"
                  placeholder="설명"
                  required
                ></textarea>
              </div>
              <div class="col-md-12 text-center">
                <button type="submit">업로드</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Create;
