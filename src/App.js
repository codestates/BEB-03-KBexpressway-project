import "./App.css";
import Main from "./pages/Main.js";
import Nav from "./components/Nav.js";
import Explorer from "./pages/Explorer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/explorer">
                    <Explorer />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
