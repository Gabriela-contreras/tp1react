import React, { useState, useEffect } from "react";
import Title from "../../Components/Title/title";
import './home.css';
import FilmCard from "../../Components/FilmCard";
import Modal from "../Modal/Modal";

const Home = () => {
    // estados 
    const [films, setFilms] = useState([]);
    const [filmsVistas, setFilmsVistas] = useState([]);
    const [filmsPorVer, setFilmsPorVer] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedFilm, setSelectedFilm] = useState(null);

    // cargue de peliculas desde el local storage
    useEffect(() => {
        loadFilms();
    }, []);

    // Función para cargar películas
    const loadFilms = () => {
        const loadedFilms = JSON.parse(localStorage.getItem("films")) || [];
        setFilms(loadedFilms);

        // filtre las peliculas vistas y por ver 
        const vistas = loadedFilms.filter(film => film.estado === "Vistas");
        const porVer = loadedFilms.filter(film => film.estado === "Por ver");

        setFilmsVistas(vistas);
        setFilmsPorVer(porVer);
    };

    // Función para mostrar detalles de película
    const handleShowDetails = (film) => {
        setSelectedFilm(film);
        setShowModal(true);
    };

    // Función para cerrar el modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedFilm(null);
    };

    // Función para eliminar una película
    const handleDeleteFilm = (filmId) => {
        const updatedFilms = films.filter(film => film.id !== filmId);
        localStorage.setItem("films", JSON.stringify(updatedFilms));
        loadFilms(); // Recargar películas después de eliminar
    };

    // Función para cambiar el estado de una película
    const handleActionFilm = (filmId) => {
        const updatedFilms = films.map(film => {
            if (film.id === filmId) {
                // Cambiar estado entre "Vistas" y "Por ver"
                return {
                    ...film,
                    estado: film.estado === "Vistas" ? "Por ver" : "Vistas"
                };
            }
            return film;
        });

        localStorage.setItem("films", JSON.stringify(updatedFilms));
        loadFilms(); // Recargar películas después de actualizar
    };

    return (
        <div className="home-container">
            <Title text={"Mi Colección de Películas"} />
            
            <div className="box">
                {/* Películas Vistas */}
                <div className="section-container">
                    <Title text={"Películas vistas"} />
                    <p className="count-display">Cantidad: {filmsVistas.length}</p>
                    <div className="Filmsbox">
                        {filmsVistas.length > 0 ? (
                            filmsVistas.map((film, index) => (
                                <div key={`vista-${film.id || index}`} className="boxseen">
                                    <FilmCard
                                        id={film.id || `vista-${index}`}
                                        img={film.img}
                                        titulo={film.title}
                                        onShowDetails={() => handleShowDetails(film)}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="empty-message">No hay películas vistas</p>
                        )}
                    </div>
                </div>

                {/* Películas Por Ver */}
                <div className="section-container">
                    <Title text={"Películas por ver"} />
                    <p className="count-display">Cantidad: {filmsPorVer.length}</p>
                    <div className="Filmsbox">
                        {filmsPorVer.length > 0 ? (
                            filmsPorVer.map((film, index) => (
                                <div key={`porver-${film.id || index}`} className="boxseen">
                                    <FilmCard
                                        id={film.id || `film-${index}`}
                                        img={film.img}
                                        titulo={film.title}
                                        onShowDetails={() => handleShowDetails(film)}
                                        />
                                </div>
                            ))
                        ) : (
                            <p className="empty-message">No hay películas por ver</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal para detalles de la película */}
            {showModal && selectedFilm && (
                <Modal 
                    film={selectedFilm} 
                    onClose={handleCloseModal}
                    onDelete={handleDeleteFilm}
                    onAction={handleActionFilm}
                />
            )}
        </div>
    );
};

export default Home;