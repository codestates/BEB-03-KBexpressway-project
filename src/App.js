import "./App.css";
import Nav from "./components/Nav.js";
import Explore from "./pages/Explore.js";
import Mypage from "./pages/Mypage";
import Create from "./pages/Create";
import Collection from "./pages/Collection";
import Wallet from "./pages/Wallet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        <Route path="/collection">
          <Collection />
        </Route>
        <Route path="/wallet">
          <Wallet />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
