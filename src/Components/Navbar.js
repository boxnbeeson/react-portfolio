import React from "react";
import Logo from "./LogoMockup.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="logo" src={Logo} alt="logo..."/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Me</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="./JacobBeesonResume.pdf" target="_blank" download>Resume</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar