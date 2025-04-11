import React from "react";
import input from "./input.css"

const Input = ({ placeholder, value, onChange,type }) => {

    const onchangeHandle = (e) => {
        return (
            onChange(e.target.value)
        )
    }
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onchangeHandle}
            className="input"
        />
    );
}

export default Input;