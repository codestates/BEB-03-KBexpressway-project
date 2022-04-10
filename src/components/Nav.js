import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header id="header" className="header fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <Link to="/">
                    <a className="logo d-flex align-items-center" href="">
                        <img src="assets/img/logo.png" alt="" />
                        <span>OpenSea</span>
                    </a>
                </Link>
                
                <input type="text" placeholder="Search items"></input>
                
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <Link to="/">
                            <a className="nav-link scrollto">
                                Explore
                            </a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/collection">
                            <a className="nav-link scrollto">
                                Collection
                            </a>
                            </Link>
                        </li> */}
                        <li>
                            <Link to="/create">
                                <a className="nav-link scrollto">
                                Create
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/mypage">
                                <a className="nav-link scrollto">
                                    Mypage
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/wallet">
                                <a className="nav-link scrollto">
                                    Wallet
                                </a>
                            </Link>
                        </li>
                        <li className="dropdown">
                            <a href="#">
                                <span>Drop Down</span>{" "}
                                <i className="bi bi-chevron-down"></i>
                            </a>
                            <ul>
                                <li>
                                    <a href="#">Drop Down 1</a>
                                </li>
                                <li className="dropdown">
                                    <a href="#">
                                        <span>Deep Drop Down</span>{" "}
                                        <i className="bi bi-chevron-right"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">Deep Drop Down 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Drop Down 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Drop Down 3</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Drop Down 4</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Drop Down 5</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Drop Down 2</a>
                                </li>
                                <li>
                                    <a href="#">Drop Down 3</a>
                                </li>
                                <li>
                                    <a href="#">Drop Down 4</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#contact">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a className="getstarted scrollto" href="#about">
                                Get Started
                            </a>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
}

export default Nav;
