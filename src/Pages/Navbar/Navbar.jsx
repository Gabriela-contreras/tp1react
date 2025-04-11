import React from "react";
import InputBusqueda from "../../Components/InputBusqueda";
import "./navbar.css";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">MyFlix</div>
            <nav className="nav-links">
                <a href="/">Inicio</a>
                <a href="/Peliculas">Películas</a>
                <a href="/Series">Series</a>
                <a href="/Agregar">Agregar</a>
            </nav>
            <div className="nav-search">
                <InputBusqueda />
            </div>
        </header>
    );
};

export default Navbar;
