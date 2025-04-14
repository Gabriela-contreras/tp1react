import React from "react";
import "./title.css";

// ) Crear un componente Titulo dentro de la carpeta components, el cual es un <h1>
// con un estilo particular y que recibe por props un texto a renderizar. Utilizarlo desde
// Home.js como título para nuestra aplicación.


const Title = ({ text }) => {
    return (
        <div className="boxTitle">
            <div className="div">
                <h1 className="h1">{text}</h1>
            </div>
        </div>
    )
}

export default Title;