import React from "react";
import InputBusqueda from "../common/InputBusqueda";
import "./navbar.css";
// import Logo from "../../public/icons/logo";

const Navbar = () => {
    return (
        <div className="boxNavbar">
            {/* <Logo/> */}
            <img src="../../public/img/logo512.png" alt="" />
            <InputBusqueda />
        </div>
    )
}

export default Navbar;