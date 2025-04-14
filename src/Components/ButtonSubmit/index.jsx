import react from 'react';
import './button.css'
const ButtonSubmit = ({ text, onClick }) => {
    return (
        <button className="btn" onClick={onClick}>
            {text}
        </button>
    )
}

export default ButtonSubmit;