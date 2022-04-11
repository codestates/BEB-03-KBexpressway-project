import "./App.css";
import Nav from "./components/Nav.js";
import Mypage from "./pages/Mypage";
import Create from "./pages/Create";
import ExploreCollection from "./pages/ExploreCollection";
import Collection from "./pages/Collection";
import Wallet from "./pages/Wallet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from "./pages/ItemDetail";

function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <ExploreCollection />
                </Route>
                <Route path="/create">
                    <Create />
                </Route>
                <Route path="/mypage">
                    <Mypage />
                </Route>
                <Route path="/itemdetail/:tokenId" component={ItemDetail} />
                {/* <Route path="/itemdetail/:tokenId">
                            <ItemDetail />
                        </Route> */}
                <Route path="/collection/:collectionId" component={Collection} />
                <Route path="/wallet">
                    <Wallet />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
