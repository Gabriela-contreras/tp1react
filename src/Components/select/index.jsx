import React from "react";
import "./select.css"

const  Select =({value , onchange})=>{

    const onchangeHandle = (e) => {
        onchange(e.target.value);
    }
    return(
        <select className="select" value={value} onChange={onchangeHandle}>
            <option value="" disabled>Tipo</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
        </select>
    )
}

export default Select;