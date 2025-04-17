import React, { useState, useEffect } from "react";
import Title from "../../Components/Title/title";
import './home.css';
import FilmCard from "../../Components/FilmCard";

const Home = () => {
    // estados 
    const [filmsrecovered, setfilmrecovered] = useState([]);
    const [filmsVistas, setFilmsVistas] = useState([]);
    const [filmsPorVer, setFilmsPorVer] = useState([]);
    const [expandedCardId, setExpandedCardId] = useState(null); // Para controlar qué tarjeta está expandida

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

    // Función para manejar la expansión de tarjetas
    const handleToggleExpand = (filmId) => {
        setExpandedCardId(expandedCardId === filmId ? null : filmId);
    };

    // Función para eliminar una película
    const handleDeleteFilm = (filmId) => {
        const updatedFilms = filmsrecovered.filter(film => film.id !== filmId);
        localStorage.setItem("films", JSON.stringify(updatedFilms));
        loadFilms(); // Recargar películas después de eliminar

        // Cerrar tarjeta expandida si se eliminó
        if (expandedCardId === filmId) {
            setExpandedCardId(null);
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
    };

    // Aplicar filtros a las películas
    const vistasFiltradas = filtrarPeliculas(filmsVistas);
    const porVerFiltradas = filtrarPeliculas(filmsPorVer);

    // Contador de películas vistas y por ver (filtradas)
    const countViews = vistasFiltradas.length;
    const countPorVer = porVerFiltradas.length;

    return (
        <div className="">
            <Title text={"Mi Colección de Películas"} />
            <div className="boxFiltrar">
                <p className="filtrar">Filtrar por : </p>

                {/* Input para filtrar por título */}
                <input
                    className="select"
                    type="text"
                    placeholder="Buscar por título"
                    value={filtroTitulo}
                    onChange={handleTituloChange}
                />

                {/* Select para filtrar por género */}
                <select
                    className="select"
                    name="genero"
                    id="genero"
                    value={filtroGenero}
                    onChange={handleGeneroChange}
                >
                    <option value="genero">Genero</option>
                    <option value="accion">Accion</option>
                    <option value="comedia">Comedia</option>
                    <option value="drama">Drama</option>
                    <option value="terror">Terror</option>
                    <option value="romance">Romance</option>
                    <option value="fantasia">Fantasia</option>
                </select>

                {/* Select para filtrar por tipo */}
                <select
                    className="select"
                    name="tipo"
                    id="tipo"
                    value={filtroTipo}
                    onChange={handleTipoChange}
                >
                    <option value="genero">Tipo</option>
                    <option value="pelicula">Pelicula</option>
                    <option value="serie">Serie</option>
                </select>
            </div>
            <div className="box">
                {/* Películas Vistas  */}
                <Title text={"Peliculas vistas"} />
                <p>Cantidad: {countViews}</p>
                <div className="Filmsbox">
                    {vistasFiltradas.length > 0 ? (
                        vistasFiltradas.map((film, index) => (
                            <div key={`vista-${index}`} className="boxseen">
                                <FilmCard
                                    id={film.id || `vista-${index}`}
                                    img={film.img}
                                    titulo={film.title}
                                    director={film.director}
                                    año={film.year}
                                    rating={film.rating}
                                    genero={film.genero}
                                    estado={film.estado}
                                    tipo={film.typefilm}
                                    accion="Volver a ver"
                                    eliminar="Eliminar"
                                    onDelete={handleDeleteFilm}
                                    onAction={handleActionFilm}
                                    isExpanded={expandedCardId === (film.id || `vista-${index}`)}
                                    onToggleExpand={handleToggleExpand}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="pnotfound">No hay películas vistas que coincidan con los filtros</p>
                    )}
                </div>

                {/* Películas Por Ver  */}
                <Title text={"Peliculas por ver"} />
                <p>Cantidad: {countPorVer}</p>
                <div className="Filmsbox">
                    {porVerFiltradas.length > 0 ? (
                        porVerFiltradas.map((film, index) => (
                            <div key={`porver-${index}`} className="boxseen">
                                <FilmCard
                                    id={film.id || `porver-${index}`}
                                    img={film.img}
                                    titulo={film.title}
                                    director={film.director}
                                    año={film.year}
                                    rating={film.rating}
                                    genero={film.genero}
                                    estado={film.estado}
                                    tipo={film.typefilm}
                                    accion="Vista"
                                    eliminar="Eliminar"
                                    onDelete={handleDeleteFilm}
                                    onAction={handleActionFilm}
                                    isExpanded={expandedCardId === (film.id || `porver-${index}`)}
                                    onToggleExpand={handleToggleExpand}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="pnotfound">No hay películas por ver que coincidan con los filtros</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;