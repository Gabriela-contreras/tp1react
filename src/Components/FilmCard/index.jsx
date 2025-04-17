import React, { useState } from 'react';
import './card.css';
import ButtonCard from '../ButtonCard';

const FilmCard = ({
    img,
    titulo,
    director,
    año,
    rating,
    genero,
    tipo,
    estado,
    accion,
    eliminar,
    id, 
    onDelete, 
    onAction, 
    isExpanded, 
    onToggleExpand 
}) => {
    // Esto es para manejar el estado de la tarjeta expandida
    const [showConfirmation, setShowConfirmation] = useState(false);

    // Manejador para la expansión de la tarjeta
    const handleToggleExpand = (e) => {
        // Prevenir la propagación para que el clic en botones no expanda/contraiga
        e.stopPropagation();
        onToggleExpand(id);
    };

    // Manejador para el botón de eliminar
    const handleDeleteClick = (e) => {
        e.stopPropagation();
        setShowConfirmation(true);

    };

    // Manejador para confirmar eliminación
    const confirmDelete = (e) => {
        e.stopPropagation();
        onDelete(id);
        setShowConfirmation(false);
    };

    // Manejador para cancelar eliminación
    const cancelDelete = (e) => {
        e.stopPropagation();
        setShowConfirmation(false);
    };

    // Manejador para el botón de acción (vista/volver a ver)
    const handleAction = (e) => {
        e.stopPropagation(); // Evitar que expanda/contraiga la tarjeta
        onAction(id);
    };

    return (
        <div className={`netflix-card ${isExpanded ? 'expanded' : ''}`} onClick={handleToggleExpand}>
            <div className="card-poster">
                <img src={img} alt={`Imagen de ${titulo}`} className="poster-img" />
                <div className="card-overlay"></div>
                <h3 className="card-title">{titulo}</h3>

                {/* Indicador de expansión */}
                <div className="expand-indicator">
                    <span className="expand-icon">{isExpanded ? '−' : '+'}</span>
                </div>
            </div>

            {/* Panel de información que aparece cuando la tarjeta está expandida */}
            {isExpanded && (
                <div className="card-details">
                    <div className="detail-row">
                        <span className="detail-label">Director:</span>
                        <span className="detail-value">{director}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Año:</span>
                        <span className="detail-value">{año}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Rating:</span>
                        <span className="detail-value">{rating}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Género:</span>
                        <span className="detail-value">{genero}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Estado:</span>
                        <span className="detail-value">{estado}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Tipo:</span>
                        <span className="detail-value">{tipo}</span>
                    </div>
                    <div className="button-container">
                        {eliminar && <ButtonCard text={eliminar} onClick={handleDeleteClick} />}
                        {accion && <ButtonCard text={accion} onClick={handleAction} />}
                    </div>


                </div>
            )}
            {/* Modal de confirmación para eliminar */}
            {showConfirmation && (
                <div className="confirmation-modal" onClick={(e) => e.stopPropagation()}>
                    <p>¿Estás seguro de que deseas eliminar "{titulo}"?</p>
                    <div className="confirmation-buttons">
                        <ButtonCard text="Cancelar" onClick={cancelDelete} className="cancel-btn" />
                        <ButtonCard text="Eliminar" onClick={confirmDelete} className="confirm-btn" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilmCard;