import react from 'react';
import card from './card.css';

const FilmCard = ({ title, genre }) => {
    return (
        <div className='card'>
            <p className='title'>{title}</p>
            <p className='text'>{genre}</p>
        </div>
    )
}

export default FilmCard;