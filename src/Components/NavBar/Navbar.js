import React from 'react'
import '../Style/style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="navbarBtn">
                    <button  class="btn btn-light btn-lg navbar_button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ><b>≡</b></button>
                </div>
                <div class="offcanvas offcanvas-start navBar-width" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: "100%", textAlign: "center" }}>
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul className="navList">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                        </ul>
                        <ul className="navList">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Hotels">Hotels</Link>
                            </li>
                        </ul>
                        <ul className="navList">
                            <li className="nav-item">
                                <Link className="nav-link" to="/AboutUs">About Us</Link>
                            </li>
                        </ul><ul className="navList">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Gallery">Gallery</Link>
                            </li>
                        </ul>
                        <ul className="navList">
                            <li className="nav-item">
                                <Link className="nav-link" to="/News">News</Link>
                            </li>
                        </ul>
                        <ul className="navList">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar