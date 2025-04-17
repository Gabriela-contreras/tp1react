import react from 'react';
import './buttonCard.css'
const ButtonCard = ({ text, onClick }) => {
    return (
        <button className="btn" onClick={onClick}>
            {text}
        </button>
    )
}

export default ButtonCard;