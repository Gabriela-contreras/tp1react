import React from "react";
import "./select.css";

const Select = ({ value, onChange, option1, option2, type, name }) => {
    
    return (
        <select className="select" value={value} name={name} onChange={onChange}>
            <option value="" disabled>{type}</option>
            <option value={option1}>{option1}</option>
            <option value={option2}>{option2}</option>
        </select>
    );
};

export default Select;