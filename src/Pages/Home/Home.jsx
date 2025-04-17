import React, { useState, useEffect } from "react";
import Title from "../../Components/Title/title";
import './home.css';
import FilmCard from "../../Components/FilmCard";
import Modal from "../Modal/Modal";
const Home = () => {
    // estados 
    const [filmsrecovered, setfilmrecovered] = useState([]);
    const [filmsVistas, setFilmsVistas] = useState([]);
    const [filmsPorVer, setFilmsPorVer] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null); // Para el modal
    const [showModal, setShowModal] = useState(false);

    // estados para filtros
    const [filtroTitulo, setFiltroTitulo] = useState("");
    const [filtroGenero, setFiltroGenero] = useState("genero");
    const [filtroTipo, setFiltroTipo] = useState("genero");

    // cargue de peliculas desde el local storage
    useEffect(() => {
        loadFilms();
    }, []);

    // Función para cargar películas
    const loadFilms = () => {
        const films = JSON.parse(localStorage.getItem("films")) || [];
        setfilmrecovered(films);

        // filtre las peliculas vistas y por ver 
        const vistas = films.filter(film => film.estado === "Vistas");
        const porVer = films.filter(film => film.estado === "Por ver");

        setFilmsVistas(vistas);
        setFilmsPorVer(porVer);
    };

    // Funciones para manejar cambios en los filtros
    const handleTituloChange = (e) => {
        setFiltroTitulo(e.target.value.toLowerCase());
    };

    const handleGeneroChange = (e) => {
        setFiltroGenero(e.target.value);
    };

    const handleTipoChange = (e) => {
        setFiltroTipo(e.target.value);
    };

    // Función para filtrar películas según los criterios
    const filtrarPeliculas = (peliculas) => {
        return peliculas.filter(film => {
            // Filtrar por título
            const coincideTitulo = filtroTitulo === "" ||
                film.title.toLowerCase().includes(filtroTitulo);

            // Filtrar por género
            const coincideGenero = filtroGenero === "genero" ||
                film.genero.toLowerCase() === filtroGenero.toLowerCase();

            // Filtrar por tipo
            const coincideTipo = filtroTipo === "genero" ||
                film.typefilm.toLowerCase() === filtroTipo.toLowerCase();

            // Devolver la película si cumple todos los criterios de filtro
            return coincideTitulo && coincideGenero && coincideTipo;
        });
    };

    // Función para mostrar detalles de la película en un modal
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
        const updatedFilms = filmsrecovered.filter(film => film.id !== filmId);
        localStorage.setItem("films", JSON.stringify(updatedFilms));
        loadFilms(); // Recargar películas después de eliminar

        // Cerrar modal si se eliminó la película que se está mostrando
        if (selectedFilm && selectedFilm.id === filmId) {
            setShowModal(false);
            setSelectedFilm(null);
        }
    };

    // Función para cambiar el estado de una película
    const handleActionFilm = (filmId) => {
        const updatedFilms = filmsrecovered.map(film => {
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
        
        // Actualizar la película seleccionada en el modal si es necesario
        if (selectedFilm && selectedFilm.id === filmId) {
            const updatedFilm = updatedFilms.find(film => film.id === filmId);
            setSelectedFilm(updatedFilm);
        }
    };

    // Aplicar filtros a las películas
    const vistasFiltradas = filtrarPeliculas(filmsVistas);
    const porVerFiltradas = filtrarPeliculas(filmsPorVer);

    // Contador de películas vistas y por ver (filtradas)
    const countViews = vistasFiltradas.length;
    const countPorVer = porVerFiltradas.length;

    return (
        <div className="home-container">
            <div className="box">
                {/* Películas Vistas  */}
                <div className="section-header">
                    <Title text={"Películas vistas"} />
                    <p className="count-badge">Cantidad: {countViews}</p>
                </div>
                <div className="scrollable-container">
                    <div className="Filmsbox">
                        {vistasFiltradas.length > 0 ? (
                            vistasFiltradas.map((film, index) => (
                                <div key={`vista-${index}`} className="boxseen">
                                    <FilmCard
                                        id={film.id || `vista-${index}`}
                                        img={film.img}
                                        titulo={film.title}
                                        onShowDetails={() => handleShowDetails(film)}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="pnotfound">No hay películas vistas que coincidan con los filtros</p>
                        )}
                    </div>
                </div>

                {/* Películas Por Ver  */}
                <div className="section-header">
                    <Title text={"Películas por ver"} />
                    <p className="count-badge">Cantidad: {countPorVer}</p>
                </div>
                <div className="scrollable-container">
                    <div className="Filmsbox">
                        {porVerFiltradas.length > 0 ? (
                            porVerFiltradas.map((film, index) => (
                                <div key={`porver-${index}`} className="boxseen">
                                    <FilmCard
                                        id={film.id || `porver-${index}`}
                                        img={film.img}
                                        titulo={film.title}
                                        onShowDetails={() => handleShowDetails(film)}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="pnotfound">No hay películas por ver que coincidan con los filtros</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal para los detalles de la película */}
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