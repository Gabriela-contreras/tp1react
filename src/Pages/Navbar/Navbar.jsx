import React from "react";
import { Link } from "react-router-dom";
import InputBusqueda from "../../Components/InputBusqueda";
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
            <div className="nav-search">
                <InputBusqueda />
            </div>
        </header>
    );
};

export default Navbar;

