import React,{useState} from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {

    const rememberMe = localStorage.getItem('login') === 'true';
    
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <h2 className="navbar-brand  company-name " >mashhuDanny 🚀</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/projects">Project</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/about">About Me</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            {rememberMe?"":<li className="nav-item">
                                <Link class="nav-link" to="/signin">Log In</Link>
                            </li>}
                            {rememberMe?<li className="nav-item">
                                <Link class="nav-link" to="/logout">Logout</Link>
                            </li>:""}
                            {rememberMe?"":<li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>}
                            
                        </ul>
                    
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
