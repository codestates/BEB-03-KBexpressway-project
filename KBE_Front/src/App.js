import "./App.css";
import Nav from "./components/Nav.js";
import Mypage from "./pages/Mypage";
import Create from "./pages/Create";
import ExploreCollection from "./pages/ExploreCollection";
import Collection from "./pages/Collection";
import Wallet from "./pages/Wallet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from "./pages/ItemDetail";
import CreateCollection from './pages/CreateCollection';
import ExploreItem from './pages/ExploreItem';

function App() {
    window.addEventListener('scroll', () => { 
        // console.log(window.scrollX, window.scrollY);
        if (window.scrollY > 100) {
            document.querySelector('#header').classList.add('header-scrolled')
        } else {
            document.querySelector('#header').classList.remove('header-scrolled')
        }
    });

    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <ExploreItem />
                </Route>
                <Route exact path="/explorecollection">
                    <ExploreCollection />
                </Route>
                <Route path="/create">
                    <Create />
                </Route>
                <Route path="/createcollection">
                    <CreateCollection />
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
