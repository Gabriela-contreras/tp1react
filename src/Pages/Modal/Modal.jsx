import React, {useState} from 'react';
import './Modal.css';
import ButtonCard from '../../Components/ButtonCard';

const Modal = ({ film, onClose, onDelete, onAction }) => {
    // Esto es para manejar el estado de la tarjeta expandida
    const [showConfirmation, setShowConfirmation] = useState(false);

    // Manejador para el botón de eliminar
    const handleDeleteClick = (e) => {
        e.stopPropagation();
        setShowConfirmation(true);

    };

    // Manejador para confirmar eliminación
    const confirmDelete = (e) => {
        e.stopPropagation();
        onDelete(film.id);
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
        onAction(film.id);
    };

    // Verificar que film existe antes de acceder a sus propiedades
    if (!film) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                
                <div className="modal-body">
                    <div className="modal-image">
                        <img src={film.img} alt={film.title} />
                    </div>
                    
                    <div className="modal-details">
                        <h2 className="modal-title">{film.title}</h2>
                        
                        <div className="film-metadata">
                            <span className="film-year">{film.year}</span>
                            <span className="film-rating">{film.rating}/10</span>
                            <span className="film-type">{film.typefilm}</span>
                        </div>
                        
                        <div className="film-director">
                            <strong>Director:</strong> {film.director}
                        </div>
                        
                        <div className="film-genre">
                            <strong>Género:</strong> {film.genero}
                        </div>
                        
                        <div className="film-status">
                            <strong>Estado:</strong> {film.estado}
                        </div>

                        <div className="film-status">
                            <strong>descripcion:</strong> {film.descripcion}
                        </div>
                        
                        {film.description && (
                            <div className="film-description">
                                <strong>Descripción:</strong>
                                <p>{film.description}</p>
                            </div>
                        )}
                        
                        <div className="modal-actions">
                            <button 
                                className={`action-button ${film.estado === "Vistas" ? "seen" : "unseen"}`}
                                onClick={handleAction}
                            >
                                {film.estado === "Vistas" ? "Volver a ver" : "Vista"}
                            </button>
                            
                            <button 
                                className="delete-button"
                                onClick={handleDeleteClick}
                            >
                                Eliminar
                            </button>
                        </div>
                         {/* Modal de confirmación para eliminar */}
                        {showConfirmation && (
                            <div className="confirmation-modal" onClick={(e) => e.stopPropagation()}>
                                <p>¿Estás seguro de que deseas eliminar "{film.title}"?</p>
                                <div className="confirmation-buttons">
                                    <ButtonCard text="Cancelar" onClick={cancelDelete} className="cancel-btn" />
                                    <ButtonCard text="Eliminar" onClick={confirmDelete} className="confirm-btn" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;