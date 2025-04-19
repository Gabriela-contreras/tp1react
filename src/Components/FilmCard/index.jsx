import React from 'react';
import './card.css';

const FilmCard = ({
    id,  // Añadido id como prop
    img,
    titulo,
    onShowDetails
}) => {

    // Manejador para abrir el modal directamente
    const handleShowModal = (e) => {
        e.stopPropagation();
        if (onShowDetails) {
            onShowDetails();
        }
    };

    return (
        <div className="netflix-card" onClick={handleShowModal} data-id={id}>
            <div className="card-poster">
                <img src={img} alt={`Imagen de ${titulo}`} className="poster-img" />
                <div className="card-overlay"></div>
                <h3 className="card-title">{titulo}</h3>

                {/* Indicador para abrir modal */}
                <div className="expand-indicator" onClick={handleShowModal}>
                    <span className="expand-icon">+</span>
                </div>
            </div>
        </div>
    );
};

export default FilmCard;