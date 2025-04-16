import React from "react";
import busqueda from "./busqueda.css"

const InputBusqueda = ({ value, onChange }) => {


// necesito traer del local host una lista con los objetos que voy a filtrar 


    //function onchange
    const onChangeInputHandle = (evento) => {
        // onChange(evento.target.value);
        console.log(evento.target.value);
        // con este dato necesito hacer un filro de una lista de objetos 
        // y luego mostrarlo en la pantalla
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