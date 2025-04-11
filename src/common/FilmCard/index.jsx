import react from 'react';
import card from './card.css';

const FilmCard = ({ titulo, director, año, rating, genero, tipo ,click }) => {


    
    return (
        <div className='card'>
            <p className='textCard'>Titulo: {titulo}</p>
            <p className='textCard'>Director: {director}</p>
            <p className='textCard'>Año: {año}</p>
            <p className='textCard'>Rating: {rating}</p>
            <p className='textCard'>Genero: {genero}</p>
            <p className='textCard'>Tipo: {tipo}</p>
            <input type="checkbox"  onClick={click}/>

        </div>
    )
}

export default FilmCard;