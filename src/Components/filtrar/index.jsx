// import React, { useState, useEffect } from 'react';
// import './filtrar.css';
// import FilmCard from "../FilmCard";

// const Filtrar = () => {
//     const [filteredFilms, setFilteredFilms] = useState([]);
//     const [isVisible, setIsVisible] = useState(false);
//     const storedFilms = JSON.parse(localStorage.getItem("filteredFilms")) || [];

//     // escucha los cambios en el local storage
//     // useEffect(() => {
//     //     const checkForUpdates = () => {
//     //         const searchActive = localStorage.getItem("isSearchActive") === "true";

//     //         // setFilteredFilms(storedFilms);
//     //         setIsVisible(searchActive);
//     //     };
//     const checkForUpdates = () => {

//     }

//         // Check initially
//         checkForUpdates();

//         //esto es para que cada 500ms revise si hay cambios en el local storage
//         const intervalId = setInterval(checkForUpdates, 500);

//         // limpia el intervalo al desmontar el componente
//         return () => clearInterval(intervalId);
//     }, []);

//     if (!isVisible) return null;

//     return (
//         <div className="filtrar">
//             {filteredFilms.length > 0 ? (
//                 <div className="Filmsbox">
//                     {filteredFilms.map((film, index) => (
//                         <div key={`filtrado-${index}`} className="boxseen">
//                             <FilmCard
//                                 img={film.img}
//                                 titulo={film.title}
//                                 director={film.director}
//                                 año={film.year}
//                                 rating={film.rating}
//                                 genero={film.genero}
//                                 estado={film.estado}
//                                 tipo={film.typefilm}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p className="pnotfound">No se encontraron películas</p>
//             )}
//         </div>
//     );
// };

// export default Filtrar;