import React, { memo } from "react";
import FileUploader from "../components/FileUploader";
import "./Create.css";

const Create = memo(() => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <header className="section-header">
          <p>Create New Item</p>
        </header>
        <div className="row php-email-form">
          <FileUploader />
          <form
            action="forms/contact.php"
            method="post"
            className="php-email-form"
          >
            <div className="row gy-4">
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="이름"
                  required
                />
              </div>
              <div className="col-md-12">
                <textarea
                  className="form-control"
                  name="message"
                  rows="6"
                  placeholder="설명"
                  required
                ></textarea>
              </div>
              <div className="col-md-12 text-center">
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
