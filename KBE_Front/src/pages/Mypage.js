import { Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer";
import Table from "../components/Table";

function Mypage() {
  const [selectedTab, setTab] = useState(0);
  const [opt, setOpt] = useState("ownerAccount");

  useEffect(
    function () {
      if (selectedTab === 0) {
        setOpt("ownerAccount");
      } else if (selectedTab === 1) {
        setOpt("createrAccount");
      } else {
        console.log("Transaction");
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
        {selectedTab < 2 ? <ItemListContainer opt={opt} /> : <Table />}
      </div>
    </section>
  );
}

export default Mypage;
