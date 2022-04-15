import { Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer";
import Table from "../components/Table";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Mypage() {
  const [selectedTab, setTab] = useState(0);
  const [opt, setOpt] = useState("ownerAccount");
  const accessToken = useSelector((state) => state.tokenReducer).token;
  const walletAddr = useSelector((state) => state.walletReducer).walletAddr;
  const [nftList, setNftList] = useState([]);

  useEffect(
    function () {
      if (selectedTab === 0) {
        setOpt("ownerAccount");
      } else if (selectedTab === 1) {
        setOpt("createrAccount");
      } else {
        const url = "http://localhost:4000/items/nfts/0";
        axios.get(url).then((res) => {
          // console.log(res.data.data);
          setNftList(res.data.data);
          console.log(walletAddr);
          let nftData = nftList.filter((nft) => {
            return (
              nft.creater_account === walletAddr ||
              nft.owner_account === walletAddr
            );
          });
          console.log(nftData);
        });
      }
    },
    [selectedTab]
  );

  return (
    <section id="features" className="features">
      <div className="container">
        <header className="section-header">
          <h2>Features</h2>
          <p>Mypage</p>
        </header>
        <Nav justify variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link
              eventKey="link-0"
              onClick={() => {
                setTab(0);
              }}
            >
              Collected
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              onClick={() => {
                setTab(1);
              }}
            >
              Created
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              onClick={() => {
                setTab(2);
              }}
            >
              Transaction
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {selectedTab < 2 ? (
          <ItemListContainer opt={opt} />
        ) : (
          <Table nftList={nftList} />
        )}
      </div>
      {accessToken == "" && <Redirect to="/" />}
    </section>
  );
}

export default Mypage;
