import React from "react";
import input from "./input.css"

const Input = ({ placeholder, value, onChange }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="input"
        />
    );
}

export default Input;