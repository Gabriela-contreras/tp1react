import react from 'react';

const FilmCard = ({ title, genre }) => {
    return (
<div>
    <h2>{title}</h2>
    <p>{genre}</p>
</div>
    )
}

export default FilmCard;