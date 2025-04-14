import React from "react";
import Title from "../../Components/Title/title";
import './home.css'
import FilmCard from "../../Components/FilmCard";


const Home = () => {
    //recuperamos datos localstorage y los mostramos en la lista con checkbox
    const [filmsrecovered, setfilmrecovered] = React.useState([]);
    React.useEffect(() => {
        const films = JSON.parse(localStorage.getItem("films")) || []; //obtiene los valores del local storage o un array vacio si no hay nada
        setfilmrecovered(films); //setea el estado con los valores obtenidos
    }, []);


    //contador de peliculas vistas
    let countviews = 0;
    if (filmsrecovered.length > 0) {
        //si hay peliculas vistas, setea el contador con la cantidad de peliculas vistas
        countviews = filmsrecovered.length;
    }

    return (
        <div className="">
            
            <Title text={"Peliculas Vistas"} />

            <div className="box">
                <p>Cantidad: {countviews}</p>
                <div className="Filmsbox">
                {
                    filmsrecovered.length > 0 ? (
                        filmsrecovered.map((film, index) => (
                            <div key={index} className="boxseen">
                                <FilmCard
                                    img={film.img}
                                    titulo={film.title}
                                    director={film.director}
                                    año={film.year}
                                    rating={film.rating}
                                    genero={film.genero}
                                    tipo={film.typefilm}
                                // click={OnClickCheck}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="pnotfound">No hay peliculas vistas</p>
                    )
                }
                </div>
            </div>
        </div>
    )
}


export default Home;