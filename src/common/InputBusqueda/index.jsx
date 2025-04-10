import React from "react";

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
            className="form-control"
        />
    )
}

export default InputBusqueda;   