import React, { memo, useState } from "react";
import FileUploader from "../components/FileUploader";
import "./Create.css";
import collectionData from "../data/collectionData.json";
import { Link, Redirect } from 'react-router-dom';
import { NFTStorage } from 'nft.storage';

const Create = memo(() => {
  const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGMwMTZmNmFlN2JiMkI1MDlDNzAwMzBjREEzQjE2QTJmYTFlZDczZDYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0OTc0ODUwMzg2OCwibmFtZSI6InByb2plY3QifQ.kTECTr_5hc9tETAtSB6lZ6IFu6No_glSWt1ensgOObE";
  const client = new NFTStorage({ token: apiKey });
  const [inputs, setInputs] = useState({
    name: '',
    desc: '',
  })
  const [file, setFile] = useState();
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [metadata, setMetadata] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  // 파일 선택 시 state 변경
  const handleFileInput = (e) => {
    console.log("onchange");
    const file = e.target.files[0];
    console.log(file);
    setFile(file);
  }

  // NFT 이름, Description 입력
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  // const handleName = (e) => {
  //   const name = e.target.value;
  //   console.log(name);
  //   setName(name);
  // }

  // // NFT Description 입력
  // const handleDescription = (e) => {
  //   const desc = e.target.value;
  //   console.log(desc);
  //   setDesc(desc);
  // }

  // 업로드 버튼 클릭
  const handleSubmit = async (e) => {
    setIsLoading(true);
    //더미데이터로 메타데이터 생성
    await client.store({
      name: inputs.name,
      description: inputs.desc,
      image: file
    }).then((metadata) => {
      setMetadata(metadata.url);
      setIsLoading(false);
      setIsCompleted(true);
    })
  }


  return (
    <section id="contact" className="contact">
      {console.log(inputs)}
      {console.log(isCompleted, metadata)}
      {isCompleted === true ?
        (<section id="portfolio" className="portfolio">
        <header className="section-header">
          <h2>메타데이터 업로드 완료!</h2>
            <a href={"http://ipfs.io/ipfs/" + String(metadata).split('//')[1]} target="_blank">
              {"http://ipfs.io/ipfs/" + String(metadata).split('//')[1]}
            </a>
        </header>
      </section>)
        : ( isLoading === false && isCompleted === false
          ? (<div div className="container">
        <header className="section-header">
          <p>Create New Item</p>
        </header>
        <div className="row php-email-form">
          <form
            className="php-email-form"
          >
            <div className="row gy-4">
            <div className="col-md-12">
                <h4 align="left">Image, Video, Audio, or 3D Model</h4>
                <input type="file" id="upload" className="image-upload" onChange = {handleFileInput} />
            <FileUploader />
              </div>
              <div className="col-md-12">
              <h4 align="left">Name</h4>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Item name"
                  required
                  onChange={handleInputs}
                />
              </div>
              <div className="col-md-12">
              <h4 align="left">Description</h4>
                <textarea
                  className="form-control"
                  name="desc"
                  rows="6"
                  placeholder="Provide a detail description of your item"
                  required
                  onChange={handleInputs}
                ></textarea>
              </div>
              <div className="col-md-12">
                    <h4 align="left">Properties</h4>
                    <div className="row gy-4" id="properties_container">
                      <div class="col-md-6">
                        <input type="text" name="type" className="form-control" placeholder="type" required />
                      </div>
                      <div class="col-md-6 ">
                        <input type="text" className="form-control" name="value" placeholder="value" required />
                      </div>
                    </div>
              </div>
              
              <div className="col-md-12">
              <h4 align="left">Collection</h4>
                <select className="form-control">
                  <option value="">Select Collection</option>
                  {collectionData.map((collection) => {
                    return <option value={collection.collectionId}>{collection.name}</option>
                  })}
                </select>
                <Link to="/createcollection">
                  <p> You can manage your collections here.</p>
                </Link>
              </div>
              <div className="col-md-12 text-center">
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>업로드</button>
              </div>
            </div>
          </form>
          </div>
          </div>)
          : (<section id="portfolio" className="portfolio">
          <header className="section-header">
              <h2>메타데이터 업로드 하는 중</h2>
              <h4>페이지를 이동하지 마세요!</h4>
          </header>
        </section>)
        )}
      
    </section>
  );
});

export default Create;
