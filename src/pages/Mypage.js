import nftData from "../data/nftData.json";
import Option from "../components/MyPageOption";
import Tab from "../components/MyPageTab";
import styled from "styled-components";

function Mypage() {
  return (
    <section id="features" className="features">
      <div className="container">
        <header className="section-header">
          <h2>Features</h2>
          <p>Mypage</p>
        </header>
        <div class="row"></div>
        <div className="row feture-tabs">
          <div className="col-lg-12">
            <ul className="nav nav-pills mb-3">
              <Option>Collected</Option>
              <Option>Created</Option>
              <Option>Activity</Option>
            </ul>
            <div className="tab-content">
              <Tab />
              <Tab />
              <Tab />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mypage;
