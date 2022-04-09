import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header id="header" class="header fixed-top">
            <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
                <Link to="/">
                    <a class="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="" />
                        <span>OpenSea</span>
                    </a>
                </Link>
                
                <input type="text" placeholder="Search items"></input>
                
                <nav id="navbar" class="navbar">
                    <ul>
                        <li>
                            <Link to="/">
                            <a class="nav-link scrollto active">
                                Explore
                            </a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link to="/create">
                                <a class="nav-link scrollto" href="#about">
                                Create
                                </a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link to="/mypage">
                                <a class="nav-link scrollto" href="#services">
                                    Mypage
                                </a>
                            </Link>
                            
                        </li>
                        <li class="dropdown">
                            <a href="#">
                                <span>Drop Down</span>{" "}
                                <i class="bi bi-chevron-down"></i>
                            </a>
                            <ul>
                                <li>
                                    <a href="#">Drop Down 1</a>
                                </li>
                                <li class="dropdown">
                                    <a href="#">
                                        <span>Deep Drop Down</span>{" "}
                                        <i class="bi bi-chevron-right"></i>
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
                            <a class="nav-link scrollto" href="#contact">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a class="getstarted scrollto" href="#about">
                                Get Started
                            </a>
                        </li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
}

export default Nav;
