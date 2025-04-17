import React, { useState, useEffect } from 'react';
 import FilmCard from '../../Components/FilmCard';
 import Modal from '../Modal/Modal';
 import './Buscar.css';
 
 const Buscar = () => {
   const [allFilms, setAllFilms] = useState([]);
   const [filteredFilms, setFilteredFilms] = useState([]);
   const [showModal, setShowModal] = useState(false);
   const [selectedFilm, setSelectedFilm] = useState(null);
   
   // Estados para filtros
   const [busqueda, setBusqueda] = useState('');
   const [filtroGenero, setFiltroGenero] = useState('genero');
   const [filtroTipo, setFiltroTipo] = useState('genero');
   const [filtroEstado, setFiltroEstado] = useState('todos');
 
   // Cargar películas al montar el componente
   useEffect(() => {
     loadFilms();
   }, []);
 
   // Función para cargar películas desde localStorage
   const loadFilms = () => {
     const films = JSON.parse(localStorage.getItem('films')) || [];
     setAllFilms(films);
     setFilteredFilms(films);
   };
 
   // Efecto para aplicar filtros cuando cambian
   useEffect(() => {
     aplicarFiltros();
   }, [busqueda, filtroGenero, filtroTipo, filtroEstado, allFilms]);
 
   // Función para aplicar todos los filtros
   const aplicarFiltros = () => {
     let resultado = allFilms;
 
     // Filtrar por título (búsqueda)
     if (busqueda.trim() !== '') {
       resultado = resultado.filter(film => 
         film.title.toLowerCase().includes(busqueda.toLowerCase())
       );
     }
 
     // Filtrar por género
     if (filtroGenero !== 'genero') {
       resultado = resultado.filter(film => 
         film.genero.toLowerCase() === filtroGenero.toLowerCase()
       );
     }
 
     // Filtrar por tipo
     if (filtroTipo !== 'genero') {
       resultado = resultado.filter(film => 
         film.typefilm.toLowerCase() === filtroTipo.toLowerCase()
       );
     }
 
     // Filtrar por estado
     if (filtroEstado !== 'todos') {
       resultado = resultado.filter(film => 
         film.estado === filtroEstado
       );
     }
 
     setFilteredFilms(resultado);
   };
 
   // Manejadores de eventos para los filtros
   const handleSearchChange = (e) => {
     setBusqueda(e.target.value);
   };
 
   const handleGeneroChange = (e) => {
     setFiltroGenero(e.target.value);
   };
 
   const handleTipoChange = (e) => {
     setFiltroTipo(e.target.value);
   };
 
   const handleEstadoChange = (e) => {
     setFiltroEstado(e.target.value);
   };
 
   // Manejador para mostrar detalles de película
   const handleShowDetails = (film) => {
     setSelectedFilm(film);
     setShowModal(true);
   };
 
   // Manejador para cerrar el modal
   const handleCloseModal = () => {
     setShowModal(false);
     setSelectedFilm(null);
   };
 
   // Función para eliminar una película
   const handleDeleteFilm = (filmId) => {
     // Confirmar que tenemos un ID válido
     if (!filmId) return;
     
     const updatedFilms = allFilms.filter(film => film.id !== filmId);
     localStorage.setItem('films', JSON.stringify(updatedFilms));
     setAllFilms(updatedFilms);
     
     // Cerrar modal si se eliminó la película que se está mostrando
     if (selectedFilm && selectedFilm.id === filmId) {
       setShowModal(false);
       setSelectedFilm(null);
     }
   };
 
   // Función para cambiar el estado de una película
   const handleActionFilm = (filmId) => {
     // Confirmar que tenemos un ID válido
     if (!filmId) return;
     
     const updatedFilms = allFilms.map(film => {
       if (film.id === filmId) {
         return {
           ...film,
           estado: film.estado === 'Vistas' ? 'Por ver' : 'Vistas'
         };
       }
       return film;
     });
     
     localStorage.setItem('films', JSON.stringify(updatedFilms));
     setAllFilms(updatedFilms);
     
     // Actualizar la película seleccionada en el modal si es necesario
     if (selectedFilm && selectedFilm.id === filmId) {
       const updatedFilm = updatedFilms.find(film => film.id === filmId);
       setSelectedFilm(updatedFilm);
     }
   };
 
   return (
     <div className="buscar-layout">
       {/* Sidebar con filtros */}
       <aside className="filtros-sidebar">
         <h2 className="sidebar-title">Buscar</h2>
         
         <div className="sidebar-section">
           <label htmlFor="busqueda">Título</label>
           <input 
             type="text" 
             id="busqueda"
             placeholder="Buscar por título..." 
             value={busqueda}
             onChange={handleSearchChange}
             className="sidebar-input"
           />
         </div>
         
         <div className="sidebar-section">
           <label htmlFor="genero">Género</label>
           <select
             id="genero"
             value={filtroGenero}
             onChange={handleGeneroChange}
             className="sidebar-select"
           >
             <option value="genero">Todos los géneros</option>
             <option value="accion">Acción</option>
             <option value="comedia">Comedia</option>
             <option value="drama">Drama</option>
             <option value="terror">Terror</option>
             <option value="romance">Romance</option>
             <option value="fantasia">Fantasía</option>
           </select>
         </div>
         
         <div className="sidebar-section">
           <label htmlFor="tipo">Tipo</label>
           <select
             id="tipo"
             value={filtroTipo}
             onChange={handleTipoChange}
             className="sidebar-select"
           >
             <option value="genero">Todos los tipos</option>
             <option value="pelicula">Película</option>
             <option value="serie">Serie</option>
           </select>
         </div>
         
         <div className="sidebar-section">
           <label htmlFor="estado">Estado</label>
           <select
             id="estado"
             value={filtroEstado}
             onChange={handleEstadoChange}
             className="sidebar-select"
           >
             <option value="todos">Todos</option>
             <option value="Vistas">Vistas</option>
             <option value="Por ver">Por ver</option>
           </select>
         </div>
         
         <div className="resultados-counter">
           <span>{filteredFilms.length} resultados</span>
         </div>
       </aside>
       
       {/* Contenido principal con películas filtradas */}
       <main className="peliculas-container">
         <h2 className="resultados-titulo">
           {busqueda || filtroGenero !== 'genero' || filtroTipo !== 'genero' || filtroEstado !== 'todos' 
             ? 'Resultados de búsqueda' 
             : 'Todas las películas'}
         </h2>
         
         {filteredFilms.length > 0 ? (
           <div className="peliculas-grid">
             {filteredFilms.map((film, index) => (
               <div key={film.id || `film-${index}`} className="pelicula-item">
                 <FilmCard
                   id={film.id || `film-${index}`}
                   img={film.img}
                   titulo={film.title}
                   onShowDetails={() => handleShowDetails(film)}
                 />
               </div>
             ))}
           </div>
         ) : (
           <div className="no-resultados">
             <p>No se encontraron películas que coincidan con tu búsqueda</p>
           </div>
         )}
       </main>
       
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
 
 export default Buscar;