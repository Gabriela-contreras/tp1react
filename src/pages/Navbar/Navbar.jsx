import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <Link to="/">MyFlix</Link>
            </div>
            <nav className="nav-links">
                <Link to="/Agregar">Agregar</Link>
            </nav>
            <nav className="nav-links">
                <Link to="/Buscar">Buscar</Link>
            </nav>
        </header>
    );
};

export default Navbar;

