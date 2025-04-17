const Input = ({ placeholder, value, onChange, type, name }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
            className="input"
        />
    );
}

export default Input;