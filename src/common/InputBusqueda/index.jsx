import React from "react";
import busqueda from "./busqueda.css"

const InputBusqueda = ({ value, onChange }) => {

    //function onchange
    const onChangeInputHandle = (evento) => {
        onChange(evento.target.value);
    }

    return (
        <input
            type="text"
            placeholder="Buscar..."
            value={value}
            onChange={onChangeInputHandle}
            className="busqueda"
        />
    )
}

export default InputBusqueda;   