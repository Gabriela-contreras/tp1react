import React, { useState, useEffect } from "react";

const InputBusqueda = () => {
    const [searchValue, setSearchValue] = useState("");
    
    // Load films from localStorage
    const films = JSON.parse(localStorage.getItem("films")) || [];
    
    // Handle input change
    const onChangeInputHandle = (evento) => {
        const newValue = evento.target.value;
        setSearchValue(newValue);
        
        // se filtra las films 
        const filtrado = films.filter(film => 
            film.title.toLowerCase().includes(newValue.toLowerCase())
        );
        
        // Se hace un setItem al localStorage para guardar el resultado del filtrado
        localStorage.setItem("filteredFilms", JSON.stringify(filtrado));
        
        // se guarda el estado de la busqueda en el localStorage
        localStorage.setItem("isSearchActive", "true");
    };
    
    return (
        <input
            type="text"
            placeholder="Buscar..."
            value={searchValue}
            onChange={onChangeInputHandle}
            className="busqueda"
        />
    );
};

export default InputBusqueda;