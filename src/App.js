import "./App.css";
import Nav from "./components/Nav.js";
import Explore from "./pages/Explore.js";
import Mypage from './pages/Mypage.js';
import Create from './pages/Create.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from './pages/ItemDetail';

function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Explore />
                </Route>
                <Route path="/create">
                    <Create />
                </Route>
                <Route path="/mypage">
                    <Mypage />
                </Route>
                <Route path="/itemdetail">
                    <ItemDetail />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
