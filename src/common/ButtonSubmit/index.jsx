import react from 'react';

const ButtonSubmit = ({ text, onClick }) => {
    return (
        <button className="btn btn-primary" onClick={onClick}>
            {text}
        </button>
    )
}

export default ButtonSubmit;