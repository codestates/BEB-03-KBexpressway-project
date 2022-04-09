import React from "react";
import "./FileUploader.scss";

const FileUploader = () => {
  return (
    <>
      <form id="file-upload-form" class="uploader">
        <input
          id="file-upload"
          type="file"
          name="fileUpload"
          accept="image/*"
        />
        <label for="file-upload" id="file-drag">
          <img id="file-image" src="#" alt="Preview" class="hidden" />
          <div id="start">
            <i class="fa fa-download" aria-hidden="true"></i>
            <div>파일을 선택해 주세요</div>
            <div id="notimage" class="hidden">
              Please select an image
            </div>
            <span id="file-upload-btn" class="btn btn-primary">
              가져오기
            </span>
          </div>
          <div id="response" class="hidden">
            <div id="messages"></div>
            <progress class="progress" id="file-progress" value="0">
              <span>0</span>%
            </progress>
          </div>
        </label>
      </form>
    </>
  );
};

export default FileUploader;
