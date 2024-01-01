import { Link } from "react-router-dom";

import Logo from '../images/MageMozLogo.png.png';

import './header.css';

const Header = () =>{
    return(
        
    <nav className="navbar navbar-expand-lg">
        <div className="container">
            <a className="navbar-brand" href="http://localhost:3000/"><img src={ Logo } alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Solutions
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="dropdown-item" to="/magentosolutionp1">Magento Solution Package</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/magentomigartion">Magento Migration</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/solution">Ecommerce Solutions</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/digitalmarketing">Digital Marketing</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/cloudservice">Cloud Service</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>

    );
} 

export default Header;